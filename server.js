const express = require("express");
const mongoose = require("mongoose");

var path = require('path');

const app = express();
// postavljen view engine, ukljuciti kada frontend isprati
app.set('view engine', 'ejs');

//za koriscenje putanja
app.use(express.urlencoded({extended: true}));

// adresa DB
const uri = "mongodb+srv://marko:marko@crhub.ds7emhj.mongodb.net/?retryWrites=true&w=majority";

// connect to db
mongoose.connect(uri)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(3000, () => {
      console.log('listening for requests on port', 3000)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

const partneriRouter = require("./routes/partneri");

app.use("/", partneriRouter);
app.use(express.static(path.join(__dirname, 'public')));