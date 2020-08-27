var ProductService = require('../services/products.service');
const { validationResult } = require('express-validator');

/**
 * Handling the request and extracting data from it
 * code: 1 for error
 * code: 0 for success
 */
exports.getAll = async (req, res) => {

  try {
    //Validating the request object
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({code: 1, errors: errors.array() });
    }
    //console.log(req.body.startDate);
    if(!isValidDate(req.body.startDate)) {
      return res.status(422).json({code: 1, msg: 'Invalid Start Date' });
    }

    if(!isValidDate(req.body.endDate)) {
      return res.status(422).json({code: 1, msg: 'Invalid End Date' });
    }

    //Data extraction from request
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const minCount = Number(req.body.minCount) || 0;
    const maxCount = Number(req.body.maxCount) || 0;

    console.log(req.body);
    
    //Orchestrating to the service
    var products = await ProductService.getAll(startDate, endDate, minCount, maxCount);
    res.status(200).json({ code: 0, msg: 'Success', records : products });

  } catch (err) {
    res.status(err.status || 500).send({
      msg: err.msg || "Error occurred while retrieving the Documents", code: err.code || 1
    });
  }
};

//checking for valid date in yyyy-mm-dd format
const isValidDate = (dateString) => {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if(!dateString.match(regEx)) return false;  // Invalid format
  var d = new Date(dateString);
  var dNum = d.getTime();
  if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0,10) === dateString;
}
