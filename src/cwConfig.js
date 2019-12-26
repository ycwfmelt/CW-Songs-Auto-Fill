let cwConfigStorageKey = "cwConfig"

export function getConfig() {
    return new Promise(function (resolve, _) {
        chrome.storage.local.get(cwConfigStorageKey, result => {
            console.log(result, result.cwConfig)
            cwConfigMap = jsonToMap(result.cwConfig)
            resolve(cwConfigMap)
        })
    })
}

export function setConfig(cwConfig) {
    let cwConfigStr = mapToJson(cwConfig)
    return new Promise(function (resolve, _) {
        chrome.storage.local.set({ cwConfigStorageKey: cwConfigStr }, result => {
            resolve(result)
        })
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

function mapToJson(map) {
    return JSON.stringify([...map])
}

function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr))
}