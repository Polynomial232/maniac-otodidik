const imageRoute = require("express").Router()
const upload = require("../../middlewares/multer.middleware")

imageRoute
    .route("/upload")
    .post(upload.single("image"), (request, response) => {
        response.sendStatus(200)
    })

imageRoute.use((error, request, response, next) => {
    response.status(400).json({
        message: error.message,
    })
})

module.exports = imageRoute
