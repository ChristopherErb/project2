const express = require('express')
const Router = express.Router()
const controller = require(`../controllers/onHandController`)

Router.get(`/`, controller.getOnHand)
Router.post(`/`, controller.createOnHand)
//Router.put(`/:id`, controller.updateOnHandById)
Router.delete(`/:id`, controller.deleteOnHandById)

module.exports = Router