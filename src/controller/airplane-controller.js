const { StatusCodes } = require('http-status-codes')
const { AirplaneServices } = require('../services')

async function createAirplane(req, res) {
  try {
    console.log(req.body.modelNumber, req.body.capacity)
    const airplane = await AirplaneServices.createAirPlane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity
    })
    return res.status(StatusCodes.CREATED)
      .json({
        airplane
      })
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  createAirplane
}