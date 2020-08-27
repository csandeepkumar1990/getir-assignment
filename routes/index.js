const express = require('express');
const apiRouter = express();

// api routes
apiRouter.use('/products', require('./products.route'));

module.exports = apiRouter;





