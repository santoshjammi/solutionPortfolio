<?php
// SMTP Configuration for Gmail
// 
// IMPORTANT: You need to set up Gmail App Password for this to work
// Follow these steps:
// 1. Go to your Google Account settings
// 2. Security > 2-Step Verification (enable if not already)
// 3. Security > App passwords
// 4. Generate a new app password for "Mail"
// 5. Use that password in the SMTP_PASSWORD below

return [
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_username' => 'santoshjammi@gmail.com',
    'smtp_password' => 'khcdeyrbzsjvxbgz', // Gmail App Password (no spaces)
    'from_email' => 'santoshjammi@gmail.com',
    'from_name' => 'Ameya Labs Website',
    'to_email' => 'ameyalabs09@gmail.com',
    'reply_to_original_sender' => true
];
?>
