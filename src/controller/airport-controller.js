const { StatusCodes } = require('http-status-codes')
const { AirportServices } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

/*
 POST : /airports
 req-body { 
      name: 'IGI,
      cityId: 'DEL',
      code: 5, 
      }
*/

async function createAirport(req, res) {
  try {
    const airport = await AirportServices.createAirport({
      name: req.body.name,
      code: req.body.code,
      cityId: req.body.cityId,
      address: req.body.address
    })
    SuccessResponse.data = airport
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error

    console.log(error)
    return res
      .status(error.statusCode)
      .json(ErrorResponse)

  }
}
async function getAirports(req, res) {
  try {
    const airport = await AirportServices.getAirports()
    SuccessResponse.data = airport
    return res.status(StatusCodes.OK)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    console.log(error)
    return res
      .status(error.statusCode)
      .json(ErrorResponse)

  }
}
async function getAirport(req, res) {
  try {
    const airport = await AirportServices.getAirports(req.params.id)
    SuccessResponse.data = airport
    return res.status(StatusCodes.OK)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    console.log(error)
    return res
      .status(error.statusCode)
      .json(ErrorResponse)
  }
}
/*
 DELETE : /airports/:id
 req-body:{}
*/

async function destroyAirport(req, res) {
  try {
    const id = req.params.id
    const deletedAirport = AirportServices.destroyAirport(id)
    SuccessResponse.data = deletedAirport
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  createAirport,
  getAirport,
  getAirports,
  destroyAirport
}