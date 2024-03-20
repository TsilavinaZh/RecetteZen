// models/Recette.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recetteSchema = new Schema({
    titre: String,
    ingredients: [String],
    instructions: String,
    tempsCuisson: Number,
    auteur: {
        type: Schema.Types.ObjectId,
        ref: 'Utilisateur'
    },
    dateCreation: {
        type: Date,
        default: Date.now
    },
    favoris: [{
        type: Schema.Types.ObjectId,
        ref: 'Utilisateur'
    }],
    commentaires: [{
        utilisateur: {
            type: Schema.Types.ObjectId,
            ref: 'Utilisateur'
        },
        texte: String,
        note: Number
    }]
});

module.exports = mongoose.model('Recette', recetteSchema);

