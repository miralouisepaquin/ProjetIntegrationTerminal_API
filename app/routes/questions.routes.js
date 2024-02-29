//Fichier de route pour les routes questions
//
//Auteur : Mira Paquin
//(c)2024 Projet Intégration Terminal
//
const questionsController = require("../controllers/questions.controller.js");
var router = require("express").Router();
/** Swagger tag Questions
 * @swagger
 * tags:
 *  name: Questions
 *  description: For question management
  */

/** Swagger definition QuestionsDefault
 * @swagger
 * definitions:
 *  QuestionsDefault:
 *   type: object
 *   properties:
 *    message:
 *     type: String
 *     description: Question identification
 *     example: 'Connected to the question controller!'
  */

/** Swagger definition QuestionData
 * @swagger
 * definitions:
 *  QuestionData:
 *   type: object
 *   properties:
 *    numQuestion:
 *     type: string
 *     description: Question number
 *     example: 'S1'
 *    description:
 *     type: string
 *     description: Question that will appear in the form
 *     example: 'Jai des aptitudes variées qui me font encore hésiter dans le choix de mon programme'
 *    id:
 *     type: String
 *     description: unique Id for a user
 *     example: '65ce5fb1170101134ede3620'
  */
 

/** Swagger definition QuestionAdded
 * @swagger
 * definitions:
 *  QuestionAdded:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message returned
 *     example: '1 question added'
   */

/** Swagger definition QuestionUpdated
 * @swagger
 * definitions:
 *  QuestionUpdated:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message returned
 *     example: 'Question modified with succes'
   */

/** Swagger definition QuestionDeleted
 * @swagger
 * definitions:
 *  QuestionDeleted:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message returned
 *     example: 'Question(s) deleted with succes!'
   */


/** Swagger get /api/questions/
 * @swagger
  * /api/questions/:
  *  get:
  *   summary: Default action of the question controller
 *   tags : [Questions]
  *   description: Default action of the question controller
  *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/QuestionsDefault'
  *    500:
  *     description: Error processing request
  */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the Users controller!' });
});

/** Swagger post /api/questions/createQuestion/
 * @swagger
  * /api/questions/createQuestion/:
  *  post:
  *   summary: Add an question
  *   tags : [Questions]
  *   description: Add an question to the database
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/QuestionData'
  *   responses:
  *    200:
  *     description: success
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#/definitions/QuestionAdded'
  *    400:
  *     description: Les champs ne peuvent être vide!
  *    500:
  *     description: Une erreur est survenue lors de la création de la question.
  */
router.post("/createQuestion", questionsController.create);
/** Swagger get /api/questions/findAllQuestions
 * @swagger
  * /api/questions/findAllQuestions/:
  *  get:
  *   summary: Action that gets questions 
 *   tags : [Questions]
  *   description: Action that gets questions 
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/QuestionData'
  *    500:
  *     description: Une erreur est survenue lors de la recherche des questions.
  */
router.get("/findAllQuestions", questionsController.findAll);
/** Swagger get /api/questions/findQuestion/:id
 * @swagger
 * /api/questions/findQuestion/{id}:
 *   get:
 *     summary: Returns questions according to criteria (id) passed as parameters
 *     tags: [Questions]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: Return all questions on identification Id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *      200:
 *        description: success
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/definitions/UserData'
 *      404:
 *        description: Impossible de trouver la question avec le id
 *      500:
 *        description: Erreur lors de la recherche de la question avec le id
 */
router.get("/findQuestion/:id", questionsController.findOne);
/** Swagger put /api/questions/updateQuestion/:id
 * @swagger
 * /api/questions/updateQuestion/{id}:
 *   put:
 *     summary: Update questions according to criteria (id) passed as parameters
 *     tags: [Questions]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: Update a question on identification Id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *      200:
 *        description: success
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/definitions/QuestionUpdated'
 *      400:
 *        description: Les champs ne peuvent être vide lors de la modification!
 *      404:
 *        desription: Ne peut modifier la question avec le id=${id}. Il se peut que la question n'existe pas!
 *      500:
 *        description: Erreur lors de la modification de la question avec le id
 */
router.put("/updateQuestion/:id", questionsController.update);
/** Swagger delete /api/questions/deleteQuestion/:id
 * @swagger
 * /api/questions/deleteQuestion/{id}:
 *   delete:
 *     summary: Delete question according to criteria (id) passed as parameters
 *     tags: [Questions]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: Delete a question on identification Id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *      200:
 *        description: success
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/definitions/QuestionDeleted'
 *      404:
 *        desription: Ne peut supprimer la Question avec le id=${id}. Il se peut que le Question n'existe pas!
 *      500:
 *        description: Ne peut supprimer la Question avec le id
 */
router.delete("/deleteQuestion/:id", questionsController.delete);

module.exports = router;