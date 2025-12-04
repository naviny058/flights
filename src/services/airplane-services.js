const { StatusCodes } = require('http-status-codes')
const { AirPlaneRepository } = require('../repositories')
const AppError = require('../utils/error')
const airPlaneRepository = new AirPlaneRepository()

async function createAirplane(data) {
  try {
    const airplane = await airPlaneRepository.create(data)
    return airplane;
  } catch (error) {
    if (error.name == 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError('Cannot create a new Airplance object', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
async function destroyAirplane(id) {
  try {
    const airplane = airPlaneRepository.destroy(id)
    return airplane
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  createAirplane,
  destroyAirplane
}
