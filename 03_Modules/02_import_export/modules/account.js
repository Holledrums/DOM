const getRandomInt = (n) => {
  let nInt = "";
  for (let i = 0; i < n; i++) {
    const num = Math.floor(Math.random() * 10);
    nInt += num.toString();
  }
  return nInt;
};

export default () => {
  let iban = "DE";

  iban += getRandomInt(20);

  return iban;
};
