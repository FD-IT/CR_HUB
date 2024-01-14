const express = require("express");

const router = express.Router();

const{
  vratiSvePartnere
} = require('../controller/partneri')

// GET /partneri
router.get("/", vratiSvePartnere);

// POST /partneri
router.post("/", (req, res) => {
    res.send("Kreiraj novog partnera")
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

