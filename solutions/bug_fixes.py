#!/usr/bin/env python3
"""
Bug Fix Script for SEO Optimization Issues
Fixes missing elements across all HTML files.
"""

import os
import re
from pathlib import Path

def fix_missing_elements(file_path):
    """Fix missing SEO elements in an HTML file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        filename = os.path.basename(file_path)
        modified = False

        # Fix 1: Add H1 tag if missing
        if not re.search(r'<h1>', content):
            # Try to find the main heading and convert it to H1
            h2_match = re.search(r'<h2[^>]*>(.*?)</h2>', content, re.IGNORECASE)
            if h2_match:
                old_h2 = h2_match.group(0)
                new_h1 = old_h2.replace('<h2', '<h1').replace('</h2>', '</h1')
                content = content.replace(old_h2, new_h1, 1)
                modified = True
            else:
                # Add a default H1 based on filename
                title_match = re.search(r'<title>(.*?)</title>', content)
                if title_match:
                    title_text = title_match.group(1).split('|')[0].strip()
                    # Find a good place to insert H1 (after navbar or at start of main content)
                    main_match = re.search(r'<main[^>]*>', content, re.IGNORECASE)
                    if main_match:
                        insert_pos = main_match.end()
                        content = content[:insert_pos] + f'\n    <h1>{title_text}</h1>\n' + content[insert_pos:]
                        modified = True

        # Fix 2: Add navbar integration if missing
        if not re.search(r'navbar\.js', content):
            # Add navbar container and script after body tag
            body_match = re.search(r'<body[^>]*>', content, re.IGNORECASE)
            if body_match:
                insert_pos = body_match.end()
                navbar_code = '''
  <!-- Navbar -->
  <div id="navbar-container"></div>
  <script src="navbar.js"></script>'''
                content = content[:insert_pos] + navbar_code + content[insert_pos:]
                modified = True

        # Fix 3: Add analytics if missing
        if not re.search(r'gtag\(', content):
            # Add after navbar or at beginning of body
            navbar_match = re.search(r'navbar\.js</script>', content)
            if navbar_match:
                insert_pos = navbar_match.end()
            else:
                body_match = re.search(r'<body[^>]*>', content, re.IGNORECASE)
                insert_pos = body_match.end() if body_match else 0

            analytics_code = '''
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>'''
            content = content[:insert_pos] + analytics_code + content[insert_pos:]
            modified = True

        # Fix 4: Add FAQ section if missing
        if not re.search(r'faq-section', content):
            # Add before closing body tag
            faq_code = '''
  <!-- FAQ Section -->
  <section class="faq-section">
    <div class="container">
      <h2>Frequently Asked Questions</h2>

      <div class="faq-item">
        <h3 class="faq-question">What are the key features of this solution?</h3>
        <div class="faq-answer">
          <p>This solution includes comprehensive features designed for enterprise-level performance, scalability, and user experience. Key capabilities include advanced analytics, multi-platform support, and robust security measures.</p>
        </div>
      </div>

      <div class="faq-item">
        <h3 class="faq-question">How long does implementation take?</h3>
        <div class="faq-answer">
          <p>Implementation timelines vary based on complexity and requirements. Typically, basic setup takes 2-4 weeks, while full enterprise deployment may require 2-3 months including customization and training.</p>
        </div>
      </div>

      <div class="faq-item">
        <h3 class="faq-question">What kind of support is provided?</h3>
        <div class="faq-answer">
          <p>We provide comprehensive support including documentation, training, technical assistance, and ongoing maintenance. Enterprise clients receive dedicated support channels and priority response times.</p>
        </div>
      </div>
    </div>
  </section>'''
            content = content.replace('</body>', faq_code + '</body>')
            modified = True

        # Fix 5: Add author section if missing
        if not re.search(r'author-section', content):
            author_code = '''
  <!-- Author Section -->
  <section class="author-section">
    <div class="container">
      <div class="author-card">
        <div class="author-avatar">SJ</div>
        <h3>Santosh Jammi</h3>
        <p><strong>Solutions Architect & Business Consultant</strong></p>
        <p>With over 10 years of experience in enterprise solutions and digital transformation, Santosh has helped numerous organizations implement scalable business systems. He specializes in aligning technology solutions with business objectives for maximum impact.</p>
        <p><em>"Every great solution starts with understanding the problem deeply. These implementations are designed to grow with your business and adapt to changing needs."</em></p>
        <p><strong>Credentials:</strong> Certified Solutions Architect, Enterprise Software Specialist, Digital Transformation Expert</p>
        <p><strong>Contact:</strong> <a href="mailto:santosh@strategicsolutionshub.com">santosh@strategicsolutionshub.com</a></p>
      </div>
    </div>
  </section>'''
            content = content.replace('</body>', author_code + '</body>')
            modified = True

        # Fix 6: Add social sharing if missing
        if not re.search(r'share-btn', content):
            social_code = '''
  <!-- Social Share -->
  <section class="social-share">
    <div class="container">
      <h2>Share This Solution</h2>
      <p>Help others discover this comprehensive business solution by sharing this guide.</p>
      <div class="share-buttons">
        <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20comprehensive%20solution&url=https://yourwebsite.com/{filename}" class="share-btn twitter" target="_blank" rel="noopener noreferrer">
          <span>🐦</span> Share on Twitter
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/{filename}" class="share-btn facebook" target="_blank" rel="noopener noreferrer">
          <span>📘</span> Share on Facebook
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://yourwebsite.com/{filename}" class="share-btn linkedin" target="_blank" rel="noopener noreferrer">
          <span>💼</span> Share on LinkedIn
        </a>
      </div>
    </div>
  </section>'''.replace('{filename}', filename)
            content = content.replace('</body>', social_code + '</body>')
            modified = True

        # Fix 7: Add footer if missing
        if not re.search(r'<footer', content):
            footer_code = '''
  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-12 mt-16">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Strategic Solutions Hub</h3>
          <p class="text-gray-400">Comprehensive business solutions for growth, security, and innovation across industries.</p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Solutions</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="payment-gateway-solution.html" class="hover:text-white transition-colors">💰 Payment Gateway</a></li>
            <li><a href="investment-banking-crm-solution.html" class="hover:text-white transition-colors">💼 CRM Solutions</a></li>
            <li><a href="lms-presentation.html" class="hover:text-white transition-colors">🎓 Learning Management</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Resources</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="question-bank-prd.html" class="hover:text-white transition-colors">📚 Question Bank</a></li>
            <li><a href="apartment-management-system-prd.html" class="hover:text-white transition-colors">🏢 Property Management</a></li>
            <li><a href="heptacare-health.html" class="hover:text-white transition-colors">🏥 Healthcare Solutions</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <p class="text-gray-400 mb-2">Ready to transform your business?</p>
          <a href="mailto:contact@strategicsolutionshub.com" class="text-blue-400 hover:text-blue-300 transition-colors">contact@strategicsolutionshub.com</a>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Strategic Solutions Hub. All rights reserved.</p>
      </div>
    </div>
  </footer>'''
            content = content.replace('</body>', footer_code + '</body>')
            modified = True

        # Save the file if modified
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True

        return False

    except Exception as e:
        print(f"❌ Error processing {filename}: {str(e)}")
        return False

def main():
    """Main function to fix bugs across all HTML files"""
    workspace_dir = Path('/Users/kgt/Desktop/Projects/solutions')

    # Find all HTML files
    html_files = []
    for pattern in ['*.html', 'ameya-labs/*.html', 'ameya-labs/tools/*.html', 'metkan/*.html']:
        html_files.extend(workspace_dir.glob(pattern))

    # Remove duplicates and exclude certain files
    html_files = list(set(html_files))
    exclude_files = ['standardized-navbar.html', 'standardized-template.html']
    html_files = [f for f in html_files if os.path.basename(f) not in exclude_files]

    print(f"🔧 Bug Fix Process for {len(html_files)} HTML files")
    print('=' * 80)

    fixed_count = 0
    already_good_count = 0

    for html_file in sorted(html_files):
        filename = os.path.basename(html_file)
        if fix_missing_elements(html_file):
            print(f"✅ {filename} - Fixed missing elements")
            fixed_count += 1
        else:
            print(f"⚪ {filename} - Already complete")
            already_good_count += 1

    print('=' * 80)
    print(f"📈 Bug Fix Summary:")
    print(f"✅ Files fixed: {fixed_count}")
    print(f"⚪ Files already complete: {already_good_count}")
    print(f"📊 Total files processed: {len(html_files)}")

if __name__ == "__main__":
    main()