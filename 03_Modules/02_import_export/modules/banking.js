const withdraw = (balance, amount) => {
  if (balance >= amount) {
    balance -= amount;
    return balance;
  } else {
    console.log("bist arm digga");
  }
};
const deposit = (balance, amount) => {
  balance += amount;
  return balance;
};

export { withdraw, deposit };
