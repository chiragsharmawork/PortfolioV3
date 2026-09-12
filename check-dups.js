const fs = require('fs');
const content = fs.readFileSync('src/data/projects.ts', 'utf8');
const matches = content.match(/slug:\s*['"]([^'"]+)['"]/g) || [];
const slugs = matches.map(s => s.split(':')[1].replace(/['"\s]/g, ''));
console.log("Slugs:", slugs);
console.log("Duplicates:", slugs.filter((item, index, arr) => arr.indexOf(item) !== index));
