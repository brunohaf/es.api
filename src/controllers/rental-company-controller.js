const rental_company_service = require('../services/rental-company-service');
const router = require('express').Router();

/**
 *  @swagger
 * /SaveRentalCompany:
 *   post:
 *     tags:
 *     - "RentalCompany"
 *     summary: "Add a new RentalCompany to the database"
 *     description: "Add a new RentalCompany to the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A RentalCompany must have all the properties"
 *       required: false
 *       schema:
 *         type: "locadora"
 *         properties:
 *           nm_locadora:
 *              type: "string"
 *           cnpj:
 *              type: "integer"
 *           endereco:
 *     responses:
 *       200:
 *         description: "RentalCompany added Successfully"
 *       304:
 *         description: "RentalCompany already added"
 *       401:
 *         description: "Wrong RentalCompany properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    return rental_company_service.SaveRentalCompany(req.body,res);
});

/**
 *  @swagger
 * /UpdateRentalCompany:
 *   put:
 *     tags:
 *     - "RentalCompany"
 *     summary: "Update a RentalCompany on the database"
 *     description: "Update a RentalCompany on the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "'idlocadora' is obligatory to update a RentalCompany"
 *       required: false
 *       schema:
 *         type: "locadora"
 *         properties:
 *           idlocadora:
 *              type: "integer"
 *           nm_locadora:
 *              type: "string"
 *           cnpj:
 *              type: "integer"
 *           endereco:
 *     responses:
 *       200:
 *         description: "RentalCompany updated Successfully"
 *       401:
 *         description: "Wrong RentalCompany's 'idlocadora'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.put('/', async (req, res) => {
    return rental_company_service.UpdateRentalCompany(req.body,res);
});

/**
 *  @swagger
 * /GetAllRentalCompanies:
 *   get:
 *     tags:
 *     - "RentalCompany"
 *     summary: "Get all RentalCompanys on the database"
 *     description: "Get all RentalCompanys on the database"
 *     responses:
 *       200:
 *         description: "The RentalCompanys were found!"
 *       401:
 *         description: "RentalCompanys were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/', async (req, res) => {
    return  rental_company_service.GetAllRentalCompanies(res);
});

/**
 *  @swagger
 * /GetRentalCompany/byId:
 *   get:
 *     tags:
 *     - "RentalCompany"
 *     summary: "Find a RentalCompany on the database"
 *     description: "Find a RentalCompany on the database"
 *     parameters:
*     - in: "header"
 *       name: "idlocadora"
 *       description: "'idlocadora' is obligatory to update a RentalCompany"
 *       required: true
 *     responses:
 *       200:
 *         description: "The RentalCompany was found!"
 *       401:
 *         description: "Wrong RentalCompany's 'idlocadora'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/byId', async (req, res) => {
    return rental_company_service.GetRentalCompanyById(req.header('idlocadora'),res);
});

/**
 *  @swagger
 * /DeleteRentalCompany:
 *   delete:
 *     tags:
 *     - "RentalCompany"
 *     summary: "Erase a RentalCompany from the database"
 *     description: "Erase a RentalCompany on the database"
 *     parameters:
*     - in: "header"
 *       name: "idlocadora"
 *       description: "'idlocadora' is obligatory to erase a RentalCompany"
 *       required: true
 *     responses:
 *       200:
 *         description: "The RentalCompany is now gone!"
 *       401:
 *         description: "Wrong RentalCompany's 'idlocadora'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.delete('/', async (req, res) => {
    return rental_company_service.DeleteRentalCompany(req.header('idlocadora'),res);
});

module.exports = router;
