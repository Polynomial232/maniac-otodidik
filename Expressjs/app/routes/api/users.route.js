const express = require("express")
const usersRoute = express.Router()

const {
    usersHandler,
    usersIdHandler,
    addUsersHandler,
    editUserIdHandler,
    deleteUserIdHandler,
} = require("../../handlers/usersHandler.handler")

usersRoute.route("/users").get(usersHandler).post(addUsersHandler)
usersRoute
    .route("/users/:id")
    .get(usersIdHandler)
    .put(editUserIdHandler)
    .delete(deleteUserIdHandler)

module.exports = usersRoute
