const express = require("express");
const mongoose = require("mongoose");
const PartnerModel = require('../models/Partner');

const router = express.Router();


// GET /partneri
router.get("/", (req, res) => {
    res.send("Prikazi sve partnere");
    console.log("Zahtev za prikazivanje svih partnera je primljen!");
  });

// GET /dodajPartnera
router.get("/dodajPartnera", (req, res) => {
  res.render('dodajPartnera');
  console.log("Zahtev za prikazivanje svih partnera je primljen!");
});

// POST /partneri
router.post('/dodajPartnera', async (req, res) => {

  // Extract data from the form submissionx
  // const { naziv, kontaktOsoba, kontaktMejl, kontaktTelefon } = req.body;

  // Create a new partner object using the Mongoose model
  const newPartner = new PartnerModel(req.body);

  // Save the partner to the database
  await newPartner.save();

  res.redirect('/partneri'); // Redirect to the form or another page
});

// PATCH /partneri/:id
router.patch("/:id", (req, res) => {
  const partnerId = req.params.id;
  res.send(`Izmeni partnera sa datim ID: ${partnerId}`);
  console.log(`Zahtev za izmenu partnera ${partnerId} je primljen!`);
});

// DELETE /partneri
router.delete("/:id", (req, res) => {
  res.send("Obrisi partnera sa ID-jem ${req.params.id}");
});

// GET partner by ID
router.get("/:id", (req,res) => {

  const partnerId = req.params.id;
   res.send('Prikazi partnera sa datim ID: ${partnerId}');
})

module.exports = router;

