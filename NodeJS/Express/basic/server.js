const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const dbConnection = require("./app/config/db.config")
const router = require("./app/routes")
const middlewares = require("./app/middlewares/app.middleware")

const app = express()
const port = 9000

dbConnection()

app.use([bodyParser.json(), bodyParser.urlencoded({ extended: false })])

app.use(middlewares)

app.set("views", path.join(__dirname, "app/views"))
app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
})
