const express = require("express");
const mongoose = require("mongoose");

const app = express();
// postavljen view engine, ukljuciti kada frontend isprati
// app.set('view engine', 'ejs');

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

// ukljuceno u funkciji za povezivanje na DB
// app.listen(3000);

app.get("/", (req, res) => {
  res.send("Dobrodosli na CR_Hub");
  console.log("Server je uspesno pokrenut!");
});

const partneriRouter = require("./routes/partneri");

app.use("/partneri",partneriRouter);
