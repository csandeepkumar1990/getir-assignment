const ProductsController = require('../controllers/products.controller.js');
const express = require('express');
var router = express.Router();
const { check } = require('express-validator');

//Define router with express validators
router.post('/',  [ check('startDate').not().isEmpty(),
                    check('endDate').not().isEmpty(),
                    check('minCount').isInt(),
                    check('maxCount').isInt()], ProductsController.getAll);

module.exports = router;


