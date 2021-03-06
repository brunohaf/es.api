const user_service = require('../services/user-service');
const router = require('express').Router();

/**
 *  @swagger
 * /CarRentByPeriod:
 *   get:
 *     tags:
 *     - "user"
 *     summary: ""
 *     description: ""
 *     parameters:
 *     - in: "header"
 *       name: "dataInicio"
 *       type: Date
 *       description: ""
 *       required: false
 *     - in: "header"
 *       name: "dataFim"
 *       type: Date
 *       description: ""
 *       required: false
 *     responses:
 *       200:
 *         description: "Success"
 *       400:
 *         description: "Ops... something wrong happened"
 */
router.get('/', async (req, res) => {
    return user_service.CarRentByPeriod(req.header('dataInicio', Date),req.header('dataFim', Date), res);
})

/**
 *  @swagger
 * /CarRentByPeriod/Free:
 *   get:
 *     tags:
 *     - "user"
 *     summary: ""
 *     description: ""
 *     parameters:
 *     - in: "header"
 *       name: "dataInicio"
 *       type: Date
 *       description: ""
 *       required: false
 *     - in: "header"
 *       name: "dataFim"
 *       type: Date
 *       description: ""
 *       required: false
 *     responses:
 *       200:
 *         description: "Success"
 *       400:
 *         description: "Ops... something wrong happened"
 */
router.get('/Free', async (req, res) => {
    return user_service.CarFreeForRentByPeriod(req.header('dataInicio', Date),req.header('dataFim', Date), res);
})

module.exports = router;
