const express = require('express')
const { InfoController } = require('../../controller')
const airplaneRouter = require('./airplane-routes')
const cityRouter = require('./city-routes')
const router = express.Router()

router.get('/info', InfoController.info)
router.use('/airplanes', airplaneRouter)
router.use('/cities', cityRouter)
module.exports = router