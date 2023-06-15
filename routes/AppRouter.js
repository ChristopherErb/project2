const express = require('express')
const Router = express.Router()
const ingredientRouter = require(`./ingredientRouter`)
const instructionRouter = require (`./instructionRouter`)
const recipeRouter = require (`./recipeRouter`)
const userRouter = require ('./userRouter')
const onHandRouter = require ('./onHandRouter')

Router.use('/ingredients', ingredientRouter)
Router.use('/instructions', instructionRouter)
Router.use('/recipe', recipeRouter) 
Router.use('/users', userRouter)
Router.use(`/onHand`, onHandRouter)

module.exports = Router