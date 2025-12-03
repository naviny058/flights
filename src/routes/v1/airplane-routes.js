const express = require("express");
const { AirplaneController } = require("../../controller");
const { AirplaneMiddleware } = require("../../middleware");
const router = express.Router()

//  api/v1/airplane Post 
router
  .post('/',
    AirplaneMiddleware.validateCreateRequest,
    AirplaneController.createAirplane)

module.exports = router