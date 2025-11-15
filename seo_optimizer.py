#!/usr/bin/env python3
"""
SEO Optimization Script for All HTML Pages
Applies comprehensive SEO standardizations to all HTML files in the workspace.
"""

import os
import re
from pathlib import Path

def get_page_metadata(page_path):
    """Extract page-specific metadata based on filename"""
    filename = os.path.basename(page_path)

    metadata_map = {
        'index.html': {
            'title': 'Strategic Solutions Hub - Business Solutions for Growth & Innovation | 2025',
            'description': 'Comprehensive business solutions hub offering payment gateway scaling, CRM systems, learning management, and enterprise software solutions. Transform your business with cutting-edge technology.',
            'keywords': 'business solutions, enterprise software, payment gateway, CRM, learning management, digital transformation',
            'category': 'homepage',
            'emoji': '🌐'
        },
        'investment-banking-crm-solution.html': {
            'title': 'Investment Banking CRM Solution - Enterprise Client Management | 2025',
            'description': 'Complete CRM solution for investment banking with advanced client management, portfolio tracking, and compliance features. Streamline your banking operations with enterprise-grade CRM.',
            'keywords': 'investment banking CRM, client management, portfolio tracking, banking software, compliance CRM',
            'category': 'crm-solution',
            'emoji': '💼'
        },
        'lms-presentation.html': {
            'title': 'Learning Management System - Complete LMS Solution | 2025',
            'description': 'Comprehensive learning management system with course creation, student tracking, and analytics. Perfect for educational institutions and corporate training programs.',
            'keywords': 'learning management system, LMS, e-learning, course management, online education',
            'category': 'education-solution',
            'emoji': '🎓'
        },
        'question-bank-prd.html': {
            'title': 'Question Bank System - Assessment & Testing Platform | 2025',
            'description': 'Advanced question bank system for creating, managing, and delivering assessments. Perfect for educational institutions and certification programs.',
            'keywords': 'question bank, assessment system, testing platform, educational software, exam management',
            'category': 'education-solution',
            'emoji': '📚'
        },
        'apartment-management-system-prd.html': {
            'title': 'Apartment Management System - Property Management Software | 2025',
            'description': 'Complete property management solution for apartments, rentals, and real estate. Streamline tenant management, rent collection, and maintenance tracking.',
            'keywords': 'property management, apartment management, rental software, tenant management, real estate',
            'category': 'property-solution',
            'emoji': '🏢'
        },
        'heptacare-health.html': {
            'title': 'Heptacare Health - Healthcare Management System | 2025',
            'description': 'Comprehensive healthcare management system for hospitals and clinics. Patient management, appointment scheduling, and medical record keeping.',
            'keywords': 'healthcare management, hospital software, patient management, medical records, healthcare IT',
            'category': 'healthcare-solution',
            'emoji': '🏥'
        },
        'university-management-system.html': {
            'title': 'University Management System - Higher Education Software | 2025',
            'description': 'Complete university management system for student enrollment, course management, and academic administration. Streamline higher education operations.',
            'keywords': 'university management, student information system, higher education, academic management',
            'category': 'education-solution',
            'emoji': '🎓'
        },
        'college-management-system.html': {
            'title': 'College Management System - Educational Administration | 2025',
            'description': 'Comprehensive college management system for student records, course scheduling, and administrative tasks. Perfect for colleges and educational institutions.',
            'keywords': 'college management, student records, educational administration, college software',
            'category': 'education-solution',
            'emoji': '🎓'
        }
    }

    # Default metadata for unknown pages
    return metadata_map.get(filename, {
        'title': f'{filename.replace(".html", "").replace("-", " ").title()} - Strategic Solutions Hub | 2025',
        'description': f'Professional solution for {filename.replace(".html", "").replace("-", " ")}. Comprehensive features and expert implementation.',
        'keywords': f'{filename.replace(".html", "").replace("-", ", ")}, business solution, enterprise software',
        'category': 'solution',
        'emoji': '🚀'
    })

