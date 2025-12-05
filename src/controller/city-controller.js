const { StatusCodes } = require('http-status-codes')
const { CityServices } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

/*
 POST : /city
 req-body {name:'Mumbai'}
*/

async function createCity(req, res) {
  try {
    const city = await CityServices.createCity({
      name: req.body.name,
    })
    SuccessResponse.data = city
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
module.exports = {
  createCity
}