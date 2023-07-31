const rootRouter = require("express").Router()

const root = require("../../handlers/root.handler")

rootRouter.route("/").get(root.rootHandler)

module.exports = rootRouter
