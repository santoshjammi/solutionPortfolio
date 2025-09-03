# 🚀 Hostinger Deployment - Step by Step

## What's Ready for Upload

✅ **Files prepared in:**
- `hostinger-deploy/` folder (ready to upload)
- `ameya-labs-hostinger.zip` (for easy upload)

## 📤 Upload Methods

### Method 1: Upload ZIP File (Easiest)
1. **Login to Hostinger hPanel**
2. **Go to File Manager**
3. **Navigate to `public_html/`**
4. **Upload `ameya-labs-hostinger.zip`**
5. **Right-click → Extract**
6. **Move all files from `hostinger-deploy/` to `public_html/`**

### Method 2: Direct Upload
1. **Open `hostinger-deploy/` folder**
2. **Select all files (Ctrl/Cmd + A)**
3. **Drag and drop to Hostinger File Manager**
4. **Upload to `public_html/` directory**

### Method 3: FTP Upload
1. **Get FTP details from Hostinger hPanel**
2. **Use FileZilla or similar FTP client**
3. **Upload all files from `hostinger-deploy/` to `public_html/`**

## ⚙️ Post-Upload Steps

### 1. Verify File Structure
Your `public_html/` should look like:
```
public_html/
├── index.html
├── contact.php
├── smtp-config.php
├── .htaccess
├── AmeyaLogo.png
├── composer.json
├── autoload.php
├── composer/ (folder)
└── phpmailer/ (folder)
```

### 2. Test Your Website
- **Visit your domain**: `https://yourdomain.com`
- **Check if website loads correctly**
- **Test all sections and navigation**

### 3. Test Contact Form
- **Fill out the contact form**
- **Submit a test message**
- **Check if email is received at ameyalabs09@gmail.com**

### 4. Check for Errors
- **Monitor Hostinger Error Logs** (in hPanel)
- **Fix any PHP errors if they appear**

## 🔧 Hostinger-Specific Settings

### PHP Version
- **Recommended**: PHP 8.0 or higher
- **Change in**: hPanel → PHP Configuration

### File Permissions (Auto-set by Hostinger)
- **PHP files**: 644
- **Directories**: 755
- **Usually set correctly automatically**

### SSL Certificate
- **Enable SSL** in Hostinger hPanel
- **Force HTTPS** redirect
- **Usually auto-configured**

## 🌐 Domain Configuration

### If using main domain:
- **Upload to**: `public_html/`
- **Access via**: `https://yourdomain.com`

### If using subdomain:
1. **Create subdomain** in Hostinger hPanel (e.g., `ameya.yourdomain.com`)
2. **Upload to subdomain folder**
3. **Access via**: `https://ameya.yourdomain.com`

## ✅ Testing Checklist

- [ ] Website loads at your domain
- [ ] All sections display correctly
- [ ] Navigation works
- [ ] Contact form submits successfully
- [ ] Email received at ameyalabs09@gmail.com
- [ ] No PHP errors in logs
- [ ] Images and logo display
- [ ] Mobile responsiveness works

## 🚨 Common Issues & Solutions

### Issue: Website shows "Internal Server Error"
**Solution**: Check error logs in Hostinger hPanel, usually PHP syntax error

### Issue: Contact form not working
**Solution**: Verify SMTP settings, check if port 587 is allowed

### Issue: Images not loading
**Solution**: Check file paths, ensure AmeyaLogo.png is uploaded

### Issue: CSS/styling broken
**Solution**: Clear browser cache, check if all CSS is inline in HTML

## 📞 Support

### Hostinger Support
- **24/7 Live Chat**
- **Knowledge Base**
- **Support Tickets**

### Your Configuration
- **Emails sent from**: santoshjammi@gmail.com
- **Emails delivered to**: ameyalabs09@gmail.com
- **SMTP**: Gmail (Port 587, STARTTLS)

## 🎉 You're All Set!

Once uploaded and tested, your Ameya Labs website will be live with:
- ✅ Professional design
- ✅ Working contact form
- ✅ Reliable email delivery via Gmail SMTP
- ✅ Security configurations
- ✅ Mobile-responsive layout

**Your website is ready for production on Hostinger!**
