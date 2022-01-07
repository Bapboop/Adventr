const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

//Error handler for catching Sequelize errors:
const { ValidationError } = require('sequelize');


// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(helmet({
  contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);


// this must be below th csurf
app.use(routes);

// Error handling: placed after routes:
//Catch unhandled requests and forward to error handler:
app.use((_req, _res, next) => {
  const err = new Error("The requested resource could not be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
})


// Processes sequelize errors:
app.use((err, _req, _res, next) => {
  //check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
})

//Error formatter: formats all errors before returning JSON response:
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.log(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});











module.exports = app;
