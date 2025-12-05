const { StatusCodes } = require('http-status-codes')
const { AirportRepository } = require('../repositories')
const AppError = require('../utils/error')
const airportRepository = new AirportRepository()

async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data)
    return airport;
  } catch (error) {
    console.log('nav', error)
    if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeForeignKeyConstraintError') {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError('Cannot create a new airport object', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirports() {
  try {
    const airport = airportRepository.getAll()
    return airport
  } catch (error) {
    throw new AppError('Cannot fetch data of all the airport', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id)
    return airport
  } catch (errors) {
    if (errors.StatusCodes == StatusCodes.NOT_FOUND) {
      throw new AppError('The airport you requested is not present', errors.statusCode)
    }
    throw new AppError('Cannot fetch data of all the airport', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
async function destroyAirport(id) {
  try {
    const airport = await airportRepository.destroy(id)
    return airport
  } catch (errors) {
    if (errors.StatusCodes == StatusCodes.NOT_FOUND) {
      throw new AppError('The airport you requested is not present', errors.StatusCodes)
    }
    throw new AppError('Cannot fetch data of all the airport', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
module.exports = {
  createAirport,
  getAirport,
  getAirports,
  destroyAirport,
}
