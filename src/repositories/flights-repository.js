const CrudRepository = require("./crud-reposiories");
const { Flight } = require('../models');
const { where } = require("sequelize");
class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight)
  }
  async getAllFlights(filter) {
    const response = await filter.findAll({
      where: filter
    })
    return response
  }
}
module.exports = FlightRepository