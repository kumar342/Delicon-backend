const ReservationRoom = require("../model/model");

const totalReservations = (req, res) => {
  ReservationRoom.find()
    .then((TotalReservations) => {
      res.json(TotalReservations);
    })
    .catch((err) => {
      res.json(err);
    });
};

const addReservation = (req, res) => {
  console.log("value", req.body);
  ReservationRoom.create({
    name: req.body.name,
    email: req.body.email,
    mobile_number: req.body.mobile_number,
    hotel_name: req.body.hotel_name,
    noOfRoomsBooked: req.body.noOfRoomsBooked,
    noOfRoomsAvailable: req.body.noOfRoomsAvailable,
  })
    .then((addReservation) => {
      res.json(addReservation);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  totalReservations,
  addReservation,
};
