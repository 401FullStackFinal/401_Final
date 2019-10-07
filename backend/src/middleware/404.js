'use strict';

module.exports = (req, res, next) => {
  let error = { error: 'Error 404: Resource Not Found' };
  res.status(404).json(error);
};