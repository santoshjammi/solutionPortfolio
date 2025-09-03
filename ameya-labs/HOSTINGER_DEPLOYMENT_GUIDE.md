# Hostinger Shared Hosting Deployment Guide

## 📋 Pre-Deployment Checklist

### Files to Upload:
✅ **Essential Files:**
- `index.html` - Main website
- `contact.php` - Contact form handler with SMTP
- `smtp-config.php` - SMTP configuration
- `composer.json` - Dependencies list
- `vendor/` folder - PHPMailer library
- `AmeyaLogo.png` - Logo file

✅ **Optional Files:**
- `contact_log.txt` - Will be created automatically
- `README.md` - Documentation
- `business-model-canvas.html` - If needed

❌ **Don't Upload:**
- `test-smtp.php` - Testing script (security risk)
- `SMTP_SETUP_GUIDE.md` - Local documentation
- `QUICK_SETUP.md` - Local documentation
- `.git/` folder - Version control

## 🔧 Hostinger-Specific Configuration

### 1. PHP Version
- Hostinger supports PHP 8.x
- Your code is compatible with PHP 8.4.10

### 2. Composer on Shared Hosting
- Hostinger supports Composer
- PHPMailer will work without issues

### 3. SMTP Configuration
- Gmail SMTP works on Hostinger
- Port 587 is allowed
- No firewall restrictions

## 📁 File Structure on Hostinger

```
public_html/
├── index.html
├── contact.php
├── smtp-config.php
├── composer.json
├── AmeyaLogo.png
└── vendor/
    └── (PHPMailer files)
```

## 🌐 Domain Setup

### Option 1: Main Domain
- Upload to `public_html/`
- Access via: `https://yourdomain.com`

### Option 2: Subdomain
- Create subdomain in Hostinger panel
- Upload to subdomain folder
- Access via: `https://ameya.yourdomain.com`

## 🔒 Security Considerations

### 1. Protect Configuration Files
Add `.htaccess` file to prevent access to sensitive files.

### 2. File Permissions
- PHP files: 644
- Directories: 755
- No need for 777 permissions

## 📤 Upload Methods

### Method 1: File Manager (Recommended)
1. Login to Hostinger hPanel
2. Go to File Manager
3. Navigate to `public_html/`
4. Upload files via drag-and-drop

### Method 2: FTP
- Use FileZilla or similar
- FTP details available in hPanel

### Method 3: Git (Advanced)
- Use Hostinger's Git integration
- Connect your GitHub repository

## ⚙️ Post-Upload Configuration

### 1. Test Website
- Visit your domain
- Check if website loads correctly

### 2. Test Contact Form
- Fill out contact form
- Verify emails are received

### 3. Check Error Logs
- Monitor Hostinger error logs
- Fix any PHP errors

## 🚨 Common Issues & Solutions

### Issue 1: Composer Dependencies
**Problem:** vendor/ folder not working
**Solution:** Run composer install on server or upload vendor/ folder

### Issue 2: SMTP Not Working
**Problem:** Gmail SMTP blocked
**Solution:** Hostinger allows SMTP, check credentials

### Issue 3: File Permissions
**Problem:** PHP files not executing
**Solution:** Set correct permissions (644)

### Issue 4: Path Issues
**Problem:** Relative paths not working
**Solution:** Use absolute paths where needed

## 📞 Hostinger Support
- 24/7 Live Chat support
- Knowledge base available
- PHP and SMTP fully supported
