/* eslint-disable prefer-template */
const express = require('express');

const app = express();

const { PORT = 3000 } = process.env;

const path = require('path');

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', userRouter);
app.use('/', cardRouter);

app.get('*', (req, res) => {
  res.status(400).send('{ "message": "Requested resource not found" }');
});

app.listen(PORT, () => {
  console.log(`Server started\nApp listening at port ${PORT}`);
});
