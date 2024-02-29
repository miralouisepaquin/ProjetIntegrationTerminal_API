//Fichier de route pour les routes FormReussir
//
//Auteur : Mira Paquin
//(c)2024 Projet Intégration Terminal
//
const FormController = require("../controllers/formReussir.controller.js");
var router = require("express").Router();
/** Swagger tag FormReussir
 * @swagger
 * tags:
 *  name: FormReussir
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
 *     example: '[2S1:1,2S2:1,2S3:0]'
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


/** Swagger get /api/FormReussir/
 * @swagger
  * /api/FormReussir/:
  *  get:
  *   summary: Default action of the form controller
 *   tags : [FormReussir]
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

/** Swagger post /api/FormReussir/createForm/
 * @swagger
  * /api/FormReussir/createForm/:
  *  post:
  *   summary: Add an form
  *   tags : [FormReussir]
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

/** Swagger get /api/FormReussir/findForm/:identifiant
 * @swagger
 * /api/FormReussir/findForm/{identifiant}:
 *   get:
 *     summary: Returns Form according to criteria (identifiant) passed as parameters
 *     tags: [FormReussir]
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
router.get("/findForm/:identifiant", FormController.findOne);
/** Swagger put /api/FormReussir/updateForm/:id
 * @swagger
 * /api/FormReussir/updateForm/{id}:
 *   put:
 *     summary: Update form according to criteria (id) passed as parameters
 *     tags: [FormReussir]
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