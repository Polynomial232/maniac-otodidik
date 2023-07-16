const express = require("express")
const usersRouter = express.Router()

const {
    usersHandler,
    usersIdHandler,
    addUsersHandler,
    editUserIdHandler,
    deleteUserIdHandler,
} = require("../handlers/usersHandler.handler")

usersRouter.route("/users").get(usersHandler).post(addUsersHandler)
usersRouter
    .route("/users/:id")
    .get(usersIdHandler)
    .put(editUserIdHandler)
    .delete(deleteUserIdHandler)

module.exports = usersRouter
