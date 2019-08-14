import 'dotenv/config';

const express = require("express");
const app = express();

app.listen(3000, () => {
	console.log(process.env.MY_SECRET)
	console.log("Server running on port 3000");
});