const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Scott',
    likes: ['Cycling','Travel','Photography']
  });
});

app.get('/about', (req,res) => {
  res.send('About Page');
});

app.get('/bad', (req,res) =>{
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.get('/404', (req,res) =>{
  res.send('<h1>Page Not Found</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
