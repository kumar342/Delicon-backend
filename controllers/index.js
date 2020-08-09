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

const totalReservationsById = (req, res) => {
  const reservationId = ReservationRoom.findById(req.params.Id)
    .then((reservationId) => {
      res.json(reservationId);
    })
    .catch((err) => {
      res.json(err);
    });
};

const reservationDeleteById = (req, res) => {
  const deleteReservation = ReservationRoom.remove({ _id: req.params.Id })
    .then((deleteReservation) => {
      res.json(deleteReservation);
    })
    .catch((err) => {
      res.json(err);
    });
};

const reservationUpdateById = (req, res) => {
  const updateReservation = ReservationRoom.updateOne(
    { _id: req.params.Id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        mobile_number: req.body.mobile_number,
        hotel_name: req.body.hotel_name,
        noOfRoomsBooked: req.body.noOfRoomsBooked,
        noOfRoomsAvailable: req.body.noOfRoomsAvailable,
      },
    }
  )
    .then((updateReservation) => {
      res.json(updateReservation);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  totalReservations,
  addReservation,
  totalReservationsById,
  reservationDeleteById,
  reservationUpdateById,
};
