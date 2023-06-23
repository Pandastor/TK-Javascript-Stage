var nombre = prompt("Joueur 1 : Quel est le nombre à faire deviner ?");
var nombrep = parseInt(nombre, 10);
var guess = prompt("Joueur 2 : Quel est le nombre à deviner alors Potter?");
var guessp = parseInt(guess,10);

while (guessp !== nombrep){
  if (guessp < nombrep){
    alert("C'est plus !");
   guessp = prompt("Guess again !");
  }
  
  if (guessp > nombrep){
    alert("C'est moins !");
   guessp = prompt("Guess again naze !");
  }
  
}

if (guessp === nombrep){
  alert("T'as gagné !");
}
