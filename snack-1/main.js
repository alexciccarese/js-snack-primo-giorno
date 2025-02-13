/* L'utente inserisce due numeri in successione con due prompt.
Il software stampa il maggiore */

let num1 = prompt ('Inserisci primo numero')
let num2 = prompt ('Inserisci secondo numero')

if (num1 > num2) {
  console.log(`Il numero maggiore è ${num1}`);
  
} else if (num1 < num2){
  console.log(`Il numero maggiore è ${num2}`);

} else {
  console.log(`I numeri sono uguali`);
}

