// Controllers are used to have all the functions within them which is placed inside the  routes.

const asyncHandler = require("express-async-handler"); // async-handler is imported for automatically handling the async functions.

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

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

  // Find if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }

  // res.send("Register route");
});

// @desc Login a User
// @route /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // Check user and passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  // res.send("Login route");
});

// Generate Token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
};
