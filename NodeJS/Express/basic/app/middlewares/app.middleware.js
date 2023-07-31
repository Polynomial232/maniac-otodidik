let middleware = (request, response, next) => {
    request.time = new Date()
    console.log(request.requestTime)
    next()
}

module.exports = middleware
