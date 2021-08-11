const movie = require("..models/movie");

const bookTickets = async (...props) => {
  const { user, wallet, tickets } = props;
  if (user.id && wallet.id) {
    if (tickets.countPerSession <= 5 && tickets.totalCount <= 15) {
      tickets.count += tickets.countPerSession;
      wallet.payTransaction(user.id, tickets.count, tickets.pricePerTicket);
    }
    if (ticket.countPerSession > 5) {
      console.log("Per session only 5 ticket booking allowed");
      throw new Error("Per session only 5 ticket booking allowed");
    }
    if (tickets.totalCount > 15) {
      console.log("Total count greater than 15");
      throw new Error("Total count greater than 15");
    }
  }
};

module.exports = bookTickets;
