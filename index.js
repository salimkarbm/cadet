const router  = require('./src/routes/index');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const appPath = require('app-root-path');
const mongoose = require('mongoose');

// import express
const express = require('express');


dotenv.config({ path: `${appPath}/.env` });
// Initialize express
const app = express();

app.use(cors());

// Port
const PORT  = process.env.PORT || 3000;
const address = `0.0.0.0:${PORT}`;
app.set('view engine', 'ejs');
app.set('views', './src/views');



let DB;
if (process.env.NODE_ENV === 'development') {
  DB = process.env.LOCAL_DB;
} else if (process.env.NODE_ENV === 'production') {
  DB = process.env.DATABASE;
}
mongoose
  .connect(DB, {})
  .then(() => {
    console.log('db connection established');
  })
  .catch(() => {
    console.log('error connecting');
  });

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Define index route
app.get('/', async (req, res) => {
    res.contentType('json');
    res.json({ status: 'ok', message: 'Welcome to sirlim' });
});

// Routes
app.use('/api/v1', router);

app.all('*', (req, res, next) => {
     res.status(404).send(`can't find ${req.originalUrl} on server!`);
});


// Listen for server connections
const server = app.listen(PORT, () =>
    console.log(`server running on ${address}`)
);

module.exports = server;