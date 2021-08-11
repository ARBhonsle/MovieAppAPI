const wallet = require("../models/wallet");

const addMoney = async (...props) => {
  const { transactionAmount, user } = props;
  return {
    amount: money + transactionAmount,
    id: user.id,
  };
};

const payTransaction = async (...props) => {
  const { transaction } = props;
  if (transaction.pricePerTicket * transaction.count < money) {
    console.log("Transaction running");
  }
  if (money < 100) {
    console.log("Add money");
    throw new Error("Money less than 100");
  }
  return {
    amount: money,
    id: user.id,
  };
};

module.export = { addMoney, payTransaction };
