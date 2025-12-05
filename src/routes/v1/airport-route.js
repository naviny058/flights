const express = require("express");
const router = express.Router()
const { AirportMiddleware } = require('../../middleware')
const { AirportController } = require('../../controller')
//  api/v1/airport Post 
router
  .post('/',
    AirportMiddleware.validateCreateRequest,
    AirportController.createAirport
  )

// /api/v1/airports/ GET
router
  .get('/',
    AirportController.getAirports
  )

// /api/v1/airports/:id GET
router
  .get('/:id',
    AirportController.getAirport
  )
// /api/v1/airports/:id DELETE
router
  .delete('/:id',
    AirportController.destroyAirport,
  )
module.exports = router