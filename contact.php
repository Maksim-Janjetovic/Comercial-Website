<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    $to = 'maksimjanjetovic.de@gmail.com';
    $subject = 'New Contact Form Message';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "<html><body>";
    $body .= "<h2>New Contact Form Message</h2>\n";
    $body .= "<p><strong>Name:</strong> $name</p>\n";
    $body .= "<p><strong>Email:</strong> $email</p>\n";
    $body .= "<p><strong>Message:</strong></p>\n";
    $body .= "<p>$message</p>\n";
    $body .= "</body></html>";

    if (mail($to, $subject, $body, $headers)) {
      echo 'Message sent successfully!';
    } else {
      echo 'Error: Failed to send message.';
    }
  }
?>
