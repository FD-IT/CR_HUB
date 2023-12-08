const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    //Dodavanje polja
    naziv: {
        type : String,
        required : true
    },
    kontaktOsoba : String,
    kontaktMejl : String,
    kontaktTelefon: String

})
//Eksportovanje modela
module.exports = mongoose.Model("Partner" , partnerSchema);


