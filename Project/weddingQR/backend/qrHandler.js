const qr = require('qr-image')
const fs = require('fs')

const generateQrImage = (qrCode, ext='png') => {
    let qrJpg = qr.image(qrCode, { type: ext, size: 10, ec_level: 'L' })
    qrJpg.pipe(fs.createWriteStream(`./images/qr/${qrCode}.${ext}`))
}

const deleteQrImage = (qrCode, ext='png') => {
    fs.unlink(`./images/qr/${qrCode}.${ext}`, (err) => {
        if(err) {
            console.log(err)
        }
    });
}

const getQrImagePath = (qrCode, ext='png') => {
    return `./images/qr/${qrCode}.${ext}`
}

module.exports = { 
    generateQrImage, 
    deleteQrImage, 
    getQrImagePath 
}