const express = require('express');
const router = express.Router();
const saradnjaController = require('../controllers/saradnje');

// Dodaj rutu za dodavanje komentara u saradnju
router.post('/saradnje/:id/dodajKomentar', saradnjaController.dodajKomentar);

// Dodaj rutu za promenu statusa saradnje
router.put('/saradnje/:id/promeniStatus', saradnjeController.promeniStatus);

module.exports = router;