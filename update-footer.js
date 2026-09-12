const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
code = code.replace('<li><Link href="/faq"', '<li><Link href="/notes" className="hover:text-primary transition-colors">Notes</Link></li>\n              <li><Link href="/faq"');
fs.writeFileSync('src/components/layout/Footer.tsx', code);
