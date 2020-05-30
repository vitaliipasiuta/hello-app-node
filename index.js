const express = require('express');
const axios = require('axios');
const os = require('os');

const app = express();
const port = 80;

const azURL = 'http://169.254.169.254/latest/meta-data/placement/availability-zone';
const hostname = os.hostname();

app.get('/', (req, res) => {
    axios.get(azURL)
        .then(response => {
            res.send(`Hi from ${hostname} AZ: ${response.data}!`);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
