const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.use('/', Controller.helloWorld, Controller.aboutMe);
router.use('/about', Controller.aboutMe);

module.exports = router;
