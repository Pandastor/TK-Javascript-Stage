var nombre = prompt("Joueur 1 : Quel est le nombre à faire deviner ?");
var nombrep = parseInt(nombre, 10);
var guess = prompt("Joueur 2 : Alors, quel est le nombre?");
var guessp = parseInt(guess,10);

while (guessp !== nombrep){
  if (guessp < nombrep){
    alert("C'est plus !");
   guessp = prompt("Try again !");
  }
  
  if (guessp > nombrep){
    alert("C'est moins !");
   guessp = prompt("Essaie encore !");
  }
  if (guessp == nombrep){
  alert("T'as gagné !");
    break
}
}

