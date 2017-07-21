# Menu-Manager
Menu Manager is a menu management web app for a small restaurant.

### Description and User Stories
Menu manager allows users to view, add, edit, and order menu items off of a menu. The app includes user authentication to allow only certain features like add/editing menu items to an admin user. 
* Menu items can be viewed by non-logged in users. 
* Only a logged-in user admin is be able to enter and edit menu items. 
* Menu items have a name, a description, a category (such as appetizer, main course, side, dessert), and a price. 
* Users are able to view the menu, with items ordered by category, and see the names, descriptions, and prices.
* When the user sees their total order, they can add an optional tip of 10%, 15%, or 20%, and resubmit the order to see the total with tip.
* The app allows users to select items off the menu. On submitting the form, the user is able to see the total price of their potential order. A user is also able to adjust the quantity of items in their order.

### Tech

Menu Manager uses a number of technologies:

* [HTML/CSS/JavaScript/] 
* [jQuery] - JS Library
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [Node.js] - evented I/O for the backend
* [Express] - fast Node.js network app framework
* [MySQL] - Database
* [Sequelize] - Sequelize is a promise-based ORM for Node.js v4 and up
* [Heroku] - deployment
* [Passport] - User authentication

### Using The App
If running the app on a local machine. Please run `npm install` in the command line terminal to install all the dependencies.
Then run `node server.js` to launch the app at `localhost:3000`

On the Heroku site ( https://menu-manager-hadi.herokuapp.com/ ) I have created admin login credentials for you which can be used on the signin page.
username: admin
password: admin

Additionally, a hidden signup route is also available at `/signup`. When the app has loaded, please visit the hidden signup page to new create login credentials (hidden meaning that there is no link to the signup page on the menu navigation).

### Future Development
The next version of the app would have the following:
* Form validation - to ascertain that users cannot enter negative prices or quantities for example
* Automated testing
* Persisting orders in the database 
* Improved UX for login/ logout
* Code refactoring - DRYer code 
* Semantic function naming
