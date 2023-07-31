const multer = require("multer")

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "public/images")
    },
    filename: (request, file, callback) => {
        const timestamp = new Date().getTime()
        const originalname = file.originalname

        callback(null, `${timestamp}_${originalname}`)
    },
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1024,
    },
})

module.exports = upload
