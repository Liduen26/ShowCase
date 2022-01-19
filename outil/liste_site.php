<?php
try
{
	$db = new PDO('mysql:host=localhost;dbname=showcase;charset=utf8', 'root', '');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$pseudo = $_POST['pseudo'];
$mdp = $_POST['mdp_user'];

// affiche les noms des différents sites appartenant à la personne

$recup_site = 'SELECT nom FROM site WHERE proprietaire = (SELECT id FROM user WHERE pseudo = :pseudo)';

$prepare_site = $db->prepare($recup_site);
$prepare_site->execute([
    'pseudo' => $pseudo,
]);

$liste_site = $prepare_site->fetchAll();
if(count($liste_site) !== 0){
    foreach($liste_site as $site){
        echo('<a href="creer_site.php">'.$site['nom'].'</a>'.'<br>');
    }
}
else{
    echo('<div> Commencez avec une template pré-faite </div>'.'<br>');
    echo('<form action="creer_site.php" method="post">
            <div>
            <label for="name"></label>
            <input type="hidden" id="name" name="pseudo" value ='.($pseudo).'
        </div>');
    echo('<div class="button">
        <button type="submit">Template 1</button>
        </div>
        </form>');
}
?>