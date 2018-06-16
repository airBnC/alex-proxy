const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use('/rooms/:id', express.static(path.join(__dirname, './public')));

// Calendar
// May have to manually add cors npm module to the Calendar module if it isn't already installed
app.post('/rooms', (req, res) => {
  // Note: 307 informs the app's server that it's a post.  Without 307, it'll redirect as a get.
  res.redirect(307, 'http://localhost:3001/rooms');
});

// Bookings
app.get('/api/rooms/:id/bookingInfo', (req, res) => {
  const id = req.params.id;
  res.redirect(`http://localhost:3002/api/rooms/${id}/bookingInfo`);
});

// Property Info
app.get('/api/rooms/:id/general', (req, res) => {
  const id = req.params.id;
  res.redirect(`http://localhost:3003/api/rooms/${id}/general`);
});

app.get('/api/rooms/:id/amenities', (req, res) => {
  const id = req.params.id;
  res.redirect(`http://localhost:3003/api/rooms/${id}/amenities`);
});

// Reviews
app.get('/api/listings/:id/reviews', (req, res) => {
  const id = req.params.id;
  res.redirect(`http://localhost:3004/api/listings/${id}/reviews`);
});

app.get('/api/listings/:id/averagestars', (req, res) => {
  const id = req.params.id;
  res.redirect(`http://localhost:3004/api/listings/${id}/averagestars`);
});

app.listen(port, () => {
  console.log('Server running on port ', port);
});