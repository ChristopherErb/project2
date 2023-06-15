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


/*
//read is done

//update


const updateOnHandById = async ( req, res ) =>
{
    try
    {
        const { id } = req.params
        const { name, quantity, unit } = req.body
        if (!name || !quantity || !unit)
        {
            return res.status(400).json({error: `please provide name, uantity, and units`})
        }

        const updateOnHand = await OnHand.findByIdAndUpdate
        (
            id, 
            {name, quantity, unit},
            {new: true}
        )

        if(!updateOnHand)
        {
            return res.status(404).json({error: `404 ingredient nto found`})
        }

        return res.json(updateOnHand)
    } catch (e)
    {
        console.error(`failed to update ingredient: `, error)
        return res.status(500).json({error: `failed to update`})
    }
}
*/
//delete

const deleteOnHandById = async ( req, res) =>
{
    try
    {
        const {id} = req.params

        const deletedOnHand = await OnHand.findByIdAndRemove(id)

        if(!deletedOnHand)
        {
            return res.status(404).json({error: `404, onHand not found`})
        }

        return res.json({message: `onHand deleted successfully`})
    } catch (e)
    {
        console.error(`failed to update OnHand`, error)
        return res.status(500).json({error: `failed to delete OnHand`})
    }
}


module.exports=
{
    getOnHand, createOnHand, deleteOnHandById
}


