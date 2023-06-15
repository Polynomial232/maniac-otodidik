const fs = require('fs')

const writeJson = (obj) => {
    let data = JSON.stringify(obj, null, 4)

    fs.writeFileSync('listUndangan.json', data)
}

const findIndex = (list, id) => {
    return list.findIndex(
        (data) => data.id === id
    )
}

const isSuccess = (list, id) => {
    return list.filter((data) => {
        data.id == id.length > 0
    })
}

module.exports = { findIndex, writeJson, isSuccess }