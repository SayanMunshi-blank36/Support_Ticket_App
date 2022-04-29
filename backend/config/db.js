const mongoose = require("mongoose"); // mongoose is used to connect our backend logic with the mongoDB database.

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // mongoose.connect is an async function which connects the app with the database.
    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
