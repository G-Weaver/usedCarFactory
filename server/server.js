const express = require('express');
const app = express();
const PORT = 3000;

const apiRouter = require('./routes/api');

// handle parsing request body
app.use(express.json());


// route handler for api, sends to apiRouter
app.use('/api', apiRouter);

// catch-all route handler for requests to an unknown route
app.use((req, res) => res.status(404).send('You really screwed up this time...'))

// telling the app which port to listen on
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

module.exports = app;