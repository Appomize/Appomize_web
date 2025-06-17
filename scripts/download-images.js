const fs = require('fs');
const https = require('https');
const path = require('path');

const imageUrls = {
  'hero-illustration.svg': 'https://raw.githubusercontent.com/tailwindui/heroicons/master/optimized/24/outline/code-bracket.svg',
  'about-image.jpg': 'https://source.unsplash.com/random/800x600/?office',
  'team-1.jpg': 'https://source.unsplash.com/random/400x400/?businessman',
  'team-2.jpg': 'https://source.unsplash.com/random/400x400/?businesswoman',
  'team-3.jpg': 'https://source.unsplash.com/random/400x400/?developer',
  'team-4.jpg': 'https://source.unsplash.com/random/400x400/?marketing',
  'portfolio/ecommerce.jpg': 'https://source.unsplash.com/random/800x600/?ecommerce',
  'portfolio/fitness-app.jpg': 'https://source.unsplash.com/random/800x600/?fitness',
  'portfolio/marketing.jpg': 'https://source.unsplash.com/random/800x600/?marketing',
  'portfolio/banking.jpg': 'https://source.unsplash.com/random/800x600/?banking',
  'portfolio/restaurant.jpg': 'https://source.unsplash.com/random/800x600/?restaurant',
  'portfolio/delivery.jpg': 'https://source.unsplash.com/random/800x600/?delivery',
  'blog/web-dev-future.jpg': 'https://source.unsplash.com/random/800x600/?coding',
  'blog/accessibility.jpg': 'https://source.unsplash.com/random/800x600/?accessibility',
  'blog/digital-transformation.jpg': 'https://source.unsplash.com/random/800x600/?technology',
  'blog/microservices.jpg': 'https://source.unsplash.com/random/800x600/?server',
  'blog/ai-marketing.jpg': 'https://source.unsplash.com/random/800x600/?artificial-intelligence',
  'blog/mobile-first.jpg': 'https://source.unsplash.com/random/800x600/?mobile'
};

const publicDir = path.join(process.cwd(), 'public');
const imagesDir = path.join(publicDir, 'images');

// Create directories if they don't exist
const createDirectories = () => {
  const directories = [
    imagesDir,
    path.join(imagesDir, 'portfolio'),
    path.join(imagesDir, 'blog')
  ];

  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
};

// Download image
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    const dir = path.dirname(filepath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);

    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(filepath, () => {});
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
};

// Main function
async function downloadAllImages() {
  try {
    createDirectories();
    
    for (const [filename, url] of Object.entries(imageUrls)) {
      await downloadImage(url, filename);
    }

    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
    process.exit(1);
  }
}

downloadAllImages(); 