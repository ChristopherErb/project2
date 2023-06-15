const { Ingredient } = require ('../models')
const ingredientSchema = require('../models/ingredient')

const getIngredients = async (req, res) =>
{
    const ingredient = await Ingredient.find({})
    res.json(ingredient)
}



const getIngredientsById = async (req, res) =>
{
    try
    {
        const { id } = req.params
        const ingredient = await Ingredient.findById(id)
        if(!ingredient) throw Error(`no ingredient`)
        res.json(ingredient)
    }
    catch (e)
    {console.log(e)
    res.send(`ingredient not found`)}
}

module.exports =
{
    getIngredients, getIngredientsById
}