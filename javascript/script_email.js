let listaEmails = ["utente0@boolean.it", "utente1@boolean.it", "utente2@boolean.it", "utente3@boolean.it",
                    "untete4@boolean.it", "utente5@boolean.it", "utente6@boolean.it"];

let user = prompt("Inserisci la tua email per effettuare l'accesso");
let login = false;

console.log (listaEmails);
console.log (login);
console.log (user);


for (i = 0; i < listaEmails.length ; i++)
{
    console.log ("Nel ciclo, valore dell'array_" + listaEmails[i]);
    console.log ("Nel ciclo, valore dell'indice_" + i);
    if (listaEmails[i] == user)
    {
            login = true;
            break;
    }
}

console.log("Valore dell'indice uscito dal ciclo for _" + i);

if (login)
{
    document.getElementById('title').innerHTML = listaEmails[i];
    document.getElementById('message').innerHTML = 
    "La sua email è stata riconosciuta";
}
else
{
    document.getElementById('message').innerHTML =
    "Non è un utente registrato, per continuare effettuare prima la registrazione";
}