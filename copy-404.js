import fs from 'fs';

try {
  fs.copyFileSync('dist/index.html', 'dist/404.html');
  console.log('Successfully copied index.html to 404.html for GitHub Pages routing!');
} catch (err) {
  console.error('Failed to copy index.html to 404.html:', err);
  process.exit(1);
}
