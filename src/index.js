
const express = require("express");
require("dotenv").config();

const cors =require("cors")
const app=express();
app.use( express.json());
app.use(cors());

const connect = require("./configs/db");

const itemController = require("./controller/item.controller");

app.use("/shop",itemController);

const port = process.env.PORT || 3002;


app.listen(port, async () => {
    try {
      await connect();
      console.log(`listening on port ${port}`);
    } catch (err) {
      console.log(err.message);
    }
  });