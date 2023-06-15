const mongoose = require ('mongoose')
const recipeSchema = require ('./recipe')
const ingredientSchema = require ('./ingredient')
const instructionSchema = require ('./instructions')
const userSchema = require('./user')
const onHandSchema = require('./onHand')



const Ingredient = mongoose.model('Ingredient', ingredientSchema)

const Instruction = mongoose.model('Instruction', instructionSchema)

const Recipe = mongoose.model('Recipe', recipeSchema)

const User = mongoose.model('User', userSchema)

const OnHand = mongoose.model('OnHand', onHandSchema)

module.exports =
{
    Recipe, Instruction, Ingredient, User, OnHand
}








