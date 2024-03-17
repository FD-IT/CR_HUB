const express = require('express');
const router = express.Router();
const saradnjaController = require('../controller/saradnje');

// GET  /saradnja 
router.get("/saradnje", saradnjaController.getDodajNovuSaradnju);

// POST /saradnja
router.post("/saradnje", saradnjaController.dodajNovuSaradnju );

// Dodaj rutu za dodavanje komentara u saradnju
router.post('/saradnje/:id/dodajKomentar', saradnjaController.dodajKomentar);

// Dodaj rutu za promenu statusa saradnje
router.put('/saradnje/:id/promeniStatus', saradnjaController.promeniStatus);

module.exports = router;