// models/Utilisateur.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const utilisateurSchema = new Schema({
    nom: String,
    email: String,
    motDePasse: String
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);

