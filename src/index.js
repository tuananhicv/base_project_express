//import buid-in
const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
//import custom
const port = 3006;
const route = require('./routes');
const db = require('./config/db');

// Khoi tao ung dung express
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Setting handlebar -- template engine
app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Connect db
db.connect();

// Khoi tao route
route(app);

// Lang nghe 
app.listen(port, () => console.log('Đã bật server'));