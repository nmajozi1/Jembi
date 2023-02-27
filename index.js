const config = require('./config/config.json');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const matchingRoute = require('./src/routes/patient-matching.route');

app.use(cors());
app.use(bodyParser.json());

app.use(matchingRoute);

app.listen(config.port, () => console.log(`Listening on port: ${config.port}`));