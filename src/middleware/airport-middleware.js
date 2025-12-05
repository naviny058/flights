const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error");

function validateCreateRequest(req, res, next) {
  if (!req.body.code) {
    ErrorResponse.message = 'something went wrong while creating aiplane'

    ErrorResponse.error = new AppError(['code Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.name) {
    ErrorResponse.message = 'something went wrong while creating aiplane'

    ErrorResponse.error = new AppError(['name Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  if (!req.body.cityId) {
    ErrorResponse.message = 'something went wrong while creating aiplane'

    ErrorResponse.error = new AppError(['cityId Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  next()
}
module.exports = {
  validateCreateRequest
}