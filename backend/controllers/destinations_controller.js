// DEPENDENCIES
const destinations = require('express').Router()
const { Destination } = require('../models')

//GET ALL destinations
destinations.get('/', async (req, res) => {
    try {
        const foundDestinations = await Destination.findAll()
        console.log(foundDestinations)
        res.status(200).json(foundDestinations)
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET ONE destination
destinations.get('/:id', async (req, res) => {
    try {
        const foundDestination = await Destination.findOne({
            where: { id: req.params.id }
        })
        if (!foundDestination) res.status(404).json('Not found.')
        res.status(200).json(foundDestination)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A destination
destinations.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newDestination = await Destination.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new destination',
            data: newDestination
        })
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// UPDATE A destination
destinations.put('/:id', async (req, res) => {
    try {
        const updatedDestinations = await Destination.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedDestinations} destination(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A destination
destinations.delete('/:id', async (req, res) => {
    try {
        const deletedDestinations = await Destination.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedDestinations} destination(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = destinations
