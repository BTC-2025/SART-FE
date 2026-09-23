const fs = require('fs');

const code = fs.readFileSync('recovered_index.html', 'utf16le');
const lines = code.split('\n');

let storeTab = [];
let walletTab = [];
let profileTab = [];
let currentTab = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('<!-- 2. STORE TAB -->')) {
    currentTab = 'store';
  } else if (line.includes('<!-- 3. AI COPILOT TAB -->')) {
    currentTab = null;
  } else if (line.includes('<!-- 4. WALLET TAB -->')) {
    currentTab = 'wallet';
  } else if (line.includes('<!-- 5. PROFILE TAB -->')) {
    currentTab = 'profile';
  } else if (line.includes('<!-- 6. GLOBAL FOOTER NAV -->')) {
    currentTab = null;
  }

  if (currentTab === 'store') storeTab.push(line);
  if (currentTab === 'wallet') walletTab.push(line);
  if (currentTab === 'profile') profileTab.push(line);
}

function saveTab(name, arr) {
  const html = arr.join('\n').replace(/`/g, '\\`');
  const tsx = `
'use client';
import React, { useEffect, useState } from 'react';
import './\${name}.css'; 

export default function \${name}() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div dangerouslySetInnerHTML={{ __html: \`\${html}\` }} />
  );
}
`;
  fs.writeFileSync(`src/components/tabs/${name}.tsx`, tsx);
}

saveTab('StoreTab', storeTab);
saveTab('WalletTab', walletTab);
saveTab('ProfileTab', profileTab);
console.log('Tabs recovered successfully!');
