const delivery = new Promise(handleDelivery);

const amIAtHome = false;

function handleDelivery(success, failure) {
  setTimeout(() => {
    amIAtHome ? success("Sabine") : failure("keiner da");
  }, 5000);
}

delivery.then(packageDelivered);

delivery.catch(deliveryFailed);

function packageDelivered(recepient) {
  console.log("Paket ist da!", recepient);
}

function deliveryFailed(reason) {
  console.log("Konnte nicht zugestellt werden :( ", reason);
}

console.log(delivery);
