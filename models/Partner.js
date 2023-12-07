const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    //Dodavanje polja
    naziv: String,
    kontaktOsoba : String,
    kontaktMejl : String,
    kontaktTelefon: String

})
//Eksportovanje modela
module.exports = mongoose.Model("Partner" , partnerSchema);


