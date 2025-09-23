#!/usr/bin/env node

/**
 * Development helper to inject OpenAI API key into virtualiser-tool.html
 * WARNING: This is for LOCAL DEVELOPMENT ONLY. Never commit the modified file.
 * The API key will be visible in the HTML source.
 */

const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const htmlPath = path.join(__dirname, 'virtualiser-tool.html');

// Read .env file
if (!fs.existsSync(envPath)) {
    console.error('❌ .env file not found');
    process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/OPEN_API_KEY=(.+)/);

if (!apiKeyMatch) {
    console.error('❌ OPEN_API_KEY not found in .env file');
    process.exit(1);
}

const apiKey = apiKeyMatch[1].trim();

// Read HTML file
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Replace the placeholder with the actual API key
const placeholder = 'placeholder="sk-..."';
const replacement = `value="${apiKey}" placeholder="sk-..."`;

if (htmlContent.includes(replacement)) {
    console.log('✅ API key already injected');
    process.exit(0);
}

htmlContent = htmlContent.replace(placeholder, replacement);

// Write back to file
fs.writeFileSync(htmlPath, htmlContent);

console.log('✅ API key injected into virtualiser-tool.html');
console.log('⚠️  WARNING: This file now contains your API key in plain text!');
console.log('⚠️  DO NOT commit this file to version control!');
console.log('🔄 Run this script again after pulling updates to re-inject the key');