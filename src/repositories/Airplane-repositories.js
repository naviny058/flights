const CrudRepository = require('./crud-reposiories')
const { Airplane } = require('../models')

class AirPlaneRepository extends CrudRepository {
  constructor() {
    super(Airplane)
  }
}
module.exports = AirPlaneRepository