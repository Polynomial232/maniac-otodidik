const mongoose = require("mongoose")

function dbConnection() {
    mongoose.connect("mongodb://localhost/user", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = mongoose.connection
    db.on("error", () => console.log("connection error"))
    db.on("open", () => console.log("successfully connection"))
}

module.exports = dbConnection
