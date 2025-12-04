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

async function getAirplanes() {
  try {
    const airplanes = airPlaneRepository.getAll()
    return airplanes
  } catch (error) {
    throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirplanesById(id) {
  try {
    const airplane = await airPlaneRepository.get(id)
    return airplane
  } catch (errors) {
    if (errors.StatusCodes == StatusCodes.NOT_FOUND) {
      throw new AppError('The airplane you requested is not present', errors.statusCode)
    }
    throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
async function destroyAirplane(id) {
  try {
    const airplane = await airPlaneRepository.destroy(id)
    return airplane
  } catch (errors) {
    if (errors.StatusCodes == StatusCodes.NOT_FOUND) {
      throw new AppError('The airplane you requested is not present', errors.StatusCodes)
    }
    throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplanesById,
  destroyAirplane
}
