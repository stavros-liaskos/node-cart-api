const express = require('express');

const controller = require('../controller/cart.controller');
const dummyMiddleWare = require('../middleware/dummyMiddleWare');

const routes = () => {
  const apiRoute = express.Router();

  const cartController = controller();

  apiRoute.route('/cart/create').post(cartController.create);
  apiRoute.route('/cart/update').post(cartController.update);
  apiRoute.route('/cart/empty').delete(cartController.empty);

  apiRoute.use(dummyMiddleWare);

  return apiRoute;
};

module.exports = routes;
