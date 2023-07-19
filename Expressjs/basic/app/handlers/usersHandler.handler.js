const User = require("../models/user.model")

async function usersHandler(request, response) {
    try {
        const users = await User.find()

        return response.status(202).json({
            data: users,
            method: request.method,
            url: request.url,
        })
    } catch (err) {
        return response.status(202).json({
            data: "Kosong",
        })
    }
}

async function usersIdHandler(request, response) {
    const id = request.params.id

    try {
        const result = await User.findById(id)
        if (result === null) {
            return response.status(404).json({
                data: "Data tersebut sudah terhapus",
            })
        }

        return response.status(202).json({
            data: result,
            method: request.method,
            url: request.url,
        })
    } catch (err) {
        return response.status(404).json({
            data: "Kosong",
        })
    }
}

async function addUsersHandler(request, response) {
    const { name, email, password } = request.body

    const user = new User({
        name,
        email,
        password,
    })
    await user.save()

    return response.status(202).json({
        data: user,
        method: request.method,
        url: request.url,
    })
}

const editUserIdHandler = (request, response) => {
    const id = request.params.id
    const { name, email, password } = request.body

    try {
        const result = User.findByIdAndUpdate(id, {
            name,
        })

        console.log(result)
        return response.status(202).json({
            data: result,
            method: request.method,
            url: request.url,
        })
    } catch (err) {
        console.log(err)
        return response.status(404).json({
            data: "Kosong",
        })
    }
}
async function deleteUserIdHandler(request, response) {
    const id = request.params.id

    try {
        const result = await User.findByIdAndDelete(id)
        if (result === null) {
            return response.status(404).json({
                data: "Data tersebut sudah terhapus",
            })
        }

        return response.status(202).json({
            message: `Berhasil menghapus id: ${id}`,
            method: request.method,
            url: request.url,
        })
    } catch (err) {
        return response.status(404).json({
            data: "Kosong",
        })
    }
}

module.exports = {
    usersHandler,
    addUsersHandler,
    usersIdHandler,
    editUserIdHandler,
    deleteUserIdHandler,
}
