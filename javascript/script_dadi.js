// Generatore di un numero randomico tra 1 e 6 per l'utente
const user = Math.floor((6*Math.random())+1);
// Generatore di un numero randomico tra 1 e 6 per il PC
const machine = Math.floor((6*Math.random())+1);

if (user > machine)
{
    document.getElementById('title').innerHTML = "Congratulazioni"
    document.getElementById('message').innerHTML =
    "Hai vinto con " + user + " VS " + machine;
} else if (machine > user)
{
    document.getElementById('title').innerHTML = "Peccato"
    document.getElementById('message').innerHTML =
    "Hai perso con " + user + " VS " + machine;
} else
{
    document.getElementById('title').innerHTML = "Pareggio"
    document.getElementById('message').innerHTML =
    "Il vostro punteggio era identico " + user + " VS " + machine;
}