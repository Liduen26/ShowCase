'use strict'

require('remedial')
const fs = require("fs");

function recup_texte (id){
    propriete = document.getElementById(id);
    console.log(propriete);
    let texte = [id, propriete];
    contenu = JSON.stringify(texte);
    fs.writeFileSync("texte.json",contenu, "utf-8");
    return texte;
  }
  var url = 'http://127.0.0.1/pi/ZT%20recup/enregistrer_ZT.php';
for (i in tableau)
{
    url += 'arr' + i + '=' + tableau[i] + '&'; // On ajoute les valeurs du tableau
}
url = url.substring(0, url.length - 2); // On retire le "&" de trop
document.location.href = url; // Et on envoie à PHP


{/* <script type="text/javascript">
var a = "Variable JS";
</script>

<?php
echo "<script>document.write(a);</script>" ;
?> */}