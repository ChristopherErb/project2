const { User } = require(`../models`)
const userSchema = require (`../models/user`)



const getUser = async (req, res) =>
{
    const user = await User.find({})
    res.json(user)
}



module.exports =
{
    getUser
}