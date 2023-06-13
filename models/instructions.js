const { Schema } = require ('mongoose')

const instructionSchema = new Schema (
   { 
    
    recipeId: { type: Schema.Types.ObjectId, ref: 'Recipe'},
    stepNumber: {type: Number, require: true},
    instruction: {type: String, require: true}

},
    {timestamps: true}
)

module.exports = instructionSchema