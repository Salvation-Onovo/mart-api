const userModel = require("../models/user")
const { CustomError } = require("../utils/error")
const { response } = require("../utils/helpers")
const handleAdminLogin = async (req, res) => {
  try {
    if (!req.body.name) throw new CustomError("Name is required", 400)
    if (!req.body.email) throw new CustomError("Email is required", 400)
    if (!req.body.password) throw new CustomError("Password is required", 400)

    const admin = await userModel.create({
      ...req.body,
      role: "admin"
    })

    res.status(201).send(response("Account created!", admin))
  } catch (error) {
    res.status((error?.code ? (error?.code > 500) ? 500 : error?.code : 500) || 500).send(response(error.message))
  }

}

module.exports = {
  handleAdminLogin
}