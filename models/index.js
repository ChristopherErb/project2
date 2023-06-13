const mongoose = require ('mongoose')
const recipeSchema = require ('./recipe')
const ingredientSchema = require ('./ingredient')
const instructionSchema = require ('./instructions')



const Ingredient = mongoose.model('Ingredient', ingredientSchema)

const Instruction = mongoose.model('Instruction', instructionSchema)

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports =
{
    Recipe, Instruction, Ingredient
}








