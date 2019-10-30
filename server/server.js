const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const createRouter = require('./helpers/create_router');


app.use(cors())
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    console.log(err);
  }
  const db = client.db('bookings');
  const bookingsList = db.collection('bookings');
  const bookingsRouter = createRouter(bookingsList);
  app.use('/api/bookings', bookingsRouter);

  app.listen(3000, function(){

    console.log(`app listening on port ${this.address().port}`);
  })
})
