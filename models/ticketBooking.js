const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ticketSchema = new Schema({
  countPerSession: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  totalCount: {
    type: Number,
    required: true,
    min: 0,
    max: 15,
  },
  pricePerTicket: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  wallet: {
    type: Schema.Types.ObjectId,
    ref: "wallet",
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: "movie",
  },
});

module.exports = mongoose.model("TicketBooking", ticketSchema);
