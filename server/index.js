require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const app = express();

app.use(bodyParser.json());
app.use(cors());


const PORT = 4200;
app.listen(PORT, console.log(`Listening on port ${PORT}`));