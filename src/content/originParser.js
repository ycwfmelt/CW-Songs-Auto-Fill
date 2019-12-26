export function akb48teamParser() {
    let honnbuchimuDOM = document.querySelectorAll('div[data-label="最喜欢的AKB48成员"] option')
    let chimu = new Map()
    honnbuchimuDOM.forEach(option => {
        if (option.dataset.choices) {
            chimu.set(option.label, JSON.parse(option.dataset.choices))
        }
    })
    return chimu
}