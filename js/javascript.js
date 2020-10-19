var lista=['bianchi', 'rossi','balsano','giorgini' ];

var utente=prompt('quale è il tuo cognome?')

var xxx=lista.keys();
for(var key of xxx){
    console.log(key);
}

lista.push(utente)

lista.sort();

console.log(lista)
alert(lista)

