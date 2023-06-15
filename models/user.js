const { Schema } = require('mongoose')

const userSchema = new Schema(
{
    userName: {type: String, requried: true},
    userId: {type: String, required: true}
},
{timestamps: true}
)

module.exports = userSchema