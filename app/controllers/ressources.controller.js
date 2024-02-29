//Controlleur : ressourcesController
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Controlleur pour gérer les actions sur les ressources
//
// === resources mongodb

const db = require("../models");
const Ressources = db.ressources;
// Create and Save a new Ressource
exports.create = (req, res) => {
  // Validate request
  if (!req.body.action) {
    res.status(400).send({ message: "Les champs ne peuvent être vide!" });
    return;
  }
  // Create an Action
  const ressources = new Ressources({
    id: req.body.id,
    action: req.body.action
  });
  // Save Action in the database
  ressources
    .save(ressources)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la création de l'action."
      });
    });
};