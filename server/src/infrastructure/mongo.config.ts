import mongoose from "mongoose";

const uri = `${process.env.MONGO_DB_CONNECTION_STRING}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    if (err.MongoError) {
    }
    console.log("Error connecting Database instance: ", err);
  }
);
// require any models
require("./models/User");
