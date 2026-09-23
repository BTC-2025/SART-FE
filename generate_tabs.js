const fs = require('fs');

const code = fs.readFileSync('recovered_index_utf8.html', 'utf8');
const lines = code.split('\n');

let storeTab = [];
let walletTab = [];
let profileTab = [];
let currentTab = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('<!-- 3. PREMIUM SART STORE TAB -->')) {
    currentTab = 'store';
  } else if (line.includes('<!-- 3. AI ASSISTANT TAB -->')) {
    currentTab = null;
  } else if (line.includes('<!-- 4. SUPER WALLET TAB -->')) {
    currentTab = 'wallet';
  } else if (line.includes('<!-- 5. PROFILE TAB (Premium Redesign) -->')) {
    currentTab = 'profile';
  } else if (line.includes('</div><!-- End Web App Layout -->')) {
    currentTab = null;
  }

  if (currentTab === 'store') storeTab.push(line);
  if (currentTab === 'wallet') walletTab.push(line);
  if (currentTab === 'profile') profileTab.push(line);
}

function saveTab(name, arr) {
  const html = arr.join('\n').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  const tsx = `
'use client';
import React, { useEffect, useState } from 'react';
import './${name}.css'; 

export default function ${name}() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div dangerouslySetInnerHTML={{ __html: \`${html}\` }} />
  );
}
`;
  fs.writeFileSync(`src/components/tabs/${name}.tsx`, tsx);
}

saveTab('StoreTab', storeTab);
saveTab('WalletTab', walletTab);
saveTab('ProfileTab', profileTab);
console.log('Tabs generated successfully!');
