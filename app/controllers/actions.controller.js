//Controlleur : actionsController
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Controlleur pour gérer les actions sur les actions
//
// === resources mongodb

const db = require("../models");
const Actions = db.actions;
// Create and Save a new Action
exports.create = (req, res) => {
  // Validate request
  if (!req.body.action) {
    res.status(400).send({ message: "Les champs ne peuvent être vide!" });
    return;
  }
  // Create an Action
  const actions = new Actions({
    id: req.body.id,
    action: req.body.action
  });
  // Save Action in the database
  actions
    .save(actions)
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