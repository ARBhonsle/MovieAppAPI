const movie = require("..models/movie");

const bookTickets = async (...props) => {
  const { user, wallet, tickets } = props;
  if (user.id && wallet.id) {
    if (tickets.countPerSession < 5 && tickets.totalCount < 15) {
      tickets.count += tickets.countPerSession;
    } else {
    }
  }
};

module.exports = bookTickets;
