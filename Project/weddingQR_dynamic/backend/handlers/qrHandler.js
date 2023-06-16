const qr = require('qr-image')
const fs = require('fs')

const generateQrImage = (qrCode, ext='jpg', prefix="localhost:9000/read-qr/") => {
    let qrJpg = qr.image(`${prefix}${qrCode}`, { type: ext, size: 10, ec_level: 'L' })
    qrJpg.pipe(fs.createWriteStream(`./images/qr/${qrCode}.${ext}`))
}

const deleteQrImage = (qrCode, ext='jpg') => {
    fs.unlink(`./images/qr/${qrCode}.${ext}`, (err) => {
        if(err) {
            console.log(err)
        }
    });
}

const getQrImagePath = (qrCode, ext='jpg') => {
    return `./images/qr/${qrCode}.${ext}`
}

module.exports = { 
    generateQrImage, 
    deleteQrImage, 
    getQrImagePath 
}