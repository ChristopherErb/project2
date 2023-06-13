const { Instruction } = require(`../models`)
const instructionSchema = require(`../models/instructions`)



const getInstructions = async (req, res) =>
{
    const instructions = await Instruction.find({})
    res.json(instructions)
}





const getInstructionsById = async (req, res) =>
{
    try
    {
        const { id } = req.params
        const instruction = await Instruction.findById(id)
        res.json(instruction)
    } catch (e)
    {
        console.log(e)
        res.send('product not found')
    }
}


module.exports=
{
    getInstructions,
    getInstructionsById
}