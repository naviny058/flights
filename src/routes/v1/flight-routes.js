const express = require("express");
const { FlightController } = require("../../controller");
const { FlightMiddleware } = require("../../middleware");
const router = express.Router()

//  api/v1/flights Post 
router
  .post('/',
    FlightMiddleware.validateCreateRequest,
    FlightController.createFlight
  )

module.exports = router