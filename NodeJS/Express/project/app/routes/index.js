const routes = require("express").Router()

routes.use(require("./upload"))
// routes.use("/api", require("./API"))
routes.use(require("./api"))

module.exports = routes
