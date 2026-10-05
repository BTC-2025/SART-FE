const fs = require('fs');

const files = ['road.tsx', 'sea.tsx', 'air.tsx', 'train.tsx'];

files.forEach(file => {
  const p = `src/components/booking-pages/${file}`;
  let content = fs.readFileSync(p, 'utf8');

  // Remove pathname and router
  content = content.replace(/const pathname = usePathname\(\);\s*/g, '');
  content = content.replace(/const router = useRouter\(\);\s*/g, '');

  // Remove fleet selection states
  content = content.replace(/const \[selectedFleetCategory, setSelectedFleetCategory\] = useState\('All Fleet'\);\s*/g, '');
  content = content.replace(/const \[selectedVehicleType, setSelectedVehicleType\] = useState<string \| null>\(null\);\s*/g, '');

  // Remove globalActiveTab
  content = content.replace(/const \{ activeTab: globalActiveTab, setActiveTab: setGlobalActiveTab \} = useSartStore\(\);\s*/g, '');

  // Remove useEffect for pathname
  content = content.replace(/useEffect\(\(\) => \{[\s\S]*?\}, \[pathname, setGlobalActiveTab\]\);\s*/g, '');

  // Remove handleBackToFleet declaration
  content = content.replace(/const handleBackToFleet = \(\) => \{[\s\S]*?\};\s*/g, '');

  // Remove handleSelectFleetItem
  content = content.replace(/const handleSelectFleetItem = \(item: any\) => \{[\s\S]*?\};\s*/g, '');

  // We should also remove `globalActiveTab === 'booking' ? 'active' : ''` from the return JSX, 
  // because globalActiveTab is no longer defined here.
  // We can just pass 'active' or remove the globalActiveTab dependency.
  content = content.replace(/globalActiveTab === 'booking' \? 'active' : ''/g, "'active'");
  
  // Also fix the initial section tag. Parent renders `<section className="... active">` and the child doesn't need to wrap it in ANOTHER section.
  // Actually, wait, parent renders the `<section>`. We shouldn't duplicate the `<section>`. But let's just leave it as `tab-screen active` for now to avoid breaking styling.

  fs.writeFileSync(p, content);
});
