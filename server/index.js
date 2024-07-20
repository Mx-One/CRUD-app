const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//middleware
app.use(cors());    
app.use(express.json());

//ROUTES//

//create todo

//get all todos

//get a todo

//update a todo

//delete a todo


app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });