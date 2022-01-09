const { validationResult } = require('express-validator');
const { ValidationError } = require('sequelize/types');


//Middleware for formatting errors:
const handleValidationErrors = (req, _res, next) => {
  const validaitonErrors = validationResult(req);

  if (!validaitonErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);


    const err = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);
  }
  next();
};

module.exports = { handleValidationErrors, };
