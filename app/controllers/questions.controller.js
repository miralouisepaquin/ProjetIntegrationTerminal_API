const db = require("../models");
const Questions = db.questions;
// Create and Save a new Question
exports.create = (req, res) => {
  // Validate request
  if (!req.body.section) {
    res.status(400).send({ message: "Les champs ne peuvent être vide!" });
    return;
  }
  // Create a Question
  const questions = new Questions({
    section: req.body.section,
    numQuestion: req.body.numQuestion,
    description: req.body.description,
    reponse: req.body.reponse
  });
  // Save Question in the database
  questions
    .save(questions)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la création de la Question."
      });
    });
};
// Retrieve all Questions from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
    Questions.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur est survenue lors de la recherche des Questions."
        });
      });
};
// Find a single Question with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Questions.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Impossible de trouver la Question avec le id : " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Erreur lors de la recherche de la Question avec le id :=" + id });
      });
};
// Update a Question by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Les champs ne peuvent être vide lors de la modification!"
        });
      }
      const id = req.params.id;
      Questions.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Ne peut modifier la Question avec le id=${id}. Il se peut que le Question n'existe pas!`
            });
          } else res.send({ message: "Question modifiée avec succès." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Erreur lors de la modification de la Question avec le id: " + id
          });
        });
};
// Delete a Question with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Questions.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Ne peut supprimer la Question avec le id=${id}. Il se peut que le Question n'existe pas!`
          });
        } else {
          res.send({
            message: "Question supprimée avec succès!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ne peut supprimer la Question avec le id: " + id
        });
      });
};
