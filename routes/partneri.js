const express = require("express");
const partnerController = require('../controller/partneri');

const router = express.Router();

// GET /
router.get("/", partnerController.vratiSvePartnere);

// GET /dodaj
router.get("/dodaj", (req, res) => {
  res.render('dodajPartnera')
});

// POST /dodaj
router.post("/dodaj", partnerController.kreirajNovogPartnera);

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

