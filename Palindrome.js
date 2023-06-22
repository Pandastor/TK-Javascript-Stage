var palindrome = prompt("Quel est le mot à vérifier?")
var longueur = palindrome.length; 
var IsPalindrome = true


for (var i=0; i<longueur/2; i++) {

  if (palindrome[i] !== palindrome[longueur-i-1]) {
   IsPalindrome = false
    console.log("Pas un palindrome");
    break
  }
 
}

if (IsPalindrome === true){
  console.log("C'est un palindrome");
}
