module.exports = app => {
    const formsController = require("../controllers/forms.controller.js");
    var router = require("express").Router();
    // Create a new form
    router.post("/createForm", formsController.create);
    // Retrieve all forms
    router.get("/findAllForms", formsController.findAll);
    // Retrieve a single form with identifiant
    router.get("/findForm/:identifiant", formsController.findOne);
    // Update a form with id
    router.put("/updateForm/:id", formsController.update);
    // Delete a form with id
    router.delete("/deleteForm/:id", formsController.delete);
	
	app.use('/api/forms', router);
  };