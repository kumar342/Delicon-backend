const express = require("express");
const routes = express.Router();
const {
  totalReservations,
  addReservation,
  totalReservationsById,
  reservationDeleteById,
  reservationUpdateById,
} = require("./controllers/index");
const { login, register, users } = require("./controllers/user");

routes.get("/", users);
routes.post("/login", login);
routes.post("/register", register);
routes.get("/totalReservations", totalReservations);
routes.get("/totalReservations/:Id", totalReservationsById);
routes.post("/add", addReservation);
routes.delete("/totalReservations/:Id", reservationDeleteById);
routes.put("/totalReservations/:Id", reservationUpdateById);

module.exports = routes;
