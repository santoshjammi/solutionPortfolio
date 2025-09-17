/*
 * Ameya Labs Tools Configuration
 *
 * To add a new tool to the website:
 * 1. Create your HTML file in the 'tools/' folder
 * 2. Add an entry to the 'tools' array below
 * 3. The tool will automatically appear on the website
 *
 * Tool object structure:
 * {
 *   id: 'unique-identifier',           // Unique ID for the tool
 *   title: 'Tool Display Name',        // Display name on the website
 *   description: 'Brief description',  // Short description (max 150 chars)
 *   icon: 'SVG path data',             // SVG path for the icon (from Heroicons)
 *   path: 'tools/filename.html',       // Path to the HTML file
 *   category: 'category-name'          // Category for grouping (optional)
 * }
 */

const toolsConfig = [
  {
    id: 'wifi-qr-code-gen',
    title: 'WiFi QR Code Generator',
    description: 'Generate QR codes for WiFi networks to easily share network credentials with guests and devices.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    path: 'tools/wifi-qr-code-gen.html',
    category: 'network'
  }

  // Add your new tools here
  // Example:
  // {
  //   id: 'password-generator',
  //   title: 'Secure Password Generator',
  //   description: 'Generate strong, secure passwords with customizable options for length and complexity.',
  //   icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  //   path: 'tools/password-generator.html',
  //   category: 'security'
  // }
];

// Export for use in the main website
if (typeof module !== 'undefined' && module.exports) {
  module.exports = toolsConfig;
}