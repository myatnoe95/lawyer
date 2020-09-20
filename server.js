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
  res.send({
    express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
  });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

// app.get('*', (request, response) => {
//   console.log('Home page visited!');
//   const filePath = path.resolve(__dirname, './build', 'index.html');
//   fs.readFile(filePath, 'utf8', function (err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     // data = data.replace(/\$OG_TITLE/g, 'A Seamen Club');
//     // data = data.replace(/\$OG_DESCRIPTION/g, 'Job at Sea, Vacancies for Seafarer, Seamen Mobile App, Maritime Training School, Maritime News, Navigation, Marine Engineering, Seaman News, Seaman Club');
//     // result = data.replace(/\$OG_IMAGE/g, '');
//     response.send(result);
//   })
// });



app.listen(port, () => console.log(`Listening on port ${port}`));