const express = require('express')
const Router = express.Router()
//const ingredientRouter = require(`./ingredientRouter`)
const instructionRouter = require (`./instructionRouter`)
//const recipeRouter = require (`./recipeRouter`)

//Router.use('/ingredients', ingredientRouter)
Router.use('/instructions', instructionRouter)
//Router.use('/recipe', recipeRouter) 

module.exports = Router