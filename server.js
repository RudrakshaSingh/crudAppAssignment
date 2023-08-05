const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes.js");

const app = express();
app.use(cors());
app.use(express.json()); //middleware to work with json data

const connectToDb = require("./config/db.js");

app.listen(process.env.PORT, async () => {
  await connectToDb();
  console.log(`server listening on localhost${process.env.PORT}`);
});
