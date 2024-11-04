const express = require("express");
const app = express();
const bp = require("body-parser");
const path = require("path");

//setting up templates
app.use(bp.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));
app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");