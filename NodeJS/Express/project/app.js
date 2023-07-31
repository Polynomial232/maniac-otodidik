const express = require("express")
const app = express()

const logMiddleware = require("./app/middlewares/log.middleware")
const authMiddleware = require("./app/middlewares/auth.middleware")
const routes = require("./app/routes")

app.use(express.json())
app.use(logMiddleware)

// contoh middleware menggunakan auth
app.use("/assets", authMiddleware, express.static("public"))

app.use(routes)

module.exports = app
