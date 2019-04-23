//on crée fonction displayInformations que l'on va déclenché au clik pour récupéré et afficher la valeur imput champs de saissie
function displayInformations(){
  var regexName = /^[a-zA-Z ]+$/;
//aprés un fonction toujours mettre un parenthese pour indiquer des parametre
//dans le document html (document) tu recup l'elemet grace a son id  (getElementById (ex: lastneme)
//ici on récupere que la valeur de l'élément grave a .value
// on stock la valeur récupré dans une variable (avec var etc...)
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  //if et else sont des conditions toujours aprés les var
  if(lastname.match(regexName) && firstname.match(regexName) && city.match(regexName)){  // & definition: double espéluette
    alert('nom : ' + lastname + '\nPrénom : ' + firstname + '\nville : ' + city);
  }else {
    alert('ceci n\'est pas autorisé'); //  \ définition caracteerer d'echapement
  }

}
