const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(morgan('tiny'))

// user routes

// using routes

// get request
app.get('/', (req,res) => {
    res.send('Welcome to homepage')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running and listening to port: http://localhost:${port}...`)
})