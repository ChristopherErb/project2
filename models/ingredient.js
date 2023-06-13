const { Schema } = require ('mongoose')

const ingredientSchema = new Schema (

    {
        recipeId: { type: Schema.Types.ObjectId, ref: 'Recipe'},
        ingredientId:{type: String, require: true},
        quantity:{type: Number, require: true},
        unit:{type: String, require: true},
        isAvailable:{type: Boolean, require: true},
    },
    {timestamps: true}

)

module.exports = ingredientSchema