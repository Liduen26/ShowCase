
<?php
header( 'content-type: text/html; charset=utf-8' );
$pseudo = $_POST["pseudo"];
$password = $_POST["mdp_user"];


if($pseudo != " " && !empty($pseudo) && $password != " " && !empty($password)){
    // se connecte à la base de donnée
try
{
	$db = new PDO('mysql:host=localhost;dbname=showcase;charset=utf8', 'root', '');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}


$sqlQuery = 'INSERT INTO user( pseudo, password) VALUES ( :pseudo, :password)';

// enregistre les éléments dans la base de donnée
$insertmydb = $db->prepare($sqlQuery);

$insertmydb->execute([
    'pseudo' => $pseudo,
    'password' => $password,

]);
?>
<html>
    <p> Enregistrement reussi ! </p>
        <form action="bienvenue.html" method="post">
            <div class="button">
                <button type="submit">se connecter</button>
            </div>
        </form>

</html>
<?php
}
else{
?>
    <html>
<meta http-equiv="refresh" content="0; url= bienvenue.html">
</html>
<?php
}
?>