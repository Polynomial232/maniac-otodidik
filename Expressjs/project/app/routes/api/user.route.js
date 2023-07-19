const userRoute = require("express").Router()
const usersHandler = require("../../handlers/users.handler")

userRoute
    .route("/users")
    .get(usersHandler.getUsers)
    .post(usersHandler.createUser)

userRoute
    .route("/users/:id")
    .get(usersHandler.getUser)
    .put(usersHandler.editUser)
    .delete(usersHandler.deleteUser)

module.exports = userRoute
