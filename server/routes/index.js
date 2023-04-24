const express = require('express');
const router = express.Router();
const auth = require('./auth');
const { homeNews } = require('./controller/homeNews');
router.use('/user', auth);
router.use('/', homeNews);
module.exports = router