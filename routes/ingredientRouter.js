const express = require('express')
const Router = express.Router()
const controller = require(`../controllers/ingredientController`)

Router.get(`/`, controller.getIngredients)
Router.get(`/:id`, controller.getIngredientsById)

module.exports = Router