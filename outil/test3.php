<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  

    <?php session_start();  ?>    
    <?php $page = $_SESSION['data'];  ?>
    <?php // echo($page);  



    $newphrase = str_replace(`<button id="btn_save" class="bouton style_bouton1" onclick="window.location.href='./test3.php';">sauvegarder</button>`, 'replace', $page);
   

    ?>

    <?php print_r($_SESSION); ?>


    
</body>
</html>