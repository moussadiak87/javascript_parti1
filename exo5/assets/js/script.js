// déclaration de la fontion
function multiplyReal(){
  var firstNumber = document.getElementById('firstNumber').value; //type string
  var secondNumber = document.getElementById('secondNumber').value; // type string
  //isNan definition: is no a number
  // ! definition // NOTE:
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    //on se sert du modulo pour déterminer si le nombre est a virgule. si le reste est différent de 0 alors c'est un nombre a virgule 
    if (number(firstNumber) % 1 !== 0 && Number(secondNumber) % 1 !==0) {
      firstNumberinteger = Match.trunc(firstNumber);
      result = firstNumberinteger * secondNumber ;
      alert(result);
    } else {
      alert('ce sont des nombre entiers');
   }
 } else {
      alert('attention ce ne sont pas des nombres');
 }
}
