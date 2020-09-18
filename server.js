const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const axios = require("axios");
// const ATOLAS_SERVICE_API_URL = 'https://api.aseamenclub.com/'
const fs = require('fs');

app.use(express.static(path.resolve(__dirname, './build')));
// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });


  
app.listen(port, () => console.log(`Listening on port ${port}`));