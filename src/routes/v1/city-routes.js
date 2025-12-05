const express = require("express");
const { CityController } = require("../../controller");
const { AirplaneMiddleware, CityMiddleware } = require("../../middleware");
const router = express.Router()

//  api/v1/city Post 
router
  .post('/',
    CityMiddleware.validateCreateRequest,
    CityController.createCity)

module.exports = router