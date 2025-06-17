const fs = require('fs');
const path = require('path');

// Create an SVG favicon that matches our logo design exactly
const generateSVGFavicon = () => {
  const svg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(4, 4) scale(0.75)">
      <!-- Primary square -->
      <rect width="32" height="32" rx="8" class="primary" fill="#2563EB" transform="rotate(45 16 16)"/>
      <!-- Secondary square -->
      <rect width="32" height="32" rx="8" class="secondary" fill="#3B82F6" transform="rotate(12 16 16)" style="opacity: 0.75"/>
      <!-- Letter A -->
      <text
        x="16"
        y="18"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="white"
        font-family="Arial"
        font-weight="bold"
        font-size="14"
      >A</text>
    </g>
  </svg>`;

  const publicDir = path.join(process.cwd(), 'public');
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svg);
  console.log('Generated favicon.svg');
};

// Main function
function generateFavicons() {
  try {
    generateSVGFavicon();
    console.log('All favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons(); 