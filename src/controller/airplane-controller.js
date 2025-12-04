const { StatusCodes } = require('http-status-codes')
const { AirplaneServices } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

/*
 POST : /airplanes
 req-body {modelNumber:'airbus320',capacity:23}
*/

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneServices.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity
    })
    SuccessResponse.data = airplane
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
async function getAirplanes(req, res) {
  try {
    const airplane = await AirplaneServices.getAirplanes()
    SuccessResponse.data = airplane
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
 DELETE : /airplanes/:id
 req-body:{}
*/

async function destroyAirplane(req, res) {
  try {
    const id = req.params.id
    const deletedAirplane = AirplaneServices.destroyAirplane(id)
    SuccessResponse.data = deletedAirplane
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  destroyAirplane
}