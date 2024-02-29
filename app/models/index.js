//Modèle : Index
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//
const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./actions.model.js")(mongoose);
db.users = require("./formEtudes.model.js")(mongoose);
db.users = require("./formProgramme.model.js")(mongoose);
db.users = require("./formReussir.model.js")(mongoose);
db.users = require("./questions.model.js")(mongoose);
db.users = require("./ressources.model.js")(mongoose);
db.users = require("./users.model.js")(mongoose);

module.exports = db;