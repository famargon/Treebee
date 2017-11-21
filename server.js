const express = require('express');
const fs = require('fs');

const SERVER_PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(__dirname + '/public'));
app.listen(SERVER_PORT, ()  => {
  console.log('server is up on port 3000');
});
