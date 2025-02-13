/* Il software deve chiedere per 10 volte all'utente di inserire un numero.
Il programma stammpa la somma di tutti i numeri */

let somma = 0

for (let i = 0; i < 10; i++) {
  const numero = Number(prompt('Inserisci un numero:'))
  console.log(numero);
  
  
  somma = somma + numero
}

console.log(somma);



