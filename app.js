var express = require('express');
var todoController = require('./controllers/todoController')
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);
app.listen(3000);
console.log('you are listening to port 3000');
