module.exports = app => {
    const sectionsController = require("../controllers/sections.controller.js");
    var router = require("express").Router();
    // Create a new section
    router.post("/createSection", sectionsController.create);
    // Retrieve all sections
    router.get("/findAllSections", sectionsController.findAll);
    // Retrieve a single section with identifiant
    router.get("/findSection/:id", sectionsController.findOne);
    // Delete a section with id
    router.delete("/deleteSection/:id", sectionsController.delete);
	
	app.use('/api/sections', router);
  };