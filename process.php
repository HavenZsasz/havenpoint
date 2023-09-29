<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "socials@havenpoint.de"; // Replace with your email address
    $subject = "Neues Abo für den Newsletter";
    $email = $_POST["email"];
    $message = "Die folgende Mail hat sich fuer den Newsletter angemeldet" . $email;

    // Send the email
    if (mail($to, $subject, $message)) {
        echo "Email sent successfully!";
        
        // Save the email to the database
        $db_host = "db5014588316.hosting-data.io";
        $db_user = "dbu5407580";
        $db_pass = "SamGardner1!";
        $db_name = "dbs12123877";

        $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $email = $conn->real_escape_string($email);
        $sql = "INSERT INTO emails (email) VALUES ('$email')";
      
      if ($conn->query($sql) === TRUE) {
            echo "Vielen Dank für das Abo unseres Newsletters!";
        } else {
            echo "Fehler " . $conn->error;
        }

        $conn->close();
    } else {
        echo "Error sending email.";
    }
}
?>
