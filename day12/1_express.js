const express = require('express');
const path = require('path');  
const app = express(); //create new app on node
const port = 3000; //we will serve the content on localhost:3000
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
 
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname + '/home.html'));
});
 
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/contact.html'));
});
 
 
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname + '/wallpapersden.com_winter-trees-snow-season_5472x3606.jpg'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});