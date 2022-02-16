const express = require('express');
const app     = express();
const port    = process.env.PORT|| 7100;

app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('index');
});


// any page dose not exist
app.use(function(req,res) {
    res.status(404).render('error-404');
});

app.listen(port);
console.log('Server is listening on port ' + port);