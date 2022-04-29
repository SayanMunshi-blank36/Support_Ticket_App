// Routes are created to keep the server i.e. the main file clean by dividing the code in modules of other files called routes.

const express = require("express");
const router = express.Router(); // express.Router() helps us to use the routes functionality.

const { registerUser, loginUser } = require("../controllers/userController"); // Bringing in the controllers from the controllers.

// router.post("/", (req, res) => {
//   // Here "/" takes the value which is given in the main server file i.e. in this case "/api/users" which is given in app.use()
//   res.send("Register Route");
// });

// router.post("/login", (req, res) => {
//   // Here "/login" takes the value which is given in the main server file i.e. in this case "/api/users/login" which is given in app.use()
//   res.send("Login Route");
// });

// Using the the controller function makes the code clean
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
