function valeur(){
  var age = document.getElementById('age').value;
  //je vérifie que l'age est écrit en chiffres

  if(isNAN(age) == false){
    // je vérifie que l'àge est inférieur a 114 et supérieur à 0    
    if (age <144 && age >0) {
      // vérifié la majorité
      if (age >= 18){
        alert('Vous êtes majeur');
  }else{
    alert('Vous êtes mineur');

  }
}else{
  alert('age non validé');
}
}else{
  alert('en nombre stp');
}
}
