const db = require("../models");
const Sections = db.sections;
// Create and Save a new Section
exports.create = (req, res) => {
  // Validate request
  if (!req.body.section) {
    res.status(400).send({ message: "Les champs ne peuvent être vide!" });
    return;
  }
  // Create a Section
  const sections = new Sections({
    section: req.body.section
  });
  // Save Section in the database
  Sections
    .save(sections)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la création de la Section."
      });
    });
};
// Retrieve all Sections from the database.
exports.findAll = (req, res) => {
    const section = req.query.section;
    var condition = section ? { section: { $regex: new RegExp(section), $options: "i" } } : {};
    Sections.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur est survenue lors de la recherche des Sections."
        });
      });
};
// Find a single Section with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Sections.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Impossible de trouver le Section avec le id : " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Erreur lors de la recherche de la Section avec le id :=" + id });
      });
};
// Delete a Section with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Sections.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Ne peut supprimer la Section avec le id=${id}. Il se peut que la Section n'existe pas!`
          });
        } else {
          res.send({
            message: "Section supprimée avec succès!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ne peut supprimer la Section avec le id: " + id
        });
      });
};
