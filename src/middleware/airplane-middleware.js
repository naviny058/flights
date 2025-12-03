
function validateCreateRequest(req, res, next) {
  if (!req.body.modeNumber) {
    return res.status(500)
      .json({
        message: 'something went wrong while creating aiplane',
        data: {},
        error: { explanation: 'Model Number Not found on the oncoming req' }
      });
  }
  next()
}
module.exports = {
  validateCreateRequest
}