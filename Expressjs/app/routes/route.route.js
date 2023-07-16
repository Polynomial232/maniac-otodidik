const express = require("express")
const rootRouter = express.Router()

const { indexHandler, redirectHandler } = require("../handlers/handler.handler")

rootRouter.route("/").get(indexHandler)
rootRouter.route("/redirect").get(redirectHandler)

module.exports = rootRouter
