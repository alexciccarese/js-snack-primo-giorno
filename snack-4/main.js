/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */


let num = []

for (let i = 0; i < 6; i++) {
  const numero = Number(prompt('Inserisci un numero: es.1'))

  if (numero % 2 !== 0) {
    console.log(numero);
    num.push(numero)

  } 
    
    

}
console.log(num);


