const CrudRepository = require("./crud-reposiories");
const { City } = require('../models')
class CityRepository extends CrudRepository {
  constructor() {
    super(City)
  }
}
module.exports = CityRepository