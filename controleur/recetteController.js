// controllers/recetteController.js

const Recette = require('../models/Recette');

exports.getRecettes = async (req, res) => {
    try {
        const recettes = await Recette.find();
        res.json(recettes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Autres contrôleurs pour la création, la mise à jour et la suppression des recettes

