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

// Brisanje partnera po ID-u
const obrisiPartnera = async (req, res) => {
  const partnerId = req.params.id;

  try {
    // Provera da li partner sa datim ID-em postoji
    const partner = await Partner.findById(partnerId);

    if (!partner) {
      return res.status(404).json({ error: "Partner nije pronađen." });
    }

    // Brisanje partnera iz baze
    await Partner.findByIdAndDelete(partnerId);

    res.json({ success: true, message: `Partner sa ID-jem ${partnerId} je uspešno obrisan.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Došlo je do greške prilikom brisanja partnera." });
  }
}

module.exports = {
    vratiSvePartnere 
}

