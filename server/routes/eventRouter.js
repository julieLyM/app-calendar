const router = require('express').Router();
const eventsController = require('../controllers/eventsCtrl');

router.get('/', eventsController.getEvents);
router.post('/', eventsController.addEvent);

module.exports = router;
