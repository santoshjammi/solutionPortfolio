<?php
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

// Your email configuration
$to = 'ameyalabs09@gmail.com';
$subject = 'New Contact Form Submission from ' . $name;

// Email content
$email_content = "
New contact form submission from Ameya Labs website:

Name: $name
Email: $email
Submitted: $timestamp

Message:
$message

---
Sent via Ameya Labs contact form
";

// Email headers
$headers = [
    'From: noreply@ameyalabs.local',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];

// Send email
$success = mail($to, $subject, $email_content, implode("\r\n", $headers));

if ($success) {
    // Log the submission
    $log_entry = date('Y-m-d H:i:s') . " - Contact form submission from: $name ($email)\n";
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send message. Please try again.'
    ]);
}
?>
