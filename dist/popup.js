import { getConfig, getConfigTemplate } from '../src/content/cwConfig.js/index.js'

const configMap = getConfigTemplate()

getConfig().then(config => {
    for (let [key, val] of Object.entries(config)) {
        let e = document.createElement('p')
        e.innerHTML = key + ': ' + val
        document.querySelector('.config').appendChild(e)
    }
})

let changeConfigBtn = document.getElementById('changeConfig')
changeConfigBtn.addEventListener('click', () => {
    chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id })
})