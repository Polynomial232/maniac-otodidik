const express = require("express");
const templateRoute = express.Router();

const rootTemplate = require("../../handlers/template.handler");

templateRoute.route("/template").get(rootTemplate);

module.exports = templateRoute;
