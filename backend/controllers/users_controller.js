// DEPENDENCIES
const users = require('express').Router()
const { User } = require('../models')
// const jwt = require('jsonwebtoken')

//GET ALL users
users.get('/', async (req, res) => {
    try {
        const foundUsers = await User.findAll()
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET ONE user
users.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findOne({
            where: { id: req.params.id }
        })
        if (!foundUser) res.status(404).json('Not found.')
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A user
// users.post('/', async (req, res) => {
//     try {
//         const newUser = await User.create(req.body)
//         res.status(200).json({
//             message: 'Successfully inserted a new user',
//             data: newUser
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// CREATE a user with a hashed password
users.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { username: req.body.username, password: hashedPassword }
        // users.push(user) //do i need to include this piece of code or how can I change it so that this updates the table in the database?
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

//LOGIN a particular user (checking that the username and password match up!)
users.post('/login', async (req, res) => {
    const user = users.find(user => user.username === req.body.username)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
           res.send('Success') 
        } else {
            res.send('Not allowed.')
        }
    } catch {
        res.status(500).send()
    }
})

// UPDATE A user
users.put('/:id', async (req, res) => {
    try {
        const updatedUsers = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A user
users.delete('/:id', async (req, res) => {
    try {
        const deletedUsers = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = users