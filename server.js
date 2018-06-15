const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use('/rooms/:id', express.static(path.join(__dirname, './public')));

app.listen(port, () => {
  console.log('Server running on port ', port);
});