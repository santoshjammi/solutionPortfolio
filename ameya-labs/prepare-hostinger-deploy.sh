#!/bin/bash

# Hostinger Deployment Preparation Script
# This script prepares your files for upload to Hostinger

echo "🚀 Preparing Ameya Labs website for Hostinger deployment..."

# Create deployment directory
DEPLOY_DIR="hostinger-deploy"
rm -rf $DEPLOY_DIR
mkdir $DEPLOY_DIR

echo "📁 Copying essential files..."

# Copy essential files
cp index.html $DEPLOY_DIR/
cp contact.php $DEPLOY_DIR/
cp smtp-config.php $DEPLOY_DIR/
cp composer.json $DEPLOY_DIR/
cp .htaccess $DEPLOY_DIR/
cp AmeyaLogo.png $DEPLOY_DIR/

# Copy vendor directory (PHPMailer)
cp -r vendor/ $DEPLOY_DIR/

# Create README for deployment
cat > $DEPLOY_DIR/DEPLOYMENT_INSTRUCTIONS.txt << 'EOF'
HOSTINGER DEPLOYMENT INSTRUCTIONS
=================================

1. UPLOAD FILES:
   - Upload ALL files in this folder to your Hostinger public_html/ directory
   - Use File Manager or FTP

2. SET PERMISSIONS:
   - PHP files: 644
   - Directories: 755
   - .htaccess: 644

3. TEST:
   - Visit your domain to test the website
   - Test the contact form
   - Check if emails are received at ameyalabs09@gmail.com

4. SECURITY:
   - The .htaccess file protects sensitive files
   - SMTP credentials are already configured

5. TROUBLESHOOTING:
   - Check Hostinger error logs if issues occur
   - Contact Hostinger support for server-related issues

Your Gmail SMTP is configured and ready to work on Hostinger!
EOF

echo "✅ Files prepared in '$DEPLOY_DIR' directory"
echo ""
echo "📋 Deployment checklist:"
echo "  ✅ Essential files copied"
echo "  ✅ PHPMailer library included"
echo "  ✅ Security .htaccess created"
echo "  ✅ SMTP configuration ready"
echo ""
echo "🌐 Next steps:"
echo "  1. Zip the '$DEPLOY_DIR' folder OR"
echo "  2. Upload files directly to Hostinger File Manager"
echo "  3. Extract to public_html/ directory"
echo "  4. Test your website!"
echo ""
echo "📧 Your contact form will send emails to: ameyalabs09@gmail.com"
echo "🔐 Using SMTP account: santoshjammi@gmail.com"

# Create a zip file for easy upload
if command -v zip &> /dev/null; then
    echo ""
    echo "📦 Creating zip file for upload..."
    zip -r ameya-labs-hostinger.zip $DEPLOY_DIR/
    echo "✅ Created: ameya-labs-hostinger.zip"
    echo "   You can upload this zip file to Hostinger and extract it"
fi

echo ""
echo "🎉 Deployment preparation complete!"
echo "   Ready to upload to Hostinger shared hosting!"
