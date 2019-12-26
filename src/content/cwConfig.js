export function getConfig() {
    return new Promise(function (resolve, _) {
        chrome.storage.local.get('cwConfig', result => {
            resolve(result.cwConfig)
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
    // return {
    //     昵称: '',
    //     团体: '',
    //     歌曲名: '',
    //     [`AKB48 Team SH 首推的成员`]: '',
    //     [`AKB48 Team SH 二推的成员`]: '',
    //     [`最喜欢的AKB48 Group组合`]: '',
    //     最喜欢的AKB48成员: {

    //     },
    //     [`最喜欢的AKB48 Group 成员`]: '',
    //     所在城市: '',
    // }
}