const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = 'something went wrong while creating city'

    ErrorResponse.error = new AppError(['Flight Number Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = 'something went wrong while creating city'

    ErrorResponse.error = new AppError(['Airplane Id Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = 'something went wrong while creating city'

    ErrorResponse.error = new AppError(['departure AirportId Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = 'something went wrong while creating city'

    ErrorResponse.error = new AppError(['arrival Airport Id Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = 'something went wrong while creating city'

    ErrorResponse.error = new AppError(['arrival Time Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = 'something went wrong while creating city'

    ErrorResponse.error = new AppError(['price Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.totalNumberOfSeats) {
    ErrorResponse.message = 'something went wrong while creating city'

    ErrorResponse.error = new AppError(['total NumberOf Seats Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  next()
}
module.exports = {
  validateCreateRequest
}