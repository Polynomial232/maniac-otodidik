const userModel = require("../models/users.model")

async function getUsers(request, response) {
    try {
        const [data] = await userModel.getUsers()

        return response.status(200).json({
            data: data,
            method: request.method,
            url: request.url,
        })
    } catch (error) {
        return response.status(500).json({
            serverMessage: error,
        })
    }
}

async function createUser(request, response) {
    const body = request.body

    if (!body.name || !body.email || !body.address) {
        return response.sendStatus(400)
    }

    try {
        const [data] = await userModel.createUser(body)

        return response.status(201).json({
            data: body,
            method: request.method,
            url: request.url,
        })
    } catch (error) {
        return response.status(500).json({
            serverMessage: error,
        })
    }
}

async function getUser(request, response) {
    const { id } = request.params

    try {
        const [data] = await userModel.getUser(id)

        return response.status(201).json({
            data: data,
            method: request.method,
            url: request.url,
        })
    } catch (error) {
        return response.status(500).json({
            serverMessage: error,
        })
    }
}

async function editUser(request, response) {
    const { id } = request.params
    const body = request.body

    try {
        const [data] = await userModel.editUser(id, body)

        return response.status(200).json({
            data: body,
            method: request.method,
            url: request.url,
        })
    } catch (error) {
        return response.status(500).json({
            serverMessage: error,
        })
    }
}

async function deleteUser(request, response) {
    const { id } = request.params

    try {
        const [data] = await userModel.deleteUser(id)

        return response.status(200).json({
            message: "success",
            method: request.method,
            url: request.url,
        })
    } catch (error) {
        return response.status(500).json({
            serverMessage: error,
        })
    }
}
module.exports = {
    getUsers,
    createUser,
    getUser,
    editUser,
    deleteUser,
}
