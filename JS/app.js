const date = (document.getElementById(
    "date"
  ).innerHTML = new Date().getFullYear());

const bookings = [];

const createBooking = function(
  flightNumber, 
  numPassengers = 1, 
  price = 199* numPassengers){

    const booking = {
      flightNumber,
      numPassengers,
      price
    };

    bookings.push(booking);
    console.log(bookings);
}

createBooking('Melo-123');
createBooking('Melo-123',3);
createBooking('Melo-123', 2, 800);
createBooking('Melo-123', undefined, 1000);

