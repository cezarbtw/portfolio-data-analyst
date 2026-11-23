const fs = require('fs');

const filesToCheck = [
  'index.html',
  'tailwind.config.js',
  'src/index.css',
  'src/App.jsx',
  'src/main.jsx',
  'src/components/Sidebar.jsx',
  'src/components/Hero.jsx',
  'src/components/GoiasMap.jsx',
  'src/components/PixelIcon.jsx',
  'src/components/Projects.jsx',
  'src/components/Experience.jsx',
  'src/components/Skills.jsx',
  'src/components/Contact.jsx',
  'src/components/ImageLightbox.jsx',
  'src/pages/ProjectDetail.jsx',
  'src/data/projects.js',
  'src/components/Footer.jsx',
  'vercel.json'
];

const forbidden = [
  'gradient',
  'blur',
  'backdrop',
  'Inter',
  'Poppins',
  'Geist',
  'Roboto',
  'glow',
  'neon',
  'blob',
  'aurora'
];

let hasErrors = false;
for (const file of filesToCheck) {
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf-8');
  for (const word of forbidden) {
    const regex = new RegExp('\\b' + word + '\\b', 'gi');
    const matches = content.match(regex);
    if (matches) {
      console.log('Found forbidden word "' + word + '" in ' + file + ' (' + matches.length + ' matches)');
      hasErrors = true;
    }
  }
}
if (!hasErrors) {
  console.log('CLEAN: No forbidden keywords found in Phase 2 files!');
}
