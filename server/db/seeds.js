use bookings;
db.dropDatabase.();

db.bookings.insertMany([
  {
    name: "Ross",
    email: "Ross@gmail.com",
    checkedIn: true
  },
  {
    name: "Charles",
    email: "Charles@hotmail.co.uk",
    checkedIn: false
  },
  {
    name: "Iona",
    email: "Iona@yahoo.co.uk",
    checkedIn: true
  }
]);
