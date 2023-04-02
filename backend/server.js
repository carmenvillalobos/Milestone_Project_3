// DEPENDENCIES: Where we require all our packages
require('dotenv').config
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize');
const usersController = require('./controllers/users_controller')
const destinationsController = require('./controllers/destinations_controller')
const bodyParser = require('body-parser')

// CONFIGURATION / MIDDLEWARE: Where we configure those dependency packages
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB CONNECTION
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
      host: 'localhost',
      dialect: 'postgres'
    }
);

// TESTING THE DB CONNECTION
const testSequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

//ROOT: A GET for the root route ('/'), responding with a simple welcome message
app.get('/', (req, res) => {
  res.status(200).json({
      message: 'Hello world!'
  })
})

// CONTROLLERS: this includes the routes for each table
app.use('/users', usersController)
app.use('/destinations', destinationsController)



//LISTEN: Where we tell our app what port to listen for connections on
testSequelize();

app.listen(process.env.PORT, () => {
  console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})