/*Grabbing the Essentail packages we need.
 */

//grabs the express file.
var express=require('express');

//creates an express app
var app = express();

//Makes the instagram-node api essential .
var ig = require('instagram-node').instagram();

/************************************************************/
//Configuring the application
/************************************************************/

//telling the node where to look for the sites resources.
app.use(express.static(__dirname + '/public'));

//setting the viewing engine to ejs
app.set('view engine','ejs');

//configure instagram-node app with client-id
/********************Important part later*/

//Setting the routes 
/*************************************************************/
//home page route = our profile images
app.get('/', function(req,res) {
    
    //use the instagrams package to get our profiles media
    //render the home page and pass in the our profile's images
    res.render('pages/index');
})

//Start the Server
/**************************************************************/
app.listen(4000);
console.log('Server Started ! @ localhost:4000');

