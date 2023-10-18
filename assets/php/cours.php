


<?php
$servername = "localhost";
$username = "BFS";
$password = "Perrine_2023";

try {
    // Établir la connexion à la base de données
    $bdd = new PDO("mysql:host=$servername;dbname=cours_bdd", $username, $password);

    // Définir le mode d'erreur PDO sur Exception
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if(isset($_POST['ok'])){
        // Récupérer les données du formulaire
        $nom = $_POST['fullname'];
        $prenom = $_POST['firstname'];
        $email = $_POST['email'];
        $numero = $_POST['phone'];
        $ville = $_POST['city']; // Assurez-vous que le nom correspond à celui dans votre formulaire
        $projet = $_POST['objectives']; // Assurez-vous que le nom correspond à celui dans votre formulaire

        // Préparer et exécuter une requête d'insertion
        $requete = $bdd->prepare("INSERT INTO `cours_clients` (`id_clients`, `Nom_clients`, `Prenom_clients`, `email_clients`, `Numero_clients`, `Ville_client`, `Objectifs_client`) VALUES (NULL, ?, ?, ?, ?, ?, ?)");

        $requete->execute(array($nom, $prenom, $email, $numero, $ville, $projet));

        echo "Inscription réussie !"; // Ou redirigez l'utilisateur vers une page de confirmation
    }
} catch (PDOException $e) {
    echo "Erreur lors de l'inscription : " . $e->getMessage();
}
?>
