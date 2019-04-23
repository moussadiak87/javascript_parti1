function number() {
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
//isNaN pour vérifier s'il ne s'agit pas d'un nombre.
//!isNaN = false isNaN = true
  if(isNaN(firstNumber) == false && !isNaN(secondNumber)){
    if(secondNumber != 0){
// != différent
    var result = firstNumber%secondNumber
// % modulo.
    alert(result)
  }else{
    alert('mettre un chiffre différent de 0.');
  }
}
  else{
    alert('mettre un chiffre à partir de 1 svp.');

  }
}
