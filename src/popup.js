import { getConfig, getConfigTemplate, setConfig } from './cwConfig'

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
let initBtn = document.getElementById('init')
initBtn.addEventListener('click', () => {
    setConfig(configMap).then(result => {
        getConfig()
            .then(result => {
                console.log(result)
            })
    })
})