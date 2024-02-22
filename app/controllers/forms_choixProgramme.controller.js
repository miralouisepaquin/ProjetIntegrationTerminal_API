//Controlleur : formsController
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Controlleur pour gérer les actions sur les formulaires
//
// === resources mongodb

const db = require("../models");
const Forms = db.formsProgramme;
// Create and Save a new Form
exports.create = (req, res) => {
  // Validate request
  if (!req.body.identifiant) {
    res.status(400).send({ message: "Les champs ne peuvent être vide!" });
    return;
  }
  // Create a Form
  const forms = new Forms({
    identifiant: req.body.identifiant,
    date: new Date(),
    reponses: [],
    progression: req.body.progression
  });
  // Save Form in the database
  forms
    .save(forms)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la création du Form."
      });
    });
};
// Retrieve all Forms from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
    Forms.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur est survenue lors de la recherche des Forms."
        });
      });
};
// Find a single Form with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Forms.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Impossible de trouver le Form avec le id : " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Erreur lors de la recherche du Form avec le id :=" + id });
      });
};
// Update a Form by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Les champs ne peuvent être vide lors de la modification!"
        });
      }
      const id = req.params.id;
      Forms.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Ne peut modifier le Form avec le id=${id}. Il se peut que le Form n'existe pas!`
            });
          } else res.send({ message: "Form modifié avec succès." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Erreur lors de la modification du Form avec le id: " + id
          });
        });
};
// Delete a Form with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Forms.findByIdAndDelete(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Ne peut supprimer le Form avec le id=${id}. Il se peut que le Form n'existe pas!`
          });
        } else {
          res.send({
            message: "Form supprimé avec succès!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ne peut supprimer le Form avec le id: " + id
        });
      });
};
