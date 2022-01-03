<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="stylesheet" href="style_insert.css">
  <link rel="stylesheet" href="styleDD.css">  

  <title>InsertZT</title>

</head>

<body>
  <div class="page">
    <div class="clickEvent">
      <button class="btn1" id="btn_a">text !</button>
      <button class="btn2" id="btn_b">image !</button>
      <button class="btn3" id="btn_c">forme !</button>
      <button class="btn4" id="btn_d">bouton !</button>
    </div>
  </div>
  <button onclick="recup_texte(1)">Try it</button>
  <script type="text/javascript">
    let texte;
    function recup_texte (id){
      // texte = document.getElementById(id);
      texte = document.getElementById(id);
      console.log(texte);
      return texte;
    }
  </script>
  <?php
  $variable_php = '<script type="text/javascript">document.write(recup_texte(1);</script>';
  echo $variable_php;
  ?>
  <script src="./script_insert.js" type="text/javascript" ></script>
  <script src="scriptDD.js"></script>
</body>
</html>

