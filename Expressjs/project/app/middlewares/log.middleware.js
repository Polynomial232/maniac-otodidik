function logMiddleware(request, response, next) {
    const time = new Date()
    console.log(time, request.originalUrl)
    next()
}

module.exports = logMiddleware
