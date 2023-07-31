const express = require("express")
const rootRoute = express.Router()

const {
    indexHandler,
    redirectHandler,
} = require("../../handlers/handler.handler")

rootRoute.route("/").get(indexHandler)
rootRoute.route("/redirect").get(redirectHandler)

module.exports = rootRoute
