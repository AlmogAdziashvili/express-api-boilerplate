const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const HttpStatus = require('http-status-codes');

const logger = require('./handlers/logger');

const router = require('./routes/route');

const app = express();

logger.info('dd');
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: true }));
app.use(helmet());

// Routes
app.use('/', router);

// 404
app.use((req, res) => res.status(HttpStatus.NOT_FOUND).json({ message: 'Not Found' }));

module.exports = app;
