//Fichier de route pour le controleur usersController
//
//Auteur : Mira Paquin
//(c)2024 Projet Intégration Terminal
//
const usersController = require('../controllers/users.controller.js');
var router = require("express").Router();
/** Swagger tag Users
 * @swagger
 * tags:
 *  name: Users
 *  description: For user management
  */


/** Swagger definition UsersDefault
 * @swagger
 * definitions:
 *  UsersDefault:
 *   type: object
 *   properties:
 *    message:
 *     type: String
 *     description: User identification
 *     example: 'Connected to the user controller!'
  */

/** Swagger definition UserData
 * @swagger
 * definitions:
 *  UserData:
 *   type: object
 *   properties:
 *    identifiant:
 *     type: string
 *     description: number for identification of the user
 *     example: '2159875'
 *    firstName:
 *     type: string
 *     description: First name of the user
 *     example: 'Alain'
 *    lastName:
 *     type: string
 *     description: Last name of the user
 *     example: 'Dubé'
 *    email:
 *     type: string
 *     description: Email for identification of the user
 *     example: 'user@hotmai.com'
 *    passWord:
 *     type: string
 *     description: Password for authentification
 *     example: 'Patate123'
 *    type:
 *     type: number
 *     description: 1 if employe, 0 if student
 *     example: '1'
 *    id:
 *     type: String
 *     description: unique Id for a user
 *     example: '65ce5fb1170101134ede3620'
  */
 

/** Swagger definition UserAdded
 * @swagger
 * definitions:
 *  UserAdded:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message returned
 *     example: '1 user added'
   */

/** Swagger definition UserUpdated
 * @swagger
 * definitions:
 *  UserAdded:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message returned
 *     example: 'User modified succesfully'
   */


/** Swagger get /api/users/
 * @swagger
  * /api/users/:
  *  get:
  *   summary: Default action of the user controller
 *   tags : [Users]
  *   description: Default action of the user controller
  *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/UsersDefault'
  *    500:
  *     description: Error processing request
  */
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to the Users controller!' });
  });

/** Swagger post /api/users/createUser/
 * @swagger
  * /api/users/createUser/:
  *  post:
  *   summary: Add an user
  *   tags : [Users]
  *   description: Add an user to the database
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/UserData'
  *   responses:
  *    200:
  *     description: success
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#/definitions/UserAdded'
  *    400:
  *     description: Les champs ne peuvent être vide!
  *    500:
  *     description: Une erreur est survenue lors de la création du User.
  */ 
router.post("/createUser", usersController.create);

/** Swagger get /api/users/findAllUsers
 * @swagger
  * /api/users/findAllUsers/:
  *  get:
  *   summary: Action that gets users 
 *   tags : [Users]
  *   description: Action that gets users 
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/UserData'
  *    500:
  *     description: Une erreur est survenue lors de la recherche des Users.
  */
router.get("/findAllUsers", usersController.findAll);

/** Swagger get /api/users/findUser/:identifiant
 * @swagger
 * /api/users/findUser/{identifiant}:
 *   get:
 *     summary: Returns users according to criteria (identifiant) passed as parameters
 *     tags: [Users]
 *     parameters:
 *       - in : path
 *         name: identifiant
 *         description: Return all users on identification Identifiant
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
 *        description: Impossible de trouver le User avec le id
 *      500:
 *        description: Erreur lors de la recherche du User avec le id
 */   
router.get("/findUser/:identifiant", usersController.findOne);

/** Swagger put /api/users/updateUser/:id
 * @swagger
 * /api/users/updateUser/{id}:
 *   put:
 *     summary: Update users according to criteria (id) passed as parameters
 *     tags: [Users]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: Update a user on identification Id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *      200:
 *        description: success
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/definitions/UserUpdated'
 *      400:
 *        description: Les champs ne peuvent être vide lors de la modification!
 *      404:
 *        desription: Ne peut modifier le User avec le id=${id}. Il se peut que le User n'existe pas!
 *      500:
 *        description: Erreur lors de la modification du User avec le id
 */
router.put("/updateUser/:id", usersController.update);   
// Delete a user with id
router.delete("/deleteUser/:id", usersController.delete);
// Delete all logs
router.delete("/deleteAllUsers", usersController.deleteAll);
	
module.exports = router;
