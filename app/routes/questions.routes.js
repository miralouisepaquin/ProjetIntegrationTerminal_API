module.exports = app => {
    const questionsController = require("../controllers/questions.controller.js");
    var router = require("express").Router();
    // Create a new question
    router.post("/createQuestion", questionsController.create);
    // Retrieve all questions
    router.get("/findAllQuestions", questionsController.findAll);
    // Retrieve a single question with identifiant
    router.get("/findQuestion/:id", questionsController.findOne);
    // Update a question with id
    router.put("/updateQuestion/:id", questionsController.update);
    // Delete a question with id
    router.delete("/deleteQuestion/:id", questionsController.delete);
	
	app.use('/api/questions', router);
  };