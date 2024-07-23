<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $card = $_POST['card'];

    // Process the payment here (integrate with a payment gateway)

    echo "Payment successful for $name with email $email";
} else {
    echo "Invalid request";
}
?>
