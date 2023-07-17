const indexHandler = (request, response) => {
    response.send("Hello World");
};

const redirectHandler = (request, response) => {
    response.redirect(`https://www.google.com`);
};

module.exports = {
    indexHandler,
    redirectHandler,
};
