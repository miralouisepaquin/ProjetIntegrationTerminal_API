//Fichier de route pour le controleur formsController
//
//Auteur : Mira Paquin
//(c)2024 Projet Intégration Terminal
//
const formsController = require("../controllers/forms_programmeEtudes.controller");
var router = require("express").Router();
/** Swagger tag FormsEtudes
 * @swagger
 * tags:
 *  name: FormsEtudes
 *  description: For form management
  */

/** Swagger definition FormsDefault
 * @swagger
 * definitions:
 *  FormsDefault:
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


/** Swagger get /api/formsEtudes/
 * @swagger
  * /api/formsEtudes/:
  *  get:
  *   summary: Default action of the form controller
 *   tags : [FormsEtudes]
  *   description: Default action of the form controller
  *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/FormsDefault'
  *    500:
  *     description: Error processing request
  */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the forms controller!' });
});

/** Swagger post /api/formsEtudes/createForm/
 * @swagger
  * /api/formsEtudes/createForm/:
  *  post:
  *   summary: Add an form
  *   tags : [FormsEtudes]
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
router.post("/createForm", formsController.create);
/** Swagger get /api/formsEtudes/findAllForms
 * @swagger
  * /api/formsEtudes/findAllForms/:
  *  get:
  *   summary: Action that gets forms 
 *   tags : [FormsEtudes]
  *   description: Action that gets forms 
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/FormData'
  *    500:
  *     description: Une erreur est survenue lors de la recherche des formulaires.
  */
router.get("/findAllForms", formsController.findAll);
/** Swagger get /api/formsEtudes/findForm/:identifiant
 * @swagger
 * /api/formsEtudes/findForm/{identifiant}:
 *   get:
 *     summary: Returns forms according to criteria (identifiant) passed as parameters
 *     tags: [FormsEtudes]
 *     parameters:
 *       - in : path
 *         name: identifiant
 *         description: Return all forms on identification Identifiant
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
router.get("/findForm/:identifiant", formsController.findOne);
/** Swagger put /api/formsEtudes/updateForm/:id
 * @swagger
 * /api/formsEtudes/updateForm/{id}:
 *   put:
 *     summary: Update form according to criteria (id) passed as parameters
 *     tags: [FormsEtudes]
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
router.put("/updateForm/:id", formsController.update);
/** Swagger delete /api/formsEtudes/deleteForm/:id
 * @swagger
 * /api/formsEtudes/deleteForm/{id}:
 *   delete:
 *     summary: Delete form according to criteria (id) passed as parameters
 *     tags: [FormsEtudes]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: Delete a form on identification Id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *      200:
 *        description: success
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/definitions/FormDeleted'
 *      404:
 *        desription: Ne peut supprimer le Form avec le id=${id}. Il se peut que le Form n'existe pas!
 *      500:
 *        description: Ne peut supprimer le Form avec le id
 */
router.delete("/deleteForm/:id", formsController.delete);
	
module.exports = router;