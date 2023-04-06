# What is our application about?
Our application is a travel booking site where users can create their own account and book trips to a list of destinations.

# What is the inspiration of our application?
The inspiration of our application was to create a site where users can create their own account through user authentication and reserve specific locations to their account that they would like to travel to.

# Which languages, frameworks, libraries, and database did we use?
- Languages: Javascript/JSX, SQL
- Frameworks: React, Express.js
- Libraries: Node.js
- Database: PostgreSQL

# What bugs exist in our application that we still have not fixed?
- A bug that exists in our application is being able to successfully allow a user to create an account and add a trip to their personal account

# How we set up our database to our application 
1) Create a backend folder 
2) Install the following dependencies to create a package-lock.json & package.json for the backend folder:
- sequelize
    - installs sequelize as a dependency
    - command: npm i sequelize
- dotenv
    - a zero-dependency module that loads environment variables from a .env file into process.env
    - command: npm install dotenv --save
- pg, pg-hstore
    - installs the native Postgres drivers
    - command: npm install --save pg pg-hstore
- express
    - recall that express basically makes a server for your repo
    - command: npm install express
3) Within our backend folder, create the files .env, .gitignore, server.js, and install an empty sequelize project
- remember that you install a sequelize project by typing the following in the terminal:
    - command: npm i -g sequelize-cli (this command globally installs the Sequelize CLI package, recall that Sequelize CLI is an npm package that lets us run commands through the terminal for generating models (tables/columns) and more).
    - command: npx sequelize init (this CLI command generates an empty Sequelize project into your app; note: I created a folder named sequelize and installed the empty project there for organizational purposes since we are using other languages within this app)
4) Create the models and run a migration on what you will be using for your database:
    - in our case, I typed the following to create two tables (one for the users and another for the destinations):
        - npx sequelize-cli model:generate --name Users --attributes username:string,password:string,first_name:string,last_name:string,email:string
        - npx sequelize-cli model:generate --name Destinations --attributes location:string,image:string,description:string,price:integer
    - Note that we did not include an id for any columns since this cli command makes automatically creates an id column
5) Create an empty database on pgAdmin 4
6) Run a migration
    - this connects our models (tables) to our database (called milestone_project_3)
    - command: npx sequelize-cli db:migrate





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
