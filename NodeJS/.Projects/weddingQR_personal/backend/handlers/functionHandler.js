const fs = require('fs')

const writeJson = (obj, filepath) => {
    let data = JSON.stringify(obj, null, 4)

    fs.writeFileSync(filepath, data)
}

const findIndex = (list, id) => {
    return list.findIndex((data) => data.id === id)
}

const findIndexByQr = (list, qrCode) => {
    return list.findIndex((data) => data.qrCode === qrCode)
}

const isDataAdded = (list, id) => {
    return list.filter((data) => data.id == id).length > 0
}

const undefinedToNull = (object) => {
    for(const key in object){
        object[key] = object[key] == undefined ? null:object[key]
    }

    return object
}

module.exports = { 
    findIndex, 
    writeJson, 
    isDataAdded, 
    undefinedToNull, 
    findIndexByQr 
}