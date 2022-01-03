<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>ShowCase</title>
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="./DragDrop/styleDD.css">
    <link rel="stylesheet" href="./DragDrop/style_text.css">

</head>
<body>
    <div id="outil">
        <header>
                <img class="logo" src="logo.svg" alt="logo" draggable="false">
            <div id="div_account_menu">
                <i id="account_icon" class='bx bxs-user-account' class="icon"></i>
                <ul class="top_menu">
                    <li class="sous_li"><a href="#">Compte</a></li>
                    <li class="sous_li"><a href="#">Sites</a></li>
                    <li class="sous_li"><a href="#">log out</a></li>
                </ul>
            </div>
        </header>
        <div id="sidebar_contenu">
            <div id="sidebar">
                <ul id="side_list">
                    <li class="side_li">
                        <i id="elements-icon" class='bx bx-grid-alt'></i>
                        <ul class="side_menu">
                            <h4 class="titre_side_menu">Elements</h4>
                            <li class="sous_li addText">
                                <a href="#">
                                    <i class='bx bx-text'></i>
                                    <br>
                                    Texte
                                </a>
                            </li>
                            <li class="sous_li"><a href="#"><i class='bx bx-image' ></i><br>Image</a></li>
                            <li class="sous_li"><a href="#"><i class='bx bx-checkbox'></i><br>bouton</a></li>
                            <li class="sous_li"><a href="#"><i class='bx bx-clipboard'></i><br>formulaire</a></li>
                        </ul>
                    </li>
                    <li class="side_li">
                        <i class='bx bx-paint'></i>
                        <ul class="side_menu">
                            <h4 class="titre_side_menu">Style</h4>
                            <li class="sous_li"><a href="#">couleurs</a></li>
                            <li class="sous_li"><a href="#">photo</a></li>
                            <li class="sous_li"><a href="#">bouton</a></li>
                            <li class="sous_li"><a href="#">formulaire</a></li>
                        </ul>
                    </li>
                    <li class="side_li">
                        <i class='bx bx-rectangle'></i>
                        <ul class="side_menu">
                            <h4 class="titre_side_menu">Sections</h4>
                            <li class="sous_li"><a href="#">texte</a></li>
                            <li class="sous_li"><a href="#">photo</a></li>
                            <li class="sous_li"><a href="#">bouton</a></li>
                            <li class="sous_li"><a href="#">formulaire</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="page">
                <?php include("corps_texte_milieu_image_coté.html") ?>
            </div>
        </div>
    </div>

    <script src="./DragDrop/scriptDD.js"></script>
    <script src="./DragDrop/script_text.js"></script>
</body>
</html>