def optimize_html_file(file_path):
    """Apply comprehensive SEO optimizations to an HTML file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        metadata = get_page_metadata(file_path)
        filename = os.path.basename(file_path)

        # Skip if already optimized (check for canonical link)
        if 'rel="canonical"' in content:
            print(f"⚠️  {filename} - Already optimized, skipping")
            return False

        # Create optimized head section
        optimized_head = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{metadata['title']}</title>
  <meta name="description" content="{metadata['description']}">
  <meta name="keywords" content="{metadata['keywords']}">
  <meta name="author" content="Santosh Jammi - Solutions Expert">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow">
  <meta name="bingbot" content="index, follow">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://yourwebsite.com/{filename}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://yourwebsite.com/{filename}">
  <meta property="og:title" content="{metadata['title']}">
  <meta property="og:description" content="{metadata['description']}">
  <meta property="og:image" content="https://yourwebsite.com/images/{filename.replace('.html', '-og.jpg')}">
  <meta property="og:site_name" content="Strategic Solutions Hub">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yourwebsite.com/{filename}">
  <meta property="twitter:title" content="{metadata['title']}">
  <meta property="twitter:description" content="{metadata['description']}">
  <meta property="twitter:image" content="https://yourwebsite.com/images/{filename.replace('.html', '-twitter.jpg')}">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Icons -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>{metadata['emoji']}</text></svg>">

  <!-- Structured Data - Organization -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Strategic Solutions Hub",
    "url": "https://yourwebsite.com",
    "logo": "https://yourwebsite.com/images/logo.png",
    "description": "Comprehensive business solutions for growth, security, and innovation",
    "founder": {{
      "@type": "Person",
      "name": "Santosh Jammi",
      "jobTitle": "Solutions Architect & Business Consultant",
      "knowsAbout": ["Business Solutions", "Technology Consulting", "Digital Transformation", "Enterprise Architecture"],
      "hasCredential": "Certified Solutions Architect with 10+ years experience"
    }},
    "contactPoint": {{
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "availableLanguage": "English"
    }}
  }}
  </script>

  <!-- Structured Data - Article -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{metadata['title'].replace(' | 2025', '')}",
    "description": "{metadata['description']}",
    "author": {{
      "@type": "Person",
      "name": "Santosh Jammi",
      "jobTitle": "Solutions Expert"
    }},
    "publisher": {{
      "@type": "Organization",
      "name": "Strategic Solutions Hub"
    }},
    "datePublished": "2025-11-13",
    "dateModified": "2025-11-13",
    "mainEntityOfPage": {{
      "@type": "WebPage",
      "@id": "https://yourwebsite.com/{filename}"
    }},
    "image": "https://yourwebsite.com/images/{filename.replace('.html', '-main.jpg')}",
    "keywords": "{metadata['keywords']}"
  }}
  </script>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Standardized Styles -->
  <link rel="stylesheet" href="standardized-styles.css">'''

        # Replace head section
        head_pattern = r'<head>.*?</head>'
        content = re.sub(head_pattern, optimized_head, content, flags=re.DOTALL)

        # Add Google Analytics after body tag
        analytics_script = '''
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID', {
      'custom_map': {'dimension1': 'page_category'}
    });
  </script>'''

        # Add analytics after body tag if not present
        if 'gtag(' not in content:
            content = content.replace('<body', '<body' + analytics_script, 1)

        # Add FAQ section before closing body tag if not present
        if 'faq-section' not in content:
            faq_section = f'''
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

            content = content.replace('</body>', faq_section + '</body>')

        # Add social sharing section
        if 'social-share' not in content:
            social_section = f'''
  <!-- Social Share -->
  <section class="social-share">
    <div class="container">
      <h2>Share This Solution</h2>
      <p>Help others discover this comprehensive business solution by sharing this guide.</p>
      <div class="share-buttons">
        <a href="https://twitter.com/intent/tweet?text={metadata['title'].replace(' ', '%20')}&url=https://yourwebsite.com/{filename}" class="share-btn twitter" target="_blank" rel="noopener noreferrer">
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
  </section>'''

            content = content.replace('</body>', social_section + '</body>')

        # Add author section
        if 'author-section' not in content:
            author_section = '''
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

            content = content.replace('</body>', author_section + '</body>')

        # Add footer if not present
        if '<footer' not in content:
            footer_section = '''
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

            content = content.replace('</body>', footer_section + '</body>')

        # Add FAQ schema
        if '"FAQPage"' not in content:
            faq_schema = '''
  <!-- FAQ Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the key features of this solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This solution includes comprehensive features designed for enterprise-level performance, scalability, and user experience. Key capabilities include advanced analytics, multi-platform support, and robust security measures."
        }
      },
      {
        "@type": "Question",
        "name": "How long does implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementation timelines vary based on complexity and requirements. Typically, basic setup takes 2-4 weeks, while full enterprise deployment may require 2-3 months including customization and training."
        }
      }
    ]
  }
  </script>'''

            content = content.replace('</body>', faq_schema + '</body>')

        # Write optimized content back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"✅ {filename} - SEO optimization completed")
        return True

    except Exception as e:
        print(f"❌ {filename} - Error during optimization: {str(e)}")
        return False

def main():
    """Main function to optimize all HTML files"""
    workspace_dir = Path('/Users/kgt/Desktop/Projects/solutions')

    # Find all HTML files
    html_files = []
    for pattern in ['*.html', 'ameya-labs/*.html', 'ameya-labs/tools/*.html', 'metkan/*.html']:
        html_files.extend(workspace_dir.glob(pattern))

    # Remove duplicates
    html_files = list(set(html_files))

    print(f"Found {len(html_files)} HTML files to optimize")
    print("=" * 50)

    optimized_count = 0
    skipped_count = 0

    for html_file in sorted(html_files):
        if optimize_html_file(html_file):
            optimized_count += 1
        else:
            skipped_count += 1

    print("=" * 50)
    print(f"Optimization Summary:")
    print(f"✅ Optimized: {optimized_count} files")
    print(f"⚠️  Skipped: {skipped_count} files")
    print(f"📊 Total: {len(html_files)} files processed")

if __name__ == "__main__":
    main()