const express = require('express')
const Router = express.Router()
const controller = require(`../controllers/instructionController`)


Router.get(`/`, controller.getInstructions)
Router.get(`//:id`, controller.getInstructionsById)


module.exports = Router