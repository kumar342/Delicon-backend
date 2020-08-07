const mongoose = require("mongoose");
const ReservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: Number,
  },
  hotel_name: {
    type: String,
  },
  noOfRoomsBooked: {
    type: Number,
  },
  noOfRoomsAvailable: {
    type: Number,
  },
});
const ReservationRoom = mongoose.model("reservation", ReservationSchema);
module.exports = ReservationRoom;
