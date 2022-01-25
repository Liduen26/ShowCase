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

// ouvre le site
if($nom_site != 'Template')
{
    $recup_site = 'SELECT Contenu FROM Contenu WHERE id_page = (SELECT ID FROM page WHERE id_site = (SELECT id FROM site WHERE nom = :nom));';

    $prepare_site = $db->prepare($recup_site);
    $prepare_site->execute([
        'nom' => $nom_site,
    ]);
    $site = $prepare_site->fetchAll();
    $contenu = $site[0][0];
}
else{
    $recup_site = 'SELECT contenu FROM contenu WHERE ID = 0';
    $prepare_site = $db->prepare($recup_site);
    $prepare_site->execute();
    $site = $prepare_site->fetchAll();
    $contenu =$site[0][0];
}

// récupération des données de l'utilisateur
$recup_donne = 'SELECT * FROM user WHERE id = :id';
$prepare_donne = $db->prepare($recup_donne);
$prepare_donne->execute([
    "id" => $_POST["id"],
]);
$mdp_user_list = $prepare_donne->fetchAll();

$mdp_user = $mdp_user_list[0]['password'];
$pseudo = $mdp_user_list[0]['pseudo'];

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
            <div id="div_account_menu">
                <i id="account_icon" class='bx bxs-user-account' class="icon"></i>
                <ul class="top_menu">
                    <form action ="liste_site.php" method ="post">
                        <div> 
                            <label for="name"></label>
                            <input type="hidden" id="name" name="pseudo" value = <?php echo($pseudo) ?>>
                        </div>
                        <div> 
                            <label for="password"></label>
                            <input type="hidden" id="mdp_user" name="mdp_user" value = <?php echo($mdp_user) ?>>
                        </div>
                        <div classe ="sous_li">
                            <button type ="submit" name = "compte"> Sites </button>
                        </div>
                    </form>
                    <form action ='Connection.php' method ='post'>
                        <div> 
                            <label for="name"></label>
                            <input type="hidden" id="name" name="pseudo" value = <?php echo($pseudo) ?>>
                        </div>
                        <div> 
                            <label for="password"></label>
                            <input type="hidden" id="mdp_user" name="mdp_user" value = <?php echo($mdp_user) ?>>
                        </div>
                        <div classe ="sous_li">
                            <button type ="submit" name = "compte"> Compte </button>
                        </div>
                    </form>
                    <form action ='bienvenue.html' method ='post'>
                        <div> 
                            <label for="name"></label>
                            <input type="hidden" id="name" name="pseudo" value = <?php echo($pseudo) ?>>
                        </div>
                        <div> 
                            <label for="password"></label>
                            <input type="hidden" id="mdp_user" name="mdp_user" value = <?php echo($mdp_user) ?>>
                        </div>
                        <div classe ="sous_li">
                            <button type ="submit" name = "compte"> Déconnexion </button>
                        </div>
                    </form>
                    <!--<li class="sous_li"><a href="#">Compte</a></li>
                    <li class="sous_li"><a href="#">Sites</a></li>
                    <li class="sous_li"><a href="#">Déconnexion</a></li> -->
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

                        <li class="sous_li addElems addTexte" value="text">
                            <i class='bx bx-text'></i>Texte
                        </li>

                        <label class="sous_li addElems addImage" value="image">
                            <input type="file" class="hide" accept="image/*" onchange="loadFile(event)">
                            <i class='bx bx-image'></i>Image
                        </label>

                        <li class="sous_li addElems addFormes" value="forme">
                            <i class='bx bx-checkbox'></i>Formes
                            <div class="formesChoice hide" id="menuFormes">

                                <div class="formesListed">
                                    <div class="ligne"></div>
                                </div>
                                <div class="formesListed" style="height: 50px;">
                                    <div class="rectangle"></div>
                                </div>
                                <div class="formesListed">
                                    <div class="trapeze"></div>
                                </div>

                                <div class="formesListed menu-triangle">
                                    <div class="triangle-haut"></div>

                                    <div class="formesChoice hide" id="menuTriangle">
                                        <div class="formesListed">
                                            <div class="triangle-haut triangles"></div>
                                        </div>
                                        <div class="formesListed">
                                            <div class="triangle-bas triangles"></div>
                                        </div>
                                        <div class="formesListed">
                                            <div class="triangle-gauche triangles"></div>
                                        </div>
                                        <div class="formesListed">
                                            <div class="triangle-droit triangles"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </li>
                        <li class="sous_li addElems addBtns" value="button">
                            <i class='bx bx-clipboard'></i>Bouton
                        </li>
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
                            <option style="font-family: 'Comic Sans MS', serif;" value="Comic Sans MS">Comic Sans MS
                            </option>
                            <option style="font-family: 'Josefin Sans', sans-serif;" value="Josefin Sans">Josefin Sans
                            </option>
                            <option style="font-family: 'Libre Baskerville', serif;" value="Libre Baskerville">Libre
                                Baskerville</option>
                            <option style="font-family: 'Maven Pro', sans-serif;" value="Maven Pro">Maven Pro</option>
                            <option style="font-family: 'Montserrat', sans-serif;" value="Montserrat">Montserrat
                            </option>
                            <option style="font-family: 'Noto Serif', serif;" value="Noto Serif">Noto Serif</option>
                            <option style="font-family: 'Roboto', sans-serif;" value="Roboto">Roboto</option>
                            <option style="font-family: 'Ubuntu', sans-serif;" value="Ubuntu">Ubuntu</option>
                            <option style="font-family: 'Work Sans', sans-serif;" value="Work Sans">Work Sans</option>
                        </select>
                        <span class="separate"></span>

                        A<input type="color" class="i-color" title="Couleur du texte">
                        <span class="separate"></span>

                        <select class="selectAlignText" style="font-family:Arial, FontAwesome;"
                            title="Alignement du texte">
                            <option value="a-left">Gauche</option>
                            <option value="a-center">Centre</option>
                            <option value="a-right">Droite</option>
                            <option value="a-justify">Justifié</option>
                        </select>
                    </div>
                </div>

                <div class="moreEdit">
                    <div class="separate"></div>
                    <label class="icones paintBack">
                        <i class='bx bxs-brush' title="Couleur de fond"></i>
                        <input type="color" class="hide colorBack">
                    </label>
                    <img title="Avancer" src="./srcs/fleche-haut-gauche.png" class="icones forward-btn">
                    <img title="Reculer" src="./srcs/fleche-bas-droite.png" class="icones backward-btn">
                    <img title="Supprimer" src="./srcs/poubelle.png" class="icones delete-btn">
                </div>

            </div>
            <div class="page" id="page">
                <?php echo($contenu); ?>
            </div>
        </div>
    </div>

    <div class="choiceSectionContainer">
        <div class="choiceSection">
            <label class="labelCoiceSect">Choisissez la section que vous souhaitez ajouter</label>
            <div class="listSection">
                <div class="sectionListing" value="corps1" height="1400">
                    <img class="imgListSection" src="./Templates/capture_corps1.png" alt="capt_corps1">
                    <label class="titreListSection">Corps 1</label>
                </div>
                <div class="sectionListing" value="corps2" heigth="900">
                    <img class="imgListSection" src="./Templates/capture_corps2.png" alt="capt_corps2">
                    <label class="titreListSection">Corps 2</label>
                </div>
                <div class="sectionListing" value="foot1" height="150">
                    <img class="imgListSection" src="./Templates/capture_foot1.png" alt="capt_foot1">
                    <label class="titreListSection">Foot 1</label>
                </div>
            </div>
            <img class="closeListSection" src="./srcs/annuler.png">
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

