// Here we initialize our express server and the database connection.

import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
// db instance connection
import "./infrastructure/mongo.config";

import userRoutes from "./infrastructure/routes/user";

const app = express();
const port = process.env.PORT || 3023;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
