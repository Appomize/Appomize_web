const https = require('https');
const fs = require('fs');
const path = require('path');

// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // You'll need to get a free API key from unsplash.com
const IMAGES_DIR = path.join(__dirname, '../public/images/portfolio');

// Image configurations for each project
const portfolioImages = [
  {
    filename: 'ecommerce.jpg',
    query: 'ecommerce website dashboard',
    description: 'Modern e-commerce platform interface'
  },
  {
    filename: 'fitness-app.jpg',
    query: 'fitness app mobile interface',
    description: 'Fitness tracking mobile application'
  },
  {
    filename: 'marketing.jpg',
    query: 'digital marketing analytics dashboard',
    description: 'Digital marketing campaign analytics'
  },
  {
    filename: 'banking.jpg',
    query: 'banking dashboard fintech',
    description: 'Modern banking dashboard design'
  },
  {
    filename: 'restaurant.jpg',
    query: 'restaurant booking system',
    description: 'Restaurant reservation platform'
  },
  {
    filename: 'delivery.jpg',
    query: 'delivery tracking app',
    description: 'Delivery tracking mobile application'
  }
];

// Function to download image from Unsplash
async function downloadImage(query, filename) {
  return new Promise((resolve, reject) => {
    const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&w=800&h=600`;
    
    const options = {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    };

    https.get(url, options, (res) => {
      if (res.statusCode === 200) {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const data = JSON.parse(Buffer.concat(chunks).toString());
          const imageUrl = data.urls.regular;
          
          // Download the actual image
          https.get(imageUrl, (imageRes) => {
            const imageChunks = [];
            imageRes.on('data', (chunk) => imageChunks.push(chunk));
            imageRes.on('end', () => {
              const filePath = path.join(IMAGES_DIR, filename);
              fs.writeFileSync(filePath, Buffer.concat(imageChunks));
              console.log(`✅ Downloaded: ${filename}`);
              resolve();
            });
          }).on('error', reject);
        });
      } else {
        reject(new Error(`Failed to get image for ${query}: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Alternative: Download from Pexels (no API key required)
async function downloadFromPexels(query, filename) {
  return new Promise((resolve, reject) => {
    // Using Pexels curated images that match our needs
    const pexelsImages = {
      'ecommerce.jpg': 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'fitness-app.jpg': 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'marketing.jpg': 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'banking.jpg': 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'restaurant.jpg': 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'delivery.jpg': 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    };

    const imageUrl = pexelsImages[filename];
    if (!imageUrl) {
      reject(new Error(`No image URL found for ${filename}`));
      return;
    }

    https.get(imageUrl, (res) => {
      if (res.statusCode === 200) {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const filePath = path.join(IMAGES_DIR, filename);
          fs.writeFileSync(filePath, Buffer.concat(chunks));
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Main function
async function downloadAllImages() {
  console.log('🚀 Starting portfolio image download...');
  
  // Ensure directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  try {
    for (const image of portfolioImages) {
      await downloadFromPexels(image.query, image.filename);
      // Add a small delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log('🎉 All portfolio images downloaded successfully!');
  } catch (error) {
    console.error('❌ Error downloading images:', error.message);
  }
}

// Run the script
downloadAllImages(); 