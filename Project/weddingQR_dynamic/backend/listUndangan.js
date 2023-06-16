const fs = require('fs')

const filename = 'listUndangan.json'
let listUndangan = []

if(fs.existsSync(filename)){
    listUndangan = fs.readFileSync(filename)
    if(listUndangan.toString() == ''){
        fs.writeFileSync(filename, JSON.stringify([], null, 4))
    }else{
        listUndangan = JSON.parse(listUndangan)
    }
}else{
    fs.writeFileSync(filename, JSON.stringify(listUndangan, null, 4))
}

module.exports = listUndangan