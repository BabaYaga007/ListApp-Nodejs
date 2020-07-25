const express = require('express');
const mysql = require('mysql');

const app = express();

// code to specify the folder thats tores CSS and Image files
app.use(express.static('public'));

// const connection = mysql.createConnection({});


// app.get('/',(req,res)=> {
//     res.render('hello.ejs');
// });

// adding the route for top page
app.get('/',(req,res) => {
    res.render('top.ejs');
});

app.get('/index',(req,res) => {
    res.render('index.ejs');
});

app.listen(3000);
