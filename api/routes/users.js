/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *         - type
 *         - initialWeight
 *         - goalWeight
 *         - height
 *         - activityLevel
 *         - dateOfBirth
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated unique id of the user
 *         username:
 *           type: string
 *           description: The user's name
 *         email:
 *           type: string
 *           description: The user's unique email
 *         password:
 *           type: string
 *           description: The user's password
 *         type:
 *           type: string
 *           description: The user's type, could be 'admin' or 'normal user'
 *         initialWeight:
 *           type: number
 *           description: The user's initial weight
 *         goalWeight:
 *           type: number
 *           description: The goal weight the users aspires to reach
 *         height:
 *           type: number
 *           description: The user's height in cm
 *         activityLevel:
 *           type: number
 *           description: The user's physical activity level, which is a number between 1.0 (Sedentary) and 2.0 (Very Active)
 *         dateOfBirth:
 *           type: Date (yyyy-mm-dd)
 *           description: The user's birth date
 *       example:
 *        username: Ahmad
 *        password: demo12345
 *        email: demo@gmail.com
 *        initialWeight: 73
 *        goalWeight: 70
 *        height: 175
 *        activityLevel: 1.2
 *        dateOfBirth: 2000-01-19
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Create a new book
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
