// This script will generate placeholder images for the website
// Run with: node scripts/generate-placeholders.js

const fs = require('fs');
const https = require('https');
const path = require('path');

// Directory to save images
const outputDir = path.join(__dirname, '../public/images/sections');

// Make sure the directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Define image placeholders to generate
const placeholders = [
  {
    name: 'why',
    width: 1200,
    height: 800,
    text: '교육 필요성 이미지',
    bgColor: 'f8fafc',
    textColor: '64748b'
  },
  {
    name: 'curriculum',
    width: 1200,
    height: 800,
    text: '교육 과정 이미지',
    bgColor: 'f1f5f9',
    textColor: '64748b'
  },
  {
    name: 'target-audience',
    width: 1200,
    height: 800,
    text: '교육 대상 이미지',
    bgColor: 'f8fafc',
    textColor: '64748b'
  },
  {
    name: 'education-method',
    width: 1200,
    height: 800,
    text: '교육 방식 이미지',
    bgColor: 'f1f5f9',
    textColor: '64748b'
  },
  {
    name: 'instructors',
    width: 1200,
    height: 800,
    text: '강사진 이미지',
    bgColor: 'f8fafc',
    textColor: '64748b'
  },
  {
    name: 'reviews',
    width: 1200,
    height: 800,
    text: '후기 이미지',
    bgColor: 'f1f5f9',
    textColor: '64748b'
  },
  {
    name: 'faq',
    width: 1200,
    height: 800,
    text: 'FAQ 이미지',
    bgColor: 'f8fafc',
    textColor: '64748b'
  },
  {
    name: 'application-process',
    width: 1200,
    height: 800,
    text: '신청 절차 이미지',
    bgColor: 'f1f5f9',
    textColor: '64748b'
  },
  {
    name: 'contact',
    width: 1200,
    height: 800,
    text: '문의 이미지',
    bgColor: 'f8fafc',
    textColor: '64748b'
  }
];

// Function to download an image from URL
function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${outputPath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(outputPath, () => {}); // Delete the file if there was an error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Generate and download all placeholders
async function generateAll() {
  for (const placeholder of placeholders) {
    const { name, width, height, text, bgColor, textColor } = placeholder;

    // Encode text for URL
    const encodedText = encodeURIComponent(text);

    // Generate placeholder URL
    const url = `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;

    // Output path
    const outputPath = path.join(outputDir, `${name}.jpg`);

    try {
      await downloadImage(url, outputPath);
    } catch (error) {
      console.error(`Error downloading ${name}:`, error.message);
    }
  }

  console.log('Placeholder generation complete!');
}

// Run the generation
generateAll();
