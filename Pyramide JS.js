function pyramid(n) {
  for(var i=1; i<= n; i++) {

    var espace = ' '.repeat(n-i);
    var etoile = '*'. repeat(i*2 -1)
    console.log(espace + etoile + espace);

  }

}
pyramid(7);
