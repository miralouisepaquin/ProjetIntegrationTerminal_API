//Controlleur : formProgrammeController
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Controlleur pour gérer les actions sur le formulaire Mon Choix De Programme
//
// === resources mongodb

const db = require("../models");
const Form = db.formProgramme;
// Create and Save a new Form
exports.create = (req, res) => {
  // Validate request
  if (!req.body.identifiant) {
    res.status(400).send({ message: "Les champs ne peuvent être vide!" });
    return;
  }
  // Create a Form
  const form = new Form({
    titre: req.body.titre,
          directive: [
            {
              titre: req.body.titre,
              objectif: [],
              but: req.body.but,
            }
          ],
          piedPage: req.body.piedPage,
          questions: [
            {
              facteur: req.body.facteur,
              questions: [],
            }
          ]
  });
  // Save Form in the database
  form
    .save(form)
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
// Retrieve all Form from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
    Form.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur est survenue lors de la recherche des Form."
        });
      });
};
// Find a single Form with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Form.findById(id)
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
      Form.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
    Form.findByIdAndDelete(id)
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
