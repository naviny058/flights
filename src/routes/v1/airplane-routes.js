const express = require("express");
const { AirplaneController } = require("../../controller");
const { AirplaneMiddleware } = require("../../middleware");
const router = express.Router()

//  api/v1/airplane Post 
router
  .post('/',
    AirplaneMiddleware.validateCreateRequest,
    AirplaneController.createAirplane)

router
  .delete('/:id',
    AirplaneController.destroyAirplane,
  )
module.exports = router