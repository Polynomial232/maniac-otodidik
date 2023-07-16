const { v4: uuidv4 } = require("uuid")

const users = require("../datas/users")

const usersHandler = (request, response) => {
    return users.length < 1
        ? response.status(202).json({
              data: "Kosong",
          })
        : response.status(202).json({
              data: users,
              method: request.method,
              url: request.url,
          })
}
const usersIdHandler = (request, response) => {
    const id = request.params.id
    const index = users.findIndex((user) => user.id == id)

    return index == -1
        ? response.status(404).json({
              data: "Kosong",
          })
        : response.status(202).json({
              data: users[index],
              method: request.method,
              url: request.url,
          })
}
const addUsersHandler = (request, response) => {
    const { name } = request.body
    const user = {
        id: uuidv4(),
        name,
    }
    users.push(user)

    return response.status(202).json({
        data: user,
        method: request.method,
        url: request.url,
    })
}
const editUserIdHandler = (request, response) => {
    const id = request.params.id
    const { name } = request.body
    const index = users.findIndex((user) => user.id == id)

    if (index === -1)
        return response.status(404).json({
            data: "Kosong",
        })

    users[index] = {
        ...users[index],
        name,
    }
    return response.status(202).json({
        data: request.body,
        method: request.method,
        url: request.url,
    })
}
const deleteUserIdHandler = (request, response) => {
    const id = request.params.id
    const index = users.findIndex((user) => user.id == id)

    if (index === -1)
        return response.status(404).json({
            data: "Kosong",
        })

    users.splice(index)
    return response.status(202).json({
        data: `Berhasil menghapus id: ${id}`,
        method: request.method,
        url: request.url,
    })
}

module.exports = {
    usersHandler,
    addUsersHandler,
    usersIdHandler,
    editUserIdHandler,
    deleteUserIdHandler,
}
