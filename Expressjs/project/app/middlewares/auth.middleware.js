function authMiddleware(request, response, next) {
    return request.query.admin === "true" ? next() : response.sendStatus(401)
}

module.exports = authMiddleware
