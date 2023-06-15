const express = require('express')
const Router = express.Router()
const controller = require (`../controllers/recipeController`)

Router.get(`/`, controller.getRecipe)
Router.get(`/`, controller.getRecipeById)



module.exports = Router