# instaverse

Instaverse is full stack MERN application. It's sort of social media app for travellers that allows user to post interesting events that happend in their lives and other users can like that posts.


### Get Started

 You can follow the steps below to have it operating locally on your machine

 # Prerequisites:

 Fork and clone the repository on your machine

 Make sure you have Node > v14.x and latest version of NPM and mongodb installed. 

 Have a MongoDb account to connect database to project.

 # Installation:

 cd into the cloned repo and run npm install to install the dependencies on both directories server and client separately.

 Create .env file in the server folder with the following structure:
 
 PORT = 
 CONNECTION_URL = 

 Please assign 9090 to PORT. 
 In CONNECTION_URL add this url:
 mongodb+srv://data_base:<password>@cluster0.wxhh8.mongodb.net/?retryWrites=true&w=majority

  Make sure to replace your data_base by your database name and <password> by your data_base password that you created in mongoDb cloud.


Once all dependencies are installed, you can use the command npm start on both directories server and client separately to begin hosting a local development server for the website to be hosted upon.
