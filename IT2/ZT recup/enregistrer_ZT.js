'use strict'


let bouton_sauvegarder = document.getElementById("bouton_save");
let texte;
// $.ajax({
//   type: "POST",
//   url: "enregistrer_ZT.php",
//   data: {texte: texte}
// });

bouton_sauvegarder.onclick = function() {texte = recup_texte(1); console.log(texte);};
function recup_texte(id){
  let propriete = document.getElementById(id);
  console.log(propriete);
  let texte = [id, propriete];
  texte = texte.join(',');
  console.log(texte);
  $.post('enregistrer_ZT.php', {texte: texte});
  return 0;
}

// <?php
// echo "<script>document.write(a);</script>" ;
// ?> }