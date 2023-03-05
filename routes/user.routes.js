const router  = require('express').Router()
const Usercontroller = require('./../controller/user.controller')

router.route('/').get(Usercontroller.getalluser)
router.route('/adduser').post(Usercontroller.adduser)


module.exports = router