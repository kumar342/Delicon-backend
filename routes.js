const express = require("express");
const routes = express.Router();
const { totalReservations, addReservation } = require("./controllers/index");

routes.get("/", totalReservations);
routes.post("/add", addReservation);

module.exports = routes;
