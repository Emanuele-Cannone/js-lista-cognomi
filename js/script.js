//Lista Cognomi
//Chiedere all’utente il cognome
//inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
//stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
//Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova


// dichiara un array con i cognomi
var cognomi = ['Bianchi', 'Rossi' , 'Duzioni' , 'Balsano' , 'Verdi'];

// dichiara le variabili
var cognomeUtente, primaGrande, restoNormale;


// crea un prompt e fai in modo che il risultato venga pushato dentro l'array
var cognomeUtente = prompt('Inserisci il tuo cognome');// in questo modo chiedo all'utente il cognome

// prendi la prima lettera e rendila maiuscola
var primaGrande = cognomeUtente.charAt(0).toUpperCase();
// prendi il resto del cognome e rendilo minuscolo
var restoNormale = cognomeUtente.slice(1).toLowerCase();
// fai la somma tra la prima lettera ed il reso del cognome
cognomeUtente = primaGrande + restoNormale;

cognomi.push(cognomeUtente);// con il ".push" inseirisce il cognome creando un nuoov elemento (che va alla fine)
cognomi.sort();// con il ".sort" ordina alfabeticamente l'array cognomi


// stampa l'ubicazione del cognome
var posizione = cognomi.indexOf(cognomeUtente) + 1;

// prova a vedere se non esplode il mondo
console.log(cognomi, posizione);

// stampa a schermo la lista di nomi
document.getElementById('lista').innerHTML += cognomi;
document.getElementById('posizione-utente').innerHTML += posizione;

