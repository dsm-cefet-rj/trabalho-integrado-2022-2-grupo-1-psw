const { request, response } = require("express");

function Authenticate(req = request, res = response, next) {
  next();
}

function Authorizate(req = request, res = response, next) {
  next();
}

module.exports = { Authorizate, Authenticate };
