const { StatusCodes } = require('http-status-codes')
const { AirPlaneRepository } = require('../repositories')

const airPlaneRepository = new AirPlaneRepository()

async function createAirPlane(data) {
  try {
    const airplane = airPlaneRepository.create(data)
    return airplane
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  createAirPlane
}
