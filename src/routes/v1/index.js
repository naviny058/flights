const express = require('express')
const { InfoController } = require('../../controller')
const airplaneRouter = require('./airplane-routes')
const router = express.Router()

router.get('/info', InfoController.info)
router.use('/airplane', airplaneRouter)
module.exports = router