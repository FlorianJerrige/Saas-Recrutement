const express = require('express');
const router = express.Router();
const Partner = require('../models/Partner');
const Position = require('../models/Position');

// Récupérer tous les partenaires
router.get('/', async (req, res) => {
  const partners = await Partner.find().populate('openPositions');
  res.json(partners);
});

// Récupérer un partenaire spécifique
router.get('/:id', async (req, res) => {
  const partner = await Partner.findById(req.params.id).populate('openPositions');
  res.json(partner);
});

// Ajouter un nouveau partenaire
router.post('/', async (req, res) => {
  const newPartner = new Partner(req.body);
  await newPartner.save();
  res.status(201).json(newPartner);
});

// Modifier un partenaire
router.put('/:id', async (req, res) => {
  const updatedPartner = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPartner);
});

// Supprimer un partenaire
router.delete('/:id', async (req, res) => {
  await Partner.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
