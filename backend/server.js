const express = require("express"); // commonJs module syntax - bringing express module. If in package.json we specify "type": "module" then we can use "import" syntax i.e. ES6 syntax.

const dotenv = require("dotenv").config(); // package for using the env files.

// const PORT = 5000; // local port on which the backend will run during production. It will be created later as an environment variable in .env file.

const PORT = process.env.PORT || 5000; // we can receive the data in .env file using process.env.{var_name} but we have to use the dotenv module.

const app = express(); // Initialising the app variable as an express server.

app.get("/", (req, res) => {
  // "/" will give the respose on the home url.
  // app.get() is used for creating a get route.
  //res.send("Hello"); // res is used for sending response and req is used for geting request.

  res.status(200).json({ message: "Welcome to the support desk api" }); // we can also send json response. Using .status() we can set the status codes such as 200, 201, 400, 404, etc. to specify the status codes of the res given.
});

app.listen(PORT, () => console.log(`Server started on port : ${PORT}`)); // app.listen() starts the file on the port specified and the callback function will notify us of the status of the running server.
