const express = require('express')
const Router = express.Router()
const controller = require(`../controllers/userController`)


Router.get(`/`, controller.getUser)


module.exports = Router
