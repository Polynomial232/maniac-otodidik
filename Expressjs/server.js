const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()
const port = 9000

const usersRouter = require("./app/routes/users.route")
const rootRouter = require("./app/routes/route.route")
const templateRoute = require("./app/routes/template.route")
const middleware = require("./app/middleware/app.middleware")

app.use([bodyParser.json(), bodyParser.urlencoded({ extended: false })])

app.use(middleware)

app.set("views", path.join(__dirname, "app/views"))
app.set("view engine", "ejs")

app.use([rootRouter, usersRouter, templateRoute])

app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
})
