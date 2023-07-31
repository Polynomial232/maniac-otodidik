const dbPool = require("../config/db.config")

function getUsers() {
    const SQLQuery = "SELECT * FROM users"
    return dbPool.execute(SQLQuery)
}

function createUser(body) {
    const { name, email, address } = body

    const SQLQuery = `INSERT INTO users (name, email, address) VALUES ('${name}', '${email}', '${address}')`
    return dbPool.execute(SQLQuery)
}

function getUser(id) {
    const SQLQuery = `SELECT * FROM users WHERE id=${id}`
    return dbPool.execute(SQLQuery)
}

function editUser(id, body) {
    const { name, email, address } = body

    const SQLQuery = `UPDATE users SET name='${name}', email='${email}', address='${address}' WHERE id=${id}`
    return dbPool.execute(SQLQuery)
}

function deleteUser(id) {
    const SQLQuery = `DELETE FROM users WHERE id=${id}`
    return dbPool.execute(SQLQuery)
}

module.exports = {
    getUsers,
    createUser,
    getUser,
    editUser,
    deleteUser,
}
