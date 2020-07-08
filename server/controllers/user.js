const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function signUp(req, res) {
  console.log("Endpoint se SignUp")
}

module.exports = {
  signUp
}
