import * as banking from "./banking.js"; // mit '* as modulname' importieren wir alle funktionen in ein modul
import { greetUser } from "./user.js";
import getIban from "./account.js";

console.log(greetUser("Holger"));
console.log(getIban());
console.log(banking.deposit(2300, 500));
