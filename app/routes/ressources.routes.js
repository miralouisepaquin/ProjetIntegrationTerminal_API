//Fichier de route pour les routes actions
//
//Auteur : Mira Paquin
//(c)2024 Projet Intégration Terminal
//
const ressourcesController = require("../controllers/ressources.controller.js");
var router = require("express").Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to the Actions controller!' });
  });
  
router.post("/createRessource", ressourcesController.create);

module.exports = router;