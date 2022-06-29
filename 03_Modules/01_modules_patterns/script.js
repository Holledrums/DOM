const bankaccount = ((balance) => {
  const checkbalance = (currentBalance, currentAamount) => {
    if (currentBalance >= currentAamount) {
      return true;
    } else false;
  };

  const withdraw = (amount) => {
    const currentBalance = checkbalance(balance, amount);
    if (currentBalance == true) {
      balance -= amount;
      return balance;
    } else {
      console.log("bist arm digga");
    }
  };
  return {
    // das gleiche wie withdraw: withdraw
    withdraw,
    checkbalance,
  };
})(300);
