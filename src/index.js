"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//routes
const produto = require("./routes/produto.routes.js");
//body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/produto", produto);

const sPort = 8081;
const url = "http://localhost:";
app.listen(sPort, () => console.log("Server is running on: " + url + sPort));
