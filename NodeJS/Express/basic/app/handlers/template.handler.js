const rootTemplate = (request, response) => {
    response.render("index", {
        data: {
            name: "Daffa",
        },
    })
}

module.exports = rootTemplate
