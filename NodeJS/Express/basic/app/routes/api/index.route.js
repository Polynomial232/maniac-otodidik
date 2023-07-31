const express = require("express")
const router = express.Router()

const rootRoute = require("./route.route")
const templateRoute = require("./template.route")
const usersRoute = require("./users.route")

router.use(rootRoute)
router.use(templateRoute)
router.use(usersRoute)

module.exports = router
