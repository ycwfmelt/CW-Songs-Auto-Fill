// let page = document.getElementById('buttonDiv')
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']
// function constructOptions(kButtonColors) {
//     for (let item of kButtonColors) {
//         let button = document.createElement('button')
//         button.style.backgroundColor = item
//         button.addEventListener('click', function () {
//             chrome.storage.local.set({ color: item }, function () {
//                 console.log('color is ' + item)
//             })
//         })
//         page.appendChild(button)
//     }
// }
import { getConfig } from "./cwConfig"

document.getElementById('save-config').addEventListener('click', e => {
    e.preventDefault()
    let curCwConfig
    getConfig().then(config => {
        curCwConfig = config
    })
    curCwConfig.set("昵称", document.getElementById('name').value)
    // let name = document.getElementById('name').value
    // let group = document.getElementById('group').value
    // let song = document.getElementById('song').value
    // let hioshi = document.getElementById('ichibannoshimenn').value
    // let fuoshi = document.getElementById('nibannoshimenn').value

    console.log(curCwConfig)
})

