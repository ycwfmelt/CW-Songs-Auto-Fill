rule = {
    name: {
        rule: ".field-content input"
    },
    group: {
        rule: ".field-content select"
    }
}


rootBox = document.getElementsByClassName('fields')[0]

console.log(rootBox.children)

// for (let child in rootBox.children) {
//     console.log(child)
//     // let { label, type } = child.dataset
// }

// fill nickname
let handle = {
    fillName: () => {
        chrome.storage.local.get(['cwConfig'], function (results) {
            console.log(results)
        })
    }
}

chrome.storage.local.set({
    cwConfig: {
        name: 'melt',
        group: 'AKB48',
        songs: '君のことが好きだから'
    }
})
handle.fillName()