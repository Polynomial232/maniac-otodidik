const express = require("express")
const router = express.Router()
const api = require("./api/index.route")

// router.use("/api", api);
router.use(api)

module.exports = router
