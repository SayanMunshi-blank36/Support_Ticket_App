// Creating middleware to throw error

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; // res.statusCode is the same where the middleware will be used.
  res.status(statusCode);

  res.json({
    message: err.message, // this will show the message which is passed in the middleware.
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };
