const { Recipe } = require(`../models`)
const recipeSchema = require(`../models/recipe`)

const getRecipe = async (req, res) =>
{
    const recipe = await Recipe.find({})
    res.json(recipe)
}





const getRecipeById = async ( req, res ) =>
{
    try
    {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        if (!recipe) throw Error(`no recipe`)
        res.json(recipe)
    } catch (e)
    {
        console.log(e)
        res.send(`recipe not found`)
    }
}








module.exports =
{
    getRecipe, getRecipeById
}

