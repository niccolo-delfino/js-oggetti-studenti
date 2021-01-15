// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.

var studente ={
  nome : 'Niccolo',
  cognome : 'Delfino',
  eta : 30
};

for (var key in studente) {
  console.log(key + ': ' + studente[key]);
}

// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

// var studenti = [
//   {
//     nome : 'Niccolo',
//     cognome : 'Delfino',
//     eta : 30
//   },
//   {
//     nome : 'Miku',
//     cognome : 'Hatsune',
//     eta : 25
//   },
//   {
//     nome : 'Bulma',
//     cognome : 'Brief',
//     eta : 35
//   },
// ];
//
// for (var i = 0; i < studenti.length; i++) {
//   console.log(studenti[i].nome);
//   console.log(studenti[i].cognome);
// }

// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var studenti = [
  {
    nome : 'Niccolo',
    cognome : 'Delfino',
    eta : 30
  },
  {
    nome : 'Miku',
    cognome : 'Hatsune',
    eta : 25
  },
  {
    nome : 'Bulma',
    cognome : 'Brief',
    eta : 35
  },
];

var studenteAggiunto = {
  nome : prompt('Inserisci qui il tuo nome'),
  cognome : prompt('Inserisci qui il tuo cognome'),
  eta : parseInt(prompt('Inserisci qui la tua eta'))
}

studenti.push(studenteAggiunto);

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome);
  console.log(studenti[i].cognome);
}
