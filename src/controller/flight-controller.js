const { StatusCodes } = require('http-status-codes')
const { FlightServices } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

/*
 POST : /flight
 req-body {name:'Mumbai'}
*/

async function createFlight(req, res) {
  try {
    const flight = await FlightServices.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
      totalNumberOfSeats: req.body.totalNumberOfSeats,
      boardingGate: req.body.boardingGate
    })
    SuccessResponse.data = flight
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error

    console.log('ee', error)
    return res
      .status(error.statusCode)
      .json(ErrorResponse)

  }
}
module.exports = {
  createFlight
}