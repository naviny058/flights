const express = require("express");
const { AirplaneController } = require("../../controller");
const router = express.Router()

//  api/v1/airplane Post 
router.post('/', AirplaneController.createAirplane)

module.exports = router