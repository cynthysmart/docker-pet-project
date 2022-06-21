const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const router = require('./router');
const app = express();

const http = require('http');
const { application } = require('express');


const port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

//load static assets
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/route', router);


//home route
app.get('/', (req, res) => {
  res.render('base', {title: "Responsive PEPSI Landing Page"});
}) 

app.listen(port, () => {console.log("Listening to the server on http://locahost:3000")});


app.listen(8000, () => console.log("Listening on port 8000")); 
