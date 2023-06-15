const { Schema } = require('mongoose')

const onHandSchema = new Schema (
    {
        ingredient:{type: String, require: true},
        quantity:{type: Number, require: true},
        unit:{type: String, require: true},
        //user:{ type: Schema.Types.ObjectId, ref: 'User', require: true}    
    },
    {timestamps: true}
)

module.exports = onHandSchema