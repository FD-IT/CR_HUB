const express = require("express");
const partnerController = require('../controller/partneri');
const saradnjaController = require('../controller/saradnje');

const router = express.Router();

// GET /
router.get("/", partnerController.vratiSvePartnere);

// GET /dodaj
router.get("/dodaj", (req, res) => {
  res.render('dodajPartnera')
});

router.get("/saradnja", (req, res) => {
  res.render('dodajSaradnju')
});

// GET  /saradnja 
router.get("/saradnja", saradnjaController.dodavanjeSaradnje);

// POST /dodaj
router.post("/dodaj", partnerController.kreirajNovogPartnera);

// POST /saradnja
router.post("/saradnja", saradnjaController.dodajNovuSaradnju );


// DELETE /partneri
router.delete("/:id", partnerController.obrisiPartnera);

// GET partner by ID
router.get("/:id", partnerController.vratiPartneraSaID)

// PATCH /:id
router.patch("/:id", (req, res) => {
  const partnerId = req.params.id;
  res.send(`Izmeni partnera sa datim ID: ${partnerId}`);
  console.log(`Zahtev za izmenu partnera ${partnerId} je primljen!`);
});

module.exports = router;

