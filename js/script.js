//Lista Cognomi
//Chiedere all’utente il cognome
//inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
//stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
//Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova


// dichiara un array con i cognomi
var cognomi = ['Bianchi', 'Rossi' , 'Duzioni' , 'Balsano' , 'Verdi'];

// crea un prompt e fai in modo che il risultato venga pushato dentro l'array
var cognomeUtente = prompt('Inserisci il tuo cognome');// in questo modo chiedo all'utente il cognome
cognomi.push(cognomeUtente);// con il ".push" inseirisce il cognome creando un nuoov elemento (che va alla fine)
var elenco = cognomi.toUpperCase();
elenco.sort();// con il ".sort" ordina alfabeticamente l'array cognomi

// prova a vedere se non esplode il mondo
console.log(elenco);





