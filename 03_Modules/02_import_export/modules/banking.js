const withdraw = (balance, amount) => {
  if (balance >= amount) {
    balance -= amount;
    return balance;
  } else {
    console.log("bist arm digga");
  }
};

export { withdraw };
