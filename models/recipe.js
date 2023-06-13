const { Schema } = require ('mongoose')

const recipeSchema = new Schema (
    {
        recipeName:{type: String, require: true},
        mealId:{type: String, require: true},
        creatorId:{type: String, require: true},
        difficultyRating:{type: Number, require: true},
        description:{type: String, require: true},
        categoryId:{type: String, require: true},
        imgUrl:{type: String, require: true},
        chefId:{type: String, require: true}
    },
    {timestamps: true}


)
module.exports = recipeSchema