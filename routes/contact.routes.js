const router  = require('express').Router()
const Contactcontroller = require('./../controller/contact.controller')

router.route('/:id').get(Contactcontroller.getallcontact)
router.route('/addcontact').post(Contactcontroller.addcontact)
router.route('/editcontact/:id').put(Contactcontroller.editcontact)
router.route('/deletecontact/:id').delete(Contactcontroller.deletecontact)

module.exports = router