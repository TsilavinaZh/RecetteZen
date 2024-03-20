// routes/index.js

const express = require('express');
const router = express.Router();
const recetteController = require('../controllers/recetteController');
const utilisateurController = require('../controllers/utilisateurController');

// Routes pour les recettes
router.get('/recettes', recetteController.getRecettes);
router.post('/recettes', recetteController.createRecette);
router.get('/recettes/:id', recetteController.getRecetteById);
router.put('/recettes/:id', recetteController.updateRecette);
router.delete('/recettes/:id', recetteController.deleteRecette);

// Routes pour les utilisateurs
router.post('/inscription', utilisateurController.inscription);
router.post('/connexion', utilisateurController.connexion);

module.exports = router;

