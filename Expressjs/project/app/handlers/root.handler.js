function rootHandler(request, response) {
    return response.send("End World")
}

module.exports = { rootHandler }
