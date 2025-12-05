const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = 'something went wrong while creating city'

    ErrorResponse.error = new AppError(['City name Not found on the oncoming req'])
    return res.status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  next()
}
module.exports = {
  validateCreateRequest
}