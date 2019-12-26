import { getConfig, getConfigTemplate } from './cwConfig'
import handler from './handler'
import { akb48teamParser } from './originParser'


// getConfig().then(cwConfig => {
//     handler.fillName(cwConfig)
// })
let akb48team = akb48teamParser()
console.log(akb48team)