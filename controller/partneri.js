const Partner = require('../models/Partner');
const mongoose = require("mongoose");

//Vracanje svih partnera

const vratiSvePartnere = (req,res) => {

    Partner.find({}).sort({ createdAt: -1 })
    .then(partneri => {
      res.render('partneri', { title: 'Svi partneri', partneri: partneri });
    })
    .catch((err) => {
      console.log(err);
    });

}


module.exports = {
    vratiSvePartnere 
}

