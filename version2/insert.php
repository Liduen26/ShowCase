<?php
    try {
        $bdd = new PDO("mysql:host=localhost;dbname=mydb", "root");
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
    $sql = "INSERT INTO text_liste(propriétés) VALUES ('lorem ipsum rosa rosae')"
?>