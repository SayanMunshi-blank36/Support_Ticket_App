// Controllers are used to have all the functions within them which is placed inside the  routes.

const asyncHandler = require("express-async-handler"); // async-handler is imported for automatically handling the async functions.

// @desc Register a new User
// @route /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  // console.log(req.body); // req contains all the requests we make in the browser. req.body is an object which consists of those properties. To use this body object we have to use the bodyparser middleware which is now included in express itself. The middleware is used in the server.js file below where app is initialised as express server.

  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Include all fields"); // throwing the error using the middleware we created.
  }

  res.send("Register route");
});

// @desc Login a User
// @route /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login route");
});

module.exports = {
  registerUser,
  loginUser,
};
