const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json);
app.send('hello from express server');
app.listen(5000);
