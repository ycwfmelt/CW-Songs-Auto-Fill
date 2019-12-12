rule = {
    昵称: ".field-content input",
    group: {
        rule: ".field-content select"
    }
}

entry = {
    昵称: null
}

function getConfig() {
    return new Promise(function (resolve, reject) {
        chrome.storage.local.get('cwConfig', result => {
            resolve(result.cwConfig)
        })
    })
}




// fill nickname
let handle = {
    fillName: (cwConfig) => {
        let key = '昵称'
        entry[key].querySelector(rule[key]).value = cwConfig[key]
    },
    fillGroup: () => {
        lget(['cwConfig'], (results) => {

        })
    }
}

rootBox = document.getElementsByClassName('fields')[0]

for (let index = 0; index < rootBox.children.length; index++) {
    child = rootBox.children[index]
    let { label } = child.dataset
    entry[label] = child
}


chrome.storage.local.set({
    cwConfig: {
        昵称: 'melt',
        团体: 'AKB48',
        歌曲名: '君のことが好きだから',
        [`AKB48 Team SH 首推的成员`]: '施蔼倍',
        [`AKB48 Team SH 二推的成员`]: '庄晓媞',
        [`最喜欢的AKB48 Group组合`]: 'STU48',
        最喜欢的AKB48成员: {

        },
        [`最喜欢的AKB48 Group 成员`]: '岩田陽菜',
        所在城市: '上海',
    }
})

getConfig().then(cwConfig => {
    console.log(cwConfig)
    handle.fillName(cwConfig)
})
