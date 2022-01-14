'use strict'


let bouton_sauvegarder = document.getElementById("bouton_save");
let texte;

bouton_sauvegarder.onclick = function() {texte = recup_texte(1); console.log(texte);};
function recup_texte(id){
  let propriete = document.getElementById(id);
  console.log(propriete);
  let texte = [id, propriete];
  texte = texte.join(',');
  console.log(texte);
  return 0;
}

let request =
      $.ajax({
        type: "POST", 	        //Méthode à employer POST ou GET 
        url: "enregistrer_ZT2.php",  //Cible du script coté serveur à appeler 
        beforeSend: function () {
          //Code à appeler avant l'appel ajax en lui même
        }
      });
      request.done(function (output) {
        //Code à jouer en cas d'éxécution sans erreur du script du PHP
      });
      request.fail(function (error) {
	   //Code à jouer en cas d'éxécution en erreur du script du PHP ou de ressource introuvable
      });
      request.always(function () {
       //Code à jouer après done OU fail quoi qu'il arrive
      });

      function Set_Form(){
        try{
          let Datas = new FormData(); //Initialise l'objet FormData dans la variable Datas de portée limitée à la fonction Set_Form.
      
          //Assigniation des différents types de données
          Datas.append("id", 123); // 123 est implicitement converti en chaîne "123"
          Datas.append("login", "JohnDoe");
        }
        catch(e){
          alert(e);
        }
      }