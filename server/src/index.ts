// Here we initialize our express server and the database connection.

import "dotenv/config";
import express from "express";
import "reflect-metadata";

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
