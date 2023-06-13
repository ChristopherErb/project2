const db = require('../db')
const { Ingredient, Instruction, Recipe } = require ('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => 
{
    const recipe1 = await new Recipe(
        {
            recipeName:`Spicy Chicken`,
            mealId:`spicyChicken`,
            creatorId:`1`,
            difficultyRating: 6,
            description:`It's chicken, but spicy`,
            categoryId:`Dinner`,
            imgUrl:`TBD`,
            chefId:`Chris`
        })
        recipe1.save()

    const recipe2 = await new Recipe(
        {
            recipeName:`Hamburgers`,
            mealId:`hamburgers`,
            creatorId:`1`,
            difficultyRating: 2,
            description:`Hamburgers on a bun`,
            categoryId:`Dinner`,
            imgUrl:`TBD`,
            chefId:`Chris`
        })
        recipe2.save()
    const recipe3 = await new Recipe(
        {
            recipeName:`Egg in a nest`,
            mealId:`eggInNest`,
            creatorId:`1`,
            difficultyRating: 3,
            description:`An egg cooked in the center of a piece of toast`,
            categoryId:`Breakfast`,
            imgUrl:`TBD`,
            chefId:`Chris`
        })
        recipe3.save()
    const recipe4 = await new Recipe(
        {
            recipeName:`BLT`,
            mealId:`blt`,
            creatorId:`1`,
            difficultyRating: 4,
            description:`Bacon, Lettuce, and Tomato on some sort of bread`,
            categoryId:`Lunch`,
            imgUrl:`TBD`,
            chefId:`Chris`
        })
        recipe4.save()

    const ingredients =
    [
        {
            recipeId: recipe1._id,
            ingredientId:`Chicken`,
            quantity: 2,
            unit:`Trimmed Breasts`,
            isAvailable:true ,
        },
        {
            recipeId: recipe2._id,
            ingredientId:`Cayenne Pepper`,
            quantity: 8,
            unit:`tablespoons`,
            isAvailable:true ,
        },
        {
            recipeId: recipe1._id,
            ingredientId:`Paprika`,
            quantity:2,
            unit:`Tablespoons`,
            isAvailable:true ,
        },
        {
            recipeId: recipe1._id,
            ingredientId:`Franks Hot Sauce`,
            quantity:1,
            unit:`Cup`,
            isAvailable:true ,
        },
        {
            recipeId: recipe1._id,
            ingredientId:`Water`,
            quantity:2,
            unit:`Cup`,
            isAvailable:true ,
        },      
        {
            recipeId: recipe1._id,
            ingredientId:`Flour`,
            quantity:3,
            unit:`Cup`,
            isAvailable:true ,
        },
    ]


    await Ingredient.insertMany(ingredients)
    console.log('we added ingredients')


    const instructions = 
    [
        {
           recipeId: recipe1._id,
            stepNumber:1,
            instruction: `Combine all wet ingredients with the chicken into a ziplock bag and let set for 2 hours`
        },
        {
            recipeId: recipe1._id,
            stepNumber:2,
            instruction: `Combine all dry ingredients into a bag or bowl`
        },
        {
            recipeId: recipe1._id,
            stepNumber:3,
            instruction: `Remove chicken from hotsauce marinade and disgard the marinade`
        },
        {
            recipeId: recipe1._id,
            stepNumber:4,
            instruction: `Cut chicken into strips, chunks, or pound entire breast with cooking mallet`
        },
        {
            recipeId: recipe1._id,
            stepNumber:5,
            instruction: `Take individual pieces of chicken and cover them with the dry ingredients, forming a breading`
        },
        {
            recipeId: recipe1._id,
            stepNumber:6,
            instruction: `Combine all wet ingredients with the chicken into a ziplock bag and let set for 2 hours`
        },
        {
            recipeId: recipe1._id,
            stepNumber:7,
            instruction: `Deep fry chicken until internal temperature is at least 165°F`
        },
    ]

    await Instruction.insertMany(instructions)
    console.log('we added instructions')

}

const run = async () =>
{
    await main()
    db.close()
}

run()