//Fichier de route pour les routes FormProgramme
//
//Auteur : Mira Paquin
//(c)2024 Projet Intégration Terminal
//
const FormController = require("../controllers/formProgramme.controller.js");
var router = require("express").Router();
/** Swagger tag FormProgramme
 * @swagger
 * tags:
 *  name: FormProgramme
 *  description: For form management
  */

/** Swagger definition FormDefault
 * @swagger
 * definitions:
 *  FormDefault:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Form identification
 *     example: 'Connected to the form controller!'
  */

/** Swagger definition FormData
 * @swagger
 * definitions:
 *  FormData:
 *   type: object
 *   properties:
 *    identifiant:
 *     type: string
 *     description: number for identification of the user
 *     example: '2159875'
 *    Date:
 *     type: Date
 *     description: Date of completion date
 *     example: '1996-09-12T00:00:00Z'
 *    reponse:
 *     type: array
 *     description: List of question
 *     example: '[1S1:1,1S2:1,1S3:0]'
 *    progression:
 *     type: number
 *     description: Progression for the completion of the form in %
 *     example: '10'
 *    id:
 *     type: String
 *     description: Unique Id for the form
 *     example: '65ce5fb1170101134ede3620'
  */
 

/** Swagger definition FormAdded
 * @swagger
 * definitions:
 *  FormAdded:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message returned
 *     example: '1 form added'
   */

/** Swagger definition FormUpdated
 * @swagger
 * definitions:
 *  FormAdded:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message returned
 *     example: 'Form modified with succes'
   */

/** Swagger definition FormDeleted
 * @swagger
 * definitions:
 *  FormDeleted:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message returned
 *     example: 'Form(s) deleted with succes!'
   */


/** Swagger get /api/FormProgramme/
 * @swagger
  * /api/FormProgramme/:
  *  get:
  *   summary: Default action of the form controller
 *   tags : [FormProgramme]
  *   description: Default action of the form controller
  *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/FormDefault'
  *    500:
  *     description: Error processing request
  */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the Form controller!' });
});

/** Swagger post /api/FormProgramme/createForm/
 * @swagger
  * /api/FormProgramme/createForm/:
  *  post:
  *   summary: Add an form
  *   tags : [FormProgramme]
  *   description: Add an form to the database
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/FormData'
  *   responses:
  *    200:
  *     description: success
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#/definitions/FormAdded'
  *    400:
  *     description: Les champs ne peuvent être vide!
  *    500:
  *     description: Une erreur est survenue lors de la création du Form.
  */
router.post("/createForm", FormController.create);

/** Swagger get /api/FormProgramme/findForm/:identifiant
 * @swagger
 * /api/FormProgramme/findForm/{identifiant}:
 *   get:
 *     summary: Returns Form according to criteria (identifiant) passed as parameters
 *     tags: [FormProgramme]
 *     parameters:
 *       - in : path
 *         name: identifiant
 *         description: Return all Form on identification Identifiant
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *      200:
 *        description: success
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/definitions/FormData'
 *      404:
 *        description: Impossible de trouver le form avec le id
 *      500:
 *        description: Erreur lors de la recherche du form avec le id
 */
router.get("/findForm/:id", FormController.findOne);
/** Swagger put /api/FormProgramme/updateForm/:id
 * @swagger
 * /api/FormProgramme/updateForm/{id}:
 *   put:
 *     summary: Update form according to criteria (id) passed as parameters
 *     tags: [FormProgramme]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: Update a form on identification Id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *      200:
 *        description: success
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/definitions/FormUpdated'
 *      404:
 *        desription: Ne peut modifier le Form avec le id=${id}. Il se peut que le Form n'existe pas!
 *      500:
 *        description: Erreur lors de la modification du Form avec le id
 */
router.put("/updateForm/:id", FormController.update);
	
module.exports = router;