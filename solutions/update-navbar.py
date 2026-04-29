#!/usr/bin/env python3
"""
Script to update all HTML files to use the centralized navbar.js
This script replaces the existing navbar HTML with a simple div that will be populated by navbar.js
"""

import re
import os
from pathlib import Path

# Files to update
HTML_FILES = [
    'apartment-management-system-prd.html',
    'college-management-system.html',
    'heptacare-health.html',
    'investment-banking-crm-solution.html',
    'investment-banking-crm-technical-infographic.html',
    'investefy.html',
    'lms-presentation.html',
    'payment-gateway-questions.html',
    'payment-gateway-security-solution.html',
    'payment-gateway-security-technical-infographic.html',
    'payment-gateway-solution.html',
    'payment-gateway-technical-infographic.html',
    'question-bank-prd.html',
    'university-management-system.html',
]

def update_html_file(filepath):
    """Update a single HTML file to use navbar.js"""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already using navbar.js
    if 'navbar.js' in content:
        print(f"✓ {filepath} already uses navbar.js")
        return False
    
    # Pattern to match the header element (from <header to </header>)
    # This regex finds the header tag with all its content
    header_pattern = r'<header class="bg-\[#00449E\].*?</header>'
    
    # Replacement: simple div with navbar container and script reference
    replacement = '''<div id="navbar-container"></div>
    <script src="navbar.js"></script>'''
    
    # Replace the header
    new_content = re.sub(header_pattern, replacement, content, flags=re.DOTALL)
    
    if new_content == content:
        print(f"✗ {filepath} - Could not find header to replace")
        return False
    
    # Write the updated content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✓ {filepath} - Updated successfully")
    return True

def main():
    """Main function to update all HTML files"""
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    print("🔄 Updating HTML files to use centralized navbar.js...\n")
    
    updated_count = 0
    for filename in HTML_FILES:
        if Path(filename).exists():
            if update_html_file(filename):
                updated_count += 1
        else:
            print(f"⚠ {filename} not found")
    
    print(f"\n✅ Complete! Updated {updated_count} of {len(HTML_FILES)} files.")
    print("\n📝 Note: Make sure navbar.js is in the same directory as your HTML files.")

if __name__ == "__main__":
    main()
