const routes = require("express").Router()

routes.use(require("./root.route"))
routes.use(require("./user.route"))

module.exports = routes
