// DEPENDENCIES
const users = require('express').Router()
const { User } = require('../models')

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

//CREATE A user
users.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new user',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// CREATE a user with a hashed password
// users.post('/', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         const user = { username: req.body.username, password: hashedPassword }
//         // users.push(user) //do i need to include this piece of code or how can I change it so that this updates the table in the database?
//         res.status(201).send()
//     } catch {
//         res.status(500).send()
//     }
// })

//Generate a token here
function generateToken(user) {
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    return token;
  }

//Verify the token
function verifyToken(req, res, next) {
    //reading the token to see if it's authorized or not
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = {id: users.id};
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  }

//LOGIN a particular user (checking that the username and password match up!)
users.post('/login', async (req, res) => {
    const user = users.find(user => users.email === req.body.email)
    
    const token = generateToken(user)
    res.json({ token })
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