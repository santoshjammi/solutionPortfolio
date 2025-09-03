📧 **QUICK SETUP INSTRUCTIONS**

## Step 1: Configure Gmail App Password

1. **Open your Gmail App Password setup**:
   - Go to: https://myaccount.google.com/apppasswords
   - (If the link doesn't work, go to Google Account > Security > App passwords)

2. **Generate App Password**:
   - Select app: "Mail" 
   - Select device: "Other" → Type: "Ameya Labs Website"
   - Click "Generate"
   - **Copy the 16-character password** (like: `abcd efgh ijkl mnop`)

## Step 2: Add Password to Configuration

Edit the file `smtp-config.php` and replace this line:
```php
'smtp_password' => '', // Add your Gmail App Password here
```

With:
```php
'smtp_password' => 'your-16-character-password-here', // No spaces!
```

## Step 3: Test the Setup

Run this command in terminal:
```bash
cd /Users/kgt/Desktop/Projects/solutions/ameya-labs
php test-smtp.php
```

## Step 4: Test Contact Form

1. Make sure PHP server is running: `php -S localhost:8000`
2. Open: http://localhost:8000
3. Fill out the contact form
4. Check your email inbox!

---

**Need Help?** 
- Check `contact_log.txt` for error messages
- Read the full guide in `SMTP_SETUP_GUIDE.md`
