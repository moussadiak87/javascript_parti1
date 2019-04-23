function calcul(){
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  //on vérifie que la saisie utilisateur soient bien des nombre
  if(isNaN(shoeSize) == false && isNaN(yearOfBirth) == false){
    // on autorise les pointure entre 34 et 52 et l'année entre 1900 et 2019 <= def: inférieur ou égale >= supérieur ou égale != différent
    if((shoeSize >= 34 && shoeSize <= 52) && (yearOfBirth >= 1900 && yearOfBirth <= 2019)){
      var result = shoeSize * 2;
      result += 5; // result = result + 5;
      result *= 50;
      result -= yearOfBirth;
      result += 1766;

      alert(result);
    }else{
      alert('La pointure et la date de naissance ne sont pas correctes');
    }
  }else{
    alert('il faut saisir des chiffres');
  }
}
