<?php
// Récupérer les données du formulaire
$nom = $_POST['fullname'];
$prenom = $_POST['firstname'];
$email = $_POST['email'];
$numero = $_POST['phone'];

$ville = $_POST['ville'];
$projet = $_POST['objectives'];

// Établir la connexion à la base de données
$mysqli = new mysqli("localhost", "root", "", "cours_bdd");

// Vérifier la connexion
if ($mysqli->connect_error) {
    die("Erreur de connexion à la base de données : " . $mysqli->connect_error);
}

// Préparer et exécuter une requête d'insertion
$sql = "INSERT INTO inscriptions_cours (nom, prenom, ville, projet) VALUES (?, ?, ?, ?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("ssss", $nom, $prenom, $ville, $projet);

if ($stmt->execute()) {
    echo "Inscription réussie !"; // Ou redirigez l'utilisateur vers une page de confirmation
} else {
    echo "Erreur lors de l'inscription : " . $stmt->error;
}

// Fermer la connexion
$stmt->close();
$mysqli->close();
?>
