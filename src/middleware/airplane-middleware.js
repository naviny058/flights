const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = 'something went wrong while creating aiplane'

    ErrorResponse.error = new AppError(['Model Number Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  next()
}
module.exports = {
  validateCreateRequest
}