<?php
header( 'content-type: text/html; charset=utf-8' );

// ouvrir le bon site
try
{
	$db = new PDO('mysql:host=localhost;dbname=showcase;charset=utf8', 'root', '');
}
catch (Exception $e)
{
die('Erreur : ' . $e->getMessage());
}

foreach($_POST as $key=>$value){
    if( $key !== 'pseudo' || $key !== 'id'){
        $nom_site = $key;
    }
    else{
        $nom_site = 'default';
    }
}


$recup_site = 'SELECT Contenu FROM Contenu WHERE id_page = (SELECT ID FROM page WHERE id_site = (SELECT id FROM site WHERE nom = :nom));';

$prepare_site = $db->prepare($recup_site);
$prepare_site->execute([
    'nom' => $nom_site,
]);
$site = $prepare_site->fetchAll();
$contenu = $site[0][0];

?>
<html>
<head>
    <meta charset="UTF-8">
    <title>ShowCase</title>

    <!-- Icones -->
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>

    <!-- CSS -->
    <link rel="stylesheet" href="./Css/style_outil.css">
    <link rel="stylesheet" href="./Css/styleDD.css">
    <link rel="stylesheet" href="./Css/style_text.css">
    <link rel="stylesheet" href="./Css/style_section.css">
    <link rel="stylesheet" href="./Css/style_insert.css">

    <!-- FavIcon -->
    <link rel="icon" href="./srcs/icontop.png">
    
    <!-- jQuery -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</head>
<body>
    <header>
        <img class="logo" src="./srcs/logo_showcase.png" alt="logo" draggable="false">
        <div id="header_droite">
            <button id="btn_save" class="bouton style_bouton1">Sauvegarder</button>
            <button id="btn_style" class="bouton style_bouton1">Bouton</button>
            <div id="div_account_menu">
                <i id="account_icon" class='bx bxs-user-account' class="icon"></i>
                <ul class="top_menu">
                    <li class="sous_li"><a href="#">Compte</a></li>
                    <li class="sous_li"><a href="#">Sites</a></li>
                    <li class="sous_li"><a href="#">Déconnexion</a></li>
                </ul>
            </div>
        </div>
    </header>

    <div id="sidebar_contenu">
            <div id="sidebar">
            <ul id="side_list">

                <li class="side_li">
                    <i class='bx bx-grid-alt elements-icon'></i>
                    <ul class="side_menu">
                        <h4 class="titre_side_menu">Elements</h4>

                        <li class="sous_li"><div class="btn1" id="btn_a"><i class='bx bx-text'></i><br>Texte</div></li>
                        <li class="sous_li"><input type="file" id="btn_b_2" accept="image/*" onchange="loadFile(event)">
                            <img classe="img" id="image" name="img" />
                            <script>
                            var loadFile = function(event) {
                                var output = document.getElementById('image');
                                console.log(output);
                                output.src = URL.createObjectURL(event.target.files[0]);
                            };
                            </script>
                            <i class='bx bx-image'></i><br>Image</li>
                        <li class="sous_li"><div class="btn3" id="btn_c"><i class='bx bx-checkbox'></i><br>Formes</div></li>
                        <li class="sous_li"><div class="btn4" id="btn_d"><i class='bx bx-clipboard'></i><br>Bouton</div></li> 

                    </ul>
                </li>

                <li class="side_li">
                    <i class='bx bx-paint elements-icon'></i>
                    <ul class="side_menu">
                        <h4 class="titre_side_menu">Style</h4>
                        <li class="sous_li"><a href="#">Couleurs</a></li>
                        <li class="sous_li"><a href="#">Photo</a></li>
                        <li class="sous_li" id="style_bouton"><a href="#">Bouton</a>
                            <ul class="sous_ul">
                                <li class="li_3"><button class="style_bouton1" id="btn_style1">bouton</button></li>
                                <li class="li_3"><button class="style_bouton2" id="btn_style2">bouton</button></li>
                                <li class="li_3"><button class="style_bouton3" id="btn_style3">bouton</button></li>
                            </ul>
                        </li>
                        <li class="sous_li"><a href="#">Formulaire</a></li>
                    </ul>
                </li>

            </ul>
        </div>

        <div class="content">
            <div class="toolbar">
                <div class="tools">
                    <div class="textEdit">
                        <select class="selectFontSize" title="Taille de Police">
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="16">16</option>
                            <option value="18">18</option>
                            <option value="20">20</option>
                            <option value="24">24</option>
                            <option value="28">28</option>
                            <option value="32">32</option>
                        </select>
                        <span class="separate"></span>

                        <select class="selectPolice" title="Police">
                            <option style="font-family: 'Arial', cursive;" value="Arial">Arial</option>
                            <option style="font-family: 'Bebas Neue', cursive;" value="Bebas Neue">Bebas Neue</option>
                            <option style="font-family: 'Bodoni Moda', serif;" value="Bodoni Moda">Bodoni Moda</option>
                            <option style="font-family: 'EB Garamond', serif;" value="EB Garamond">EB Garamond</option>
                            <option style="font-family: 'Comic Sans MS', serif;" value="Comic Sans MS">Comic Sans MS</option>
                            <option style="font-family: 'Josefin Sans', sans-serif;" value="Josefin Sans">Josefin Sans</option>
                            <option style="font-family: 'Libre Baskerville', serif;" value="Libre Baskerville">Libre Baskerville</option>
                            <option style="font-family: 'Maven Pro', sans-serif;" value="Maven Pro">Maven Pro</option>
                            <option style="font-family: 'Montserrat', sans-serif;" value="Montserrat">Montserrat</option>
                            <option style="font-family: 'Noto Serif', serif;" value="Noto Serif">Noto Serif</option>
                            <option style="font-family: 'Roboto', sans-serif;" value="Roboto">Roboto</option>
                            <option style="font-family: 'Ubuntu', sans-serif;" value="Ubuntu">Ubuntu</option>
                            <option style="font-family: 'Work Sans', sans-serif;" value="Work Sans">Work Sans</option>
                        </select>
                        <span class="separate"></span>

                        A<input type="color" class="i-color" title="Couleur du texte">
                        <span class="separate"></span>

                        <select class="selectAlignText" style="font-family:Arial, FontAwesome;" title="Alignement du texte">
                            <option value="a-left">Gauche</option>
                            <option value="a-center">Centre</option>
                            <option value="a-right">Droite</option>
                            <option value="a-justify">Justifié</option>
                        </select>
                    </div>                  
                </div>

                <div class="moreEdit"> 
                    <div class="separate"></div>
                    <img title="Avancer" src="./srcs/fleche-haut-gauche.png" class="icones forward-btn">
                    <img title="Reculer" src="./srcs/fleche-bas-droite.png" class="icones backward-btn">
                    <img title="Supprimer" src="./srcs/poubelle.png" class="icones delete-btn">
                </div>
            
            </div>
                <div class= "page" id = "page">
                <?php        
                echo ($contenu);
                var_dump($_POST);
                ?>
                
                </div>
            </div>
    <script src="./Scripts/script_insert.js"></script>
    <script src="./Scripts/scriptDD.js"></script>
    <script src="./Scripts/script_text.js"></script>
    <script src="./Scripts/script_sections.js"></script>
    <script src="./Scripts/script_recuperation2.js"></script>
    <script src="./Scripts/script_style_bouton.js"></script>
    
</body>
</html>

