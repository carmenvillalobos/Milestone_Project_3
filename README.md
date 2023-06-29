# Travel Booking Site

## A travel booking site where users can create their own account and book trips to a list of destinations.

Click <a href="">here</a> for a live version of the app!

### What is the inspiration of our application?
The inspiration of our application was to create a site where users can create their own account through user authentication and reserve specific locations to their account that they would like to travel to.

### Which languages, frameworks, libraries, and database did we use?
- Languages: Javascript/JSX, SQL
- Frameworks: React, Express.js
- Libraries: Node.js
- Database: PostgreSQL

### What do our tables look like?
Users Table

| id | username | password | email |
| ------ | ------------------------------------- | ----------------------------- | ------ |
| 1 | test | password | test@gmail.com  |

Destinations Table

| id | location| image | description | price |
| ------ | ------------------------------------- | ----------------------------- | ------ | ------ |
| 1 | Rio de Janerio, Brazil | `https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60` | Rio de Janeiro is the second largest city in Brazil, on the South Atlantic coast. Rio is famous for its breathtaking landscape, its laid-back beach culture and its annual carnival. | 371 |
| 2 | Sydney, Australia | `https://images.unsplash.com/photo-1551352912-484163ad5be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3lkbmV5JTIwYXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60` | Sydney is the Harbour City, and is the largest, oldest and most cosmopolitan city in Australia with an enviable reputation as one of the world's most beautiful and livable cities. | 400 |
| 3 | Machu Picchu, Peru | `https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaHUlMjBwaWNjaHV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60` | Machu Picchu is the site of an ancient Inca city, high in the Andes of Peru. |
| 4 | Boracay, Philippines | `https://images.unsplash.com/photo-1530968033775-2c92736b131e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9yYWNheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60` | Boracay is a tropical island about an hour's flight from Metro Manila in the Philippines. | 371 |
| 5 | San Jose, Costa Rica | `https://images.unsplash.com/photo-1629337451443-3a43721f196b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuJTIwam9zZSUyMGNvc3RhJTIwcmljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60` | San José is the capital and largest city of Costa Rica. | 371 |
| 6 | Tokyo, Japan | `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60` | Tokyo is the enormous and wealthy capital of Japan, and also its main city, overflowing with culture, commerce, and most of all, people. | 371 |


### What do our routes look like?

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/Destinations` | Index page listing all destinations |
| GET | `/Destinations/:id` | Index page that lists 1 specific destination |
| GET | `/Bookings` | View all your trips |
| POST | `/Login` | Login into your personal account |
| POST | `/SignUp` | Create an account |

### What bugs exist in our application that we still have not fixed?
- A bug that exists in our application is that even though a user can create an account, the user is not aware they created it becuase there is no indication from the frontend. Also a user can not yet add a trip to their personal account.
- Ideally, when you submit your signup form, the app redirects you to the login page so that you could login. Once you hit the login button, the app will redirect you to the home page where you are greeted by your name.
- When you click on the reserve button on the individual destination page, it does not add the trip to the "My Trips" view page. This is becuase we have not yet added a route for it to publish on the my trips page. 
- Some of the styling still needs work. For example when viewing the mobile browser, the hamburger menu on the navbar moves some of the react components downward. These will be fixed in time by trail and error.   

### What resources did we use to help create our application?
- https://react.dev/
- https://sequelize.org/
- https://unsplash.com/
- https://en.wikivoyage.org/wiki/Main_Page
- pgAdmin
- Postman

### How we set up our database to our application 
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
    - Note that we did not include an id for any columns since this cli command automatically creates an id column
5) Create an empty database on pgAdmin 4
6) Run a migration
    - this connects our models (tables) to our database (called milestone_project_3)
    - command: npx sequelize-cli db:migrate
7) Run seeder data
    - npx sequelize-cli db:seed:all
    - This command will run all of our destination seeders
    - npx sequelize-cli db:seed:undo
    - This command will undo all the destination seeders
    - While we will eventually deploy this application and have a set database with locations everyone will see, this is for the time being how we generate the destinations. 
