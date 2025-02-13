/* L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga */

const word1 = prompt('Inserisci prima parola')
const word2 = prompt('Inserisci seconda parola')

if (word1.length > word2.length) {
  console.log(`La parola ${word2} è più lunga di ${word1}`);

} else if (word1.length < word2.length) {
  console.log(`La parola ${word1} è più corta di ${word2}`);

} else {
  console.log(`Le parole ${word1} e ${word2} hanno la stessa lunghezza`);
  
}

  