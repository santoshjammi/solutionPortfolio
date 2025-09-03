<?php
require_once 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!$input || !isset($input['name']) || !isset($input['email']) || !isset($input['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$name = trim($input['name']);
$email = trim($input['email']);
$message = trim($input['message']);
$timestamp = date('Y-m-d H:i:s');

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Gmail SMTP Configuration
$smtp_host = 'smtp.gmail.com';
$smtp_port = 587;
$smtp_username = 'ameyalabs09@gmail.com'; // Your Gmail address
$smtp_password = 'your-app-password-here'; // You need to generate an App Password from Gmail
$from_email = 'ameyalabs09@gmail.com';
$from_name = 'Ameya Labs Website';
$to_email = 'ameyalabs09@gmail.com';

try {
    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    // Server settings
    $mail->isSMTP();
    $mail->Host       = $smtp_host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_username;
    $mail->Password   = $smtp_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $smtp_port;

    // Recipients
    $mail->setFrom($from_email, $from_name);
    $mail->addAddress($to_email, 'Ameya Labs');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(false);
    $mail->Subject = 'New Contact Form Submission from ' . $name;
    
    $email_content = "New contact form submission from Ameya Labs website:\n\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Submitted: $timestamp\n\n";
    $email_content .= "Message:\n$message\n\n";
    $email_content .= "---\n";
    $email_content .= "Sent via Ameya Labs contact form";
    
    $mail->Body = $email_content;

    // Send email
    $mail->send();
    
    // Log the submission
    $log_entry = date('Y-m-d H:i:s') . " - Contact form submission from: $name ($email) - SMTP SUCCESS\n";
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully via SMTP!'
    ]);

} catch (Exception $e) {
    // Log the error
    $error_log = date('Y-m-d H:i:s') . " - SMTP Error: {$mail->ErrorInfo} - From: $name ($email)\n";
    file_put_contents('contact_log.txt', $error_log, FILE_APPEND | LOCK_EX);
    
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send message: ' . $mail->ErrorInfo
    ]);
}
?>
