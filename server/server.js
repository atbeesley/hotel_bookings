const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const createRouter = require('./helpers/reate_router.js');



app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('hotel_bookings');
  const bookingsList = db.collection('bookings');
  const bookingsRouter = createRouter(bookingsList);
  app.use('/api/bookings', bookingsRouter);
})
.catch(console.error);
