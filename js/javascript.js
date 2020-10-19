var lista=['bianchi', 'rossi','balsano','giorgini' ];

var utente=prompt('quale è il tuo cognome?')
lista.push(utente)

var xxx=lista.keys();
for(var key of xxx){
    console.log(key);
}


lista.sort();
alert(lista)

console.log(lista)

