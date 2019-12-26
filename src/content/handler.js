import rule from './rule'
export default {
    fillName: (cwConfig) => {
        let key = '昵称'
        document.querySelector(rule[key]).value = cwConfig[key]
    }
}