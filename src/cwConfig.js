let cwConfigStorageKey = "cwConfig"

export function getConfig() {
    return new Promise(function (resolve, reject) {
        chrome.storage.local.get(cwConfigStorageKey, result => {
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError.message)
            if (typeof result[cwConfigStorageKey] === 'undefined') {
                reject(`${cwConfigStorageKey} not exist.`)
            } else {
                cwConfigMap = jsonToMap(result.cwConfig)
                resolve(cwConfigMap)
            }
        })
    })
}

export function setConfig(cwConfig) {
    let cwConfigStr = mapToJson(cwConfig)
    chrome.storage.local.set({ cwConfigStorageKey: cwConfigStr }, function () {
        getConfig().then(res => console.log(res))
    })
}

export function getConfigTemplate() {
    let cwTemplate = new Map([
        ['昵称', ''],
        ['团体', ''],
        ['歌曲名', ''],
        ['AKB48 Team SH 首推的成员', ''],
        ['AKB48 Team SH 二推的成员', ''],
        ['最喜欢的AKB48 Group组合', ''],
        ['最喜欢的AKB48成员', ''],
        ['最喜欢的AKB48 Group 成员', ''],
        ['所在城市', ''],
        ['希望AKB48 Team SH 来和你见面的区域', '']
    ])
    return cwTemplate
}

export function initConfig() {
    setConfig(getConfigTemplate())
}

function mapToJson(map) {
    return JSON.stringify([...map])
}

function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr))
}
