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
<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

  <div class="page">
    <div class="clickEvent">
      <button class="btn1" id="btn_a">text !</button>
      <button class="btn2" id="btn_b">image !</button>
      <button class="btn3" id="btn_c">forme !</button>
      <button class="btn4" id="btn_d">bouton !</button>
    </div>
  </div>
  <?php
  
  echo "<button id='bouton_save'>sauvegarder le texte</button>";
  // if (isset($_POST['texte'])){
  //   $Variable = $_POST['texte'];
  //   echo $Variable;
  var_dump($_POST['texte']);
// }
  
  ?>
  <script src="./script_insert.js" type="text/javascript" ></script>
  <script src="scriptDD.js"></script>
  <script type="text/javascript" src="enregistrer_ZT.js"></script>
</body>
</html>

