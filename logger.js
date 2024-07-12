const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;

// Define log format
const logFormat = printf(({ message }) => `${message}`);

// Create a logger instance
module.exports = createLogger({
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    new transports.Console(), // Log to console
    new transports.File({ filename: 'combined.log' }) // Log to a file
  ]
});
