const express = require('express');
const app = express();
const port = 2900;
const cors = require('cors');
var myFunctions = require('./scrape');
const bodyParser = require("body-parser");

const firebase = require ("./firebase");
const { json } = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
function additional(a,b){
    return a + b;
}

const db = firebase.firestore();

app.listen(port,function(err,data){
    if(err){
        console.log(err);
    }
    else {
        console.log("connected");
    }
});





app.get('/myurl', async (req,res) => {
    //myFunctions.scrapeProduct('https://randommer.io/random-songs').then(res.send(myFunctions.randomUrl));
    res.send(myFunctions.randomUrl);
    console.log(myFunctions.randomUrl[0]);
    if (myFunctions.x.length + myFunctions.y.length > 10){
        myFunctions.x.splice(0,5);
        myFunctions.y.splice(0,5);
        myFunctions.scrapeProduct('https://randommer.io/random-songs');
    }
    
    console.log(myFunctions.x);
    console.log(myFunctions.y);
    //res.send( myFunctions.x);
    //console.log(myFunctions.x);
   
})


