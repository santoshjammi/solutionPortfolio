<?php
require_once 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

echo "=== SMTP Configuration Test ===\n\n";

// Load configuration
$config = require 'smtp-config.php';

echo "Configuration loaded:\n";
echo "- SMTP Host: " . $config['smtp_host'] . "\n";
echo "- SMTP Port: " . $config['smtp_port'] . "\n";
echo "- Username: " . $config['smtp_username'] . "\n";
echo "- Password: " . (empty($config['smtp_password']) ? "❌ NOT SET" : "✅ SET (" . strlen($config['smtp_password']) . " chars)") . "\n";
echo "- From Email: " . $config['from_email'] . "\n";
echo "- To Email: " . $config['to_email'] . "\n\n";

if (empty($config['smtp_password'])) {
    echo "❌ SMTP Password is not configured!\n";
    echo "Please follow the setup guide in SMTP_SETUP_GUIDE.md\n";
    exit(1);
}

echo "Testing SMTP connection...\n";

try {
    $mail = new PHPMailer(true);
    
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_username'];
    $mail->Password   = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $config['smtp_port'];
    
    // Enable verbose debug output (optional)
    // $mail->SMTPDebug = SMTP::DEBUG_CONNECTION;
    
    // Test connection
    if ($mail->smtpConnect()) {
        echo "✅ SMTP connection successful!\n";
        $mail->smtpClose();
        
        echo "\nSending test email...\n";
        
        // Recipients
        $mail->setFrom($config['from_email'], $config['from_name']);
        $mail->addAddress($config['to_email'], 'Ameya Labs');
        
        // Content
        $mail->isHTML(false);
        $mail->Subject = 'SMTP Test - Ameya Labs Contact Form';
        $mail->Body = "This is a test email to verify SMTP configuration.\n\n" .
                      "Sent at: " . date('Y-m-d H:i:s') . "\n" .
                      "From: SMTP Test Script\n\n" .
                      "If you receive this email, your SMTP configuration is working correctly!";
        
        $mail->send();
        echo "✅ Test email sent successfully!\n";
        echo "Check your inbox at: " . $config['to_email'] . "\n";
        
    } else {
        echo "❌ SMTP connection failed!\n";
    }
    
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage() . "\n";
    if (isset($mail)) {
        echo "SMTP Error Info: " . $mail->ErrorInfo . "\n";
    }
}

echo "\n=== Test Complete ===\n";
?>
