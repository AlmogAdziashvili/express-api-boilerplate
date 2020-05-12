const express = require('express');
const HttpStatus = require('http-status-codes');
// const logger = require('../handlers/logger');

const router = express.Router();

router.get('/', (req, res) => res.status(HttpStatus.OK).json({ message: 'API Works!' }));

module.exports = router;
