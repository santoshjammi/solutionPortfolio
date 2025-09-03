# Gmail SMTP Setup Guide for Ameya Labs Contact Form

## Overview
The contact form has been configured to use Gmail SMTP for reliable email delivery. This setup ensures that emails sent through your contact form will be delivered properly.

## Setup Steps

### 1. Enable Gmail App Password

1. **Go to your Google Account**: https://myaccount.google.com/
2. **Click on "Security"** in the left sidebar
3. **Enable 2-Step Verification** (if not already enabled):
   - Click on "2-Step Verification"
   - Follow the setup process
4. **Generate App Password**:
   - Go back to Security
   - Click on "App passwords" (you'll only see this if 2-Step Verification is enabled)
   - Select app: "Mail"
   - Select device: "Other" and name it "Ameya Labs Website"
   - Click "Generate"
   - **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

### 2. Configure SMTP Settings

1. **Open the file**: `smtp-config.php`
2. **Add your App Password**:
   ```php
   'smtp_password' => 'abcd efgh ijkl mnop', // Replace with your actual app password
   ```
3. **Save the file**

### 3. Test the Contact Form

1. **Make sure PHP server is running**:
   ```bash
   cd /Users/kgt/Desktop/Projects/solutions/ameya-labs
   php -S localhost:8000
   ```

2. **Open your website**: http://localhost:8000

3. **Fill out and submit the contact form**

4. **Check the logs**: Look at `contact_log.txt` for success/error messages

## Security Notes

- ✅ **App Password is secure**: It's specifically for this application
- ✅ **No real Gmail password exposed**: Your actual Gmail password is never used
- ✅ **Can be revoked**: You can revoke the App Password anytime from Google Account settings
- ✅ **SMTP uses encryption**: All emails are sent over encrypted connections

## Troubleshooting

### If emails still don't work:

1. **Check the log file**: `contact_log.txt` for error messages
2. **Verify App Password**: Make sure it's copied correctly (no spaces in the config file)
3. **Check Gmail settings**: Ensure 2-Step Verification is enabled
4. **Firewall/Network**: Some networks block SMTP ports

### Common Error Messages:

- **"SMTP Error: Password not accepted"**: App password is incorrect
- **"SMTP connect() failed"**: Network/firewall issue
- **"Must issue a STARTTLS command first"**: Port/encryption issue (should use port 587)

## Files Modified

- `contact.php` - Updated to use PHPMailer with SMTP
- `smtp-config.php` - Configuration file (ADD YOUR APP PASSWORD HERE)
- `composer.json` - Added PHPMailer dependency
- `vendor/` - PHPMailer library files

## Testing Commands

```bash
# Test form submission with curl
curl -X POST http://localhost:8000/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

## Backup Solution

If SMTP doesn't work, the system will automatically fall back to PHP's built-in `mail()` function, though delivery isn't guaranteed without a mail server configured on the system.
