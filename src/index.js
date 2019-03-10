const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
var path = require('path');

const app = express();
/**
 * Database setup
 */
const mongoDBURL = 'mongodb://usuario:usuario1@ds163255.mlab.com:63255/upload-imagens';
mongoose.connect(mongoDBURL, { useNewUrlParser: true});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, "..", "tmp", "uploads")));
app.use(require("./routes"));

app.listen(3000);