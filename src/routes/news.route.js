const bookController = require('../controllers/news.controller');

const router = require('express').Router();

router.get('/', bookController.read);
router.post('/', bookController.create);

module.exports = router;
