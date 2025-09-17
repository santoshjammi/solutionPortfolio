# Ameya Labs Tools Section

## Overview

The Tools section on your website automatically displays all developer tools you create in the `tools/` folder. Currently featuring the WiFi QR Code Generator.

## How to Add New Tools

### Step 1: Create Your Tool

1. Create a new HTML file in the `tools/` folder
2. Make sure it has a proper title and description
3. Test it independently first

### Step 2: Add to Website

Edit the `tools` array in `index.html` (around line 1200) or use `tools-config.js`:

```javascript
{
  id: 'your-tool-id',
  title: 'Your Tool Name',
  description: 'Brief description of what your tool does.',
  icon: 'SVG path data from Heroicons',
  path: 'tools/your-file.html',
  category: 'tool-category' // optional
}
```

### Step 3: Choose an Icon

Get SVG path data from [Heroicons](https://heroicons.com/):

- Search for an appropriate icon
- Copy the `<path>` `d` attribute value
- Example: `M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z`

## Current Tools

### WiFi QR Code Generator

- **File**: `tools/wifi-qr-code-gen.html`
- **Purpose**: Generate QR codes for WiFi network sharing
- **Features**: Multiple encryption types, custom sizing

## Tool Categories

- `network` - Network-related tools
- `security` - Security and encryption tools
- `productivity` - Developer productivity tools
- `utilities` - General utility tools

## Best Practices

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Tool Name - Ameya Labs</title>
    <meta name="description" content="Brief description of your tool">
    <link rel="stylesheet" href="../path/to/styles.css"> <!-- If needed -->
</head>
<body>
    <!-- Your tool content -->
</body>
</html>
```

### Navigation

Consider adding a "Back to Tools" link:

```html
<a href="../index.html#tools" class="back-link">← Back to Tools</a>
```

### Responsive Design

Make sure your tools work on mobile devices:

```css
@media (max-width: 768px) {
    /* Mobile styles */
}
```

## Examples of Tools to Create

1. **Password Generator** - Generate secure passwords
2. **URL Shortener** - Shorten long URLs
3. **Color Picker** - Pick and convert colors
4. **JSON Formatter** - Format and validate JSON
5. **Base64 Encoder/Decoder** - Encode/decode Base64
6. **Unit Converter** - Convert between units
7. **Text Tools** - Case converter, word counter, etc.

## Deployment

When deploying to Hostinger:

1. Include all files in the `tools/` folder
2. The tools section will automatically display them
3. Test all tool links after deployment

## Support

Need help creating a tool? Check out:

- [MDN Web Docs](https://developer.mozilla.org/)
- [Heroicons](https://heroicons.com/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

Happy tool building! 🛠️
