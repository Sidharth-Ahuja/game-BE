const express = require("express");
const app = express();
const path = require("path");
const functions = require('firebase-functions');

require("./timer");
app.use(express.static(path.join(__dirname,"public")));

// app.listen(3000);
exports.webApp = functions.https.onRequest(app);
