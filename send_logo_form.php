<?php
// Receive and sanitize user input
function get_value($key) {
    return isset($_POST[$key]) ? htmlspecialchars(trim($_POST[$key])) : '';
}

// Get values
$company_name = get_value('company_name');
$business_desc = get_value('business_desc');
$target_audience = get_value('target_audience');
$competitors = get_value('competitors');
$unique_selling = get_value('unique_selling');
$logo_goals = get_value('logo_goals');
$logo_usage = isset($_POST['logo_usage']) ? implode(', ', array_map('htmlspecialchars', $_POST['logo_usage'])) : '';
$logo_message = get_value('logo_message');
$brand_personality = get_value('brand_personality');
$logo_emotions = get_value('logo_emotions');
$logo_style = get_value('logo_style');
$brand_references = get_value('brand_references');
$logo_ideas = get_value('logo_ideas');
$logo_colors = get_value('logo_colors');
$logo_fonts = get_value('logo_fonts');
$logo_tagline = get_value('logo_tagline');
$budget = get_value('budget');
$timeline = get_value('timeline');
$feedback_owner = get_value('feedback_owner');
$other_notes = get_value('other_notes');

// Email content
$to = "santoshjammi@ameyalabs.in";
$subject = "New Logo Design Client Questionnaire Submission";
$message = "
A new logo design questionnaire submission was received:\n\n
Company Name: $company_name\n
Business Description: $business_desc\n
Target Audience: $target_audience\n
Competitors: $competitors\n
Unique Selling Proposition: $unique_selling\n
Logo Goals: $logo_goals\n
Logo Usage: $logo_usage\n
Specific Logo Message: $logo_message\n
Brand Personality: $brand_personality\n
Logo Emotions/Meanings: $logo_emotions\n
Logo Style: $logo_style\n
Style References: $brand_references\n
Logo Ideas/Concepts: $logo_ideas\n
Preferred/Disliked Colors: $logo_colors\n
Preferred/Avoided Fonts: $logo_fonts\n
Include Tagline: $logo_tagline\n
Budget: $budget\n
Timeline/Deadline: $timeline\n
Feedback Owner: $feedback_owner\n
Other Notes: $other_notes\n
";

// Email headers
$headers = "From: no-reply@yourdomain.com\r\n";
$headers .= "Reply-To: no-reply@yourdomain.com\r\n";

// Send email
if (mail($to, $subject, $message, $headers)) {
    echo "<h2>Thank you! Your responses have been submitted.</h2>";
} else {
    echo "<h2>Error: There was a problem sending your responses. Please try again.</h2>";
}
?>
