const express = require('express');
const app = express();
const apiRoutes = require('./routes');
const morgan = require('morgan');
const { db } = require('./db');

app.use(morgan('dev'));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Pokedex Web App');
});

app.use((err, req, res, next) => {
  res.status(500).send({
    message: err.message,
    error: err
  });
});

app.get('*', (req, res, next) => {
  res.status(404).send('route not found');
})

db.sync({logging: false})
  .then(() => {
    app.listen(3000, () => {
      console.log('server listening on port 3000');
    });
  })

