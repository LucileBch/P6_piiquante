// Importation d'express et de mongoose
const express = require('express');
const mongoose = require('mongoose');

// Création d'une application express
const app = express();

// Connexion de l'API à la base de données
mongoose.connect('mongodb+srv://LucileBch:4987@cluster0.kbrdrtp.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Middleware permettant les requêtes cross-origins
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Middleware test
app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
    next();
  });
  
  app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
  });

// Exportation de l'application pour l'exploiter à partir d'autres fichiers
module.exports = app;
