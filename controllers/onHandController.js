const { OnHand } = require('../models')
const onHandSchema = require(`../models/onHand`)

const getOnHand = async (req, res) =>
{
    const onHand = await OnHand.find({})
    res.json(onHand)
}

//NEED CRUD HERE










//create
const createOnHand = async (req, res) =>
{
    try
    {
        const {ingredient, quantity, unit} = req.body

        const onHand = new OnHand({ingredient, quantity, unit})
        await onHand.save()
        return res.status(201).json(onHand)
    }catch (e) 
    {
        console.error(`failed to create ingredient`, error)
        return res.status(500).json({error: `failed to create ingredient`})
    }
}


//delete

// const deleteOnHandById = async ( req, res) =>
// {
//     try
//     {
//         const {_id} = req.body
//         const deletedOnHand = await OnHand.findByIdAndRemove(_id)

//         return res.json({message: `onHand deleted successfully`})
//     } catch (e)
//     {
//         console.error(`failed to update OnHand`, error)
//         return res.status(500).json({error: `failed to delete OnHand`})
//     }
// }

 module.exports=
{
    getOnHand, createOnHand
}


