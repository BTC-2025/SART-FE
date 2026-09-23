module.exports=[47283,(a,b,c)=>{b.exports=a.r(96665)},40777,a=>{"use strict";let b,c,d,e;var f,g=a.i(87924),h=a.i(72131),i=a.i(47283);let j=a=>{let b,c=new Set,d=(a,d)=>{let e="function"==typeof a?a(b):a;if(!Object.is(e,b)){let a=b;b=(null!=d?d:"object"!=typeof e||null===e)?e:Object.assign({},b,e),c.forEach(c=>c(b,a))}},e=()=>b,f={setState:d,getState:e,getInitialState:()=>g,subscribe:a=>(c.add(a),()=>c.delete(a))},g=b=a(d,e,f);return f},k=a=>b=>{try{let c=a(b);if(c instanceof Promise)return c;return{then:a=>k(a)(c),catch(a){return this}}}catch(a){return{then(a){return this},catch:b=>k(b)(a)}}},l={wallet:{balance:15e3,points:2450,cashback:350,transactions:[{id:"tx-001",title:"Airport Taxi Booking",amount:800,date:new Date(Date.now()-72e5).toLocaleString(),isCredit:!1,category:"Ride"},{id:"tx-002",title:"Tire Air Replacement Kit",amount:3500,date:new Date(Date.now()-864e5).toLocaleString(),isCredit:!1,category:"Store"},{id:"tx-003",title:"Visa Top-up Loaded",amount:1e4,date:new Date(Date.now()-1728e5).toLocaleString(),isCredit:!0,category:"Deposit"}]},bookings:[{id:"bk-001",title:"Tata Nexon EV Rental",type:"rental",dateTime:new Date(Date.now()+1728e5).toLocaleString(),details:"Pickup: 10:00 AM • 3 Days Duration",status:"Active",cost:4500},{id:"bk-002",title:"Tire Diagnostics & Balance",type:"mechanic",dateTime:new Date(Date.now()-2592e5).toLocaleString(),details:"Assigned: Rajesh Kumar • Completed",status:"Completed",cost:1200}],cart:[],wishlist:[],notifications:[{id:"notif-1",title:"Gold Tier Perks Unlocked!",desc:"Enjoy free airport terminal lounge access & priority dispatch.",read:!1,date:"Today"},{id:"notif-2",title:"EV Battery Status Optimized",desc:"Tata Nexon EV charge finished cycle. Ready for commutes.",read:!1,date:"Yesterday"},{id:"notif-3",title:"Toll Refund Processed",desc:"₹120 refund credited for NH-44 Fastag anomaly.",read:!0,date:"3 days ago"}],location:"Indiranagar, Bengaluru",activeBookingId:null},m=(d=(f=(b=a=>({...l,addTransaction:b=>a(a=>({wallet:{...a.wallet,transactions:[b,...a.wallet.transactions]}})),updateBalance:(b,c)=>a(a=>{let d=c?a.wallet.balance+b:a.wallet.balance-b;return{wallet:{...a.wallet,balance:d}}}),addBooking:b=>a(a=>({bookings:[b,...a.bookings],activeBookingId:b.id})),addToCart:b=>a(a=>a.cart.find(a=>a.id===b.id)?{cart:a.cart.map(a=>a.id===b.id?{...a,quantity:a.quantity+1}:a)}:{cart:[...a.cart,b]}),removeFromCart:b=>a(a=>({cart:a.cart.filter(a=>a.id!==b)})),clearCart:()=>a({cart:[]}),toggleWishlist:b=>a(a=>({wishlist:a.wishlist.includes(b)?a.wishlist.filter(a=>a!==b):[...a.wishlist,b]})),setLocation:b=>a({location:b}),setActiveBookingId:b=>a({activeBookingId:b})}),c={name:"sart-storage-v2",partialize:a=>({wallet:a.wallet,bookings:a.bookings,cart:a.cart,wishlist:a.wishlist,location:a.location})},(a,d,e)=>{let f,g={storage:function(a){let b;try{b=a()}catch(a){return}return{getItem:a=>{var c;let d=a=>null===a?null:JSON.parse(a,void 0),e=null!=(c=b.getItem(a))?c:null;return e instanceof Promise?e.then(d):d(e)},setItem:(a,c)=>b.setItem(a,JSON.stringify(c,void 0)),removeItem:a=>b.removeItem(a)}}(()=>window.localStorage),partialize:a=>a,version:0,merge:(a,b)=>({...b,...a}),...c},h=!1,i=0,j=new Set,l=new Set,m=g.storage;if(!m)return b((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${g.name}', the given storage is currently unavailable.`),a(...b)});let n=()=>{let a=g.partialize({...d()});return m.setItem(g.name,{state:a,version:g.version})},o=e.setState;e.setState=(a,b)=>(o(a,b),n());let p=b((...b)=>(a(...b),n()));e.getInitialState=()=>p;let q=()=>{var b,c;if(!m)return;let e=++i;h=!1,j.forEach(a=>{var b;return a(null!=(b=d())?b:p)});let o=(null==(c=g.onRehydrateStorage)?void 0:c.call(g,null!=(b=d())?b:p))||void 0;return k(m.getItem.bind(m))(g.name).then(a=>{if(a)if("number"!=typeof a.version||a.version===g.version)return[!1,a.state];else{if(g.migrate){let b=g.migrate(a.state,a.version);return b instanceof Promise?b.then(a=>[!0,a]):[!0,b]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(b=>{var c;if(e!==i)return;let[h,j]=b;if(a(f=g.merge(j,null!=(c=d())?c:p),!0),h)return n()}).then(()=>{e===i&&(null==o||o(d(),void 0),f=d(),h=!0,l.forEach(a=>a(f)))}).catch(a=>{e===i&&(null==o||o(void 0,a))})};return e.persist={setOptions:a=>{g={...g,...a},a.storage&&(m=a.storage)},clearStorage:()=>{++i,null==m||m.removeItem(g.name)},getOptions:()=>g,rehydrate:()=>q(),hasHydrated:()=>h,onHydrate:a=>(j.add(a),()=>{j.delete(a)}),onFinishHydration:a=>(l.add(a),()=>{l.delete(a)})},g.skipHydration||q(),f||p}))?j(f):j,Object.assign(e=a=>(function(a,b=a=>a){let c=h.default.useSyncExternalStore(a.subscribe,h.default.useCallback(()=>b(a.getState()),[a,b]),h.default.useCallback(()=>b(a.getInitialState()),[a,b]));return h.default.useDebugValue(c),c})(d,a),d),e);function n(){let{wallet:a}=m(),[b,c]=(0,h.useState)(!1),[d,e]=(0,h.useState)(!1),[f,i]=(0,h.useState)(""),[j,k]=(0,h.useState)("Chennai"),l=[{title:"Road Ride Booking",kw:["ride","taxi","car","cab","economy","suv"],modal:"modal-ride",icon:"fa-car",color:"var(--primary)"},{title:"Logistics Cargo Truck",kw:["carrier","truck","logistics","delivery","cargo"],modal:"modal-carrier",icon:"fa-truck",color:"var(--secondary)"},{title:"Hourly Vehicle Rental",kw:["rental","key","nexon","himalayan","bike","motorcycle"],modal:"modal-rental",icon:"fa-key",color:"var(--accent)"},{title:"Personal Chauffeur Hire",kw:["driver","chauffeur","verified"],modal:"modal-drivers",icon:"fa-user-tie",color:"var(--warning)"},{title:"Shared Parking Spot",kw:["parking","slot","ev slot"],modal:"modal-parking",icon:"fa-square-p",color:"#8b5cf6"},{title:"Mechanic Diagnostic Visit",kw:["mechanic","repair","wheel","overhaul"],modal:"modal-mechanic",icon:"fa-screwdriver-wrench",color:"#64748b"},{title:"Ferry & Yacht Sea Booking",kw:["sea","ferry","yacht","maritime","boat","water"],modal:"modal-sea",icon:"fa-ship",color:"var(--success)"},{title:"Flight & Heli Air Booking",kw:["air","flight","helicopter","chopper","plane","sky"],modal:"modal-air",icon:"fa-plane",color:"var(--warning)"},{title:"Train Vande Bharat Book",kw:["train","express","metro","railway","vande","rajdhani"],modal:"modal-train",icon:"fa-train",color:"#c864ff"}];return(0,h.useEffect)(()=>{let a=a=>{k(a.detail)};return window.addEventListener("updateLocation",a),()=>window.removeEventListener("updateLocation",a)},[]),(0,g.jsxs)("header",{className:"web-navbar",children:[(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,g.jsxs)("div",{className:"nav-brand",onClick:()=>console.log("Home"),children:[(0,g.jsx)("i",{className:"fa-solid fa-compass-drafting brand-icon"}),(0,g.jsx)("span",{children:"SART"}),(0,g.jsx)("span",{className:"brand-badge",children:"UNIVERSAL"})]}),(0,g.jsxs)("div",{className:"location-nav-btn",style:{flexShrink:0,alignSelf:"center"},onClick:()=>{},children:[(0,g.jsx)("i",{className:"fa-solid fa-location-dot"}),(0,g.jsx)("span",{id:"nav-location-txt",children:j}),(0,g.jsx)("i",{className:"fa-solid fa-chevron-down",style:{fontSize:"10px"}})]})]}),(0,g.jsxs)("nav",{className:"nav-links",children:[(0,g.jsx)("div",{className:"nav-link active",id:"nav-btn-home",onClick:()=>window.switchTab("home"),children:(0,g.jsx)("span",{children:"Home"})}),(0,g.jsx)("div",{className:"nav-link",id:"nav-btn-store",onClick:()=>window.switchTab("store"),children:(0,g.jsx)("span",{children:"Store"})}),(0,g.jsx)("div",{className:"nav-link",id:"nav-btn-booking",onClick:()=>window.switchTab("booking"),children:(0,g.jsx)("span",{children:"Booking"})})]}),d&&(0,g.jsxs)("div",{className:"expanded-search-container",children:[(0,g.jsx)("i",{className:"fa-solid fa-magnifying-glass search-icon-left"}),(0,g.jsx)("input",{type:"text",className:"expanded-search-input",placeholder:"Search...",autoFocus:!0,value:f,onChange:a=>i(a.target.value),onBlur:()=>setTimeout(()=>{e(!1),i("")},200)}),f&&(0,g.jsx)("div",{className:"search-dropdown",children:l.filter(a=>a.title.toLowerCase().includes(f.toLowerCase())||a.kw.some(a=>a.includes(f.toLowerCase()))).length>0?l.filter(a=>a.title.toLowerCase().includes(f.toLowerCase())||a.kw.some(a=>a.includes(f.toLowerCase()))).map(a=>(0,g.jsxs)("div",{className:"booking-card",onClick:()=>{window.openModal(a.modal),e(!1),i("")},children:[(0,g.jsxs)("div",{className:"booking-card-left",children:[(0,g.jsx)("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",color:a.color},children:(0,g.jsx)("i",{className:`fa-solid ${a.icon}`})}),(0,g.jsxs)("div",{className:"booking-card-text",children:[(0,g.jsx)("h4",{style:{margin:0,fontSize:"13px",color:"#fff"},children:a.title}),(0,g.jsx)("p",{style:{margin:"2px 0 0 0",fontSize:"9px",textTransform:"uppercase",color:"var(--text-secondary)"},children:"Shortcut trigger"})]})]}),(0,g.jsx)("i",{className:"fa-solid fa-chevron-right",style:{fontSize:"10px",color:"var(--text-secondary)"}})]},a.title)):(0,g.jsx)("div",{style:{textAlign:"center",color:"var(--text-secondary)",padding:"15px",fontSize:"12px"},children:"No matching modules found in directory."})})]}),(0,g.jsxs)("div",{className:"nav-controls",children:[(0,g.jsx)("div",{className:"ctrl-btn",style:{visibility:d?"hidden":"visible"},onClick:()=>e(!0),children:(0,g.jsx)("i",{className:"fa-solid fa-magnifying-glass"})}),(0,g.jsx)("div",{className:"ctrl-btn",onClick:()=>window.openModal("modal-liked"),children:(0,g.jsx)("i",{className:"fa-solid fa-heart"})}),(0,g.jsx)("div",{className:"ctrl-btn",onClick:()=>window.openModal("modal-bookings-registry"),children:(0,g.jsx)("i",{className:"fa-solid fa-bag-shopping"})}),(0,g.jsxs)("div",{className:"profile-nav-btn",onClick:()=>c(!b),style:{position:"relative"},children:[(0,g.jsx)("i",{className:"fa-solid fa-circle-user"}),(0,g.jsx)("span",{children:"Alex Carter"}),(0,g.jsx)("i",{className:"fa-solid fa-chevron-down",style:{fontSize:"9px"}})]}),b&&(0,g.jsxs)("div",{className:"profile-dropdown-menu show",style:{width:"320px",padding:"24px",borderRadius:"28px",textAlign:"center",background:"#ffffff",border:"1px solid #e5e7eb",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",color:"#000000"},children:[(0,g.jsxs)("div",{style:{position:"relative",display:"inline-block",marginBottom:"12px"},children:[(0,g.jsx)("div",{style:{width:"80px",height:"80px",borderRadius:"50%",background:"#0b57d0",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"36px",fontWeight:500,margin:"0 auto"},children:"V"}),(0,g.jsx)("div",{style:{position:"absolute",bottom:0,right:0,background:"white",color:"black",width:"26px",height:"26px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"},children:(0,g.jsx)("i",{className:"fa-solid fa-camera"})})]}),(0,g.jsx)("h3",{style:{margin:0,fontSize:"18px",fontWeight:600,color:"#000000"},children:"vinothkumar"}),(0,g.jsx)("p",{style:{margin:"4px 0 16px",fontSize:"14px",color:"#4b5563"},children:"gmvinoth@bnxmail.com"}),(0,g.jsxs)("button",{onClick:()=>console.log("Manage Account"),style:{background:"transparent",border:"1px solid #d1d5db",color:"#000000",borderRadius:"24px",padding:"10px 20px",fontSize:"14px",fontWeight:500,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"8px",marginBottom:"20px",width:"auto"},children:[(0,g.jsx)("i",{className:"fa-solid fa-user-gear"})," Manage your account"]}),(0,g.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginBottom:"20px"},children:[(0,g.jsxs)("button",{onClick:()=>{document.body.classList.add("light-theme"),localStorage.setItem("sart-theme","light")},style:{background:"#f3f4f6",border:"none",color:"#000000",padding:"8px 16px",borderRadius:"12px",fontSize:"13px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[(0,g.jsx)("i",{className:"fa-solid fa-sun"})," Light"]}),(0,g.jsxs)("button",{onClick:()=>{document.body.classList.remove("light-theme"),localStorage.setItem("sart-theme","dark")},style:{background:"#f3f4f6",border:"none",color:"#000000",padding:"8px 16px",borderRadius:"12px",fontSize:"13px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[(0,g.jsx)("i",{className:"fa-solid fa-moon"})," Dark"]})]}),(0,g.jsx)("div",{style:{borderTop:"1px solid #e5e7eb",margin:"0 -24px 10px"}}),(0,g.jsxs)("a",{className:"dropdown-item",style:{padding:"12px 24px",textAlign:"left",fontSize:"14px",fontWeight:500,color:"#000000",display:"flex",alignItems:"center",gap:"12px"},onClick:()=>console.log("Add account"),children:[(0,g.jsx)("i",{className:"fa-solid fa-user-plus",style:{fontSize:"18px",color:"#4b5563"}})," Add another account"]}),(0,g.jsxs)("a",{className:"dropdown-item signout-btn",style:{padding:"12px 24px",textAlign:"left",fontSize:"14px",fontWeight:500,color:"#000000",display:"flex",alignItems:"center",gap:"12px"},onClick:()=>{console.log("Sign out"),c(!1)},children:[(0,g.jsx)("i",{className:"fa-solid fa-arrow-right-from-bracket",style:{fontSize:"18px",color:"#4b5563"}})," Sign out of this account"]})]})]})]})}function o(){return(0,g.jsxs)("div",{className:"web-subnavbar",children:[(0,g.jsx)("div",{className:"subnav-links"}),(0,g.jsxs)("div",{className:"subnav-actions",style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,g.jsxs)("button",{className:"subnav-btn btn-vendor",onClick:()=>alert("SART Vendor Registration Panel loading..."),children:[(0,g.jsx)("i",{className:"fa-solid fa-store"})," VENDOR"]}),(0,g.jsxs)("button",{className:"subnav-btn btn-wallet",onClick:()=>window.switchTab("wallet"),children:[(0,g.jsx)("i",{className:"fa-solid fa-wallet"})," ₹15,000.00"]}),(0,g.jsx)("div",{className:"ctrl-btn",onClick:()=>alert("Help and Support"),children:(0,g.jsx)("i",{className:"fa-solid fa-headset"})}),(0,g.jsx)("div",{className:"ctrl-btn",onClick:()=>window.switchTab("profile"),children:(0,g.jsx)("i",{className:"fa-solid fa-gear"})})]})]})}let p=[{title:"Micro-Mobility & Last-Mile",vehicles:[{id:"bike",name:"Bike / Moto",icon:"fa-motorcycle",color:"#ff6b6b",price:250},{id:"escooter",name:"Electric Scooter",icon:"fa-bolt",color:"#10b981",price:150},{id:"auto",name:"Auto-Rickshaw",icon:"fa-taxi",color:"#f59e0b",price:350},{id:"erickshaw",name:"E-Rickshaw",icon:"fa-taxi",color:"#34d399",price:200}]},{title:"Economy & Premium Cabs",vehicles:[{id:"micro",name:"Micro Hatchback",icon:"fa-car-side",color:"#3b82f6",price:800},{id:"sedan",name:"Standard Sedan",icon:"fa-car",color:"#2563eb",price:1200},{id:"exec",name:"Executive Sedan",icon:"fa-briefcase",color:"#1d4ed8",price:1800},{id:"luxury",name:"Luxury Sedan",icon:"fa-gem",color:"#8b5cf6",price:3500}]},{title:"Multi-Utility & SUVs",vehicles:[{id:"csuv",name:"Compact SUV",icon:"fa-truck-pickup",color:"#ec4899",price:1500},{id:"mpv",name:"Standard MPV",icon:"fa-van-shuttle",color:"#f43f5e",price:2200},{id:"psuv",name:"Premium SUV",icon:"fa-crown",color:"#eab308",price:4500},{id:"lsuv",name:"Large SUV / XL",icon:"fa-truck-monster",color:"#f97316",price:5500}]},{title:"Minivans & Maxi-Cabs",vehicles:[{id:"minivan",name:"Standard Minivan",icon:"fa-shuttle-van",color:"#14b8a6",price:6500},{id:"maxicab",name:"Maxi-Cab",icon:"fa-bus-simple",color:"#06b6d4",price:8500},{id:"microcoach",name:"Luxury Micro-Coach",icon:"fa-bus",color:"#0ea5e9",price:12e3}]},{title:"Buses, Coaches & Mass Transit",vehicles:[{id:"minibus",name:"Mini-Bus",icon:"fa-bus-simple",color:"#6366f1",price:18e3},{id:"citybus",name:"Standard City Bus",icon:"fa-bus",color:"#8b5cf6",price:25e3},{id:"sleeper",name:"Sleeper Coach",icon:"fa-bed",color:"#a855f7",price:35e3},{id:"doubledecker",name:"Double-Decker Bus",icon:"fa-bus",color:"#d946ef",price:45e3},{id:"articulated",name:"Articulated Bus",icon:"fa-truck-front",color:"#f43f5e",price:6e4}]}],q=[{title:"Micro-Watercraft",vehicles:[{id:"jetski",name:"Jet Ski",icon:"fa-water",color:"#0ea5e9",price:1500},{id:"skiff",name:"Small Motorboat",icon:"fa-sailboat",color:"#38bdf8",price:3500}]},{title:"Private Charters & Speedboats",vehicles:[{id:"speedboat",name:"Standard Speedboat",icon:"fa-ship",color:"#0284c7",price:8500},{id:"cabin",name:"Premium Cabin Cruiser",icon:"fa-anchor",color:"#0369a1",price:15e3},{id:"smallyacht",name:"Small Luxury Yacht",icon:"fa-champagne-glasses",color:"#eab308",price:45e3}]},{title:"Mid-Sized Passenger Craft",vehicles:[{id:"watertaxi",name:"Commercial Water Taxi",icon:"fa-ferry",color:"#0d9488",price:25e3},{id:"catamaran",name:"Sailing Catamaran",icon:"fa-sailboat",color:"#0f766e",price:65e3},{id:"partyyacht",name:"Luxury Party Yacht",icon:"fa-martini-glass",color:"#db2777",price:12e4}]},{title:"Regional Marine Transit",vehicles:[{id:"hydrofoil",name:"Hydrofoil / Fast Ferry",icon:"fa-ship",color:"#4f46e5",price:85e3},{id:"riverboat",name:"Large Sightseeing River Boat",icon:"fa-camera",color:"#7c3aed",price:15e4}]},{title:"Mass Marine Transit & Ships",vehicles:[{id:"roro",name:"Ro-Ro Passenger Ferry",icon:"fa-ferry",color:"#4338ca",price:35e4},{id:"cruise",name:"Ocean-Going Cruise Liner",icon:"fa-ship",color:"#be123c",price:25e5}]}],r=[{title:"Urban Air Mobility & Light Choppers",vehicles:[{id:"evtol",name:"eVTOL / Air Taxi",icon:"fa-helicopter",color:"#10b981",price:25e3},{id:"lightchopper",name:"Light Helicopter",icon:"fa-helicopter",color:"#059669",price:45e3}]},{title:"Regional Turboprops & Twin-Engines",vehicles:[{id:"utilityturbo",name:"Utility Turboprop",icon:"fa-plane",color:"#f59e0b",price:12e4},{id:"twinturbo",name:"Twin-Engine Turboprop",icon:"fa-plane-departure",color:"#d97706",price:25e4}]},{title:"Private Executive Jets",vehicles:[{id:"lightjet",name:"Light Private Jet",icon:"fa-plane-up",color:"#8b5cf6",price:45e4},{id:"heavyjet",name:"Heavy Ultra-Long-Range Jet",icon:"fa-gem",color:"#7c3aed",price:125e4}]},{title:"Regional Airliners & Corporate Shuttles",vehicles:[{id:"largetwin",name:"Large Twin-Turboprop",icon:"fa-plane",color:"#3b82f6",price:65e4},{id:"regionaljet",name:"Regional Jet Airliner",icon:"fa-plane-departure",color:"#2563eb",price:15e5}]},{title:"Commercial Group Charters",vehicles:[{id:"narrowbody",name:"Narrow-Body Charter",icon:"fa-plane-arrival",color:"#e11d48",price:35e5},{id:"widebody",name:"Wide-Body Mega-Charter",icon:"fa-globe",color:"#be123c",price:85e5}]}],s=[...p.map(a=>a.vehicles).flat(),...q.map(a=>a.vehicles).flat(),...r.map(a=>a.vehicles).flat()];function t({isOpen:a,onClose:b}){let[c,d]=(0,h.useState)(1),[e,f]=(0,h.useState)("micro"),[i,j]=(0,h.useState)("Current Location"),[k,l]=(0,h.useState)(""),[m,n]=(0,h.useState)(""),[o,u]=(0,h.useState)("");if(!a)return null;let v=()=>{d(1),b()},w=s.find(a=>a.id===e),x=(a,b,c)=>(0,g.jsxs)("div",{style:{marginBottom:"32px"},children:[(0,g.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"800",color:"#111827",margin:"24px 0 16px 0",paddingBottom:"8px",borderBottom:"2px solid #e5e7eb",display:"flex",alignItems:"center",gap:"8px"},children:[(0,g.jsx)("i",{className:`fa-solid ${b}`})," ",a]}),c.map((a,b)=>(0,g.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,g.jsx)("h3",{style:{fontSize:"14px",fontWeight:"700",color:"#4b5563",marginBottom:"16px"},children:a.title}),(0,g.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))",gap:"16px"},children:a.vehicles.map(a=>(0,g.jsxs)("div",{onClick:()=>{f(a.id),d(2)},style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"16px 12px",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)",transition:"all 0.2s ease"},onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-4px)",a.currentTarget.style.boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,g.jsx)("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:a.color+"20",color:a.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",marginBottom:"12px"},children:(0,g.jsx)("i",{className:`fa-solid ${a.icon}`})}),(0,g.jsx)("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1f2937",textAlign:"center",lineHeight:"1.2"},children:a.name})]},a.id))})]},b))]});return(0,g.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3,background:"rgba(0,0,0,0.6)"},onClick:v,children:(0,g.jsxs)("div",{className:"modal-sheet centered-modal",style:{maxWidth:"900px",width:"95%",height:"90vh",display:"flex",flexDirection:"column",backgroundColor:"#f9fafb",borderRadius:"24px",overflow:"hidden"},onClick:a=>a.stopPropagation(),children:[(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 24px",background:"#ffffff",borderBottom:"1px solid #e5e7eb"},children:[(0,g.jsxs)("div",{style:{fontSize:"22px",fontWeight:"800",color:"#111827",display:"flex",alignItems:"center",gap:"12px"},children:[(0,g.jsx)("i",{className:"fa-solid fa-compass",style:{color:"#0ea5e9"}})," Omni-Transit Booking"]}),(0,g.jsx)("button",{onClick:v,style:{background:"#f3f4f6",border:"none",width:"36px",height:"36px",borderRadius:"50%",color:"#4b5563",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:(0,g.jsx)("i",{className:"fa-solid fa-xmark"})})]}),1===c&&(0,g.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"24px"},children:[x("ROAD TRANSIT","fa-car",p),x("SEA / WATER TRANSIT","fa-ship",q),x("AIR TRANSIT","fa-plane",r)]}),2===c&&(0,g.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"32px"},children:[(0,g.jsxs)("button",{onClick:()=>d(1),style:{background:"transparent",border:"none",color:"#6b7280",cursor:"pointer",fontSize:"15px",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",padding:"0 0 24px 0"},children:[(0,g.jsx)("i",{className:"fa-solid fa-arrow-left"})," Back to Fleet Options"]}),w&&(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px",background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",marginBottom:"32px",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,g.jsx)("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:w.color+"20",color:w.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px"},children:(0,g.jsx)("i",{className:`fa-solid ${w.icon}`})}),(0,g.jsxs)("div",{style:{flex:1},children:[(0,g.jsx)("h3",{style:{margin:0,fontSize:"20px",fontWeight:"800",color:"#111827"},children:w.name}),(0,g.jsx)("p",{style:{margin:"4px 0 0 0",fontSize:"14px",color:"#6b7280"},children:"Selected Vehicle"})]}),(0,g.jsxs)("div",{style:{fontSize:"24px",fontWeight:"800",color:"#111827"},children:["₹",w.price.toLocaleString("en-IN")]})]}),(0,g.jsxs)("div",{style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"24px"},children:[(0,g.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Pickup Location"}),(0,g.jsx)("input",{type:"text",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},placeholder:"Enter pickup address",value:i,onChange:a=>j(a.target.value)})]}),(0,g.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Dropoff Destination"}),(0,g.jsx)("input",{type:"text",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},placeholder:"Enter destination address",value:k,onChange:a=>l(a.target.value)})]}),(0,g.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"32px"},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Date"}),(0,g.jsx)("input",{type:"date",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},value:m,onChange:a=>n(a.target.value)})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Time"}),(0,g.jsx)("input",{type:"time",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},value:o,onChange:a=>u(a.target.value)})]})]}),(0,g.jsx)("button",{onClick:()=>{let a="Vehicle",b=800,c=s.find(a=>a.id===e);c&&(a=c.name,b=c.price);let d=`${a} • Premium Chauffeur`;(m||o)&&(d+=` • Scheduled: ${m} ${o}`.trim()),window.executeGenericBooking&&window.executeGenericBooking("ride",`Booking: ${i} to ${k||"Destination"}`,d,b,{from:i,to:k,date:m,time:o}),v()},style:{width:"100%",padding:"16px",borderRadius:"12px",background:"#0ea5e9",color:"#ffffff",border:"none",fontSize:"16px",fontWeight:"700",cursor:"pointer",transition:"background 0.2s"},onMouseEnter:a=>a.currentTarget.style.background="#0284c7",onMouseLeave:a=>a.currentTarget.style.background="#0ea5e9",children:"Confirm Booking"})]})]})]})})}let u=[{title:"Bikes, Trucks & Lorries",vehicles:[{id:"c-bike",name:"Delivery Bike / Moto",icon:"fa-motorcycle",color:"#ff6b6b",price:150},{id:"c-auto",name:"Electric Three-Wheeler Cargo",icon:"fa-truck-fast",color:"#f59e0b",price:400},{id:"c-minitruck",name:"Small Commercial Mini-Truck",icon:"fa-truck-pickup",color:"#3b82f6",price:900},{id:"c-lcv",name:"Light Commercial Lorry (LCV)",icon:"fa-truck",color:"#2563eb",price:2500},{id:"c-hcv",name:"Heavy Rigid Lorry (HCV)",icon:"fa-truck-front",color:"#8b5cf6",price:8e3},{id:"c-trailer",name:"Multi-Axle Semi-Trailer",icon:"fa-truck-moving",color:"#ec4899",price:15e3}]}],v=[{title:"Marine Cargo & Freight",vehicles:[{id:"c-barge",name:"Small Coastal Cargo Barge",icon:"fa-sailboat",color:"#0ea5e9",price:25e3},{id:"c-general",name:"General Cargo Ship",icon:"fa-ship",color:"#0284c7",price:15e4},{id:"c-feeder",name:"Feedership Container Ship",icon:"fa-anchor",color:"#4f46e5",price:5e5},{id:"c-mega",name:"Mega Container Ship",icon:"fa-ferry",color:"#be123c",price:25e5}]}],w=[{title:"Express Aviation Freight",vehicles:[{id:"c-drone",name:"Delivery Drone / Quadcopter",icon:"fa-helicopter-symbol",color:"#10b981",price:500},{id:"c-belly",name:"Passenger Aircraft Belly Cargo",icon:"fa-plane",color:"#f59e0b",price:15e3},{id:"c-turboprop",name:"Regional Turboprop Freighter",icon:"fa-plane-departure",color:"#d97706",price:12e4},{id:"c-narrow",name:"Narrow-Body Jet Freighter",icon:"fa-plane-up",color:"#3b82f6",price:65e4},{id:"c-wide",name:"Wide-Body Heavy Jet Freighter",icon:"fa-globe",color:"#be123c",price:35e5}]}],x=[...u.map(a=>a.vehicles).flat(),...v.map(a=>a.vehicles).flat(),...w.map(a=>a.vehicles).flat()];function y({isOpen:a,onClose:b}){let[c,d]=(0,h.useState)(1),[e,f]=(0,h.useState)("c-minitruck"),[i,j]=(0,h.useState)("Current Location"),[k,l]=(0,h.useState)(""),[m,n]=(0,h.useState)(""),[o,p]=(0,h.useState)("");if(!a)return null;let q=()=>{d(1),b()},r=x.find(a=>a.id===e),s=(a,b,c)=>(0,g.jsxs)("div",{style:{marginBottom:"32px"},children:[(0,g.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"800",color:"#111827",margin:"24px 0 16px 0",paddingBottom:"8px",borderBottom:"2px solid #e5e7eb",display:"flex",alignItems:"center",gap:"8px"},children:[(0,g.jsx)("i",{className:`fa-solid ${b}`})," ",a]}),c.map((a,b)=>(0,g.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,g.jsx)("h3",{style:{fontSize:"14px",fontWeight:"700",color:"#4b5563",marginBottom:"16px"},children:a.title}),(0,g.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))",gap:"16px"},children:a.vehicles.map(a=>(0,g.jsxs)("div",{onClick:()=>{f(a.id),d(2)},style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"16px 12px",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)",transition:"all 0.2s ease"},onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-4px)",a.currentTarget.style.boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,g.jsx)("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:a.color+"20",color:a.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",marginBottom:"12px"},children:(0,g.jsx)("i",{className:`fa-solid ${a.icon}`})}),(0,g.jsx)("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1f2937",textAlign:"center",lineHeight:"1.2"},children:a.name})]},a.id))})]},b))]});return(0,g.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3,background:"rgba(0,0,0,0.6)"},onClick:q,children:(0,g.jsxs)("div",{className:"modal-sheet centered-modal",style:{maxWidth:"900px",width:"95%",height:"90vh",display:"flex",flexDirection:"column",backgroundColor:"#f9fafb",borderRadius:"24px",overflow:"hidden"},onClick:a=>a.stopPropagation(),children:[(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 24px",background:"#ffffff",borderBottom:"1px solid #e5e7eb"},children:[(0,g.jsxs)("div",{style:{fontSize:"22px",fontWeight:"800",color:"#111827",display:"flex",alignItems:"center",gap:"12px"},children:[(0,g.jsx)("i",{className:"fa-solid fa-truck-fast",style:{color:"#0ea5e9"}})," Cargo & Carrier Booking"]}),(0,g.jsx)("button",{onClick:q,style:{background:"#f3f4f6",border:"none",width:"36px",height:"36px",borderRadius:"50%",color:"#4b5563",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:(0,g.jsx)("i",{className:"fa-solid fa-xmark"})})]}),1===c&&(0,g.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"24px"},children:[s("ROAD PARCEL CARRIERS","fa-truck",u),s("SEA PARCEL CARRIERS","fa-ship",v),s("AIR PARCEL CARRIERS","fa-plane",w)]}),2===c&&(0,g.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"32px"},children:[(0,g.jsxs)("button",{onClick:()=>d(1),style:{background:"transparent",border:"none",color:"#6b7280",cursor:"pointer",fontSize:"15px",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",padding:"0 0 24px 0"},children:[(0,g.jsx)("i",{className:"fa-solid fa-arrow-left"})," Back to Carriers"]}),r&&(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px",background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",marginBottom:"32px",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,g.jsx)("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:r.color+"20",color:r.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px"},children:(0,g.jsx)("i",{className:`fa-solid ${r.icon}`})}),(0,g.jsxs)("div",{style:{flex:1},children:[(0,g.jsx)("h3",{style:{margin:0,fontSize:"20px",fontWeight:"800",color:"#111827"},children:r.name}),(0,g.jsx)("p",{style:{margin:"4px 0 0 0",fontSize:"14px",color:"#6b7280"},children:"Selected Cargo Carrier"})]}),(0,g.jsxs)("div",{style:{fontSize:"24px",fontWeight:"800",color:"#111827"},children:["₹",r.price.toLocaleString("en-IN")]})]}),(0,g.jsxs)("div",{style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"24px"},children:[(0,g.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Pickup Location"}),(0,g.jsx)("input",{type:"text",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},placeholder:"Enter pickup address",value:i,onChange:a=>j(a.target.value)})]}),(0,g.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Dropoff Destination"}),(0,g.jsx)("input",{type:"text",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},placeholder:"Enter destination address",value:k,onChange:a=>l(a.target.value)})]}),(0,g.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"32px"},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Date"}),(0,g.jsx)("input",{type:"date",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},value:m,onChange:a=>n(a.target.value)})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Time"}),(0,g.jsx)("input",{type:"time",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},value:o,onChange:a=>p(a.target.value)})]})]}),(0,g.jsx)("button",{onClick:()=>{let a="Cargo Carrier",b=900,c=x.find(a=>a.id===e);c&&(a=c.name,b=c.price);let d=`${a} • Logistics Freight`;(m||o)&&(d+=` • Scheduled: ${m} ${o}`.trim()),window.executeGenericBooking&&window.executeGenericBooking("carrier",`Cargo: ${i} to ${k||"Destination"}`,d,b,{from:i,to:k,date:m,time:o}),q()},style:{width:"100%",padding:"16px",borderRadius:"12px",background:"#0ea5e9",color:"#ffffff",border:"none",fontSize:"16px",fontWeight:"700",cursor:"pointer",transition:"background 0.2s"},onMouseEnter:a=>a.currentTarget.style.background="#0284c7",onMouseLeave:a=>a.currentTarget.style.background="#0ea5e9",children:"Confirm Cargo Booking"})]})]})]})})}let z=[{title:"Two-Wheelers & Micro-Mobility",vehicles:[{id:"r-bicycle",name:"Geared Bicycle",icon:"fa-bicycle",color:"#10b981",price:250},{id:"r-scooter",name:"City Scooter (Gearless)",icon:"fa-motorcycle",color:"#3b82f6",price:400},{id:"r-commuter",name:"Standard Commuter Bike",icon:"fa-motorcycle",color:"#f59e0b",price:600},{id:"r-sports",name:"Premium Sports Bike",icon:"fa-motorcycle",color:"#ef4444",price:1200},{id:"r-adv",name:"Adventure Tourer",icon:"fa-mountain",color:"#8b5cf6",price:1800}]},{title:"Economy & City Cars",vehicles:[{id:"r-micro",name:"Micro Hatchback",icon:"fa-car-side",color:"#0ea5e9",price:1500},{id:"r-premium-hatch",name:"Premium Hatchback",icon:"fa-car",color:"#6366f1",price:2e3},{id:"r-sedan",name:"Standard Sedan",icon:"fa-car",color:"#3b82f6",price:2500}]},{title:"Premium & Executive Cars",vehicles:[{id:"r-exec",name:"Executive Sedan",icon:"fa-briefcase",color:"#1d4ed8",price:4500},{id:"r-luxury",name:"Luxury Sedan",icon:"fa-gem",color:"#8b5cf6",price:8e3},{id:"r-sports-car",name:"Sports / Convertible",icon:"fa-car-burst",color:"#e11d48",price:15e3}]},{title:"SUVs & Off-Roaders",vehicles:[{id:"r-csuv",name:"Compact SUV",icon:"fa-truck-pickup",color:"#ec4899",price:3e3},{id:"r-4x4",name:"4x4 Off-Roader",icon:"fa-mountain-sun",color:"#f97316",price:5500},{id:"r-premium-suv",name:"Premium 7-Seater SUV",icon:"fa-crown",color:"#eab308",price:7e3},{id:"r-luxury-suv",name:"Luxury Full-Size SUV",icon:"fa-truck-monster",color:"#be123c",price:12e3}]},{title:"Vans, RVs & Specialty",vehicles:[{id:"r-minivan",name:"Passenger Minivan (8 Seater)",icon:"fa-van-shuttle",color:"#14b8a6",price:4e3},{id:"r-camper",name:"Camper Van / RV",icon:"fa-caravan",color:"#06b6d4",price:8500},{id:"r-vanity",name:"Luxury Vanity Van",icon:"fa-star",color:"#db2777",price:25e3},{id:"r-moving",name:"Self-Drive Moving Truck",icon:"fa-truck",color:"#4f46e5",price:5e3}]}],A=[{title:"Personal Watercraft",vehicles:[{id:"r-jetski",name:"Jet Ski / WaveRunner",icon:"fa-water",color:"#0ea5e9",price:3500},{id:"r-skiff",name:"Small Motorboat / Skiff",icon:"fa-sailboat",color:"#38bdf8",price:6e3}]},{title:"Private Charters & Speedboats",vehicles:[{id:"r-speedboat",name:"Standard Speedboat",icon:"fa-ship",color:"#0284c7",price:12e3},{id:"r-cabin",name:"Premium Cabin Cruiser",icon:"fa-anchor",color:"#0369a1",price:25e3}]},{title:"Luxury Yachts & Catamarans",vehicles:[{id:"r-catamaran",name:"Sailing Catamaran",icon:"fa-sailboat",color:"#0f766e",price:45e3},{id:"r-yacht",name:"Luxury Private Yacht",icon:"fa-champagne-glasses",color:"#eab308",price:15e4}]}],B=[{title:"Urban Air Mobility & Choppers",vehicles:[{id:"r-evtol",name:"eVTOL / Air Taxi",icon:"fa-helicopter-symbol",color:"#10b981",price:35e3},{id:"r-chopper",name:"Light Helicopter",icon:"fa-helicopter",color:"#059669",price:85e3}]},{title:"Private Jets & Charters",vehicles:[{id:"r-lightjet",name:"Light Private Jet",icon:"fa-plane-up",color:"#8b5cf6",price:25e4},{id:"r-heavyjet",name:"Heavy Ultra-Long-Range Jet",icon:"fa-gem",color:"#7c3aed",price:85e4}]}],C=[...z.map(a=>a.vehicles).flat(),...A.map(a=>a.vehicles).flat(),...B.map(a=>a.vehicles).flat()];function D({isOpen:a,onClose:b}){let[c,d]=(0,h.useState)(1),[e,f]=(0,h.useState)("r-premium-hatch"),[i,j]=(0,h.useState)("Current Location"),[k,l]=(0,h.useState)(""),[m,n]=(0,h.useState)(""),[o,p]=(0,h.useState)(""),[q,r]=(0,h.useState)("");if(!a)return null;let s=()=>{d(1),b()},t=C.find(a=>a.id===e),u=(a,b,c)=>(0,g.jsxs)("div",{style:{marginBottom:"32px"},children:[(0,g.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"800",color:"#111827",margin:"24px 0 16px 0",paddingBottom:"8px",borderBottom:"2px solid #e5e7eb",display:"flex",alignItems:"center",gap:"8px"},children:[(0,g.jsx)("i",{className:`fa-solid ${b}`})," ",a]}),c.map((a,b)=>(0,g.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,g.jsx)("h3",{style:{fontSize:"14px",fontWeight:"700",color:"#4b5563",marginBottom:"16px"},children:a.title}),(0,g.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))",gap:"16px"},children:a.vehicles.map(a=>(0,g.jsxs)("div",{onClick:()=>{f(a.id),d(2)},style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"16px 12px",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)",transition:"all 0.2s ease"},onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-4px)",a.currentTarget.style.boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,g.jsx)("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:a.color+"20",color:a.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",marginBottom:"12px"},children:(0,g.jsx)("i",{className:`fa-solid ${a.icon}`})}),(0,g.jsx)("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1f2937",textAlign:"center",lineHeight:"1.2"},children:a.name})]},a.id))})]},b))]});return(0,g.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3,background:"rgba(0,0,0,0.6)"},onClick:s,children:(0,g.jsxs)("div",{className:"modal-sheet centered-modal",style:{maxWidth:"900px",width:"95%",height:"90vh",display:"flex",flexDirection:"column",backgroundColor:"#f9fafb",borderRadius:"24px",overflow:"hidden"},onClick:a=>a.stopPropagation(),children:[(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 24px",background:"#ffffff",borderBottom:"1px solid #e5e7eb"},children:[(0,g.jsxs)("div",{style:{fontSize:"22px",fontWeight:"800",color:"#111827",display:"flex",alignItems:"center",gap:"12px"},children:[(0,g.jsx)("i",{className:"fa-solid fa-key",style:{color:"#0ea5e9"}})," Omni-Transit Rental Booking"]}),(0,g.jsx)("button",{onClick:s,style:{background:"#f3f4f6",border:"none",width:"36px",height:"36px",borderRadius:"50%",color:"#4b5563",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:(0,g.jsx)("i",{className:"fa-solid fa-xmark"})})]}),1===c&&(0,g.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"24px"},children:[u("ROAD RENTALS","fa-car-side",z),u("SEA & MARINE RENTALS","fa-ship",A),u("AIR & CHARTER RENTALS","fa-plane",B)]}),2===c&&(0,g.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"32px"},children:[(0,g.jsxs)("button",{onClick:()=>d(1),style:{background:"transparent",border:"none",color:"#6b7280",cursor:"pointer",fontSize:"15px",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",padding:"0 0 24px 0"},children:[(0,g.jsx)("i",{className:"fa-solid fa-arrow-left"})," Back to Fleet Options"]}),t&&(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px",background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",marginBottom:"32px",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,g.jsx)("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:t.color+"20",color:t.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px"},children:(0,g.jsx)("i",{className:`fa-solid ${t.icon}`})}),(0,g.jsxs)("div",{style:{flex:1},children:[(0,g.jsx)("h3",{style:{margin:0,fontSize:"20px",fontWeight:"800",color:"#111827"},children:t.name}),(0,g.jsx)("p",{style:{margin:"4px 0 0 0",fontSize:"14px",color:"#6b7280"},children:"Selected Rental Vehicle"})]}),(0,g.jsxs)("div",{style:{fontSize:"16px",fontWeight:"700",color:"#111827",textAlign:"right"},children:[(0,g.jsxs)("div",{style:{fontSize:"24px",fontWeight:"800"},children:["₹",t.price.toLocaleString("en-IN")]}),(0,g.jsx)("div",{style:{fontSize:"12px",color:"#6b7280"},children:"per day / block"})]})]}),(0,g.jsxs)("div",{style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"24px"},children:[(0,g.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Pickup & Dropoff Location"}),(0,g.jsx)("input",{type:"text",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},placeholder:"Enter location (e.g., Airport Terminal 1, Marina Bay)",value:i,onChange:a=>j(a.target.value)})]}),(0,g.jsx)("h4",{style:{fontSize:"14px",fontWeight:"700",color:"#111827",margin:"0 0 16px 0",borderBottom:"1px solid #e5e7eb",paddingBottom:"8px"},children:"Rental Period"}),(0,g.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"16px"},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"12px",fontWeight:"600",color:"#6b7280",marginBottom:"6px"},children:"Start Date"}),(0,g.jsx)("input",{type:"date",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"14px"},value:k,onChange:a=>l(a.target.value)})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"12px",fontWeight:"600",color:"#6b7280",marginBottom:"6px"},children:"Start Time"}),(0,g.jsx)("input",{type:"time",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"14px"},value:m,onChange:a=>n(a.target.value)})]})]}),(0,g.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"32px"},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"12px",fontWeight:"600",color:"#6b7280",marginBottom:"6px"},children:"Return Date"}),(0,g.jsx)("input",{type:"date",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"14px"},value:o,onChange:a=>p(a.target.value)})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{style:{display:"block",fontSize:"12px",fontWeight:"600",color:"#6b7280",marginBottom:"6px"},children:"Return Time"}),(0,g.jsx)("input",{type:"time",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"14px"},value:q,onChange:a=>r(a.target.value)})]})]}),(0,g.jsx)("button",{onClick:()=>{let a="Self-Drive Vehicle",b=1500,c=C.find(a=>a.id===e);c&&(a=c.name,b=c.price);let d=`${a} • Self-Drive Rental`;k&&o&&(d+=` • From ${k} to ${o}`),window.executeGenericBooking&&window.executeGenericBooking("rental",`Rental: ${i}`,d,b,{from:i,startDate:k,startTime:m,returnDate:o,returnTime:q}),s()},style:{width:"100%",padding:"16px",borderRadius:"12px",background:"#0ea5e9",color:"#ffffff",border:"none",fontSize:"16px",fontWeight:"700",cursor:"pointer",transition:"background 0.2s"},onMouseEnter:a=>a.currentTarget.style.background="#0284c7",onMouseLeave:a=>a.currentTarget.style.background="#0ea5e9",children:"Confirm Rental Booking"})]})]})]})})}function E(){let[a,b]=(0,h.useState)(!1);return((0,h.useEffect)(()=>{b(!0)},[]),a)?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:`

  <div class="modal-overlay" id="modal-ride">
    <div class="modal-sheet centered-modal" style="max-width: 600px;">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-car" style="color: var(--primary);"></i> Book a Ride</div>
        <div class="modal-close-btn" onclick="closeModal('modal-ride')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div class="form-group">
        <label>Pickup Location</label>
        <input type="text" class="input-field" placeholder="Enter pickup address" id="ride-from" value="Indiranagar, Bengaluru">
      </div>
      <div class="form-group">
        <label>Dropoff Destination</label>
        <input type="text" class="input-field" placeholder="Enter destination address" id="ride-to" value="Kempegowda Int'l Airport">
      </div>
      
      <div class="datetime-row">
        <div class="form-group" style="margin-bottom: 0;">
          <label>Date</label>
          <input type="date" class="input-field" id="ride-date">
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label>Time</label>
          <input type="time" class="input-field" id="ride-time">
        </div>
      </div>
      
      <div class="form-group">
        <label>Select Fleet Vehicle</label>
        <div class="fleet-list-container">
          
          <div class="fleet-category-header">Micro-Mobility & Last-Mile (1–3 Pax)</div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Bike / Moto', 250)">
            <div class="fleet-item-icon"><i class="fa-solid fa-motorcycle"></i></div>
            <div class="fleet-item-details">
              <h4>Bike / Moto</h4>
              <p>Standard commuter motorcycles for fast solo commutes.</p>
            </div>
            <div class="fleet-item-price">₹250</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Electric Scooter', 150)">
            <div class="fleet-item-icon"><i class="fa-solid fa-bolt"></i></div>
            <div class="fleet-item-details">
              <h4>Electric Scooter</h4>
              <p>Low-speed fleet electric two-wheelers for short radii.</p>
            </div>
            <div class="fleet-item-price">₹150</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Auto-Rickshaw', 350)">
            <div class="fleet-item-icon"><i class="fa-solid fa-taxi"></i></div>
            <div class="fleet-item-details">
              <h4>Auto-Rickshaw</h4>
              <p>Traditional three-wheelers for affordable urban travel.</p>
            </div>
            <div class="fleet-item-price">₹350</div>
          </div>
          
          <div class="fleet-category-header">Economy & Premium Cabs (4 Pax)</div>
          <div class="fleet-item selected" onclick="selectFleetItem(this, 'Micro Hatchback', 800)">
            <div class="fleet-item-icon"><i class="fa-solid fa-car-side"></i></div>
            <div class="fleet-item-details">
              <h4>Micro Hatchback</h4>
              <p>Ultra-compact hatchbacks. The cheapest 4-door tier.</p>
            </div>
            <div class="fleet-item-price">₹800</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Standard Sedan', 1200)">
            <div class="fleet-item-icon"><i class="fa-solid fa-car"></i></div>
            <div class="fleet-item-details">
              <h4>Standard Sedan</h4>
              <p>Mid-sized everyday sedans with standard trunk space.</p>
            </div>
            <div class="fleet-item-price">₹1,200</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Executive Sedan', 1800)">
            <div class="fleet-item-icon"><i class="fa-solid fa-briefcase"></i></div>
            <div class="fleet-item-details">
              <h4>Executive Sedan</h4>
              <p>Full-sized sedans tailored for business commuters.</p>
            </div>
            <div class="fleet-item-price">₹1,800</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Luxury Sedan', 3500)">
            <div class="fleet-item-icon"><i class="fa-solid fa-gem"></i></div>
            <div class="fleet-item-details">
              <h4>Luxury Sedan</h4>
              <p>Premium high-end cars driven by top-rated chauffeurs.</p>
            </div>
            <div class="fleet-item-price">₹3,500</div>
          </div>

          <div class="fleet-category-header">Multi-Utility & SUVs (5–9 Pax)</div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Compact SUV', 1500)">
            <div class="fleet-item-icon"><i class="fa-solid fa-truck-pickup"></i></div>
            <div class="fleet-item-details">
              <h4>Compact SUV</h4>
              <p>Sub-compact crossover vehicles for extra clearance.</p>
            </div>
            <div class="fleet-item-price">₹1,500</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Standard MPV', 2200)">
            <div class="fleet-item-icon"><i class="fa-solid fa-van-shuttle"></i></div>
            <div class="fleet-item-details">
              <h4>Standard MPV</h4>
              <p>Multi-purpose vehicles featuring three-row seating.</p>
            </div>
            <div class="fleet-item-price">₹2,200</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Premium SUV', 4500)">
            <div class="fleet-item-icon"><i class="fa-solid fa-crown"></i></div>
            <div class="fleet-item-details">
              <h4>Premium Full-Size SUV</h4>
              <p>Large luxury utility vehicles for premium group travel.</p>
            </div>
            <div class="fleet-item-price">₹4,500</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Large SUV / XL', 5500)">
            <div class="fleet-item-icon"><i class="fa-solid fa-truck-monster"></i></div>
            <div class="fleet-item-details">
              <h4>Large SUV / XL</h4>
              <p>Extended utility vehicles maximizing cargo capacity.</p>
            </div>
            <div class="fleet-item-price">₹5,500</div>
          </div>

          <div class="fleet-category-header">Minivans & Maxi-Cabs (10–26 Pax)</div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Standard Minivan', 6500)">
            <div class="fleet-item-icon"><i class="fa-solid fa-shuttle-van"></i></div>
            <div class="fleet-item-details">
              <h4>Standard Minivan</h4>
              <p>Large family passenger vans (10-12 pax).</p>
            </div>
            <div class="fleet-item-price">₹6,500</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Maxi-Cab', 8500)">
            <div class="fleet-item-icon"><i class="fa-solid fa-bus-simple"></i></div>
            <div class="fleet-item-details">
              <h4>Maxi-Cab</h4>
              <p>Mid-sized commercial passenger vans for group tourism.</p>
            </div>
            <div class="fleet-item-price">₹8,500</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Micro-Coach', 12000)">
            <div class="fleet-item-icon"><i class="fa-solid fa-bus"></i></div>
            <div class="fleet-item-details">
              <h4>Luxury Micro-Coach</h4>
              <p>High-roof vans built for corporate teams (18-26 pax).</p>
            </div>
            <div class="fleet-item-price">₹12,000</div>
          </div>

          <div class="fleet-category-header">Buses, Coaches & Mass Transit (27–100+ Pax)</div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Mini-Bus', 18000)">
            <div class="fleet-item-icon"><i class="fa-solid fa-bus-simple"></i></div>
            <div class="fleet-item-details">
              <h4>Mini-Bus</h4>
              <p>Compact commercial buses for short field trips.</p>
            </div>
            <div class="fleet-item-price">₹18,000</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'City Bus', 25000)">
            <div class="fleet-item-icon"><i class="fa-solid fa-bus"></i></div>
            <div class="fleet-item-details">
              <h4>Standard City Bus</h4>
              <p>Regular rigid frame buses for fixed commuter lines.</p>
            </div>
            <div class="fleet-item-price">₹25,000</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Sleeper Coach', 35000)">
            <div class="fleet-item-icon"><i class="fa-solid fa-bed"></i></div>
            <div class="fleet-item-details">
              <h4>Sleeper Coach</h4>
              <p>Long-distance commercial buses with individual berths.</p>
            </div>
            <div class="fleet-item-price">₹35,000</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Double-Decker Bus', 45000)">
            <div class="fleet-item-icon"><i class="fa-solid fa-bus"></i></div>
            <div class="fleet-item-details">
              <h4>Double-Decker Bus</h4>
              <p>Two-level high-capacity transit for city sightseeing.</p>
            </div>
            <div class="fleet-item-price">₹45,000</div>
          </div>
          <div class="fleet-item" onclick="selectFleetItem(this, 'Articulated Bus', 60000)">
            <div class="fleet-item-icon"><i class="fa-solid fa-truck-front"></i></div>
            <div class="fleet-item-details">
              <h4>Articulated Bus</h4>
              <p>Ultra-long, two-section buses for major industrial routes.</p>
            </div>
            <div class="fleet-item-price">₹60,000</div>
          </div>

        </div>
      </div>
      <button class="action-btn" onclick="submitRoadRideBooking()">Book Ride</button>
    </div>
  </div>
  
  <!-- 2. Carrier (Cargo Carrier) Modal -->
  <div class="modal-overlay" id="modal-carrier">
    <div class="modal-sheet centered-modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-truck" style="color: var(--secondary);"></i> Request Logistics Carrier</div>

        <div class="modal-close-btn" onclick="closeModal('modal-carrier')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div class="form-group">
        <label>Pickup address</label>
        <input type="text" class="input-field" placeholder="Sender pickup point" id="carrier-from" value="Whitefield Industrial Hub">
      </div>
      <div class="form-group">
        <label>Delivery address</label>
        <input type="text" class="input-field" placeholder="Recipient dropoff point" id="carrier-to" value="Electronic City Depot">
      </div>
      <div class="form-group">
        <label>Cargo Type & Capacity</label>
        <div class="option-select-grid">
          <div class="option-select-card selected" onclick="selectBookingOption(this, 'carrier-tier', '3500')" data-val="Mini Cargo Van">
            <i class="fa-solid fa-van-shuttle"></i>
            <span class="option-title">Mini Van</span>
            <span class="option-desc">Up to 800 kg cargo</span>
            <span class="option-price">₹3,500.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'carrier-tier', '7500')" data-val="Heavy Duty Truck">
            <i class="fa-solid fa-truck-moving"></i>
            <span class="option-title">Heavy Truck</span>
            <span class="option-desc">Up to 5 tonnes cargo</span>
            <span class="option-price">₹7,500.00</span>
          </div>
        </div>
      </div>
      <button class="action-btn" onclick="submitCarrierBooking()">Confirm Logistics Cargo</button>
    </div>
  </div>
  
  <!-- 3. Rental (Hourly/Daily Drives) Modal -->
  <div class="modal-overlay" id="modal-rental">
    <div class="modal-sheet centered-modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-key" style="color: var(--accent);"></i> Rent a Car/Bike</div>
        <div class="modal-close-btn" onclick="closeModal('modal-rental')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div class="form-group">
        <label>Select Rental Vehicle</label>
        <div class="option-select-grid">
          <div class="option-select-card selected" onclick="selectBookingOption(this, 'rental-tier', '4500')" data-val="Tata Nexon EV">
            <i class="fa-solid fa-charging-station"></i>
            <span class="option-title">Tata Nexon EV</span>
            <span class="option-desc">Electric SUV • 3 Days</span>
            <span class="option-price">₹4,500.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'rental-tier', '1800')" data-val="RE Himalayan">
            <i class="fa-solid fa-motorcycle"></i>
            <span class="option-title">Himalayan 450</span>
            <span class="option-desc">Adventure Bike • 1 Day</span>
            <span class="option-price">₹1,800.00</span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Duration</label>
        <select class="input-field select-field" id="rental-days">
          <option value="1">1 Day Duration</option>
          <option value="3" selected>3 Days Duration</option>
          <option value="7">7 Days Duration</option>
        </select>
      </div>
      <button class="action-btn" onclick="submitRentalBooking()">Book Rental Car</button>
    </div>
  </div>
  
  <!-- 4. Drivers On Demand Modal -->
  <div class="modal-overlay" id="modal-drivers">
    <div class="modal-sheet centered-modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-user-tie" style="color: var(--warning);"></i> Hire a Driver</div>
        <div class="modal-close-btn" onclick="closeModal('modal-drivers')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div class="form-group">
        <label>Pickup Location</label>
        <input type="text" class="input-field" id="driver-pickup" value="Indiranagar, Bengaluru">
      </div>
      <div class="form-group">
        <label>Select Driver Service Period</label>
        <div class="option-select-grid">
          <div class="option-select-card selected" onclick="selectBookingOption(this, 'driver-tier', '1200')" data-val="Short Commute Driver">
            <i class="fa-solid fa-clock"></i>
            <span class="option-title">Half Day</span>
            <span class="option-desc">Up to 4 hours shift</span>
            <span class="option-price">₹1,200.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'driver-tier', '2200')" data-val="Full Day Driver">
            <i class="fa-solid fa-business-time"></i>
            <span class="option-title">Full Day</span>
            <span class="option-desc">Up to 10 hours shift</span>
            <span class="option-price">₹2,200.00</span>
          </div>
        </div>
      </div>
      <button class="action-btn" onclick="submitDriverBooking()">Hire Verified Chauffeur</button>
    </div>
  </div>
  
  <!-- 5. Shared Parking Spot Modal -->
  <div class="modal-overlay" id="modal-parking">
    <div class="modal-sheet centered-modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-square-p" style="color: #8b5cf6;"></i> Reserve Parking Spot</div>
        <div class="modal-close-btn" onclick="closeModal('modal-parking')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div class="form-group">
        <label>Area Zone</label>
        <input type="text" class="input-field" id="parking-zone" value="Indiranagar Tech Hub">
      </div>
      <div class="form-group">
        <label>Select Parking Space Type</label>
        <div class="option-select-grid">
          <div class="option-select-card selected" onclick="selectBookingOption(this, 'parking-tier', '150')" data-val="Standard Spot">
            <i class="fa-solid fa-parking"></i>
            <span class="option-title">Standard Slot</span>
            <span class="option-desc">Open roof space • 3 hrs</span>
            <span class="option-price">₹150.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'parking-tier', '350')" data-val="Premium EV Slot">
            <i class="fa-solid fa-charging-station"></i>
            <span class="option-title">EV Charged Slot</span>
            <span class="option-desc">Covered + EV Charger</span>
            <span class="option-price">₹350.00</span>
          </div>
        </div>
      </div>
      <button class="action-btn" onclick="submitParkingBooking()">Reserve Spot</button>
    </div>
  </div>
  
  <!-- 6. Mechanic Diagnosis Modal -->
  <div class="modal-overlay" id="modal-mechanic">
    <div class="modal-sheet centered-modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-screwdriver-wrench" style="color: #64748b;"></i> Schedule Mechanic Visit</div>
        <div class="modal-close-btn" onclick="closeModal('modal-mechanic')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div class="form-group">
        <label>Describe Diagnostics Issue</label>
        <input type="text" class="input-field" id="mech-issue" value="Electric motor warning notification on dashboard panel.">
      </div>
      <div class="form-group">
        <label>Service Pack Tiers</label>
        <div class="option-select-grid">
          <div class="option-select-card selected" onclick="selectBookingOption(this, 'mechanic-tier', '1200')" data-val="Tire / Wheel Inspection">
            <i class="fa-solid fa-circle-radiation"></i>
            <span class="option-title">Diagnostics & Check</span>
            <span class="option-desc">Basic motor scan</span>
            <span class="option-price">₹1,200.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'mechanic-tier', '4500')" data-val="Full Powertrain Diagnostic">
            <i class="fa-solid fa-gears"></i>
            <span class="option-title">Full EV Overhaul</span>
            <span class="option-desc">Powertrain and cell test</span>
            <span class="option-price">₹4,500.00</span>
          </div>
        </div>
      </div>
      <button class="action-btn" onclick="submitMechanicBooking()">Schedule Diagnostic Dispatch</button>
    </div>
  </div>
  
  <!-- 7. NEW MODULE: Sea Booking Modal -->
  <div class="modal-overlay" id="modal-sea">
    <div class="modal-sheet centered-modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-ship" style="color: var(--success);"></i> Marine Booking</div>
        <div class="modal-close-btn" onclick="closeModal('modal-sea')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div class="form-group">
        <label>Departure Port</label>
        <input type="text" class="input-field" id="sea-from" value="Gateway of India, Mumbai">
      </div>
      <div class="form-group">
        <label>Arrival Port</label>
        <input type="text" class="input-field" id="sea-to" value="Mandwa Jetty, Alibaug">
      </div>
      <div class="form-group">
        <label>Select Sea Vessel & Tier</label>
        <div class="option-select-grid">
          <div class="option-select-card selected" onclick="selectBookingOption(this, 'sea-tier', '600')" data-val="Ferry Speedliner">
            <i class="fa-solid fa-ship"></i>
            <span class="option-title">Ferry Speedliner</span>
            <span class="option-desc">High speed economy transit</span>
            <span class="option-price">₹600.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'sea-tier', '12500')" data-val="Sapphire Ocean Yacht">
            <i class="fa-solid fa-anchor"></i>
            <span class="option-title">Luxury Yacht Charter</span>
            <span class="option-desc">Private cruise charter</span>
            <span class="option-price">₹12,500.00</span>
          </div>
        </div>
      </div>
      <button class="action-btn" onclick="submitSeaBooking()">Book Maritime Voyage</button>
    </div>
  </div>
  
  <!-- 8. NEW MODULE: Air Booking Modal -->
  <div class="modal-overlay" id="modal-air">
    <div class="modal-sheet centered-modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-plane" style="color: var(--warning);"></i> Flight & Heli Booking</div>
        <div class="modal-close-btn" onclick="closeModal('modal-air')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div class="form-group">
        <label>Origin Airport</label>
        <input type="text" class="input-field" id="air-from" value="BLR - Kempegowda Intl">
      </div>
      <div class="form-group">
        <label>Destination Airport</label>
        <input type="text" class="input-field" id="air-to" value="BOM - Chhatrapati Shivaji Intl">
      </div>
      <div class="form-group">
        <label>Select Flight Tier</label>
        <div class="option-select-grid">
          <div class="option-select-card selected" onclick="selectBookingOption(this, 'air-tier', '4500')" data-val="Commercial Economy">
            <i class="fa-solid fa-plane-up"></i>
            <span class="option-title">Air Airbus A320</span>
            <span class="option-desc">Standard economy cabin</span>
            <span class="option-price">₹4,500.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'air-tier', '14000')" data-val="Helicopter Charter">
            <i class="fa-solid fa-helicopter"></i>
            <span class="option-title">Heli Apex Charter</span>
            <span class="option-desc">Point-to-point chopper transit</span>
            <span class="option-price">₹14,000.00</span>
          </div>
        </div>
      </div>
      <button class="action-btn" onclick="submitAirBooking()">Book Air Space</button>
    </div>
  </div>
  
  <!-- 9. NEW MODULE: Train Booking Modal -->
  <div class="modal-overlay" id="modal-train">
    <div class="modal-sheet centered-modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-train" style="color: #c864ff;"></i> Train Booking</div>
        <div class="modal-close-btn" onclick="closeModal('modal-train')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div class="form-group">
        <label>Source Station</label>
        <input type="text" class="input-field" id="train-from" value="KSR Bengaluru Station">
      </div>
      <div class="form-group">
        <label>Destination Station</label>
        <input type="text" class="input-field" id="train-to" value="Chennai Central Station">
      </div>
      <div class="form-group">
        <label>Select Train & Class</label>
        <div class="option-select-grid">
          <div class="option-select-card selected" onclick="selectBookingOption(this, 'train-tier', '850')" data-val="Vande Bharat AC Chair">
            <i class="fa-solid fa-train-subway"></i>
            <span class="option-title">Vande Bharat Express</span>
            <span class="option-desc">AC Premium Chair Car</span>
            <span class="option-price">₹850.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'train-tier', '1650')" data-val="Rajdhani First Class AC">
            <i class="fa-solid fa-train-tram"></i>
            <span class="option-title">Rajdhani Express</span>
            <span class="option-desc">First Class AC Sleeper</span>
            <span class="option-price">₹1,650.00</span>
          </div>
        </div>
      </div>
      <button class="action-btn" onclick="submitTrainBooking()">Book Train Ticket</button>
    </div>
  </div>
  
  <!-- 10. Wallet Subpage Modal -->
  <div class="modal-overlay" id="modal-wallet">
    <div class="modal-sheet centered-modal">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-wallet" style="color: var(--primary);"></i> Super App Wallet</div>
        <div class="modal-close-btn" onclick="closeModal('modal-wallet')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      
      <div class="wallet-box" style="margin-top: 10px;">
        <div class="wallet-balance-row">
          <span class="wallet-balance-title">Balance Available</span>
          <span class="wallet-balance-val" id="wallet-balance-txt">₹15,000.00</span>
        </div>
        <div class="wallet-perks-row">
          <div class="wallet-perk">
            <span class="wallet-perk-title">Reward Points</span>
            <span class="wallet-perk-val" id="wallet-points-txt">2,450 pts</span>
          </div>
          <div class="wallet-perk">
            <span class="wallet-perk-title">Claimable Cashback</span>
            <span class="wallet-perk-val" id="wallet-cashback-txt">₹350.00</span>
          </div>
        </div>
        <div class="wallet-actions" style="margin-top:14px;">
          <button class="wallet-btn" onclick="toggleWalletForm('deposit')"><i class="fa-solid fa-plus"></i> Load Cash</button>
          <button class="wallet-btn" onclick="toggleWalletForm('transfer')"><i class="fa-solid fa-paper-plane"></i> Send Money</button>
          <button class="wallet-btn" onclick="claimCashbackMoney()"><i class="fa-solid fa-gift"></i> Claim Cashback</button>
        </div>
      </div>
      
      <!-- Hidden form: Topup deposit -->
      <div id="wallet-deposit-form" style="display: none; border: 1px solid var(--dark-border); padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.01); margin-top:10px;">
        <div class="form-group">
          <label>Deposit Amount (INR)</label>
          <input type="number" class="input-field" id="deposit-amount" value="5000">
        </div>
        <div class="form-group">
          <label>Select payment method</label>
          <select class="input-field select-field" id="deposit-source">
            <option value="Visa (last 4: 4242)">Visa •••• 4242</option>
            <option value="Mastercard (last 4: 8839)">Mastercard •••• 8839</option>
          </select>
        </div>
        <button class="action-btn" onclick="executeWalletDeposit()" style="padding: 10px; font-size: 12px;">Process Load Cash</button>
      </div>
      
      <!-- Hidden form: Transfer -->
      <div id="wallet-transfer-form" style="display: none; border: 1px solid var(--dark-border); padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.01); margin-top:10px;">
        <div class="form-group">
          <label>Recipient UPI ID / A/c No.</label>
          <input type="text" class="input-field" id="transfer-recipient" placeholder="Enter UPI ID or Account Number" value="rajesh.kumar@upi">
        </div>
        <div class="form-group">
          <label>Amount (INR)</label>
          <input type="number" class="input-field" id="transfer-amount" value="1000">
        </div>
        <button class="action-btn" onclick="executeWalletTransfer()" style="padding: 10px; font-size: 12px;">Transfer Funds</button>
      </div>
      
      <div style="font-size: 11px; font-weight: 700; color: var(--text-secondary); margin-top: 14px; text-transform: uppercase;">Recent Activity</div>
      <div style="display: flex; flex-direction: column; gap: 8px; max-height: 150px; overflow-y: auto;" id="wallet-transactions-list">
        <!-- Transaction log list injected via js -->
      </div>
    </div>
  </div>
  
  <!-- 11. Bookings Registry / Ticket Manager Modal -->
  <div class="modal-overlay" id="modal-bookings-registry">
    <div class="modal-sheet centered-modal" style="max-width: 600px;">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-receipt" style="color: var(--primary);"></i> Bookings Registry</div>
        <div class="modal-close-btn" onclick="closeModal('modal-bookings-registry')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      
      <!-- Filter choices -->
      <div class="booking-tabs" style="margin-top: 10px;">
        <div class="booking-tab active" onclick="filterBookingsRegistry('All', this)">All</div>
        <div class="booking-tab" onclick="filterBookingsRegistry('Active', this)">Active</div>
        <div class="booking-tab" onclick="filterBookingsRegistry('Completed', this)">Past</div>
        <div class="booking-tab" onclick="filterBookingsRegistry('Cancelled', this)">Cancelled</div>
      </div>
      
      <div class="bookings-list" id="registry-bookings-container" style="max-height: 350px; overflow-y: auto;">
        <!-- Injected dynamically via JS -->
      </div>
    </div>
  </div>
  
  <!-- 12. Single Booking Receipt Invoice Modal (Detailed invoice pop-up) -->
  <div class="modal-overlay" id="modal-booking-receipt">
    <div class="modal-sheet centered-modal" style="max-width: 500px;">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-file-invoice-dollar" style="color: var(--primary);"></i> Booking Invoice</div>
        <div class="modal-close-btn" onclick="closeModal('modal-booking-receipt')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      
      <div id="receipt-invoice-body" style="margin-top: 10px;">
        <!-- Injected dynamically -->
      </div>
      
      <button class="action-btn action-btn-danger" id="receipt-cancel-btn" style="display: none;" onclick="executeBookingCancel()">Cancel Booking & Refund</button>
    </div>
  </div>
  
  <!-- 13. Notifications Modal -->
  <div class="modal-overlay" id="modal-notifications">
    <div class="modal-sheet centered-modal" style="max-width: 500px;">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-bell" style="color: var(--primary);"></i> Notifications</div>
        <div class="modal-close-btn" onclick="closeModal('modal-notifications')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 10px; max-height: 300px; overflow-y: auto; margin-top: 10px;" id="notifications-container">
        <!-- Loaded via JS -->
      </div>
    </div>
  </div>
  
  <!-- 14. Smart Search Results Overlay Modal -->
  <div class="modal-overlay" id="modal-search">
    <div class="modal-sheet centered-modal" style="max-width: 600px;">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-magnifying-glass" style="color: var(--primary);"></i> Search SART Portal</div>
        <div class="modal-close-btn" onclick="closeModal('modal-search')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div class="form-group" style="margin-top: 10px;">
        <input type="text" class="input-field" placeholder="Search services (e.g. taxi, yacht, flight, train, mechanic)..." id="portal-search-input" oninput="executePortalSearch()">
      </div>
      <div style="display: flex; flex-direction: column; gap: 10px; max-height: 250px; overflow-y: auto;" id="portal-search-results">
        <!-- Search matching cards loaded dynamically -->
      </div>
    </div>
  </div>
  
  <!-- 15. BIT Live Booking Activity Feed Modal -->
  <div class="modal-overlay" id="modal-bit-feed">
    <div class="modal-sheet centered-modal" style="max-width: 500px;">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-satellite-dish" style="color: var(--primary);"></i> BIT Live Activity Feed</div>
        <div class="modal-close-btn" onclick="closeModal('modal-bit-feed');"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      
      <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--dark-border); padding-bottom: 10px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--success); display: flex; align-items: center; gap: 6px;">
            <span style="width: 6px; height: 6px; background: var(--success); border-radius: 50%; display: inline-block; animation: pulseGreen 1.2s infinite alternate;"></span>
            LIVE ACTIVITY STREAMING
          </span>
          <button class="action-btn" style="padding: 6px 12px; font-size: 10.5px; width: auto; margin: 0;" onclick="simulateNewLiveActivity()">
            <i class="fa-solid fa-plus"></i> Simulate Booking
          </button>
        </div>
        
        <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.4;">
          This panel displays real-time booking alerts across the SART network. You can simulate activities manually or toggle toast notifications.
        </p>

        <!-- Feed List -->
        <div id="bit-feed-list" style="display: flex; flex-direction: column; gap: 10px; max-height: 250px; overflow-y: auto; padding-right: 4px;">
          <!-- Loaded dynamically via JS -->
        </div>

        <div style="border-top: 1px solid var(--dark-border); padding-top: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 11px;">
          <span style="color: var(--text-secondary);">Show Toast Popup Alerts</span>
          <label class="switch-label" style="display: flex; align-items: center; cursor: pointer; gap: 6px;">
            <input type="checkbox" id="bit-alert-toggle" checked onchange="toggleBitToasts(this.checked)" style="accent-color: var(--primary);">
            <span style="color: var(--text-primary); font-weight: bold;">Enabled</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- 16. SART Community Hub Modal -->
  <div class="modal-overlay" id="modal-community">
    <div class="modal-sheet centered-modal" style="max-width: 550px;">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-users" style="color: var(--secondary);"></i> SART Transit Community</div>
        <div class="modal-close-btn" onclick="closeModal('modal-community')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div style="margin-top: 14px;">
        <h4 style="font-size: 14px; margin-bottom: 6px;">Active Local Carpool Matches</h4>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; justify-content:space-between; align-items:center; border:1px solid var(--dark-border); padding:10px; border-radius:12px; background:rgba(255,255,255,0.01);">
            <div>
              <div style="font-size:12px; font-weight:bold;">Indiranagar to Electronic City</div>
              <div style="font-size:10px; color:var(--text-secondary);">3 seats vacant • Leaves at 05:30 PM</div>
            </div>
            <button class="action-btn" style="padding:6px 12px; font-size:10px; width:auto;" onclick="alert('Joined ride-share group. Details sent!')">Join Pool</button>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; border:1px solid var(--dark-border); padding:10px; border-radius:12px; background:rgba(255,255,255,0.01);">
            <div>
              <div style="font-size:12px; font-weight:bold;">Koramangala to Kempegowda Airport</div>
              <div style="font-size:10px; color:var(--text-secondary);">1 seat vacant • Leaves at 08:00 AM</div>
            </div>
            <button class="action-btn" style="padding:6px 12px; font-size:10px; width:auto;" onclick="alert('Joined ride-share group. Details sent!')">Join Pool</button>
          </div>
        </div>
        
        <h4 style="font-size: 14px; margin-top: 16px; margin-bottom: 6px;">Community Bulletins & Chat</h4>
        <div style="border: 1px solid var(--dark-border); border-radius: 12px; padding: 12px; background: rgba(0,0,0,0.2); font-size: 11.5px; line-height: 1.4; color: var(--text-secondary);">
          <p>💬 <strong style="color:var(--text-primary);">Rohan K:</strong> High traffic noted near Tin Factory flyover. Suggest taking outer ring road.</p>
          <p style="margin-top: 6px;">💬 <strong style="color:var(--text-primary);">Sneha M:</strong> EV fast charger at Indiranagar Metro station is now vacant!</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 17. Find My Vehicle Modal -->
  <div class="modal-overlay" id="modal-find-vehicle">
    <div class="modal-sheet centered-modal" style="max-width: 450px;">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-location-crosshairs" style="color: var(--primary);"></i> Find My Connected Vehicle</div>
        <div class="modal-close-btn" onclick="closeModal('modal-find-vehicle')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div style="margin-top: 14px; text-align: center;">
        <div style="font-size: 48px; color: var(--primary); margin-bottom: 14px;"><i class="fa-solid fa-satellite-dish"></i></div>
        <h3>Tata Nexon EV KA-03-MY-8820</h3>
        <p style="font-size: 12px; color: var(--text-secondary); margin-top: 6px;">Last polled: 20 seconds ago via SART Telemetry</p>
        
        <div style="border: 1px solid var(--dark-border); padding: 12px; border-radius: 12px; background: rgba(0,0,0,0.1); margin: 16px 0; text-align: left;">
          <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
            <span>Battery Charge</span>
            <strong>84% (310 km range)</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
            <span>GPS Status</span>
            <strong>Locked (Indiranagar Stage 2)</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:12px;">
            <span>Climate Control</span>
            <strong>ON (Set to 22┬░C)</strong>
          </div>
        </div>
        
        <button class="action-btn" onclick="executeFindMyVehicle()">Pinpoint Live Location on Map</button>
      </div>
    </div>
  </div>

  <!-- 18. Liked Locations & Saved Routes Modal -->
  <div class="modal-overlay" id="modal-liked">
    <div class="modal-sheet centered-modal" style="max-width: 500px;">
      <div class="modal-header">
        <div class="modal-title"><i class="fa-solid fa-star" style="color: var(--secondary);"></i> Liked Routes & Places</div>
        <div class="modal-close-btn" onclick="closeModal('modal-liked')"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
      <div style="margin-top: 14px; display:flex; flex-direction:column; gap:10px;">
        <p style="font-size:12px; color:var(--text-secondary); margin-bottom:4px;">Select a saved route below to pre-populate and launch a quick ride dispatch booking.</p>
        
        <div style="display:flex; justify-content:space-between; align-items:center; border: 1px solid var(--dark-border); padding: 12px; border-radius: 12px; background: rgba(212, 167, 41, 0.02); border-color: rgba(212, 167, 41, 0.25); cursor:pointer;" onclick="triggerLikedRoute('Home', 'Office')">
          <div>
            <div style="font-size:13px; font-weight:bold; color:var(--text-primary);"><i class="fa-solid fa-house-user" style="color: var(--secondary); margin-right:6px;"></i> Indiranagar Home to Tech Office</div>
            <div style="font-size:10.5px; color:var(--text-secondary); margin-top:2px;">Route: Indiranagar 100 Feet Rd → Whitefield IT Park</div>
          </div>
          <i class="fa-solid fa-chevron-right" style="font-size:10px; color: var(--secondary);"></i>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border: 1px solid var(--dark-border); padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.01); cursor:pointer;" onclick="triggerLikedRoute('Office', 'Airport')">
          <div>
            <div style="font-size:13px; font-weight:bold; color:var(--text-primary);"><i class="fa-solid fa-plane-up" style="color:var(--warning); margin-right:6px;"></i> Tech Office to Kempegowda Airport</div>
            <div style="font-size:10.5px; color:var(--text-secondary); margin-top:2px;">Route: Whitefield → Outer Ring Road → NH-44 Tollroad</div>
          </div>
          <i class="fa-solid fa-chevron-right" style="font-size:10px; color:var(--text-secondary);"></i>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border: 1px solid var(--dark-border); padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.01); cursor:pointer;" onclick="triggerLikedRoute('Home', 'Weekend Villa')">
          <div>
            <div style="font-size:13px; font-weight:bold; color:var(--text-primary);"><i class="fa-solid fa-anchor" style="color:var(--success); margin-right:6px;"></i> Indiranagar to Mandwa Yacht Marina</div>
            <div style="font-size:10.5px; color:var(--text-secondary); margin-top:2px;">Route: Bangalore Highway → Mumbai Coastal NH-66 → Jetty</div>
          </div>
          <i class="fa-solid fa-chevron-right" style="font-size:10px; color:var(--text-secondary);"></i>
        </div>
      </div>
    </div>
  </div>

  <!-- 19. Travel Guide recommendations Modal -->
      `}})}):null}let F=[{id:"modal-ride",title:"Rides",tag:"Road",rating:4.9,icon:"🚗",price:"From ₹800",colorClass:"rec-card-red"},{id:"modal-carrier",title:"Carrier",tag:"Logistics",rating:4.8,icon:"🚛",price:"From ₹3,500",colorClass:"rec-card-orange"},{id:"modal-rental",title:"Rental",tag:"Self-Drive",rating:4.9,icon:"🔑",price:"From ₹1,800/day",colorClass:"rec-card-blue"},{id:"modal-community",title:"Community",tag:"Shared",rating:4.7,icon:"👥",price:"Ride Pooling",colorClass:"rec-card-purple"},{id:"modal-drivers",title:"Drivers",tag:"On Demand",rating:4.8,icon:"👨‍✈️",price:"From ₹1,200",colorClass:"rec-card-green"},{id:"modal-parking",title:"Parking",tag:"Shared",rating:4.6,icon:"🅿️",price:"From ₹150",colorClass:"rec-card-teal"},{id:"modal-mechanic",title:"Mechanic",tag:"Service",rating:4.8,icon:"🔧",price:"From ₹1,200",colorClass:"rec-card-slate"}];function G(){return(0,g.jsxs)("div",{className:"recommended-section",children:[(0,g.jsx)("h2",{style:{fontSize:"20px",fontWeight:900,marginBottom:"24px"},children:"Book a Service"}),(0,g.jsx)("div",{className:"tire-grid",children:F.map(a=>(0,g.jsxs)("div",{className:"tire-card",onClick:()=>{a.id},children:[(0,g.jsxs)("div",{className:`tire-outer-assembly ${a.colorClass}`,children:[(0,g.jsxs)("div",{className:"tire-rubber",children:[(0,g.jsx)("div",{className:"tire-tread",style:{transform:"rotate(0deg)"}}),(0,g.jsx)("div",{className:"tire-tread",style:{transform:"rotate(30deg)"}}),(0,g.jsx)("div",{className:"tire-tread",style:{transform:"rotate(60deg)"}}),(0,g.jsx)("div",{className:"tire-tread",style:{transform:"rotate(90deg)"}}),(0,g.jsx)("div",{className:"tire-tread",style:{transform:"rotate(120deg)"}}),(0,g.jsx)("div",{className:"tire-tread",style:{transform:"rotate(150deg)"}})]}),(0,g.jsx)("div",{className:"tire-alloy"})]}),(0,g.jsxs)("div",{className:"tire-center-cap",children:[(0,g.jsx)("span",{className:"tire-icon",children:a.icon}),(0,g.jsx)("span",{className:"tire-title",children:a.title})]})]},a.id))})]})}function H(){return(0,g.jsxs)("div",{className:"quick-booking-container",children:[(0,g.jsx)("h2",{className:"quick-booking-title",children:"Choose Your Ride"}),(0,g.jsxs)("div",{className:"quick-booking-form",children:[(0,g.jsxs)("div",{className:"qb-field",children:[(0,g.jsx)("label",{children:"PICKUP"}),(0,g.jsxs)("div",{className:"qb-input-wrap",children:[(0,g.jsx)("input",{type:"text",placeholder:"Enter Pickup Location"}),(0,g.jsx)("i",{className:"fa-solid fa-location-crosshairs target-icon"})]})]}),(0,g.jsxs)("div",{className:"qb-field",children:[(0,g.jsx)("label",{children:"DROP"}),(0,g.jsx)("div",{className:"qb-input-wrap",children:(0,g.jsx)("input",{type:"text",placeholder:"Enter Drop Location"})})]}),(0,g.jsxs)("div",{className:"qb-field",children:[(0,g.jsx)("label",{children:"WHEN"}),(0,g.jsx)("div",{className:"qb-input-wrap",children:(0,g.jsx)("input",{type:"datetime-local"})})]}),(0,g.jsxs)("div",{className:"qb-field",children:[(0,g.jsx)("label",{children:"RIDE TYPE"}),(0,g.jsx)("div",{className:"qb-input-wrap",children:(0,g.jsxs)("select",{children:[(0,g.jsxs)("optgroup",{label:"Road - Micro-Mobility",children:[(0,g.jsx)("option",{value:"bike",children:"Bike / Moto"}),(0,g.jsx)("option",{value:"escooter",children:"Electric Scooter"}),(0,g.jsx)("option",{value:"auto",children:"Auto-Rickshaw"}),(0,g.jsx)("option",{value:"erickshaw",children:"E-Rickshaw"})]}),(0,g.jsxs)("optgroup",{label:"Road - Cabs & Sedans",children:[(0,g.jsx)("option",{value:"micro",children:"Micro Hatchback"}),(0,g.jsx)("option",{value:"sedan",children:"Standard Sedan"}),(0,g.jsx)("option",{value:"exec",children:"Executive Sedan"}),(0,g.jsx)("option",{value:"luxury",children:"Luxury Sedan"})]}),(0,g.jsxs)("optgroup",{label:"Road - SUVs & Minivans",children:[(0,g.jsx)("option",{value:"csuv",children:"Compact SUV"}),(0,g.jsx)("option",{value:"psuv",children:"Premium SUV"}),(0,g.jsx)("option",{value:"lsuv",children:"Large SUV / XL"}),(0,g.jsx)("option",{value:"minivan",children:"Minivan / Maxi-Cab"})]}),(0,g.jsxs)("optgroup",{label:"Road - Cargo & Logistics",children:[(0,g.jsx)("option",{value:"delivery",children:"Delivery Bike"}),(0,g.jsx)("option",{value:"minitruck",children:"Mini-Truck"}),(0,g.jsx)("option",{value:"pickup",children:"Pickup Truck"}),(0,g.jsx)("option",{value:"heavytruck",children:"Heavy Truck"})]}),(0,g.jsxs)("optgroup",{label:"Air & Sea",children:[(0,g.jsx)("option",{value:"helicopter",children:"Helicopter"}),(0,g.jsx)("option",{value:"privatejet",children:"Private Jet"}),(0,g.jsx)("option",{value:"motorboat",children:"Motorboat"}),(0,g.jsx)("option",{value:"yacht",children:"Luxury Yacht"})]})]})})]})]}),(0,g.jsx)("div",{className:"qb-action",children:(0,g.jsx)("button",{className:"qb-confirm-btn",children:"CONFIRM BOOKING"})})]})}function I(){let a=a=>{},b=()=>{};return(0,g.jsxs)("div",{className:"home-map-wrapper",children:[(0,g.jsxs)("div",{className:"home-map-title-row",children:[(0,g.jsx)("h2",{children:"Live Fleet & Route Tracker"}),(0,g.jsxs)("span",{className:"action-link",onClick:b,children:[(0,g.jsx)("i",{className:"fa-solid fa-radar"})," Refresh Nearby Fleet"]})]}),(0,g.jsxs)("div",{className:"home-map-panel",children:[(0,g.jsx)("div",{id:"explore-map"}),(0,g.jsx)("div",{className:"map-floating-bottom-left",children:(0,g.jsxs)("button",{className:"map-action-btn-liked",id:"home-liked-btn",onClick:()=>a("modal-liked"),children:[(0,g.jsx)("i",{className:"fa-solid fa-star"})," LIKED"]})}),(0,g.jsx)("div",{className:"map-floating-bottom-right",children:(0,g.jsxs)("button",{className:"map-action-btn-nearby",id:"home-nearby-btn",onClick:b,children:[(0,g.jsx)("i",{className:"fa-solid fa-radar"})," NEAR BY FIND"]})}),(0,g.jsxs)("div",{className:"map-floating-controls",children:[(0,g.jsx)("button",{className:"map-circle-btn",onClick:()=>{},children:(0,g.jsx)("i",{className:"fa-solid fa-plus"})}),(0,g.jsx)("button",{className:"map-circle-btn",onClick:()=>{},children:(0,g.jsx)("i",{className:"fa-solid fa-minus"})}),(0,g.jsx)("button",{className:"map-circle-btn",onClick:()=>{},children:(0,g.jsx)("i",{className:"fa-solid fa-crosshairs"})})]}),(0,g.jsxs)("div",{className:"map-active-booking-panel floating-map-booking-panel",id:"map-active-booking-card",style:{display:"none"},children:[(0,g.jsx)("div",{className:"panel-header-badge",children:"LIVE TRACKING ACTIVE"}),(0,g.jsxs)("div",{className:"panel-main",children:[(0,g.jsx)("div",{className:"panel-icon-wrap",id:"map-active-booking-icon-container",children:(0,g.jsx)("i",{className:"fa-solid fa-car-side",id:"map-active-booking-icon"})}),(0,g.jsxs)("div",{className:"panel-desc",children:[(0,g.jsx)("h4",{id:"map-active-booking-title",children:"Ride to Kempegowda Airport"}),(0,g.jsx)("p",{id:"map-active-booking-desc",children:"Driver is starting journey..."})]})]}),(0,g.jsx)("button",{className:"cancel-booking-btn",onClick:()=>a("modal-bookings-registry"),children:"Manage Ticket Details"})]})]})]})}function J(){return(0,g.jsxs)("div",{className:"dashboard-card",id:"news-section-div",style:{marginTop:"18px"},children:[(0,g.jsxs)("div",{className:"section-header-row",children:[(0,g.jsx)("h2",{className:"card-headline",children:"Latest Transit Ecosystem News"}),(0,g.jsx)("span",{className:"action-link",onClick:()=>alert("Auto News RSS Feed connected."),children:"See All Feed"})]}),(0,g.jsx)("div",{className:"web-news-row",id:"news-cards-container"})]})}function K(){let[a,b]=(0,h.useState)(0);return(0,h.useEffect)(()=>{let a=setInterval(()=>{b(a=>+(0===a))},5e3);return()=>clearInterval(a)},[]),(0,g.jsxs)("section",{className:"tab-screen active",id:"tab-home",children:[(0,g.jsx)("div",{className:"hero-sliding-banner",children:(0,g.jsxs)("div",{className:"hero-slider-track",style:{transform:`translateX(-${100*a}%)`},children:[(0,g.jsx)("div",{className:"hero-slide-item",style:{backgroundImage:"url('/hero-left.jpg')"}}),(0,g.jsx)("div",{className:"hero-slide-item",style:{backgroundImage:"url('/hero-right.jpg')"}})]})}),(0,g.jsx)(G,{}),(0,g.jsx)(H,{}),(0,g.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"7fr 5fr",gap:"24px"},children:[(0,g.jsx)(I,{}),(0,g.jsx)(J,{})]})]})}function L(){let[a,b]=(0,h.useState)(!1);return((0,h.useEffect)(()=>{b(!0)},[]),a)?(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:`      <!-- 3. PREMIUM SART STORE TAB -->
      <section class="tab-screen" id="tab-store">
        <div class="store-container">
          
          <div class="store-hero">
            <div class="store-hero-text">
              <h1>SART Smart Store</h1>
              <p>Enhance your commute with certified telemetry upgrades, advanced diagnostics, and premium vehicle accessories.</p>
            </div>
            <div class="store-hero-image">🔋</div>
          </div>
          
          <div class="store-grid-layout">
            <!-- Left Products Section -->
            <div class="store-products-section">
              <div>
                <h3 class="store-category-title">Popular Accessories</h3>
                <div class="store-products-grid">
                  <!-- Card 1 -->
                  <div class="store-product-card">
                    <span class="product-badge">Top Seller</span>
                    <div class="product-image-container">⚡</div>
                    <div class="product-info">
                      <h3>Smart Fast Charger Pro</h3>
                      <p>Ultra-compact 7.2kW AC home charger with auto battery cut-off and mobile app telemetry link.</p>
                    </div>
                    <div class="product-footer">
                      <span class="product-price">₹18,500</span>
                      <button class="product-buy-btn" onclick="addStoreItemToCart('Smart Fast Charger Pro', 18500)">Add to Cart</button>
                    </div>
                  </div>
                  <!-- Card 2 -->
                  <div class="store-product-card">
                    <span class="product-badge">New</span>
                    <div class="product-image-container">🧭</div>
                    <div class="product-info">
                      <h3>GPS Tracker Pro</h3>
                      <p>Anti-theft satellite-linked tracker featuring real-time geofence alerts and remote engine lock.</p>
                    </div>
                    <div class="product-footer">
                      <span class="product-price">₹4,200</span>
                      <button class="product-buy-btn" onclick="addStoreItemToCart('GPS Tracker Pro', 4200)">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="store-category-title">Safety & Comfort</h3>
                <div class="store-products-grid">
                  <!-- Card 3 -->
                  <div class="store-product-card">
                    <span class="product-badge">Safety</span>
                    <div class="product-image-container">🛞</div>
                    <div class="product-info">
                      <h3>Smart Tire Pressure Gauge</h3>
                      <p>Bluetooth tire valve caps displaying precise PSI diagnostics directly on SART AI dashboard.</p>
                    </div>
                    <div class="product-footer">
                      <span class="product-price">₹2,800</span>
                      <button class="product-buy-btn" onclick="addStoreItemToCart('Smart Tire Pressure Gauge', 2800)">Add to Cart</button>
                    </div>
                  </div>
                  <!-- Card 4 -->
                  <div class="store-product-card">
                    <span class="product-badge">Upgrade</span>
                    <div class="product-image-container">🛋️</div>
                    <div class="product-info">
                      <h3>Chauffeur Comfort Cushion</h3>
                      <p>Ergonomic memory foam cushion with orthopedic support, tailor-made for long distance trips.</p>
                    </div>
                    <div class="product-footer">
                      <span class="product-price">₹1,950</span>
                      <button class="product-buy-btn" onclick="addStoreItemToCart('Chauffeur Comfort Cushion', 1950)">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Right Cart Panel -->
            <div class="store-cart-panel">
              <div class="cart-header">
                <h3>Shopping Cart</h3>
                <i class="fa-solid fa-cart-shopping" style="color: var(--primary);"></i>
              </div>
              <div class="cart-items-list" id="store-cart-items">
                <!-- Cart items list dynamically populated -->
                <div style="text-align: center; color: var(--text-secondary); padding: 30px; font-size:12px;">Your cart is empty.</div>
              </div>
              <div class="cart-totals">
                <div class="cart-total-row">
                  <span>Subtotal</span>
                  <span id="store-cart-subtotal">₹0.00</span>
                </div>
                <div class="cart-total-row" style="font-weight: 800; border-top: 1px solid var(--dark-border); padding-top: 10px; margin-top: 5px;">
                  <span>Grand Total</span>
                  <span id="store-cart-total" style="color: var(--primary);">₹0.00</span>
                </div>
              </div>
              <button class="checkout-btn" onclick="checkoutStoreCart()">Pay via SART Wallet</button>
            </div>
          </div>
          
        </div>
      </section>
      
`}}):null}function M(){let[a,b]=(0,h.useState)(!1);return((0,h.useEffect)(()=>{b(!0)},[]),a)?(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:`      <!-- 5. PROFILE TAB (Premium Redesign) -->
      <section class="tab-screen" id="tab-profile">
        <div class="profile-container">
          
          <div class="profile-card">
            <div class="profile-avatar-container">
              <div class="profile-avatar">
                AC
              </div>
              <div class="profile-avatar-badge"></div>
            </div>
            <div class="profile-info-details">
              <h2>Alex Carter</h2>
              <p>alex.carter@sart.com • +91 98765 43210</p>
              <span class="profile-tier">SART TEAL ELITE</span>
            </div>
          </div>
          
          <div class="profile-stats-row">
            <div class="profile-stat-box">
              <div class="num">142</div>
              <div class="lbl">Total Trips</div>
            </div>
            <div class="profile-stat-box">
              <div class="num">₹15,000.00</div>
              <div class="lbl">Wallet Balance</div>
            </div>
            <div class="profile-stat-box">
              <div class="num">85%</div>
              <div class="lbl">Beta Trust</div>
            </div>
          </div>
          
          <div class="profile-sections-list">
            <div class="profile-section-item" onclick="openProfileSubpage('documents', 'Documents & Verification')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-folder-open"></i></div>
                <div class="profile-section-text">
                  <h4>Documents & DigiLocker</h4>
                  <p>Manage driving licenses, vehicle permit credentials & verified ID cards.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('payment', 'Payment Settings')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-credit-card"></i></div>
                <div class="profile-section-text">
                  <h4>Linked Payments & Wallets</h4>
                  <p>Configure bank accounts, credit cards, auto-recharge settings and UPI IDs.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('safety', 'Safety & Ride Settings')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-shield-halved"></i></div>
                <div class="profile-section-text">
                  <h4>Safety & Ride Preferences</h4>
                  <p>Configure kids & women protection, professional chauffeur mode, speed alerts.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('language', 'Language & Country')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-globe"></i></div>
                <div class="profile-section-text">
                  <h4>Localization Settings</h4>
                  <p>Set standard language (English), local currency (INR) and home country (India).</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('help', 'Help & Support')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-circle-question"></i></div>
                <div class="profile-section-text">
                  <h4>Customer Help Desk</h4>
                  <p>Read FAQs, initiate safety contacts, or open support ticket entries.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('about', 'About SART')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-info"></i></div>
                <div class="profile-section-text">
                  <h4>About Universal SART</h4>
                  <p>Version 2.4.0-Beta. Standard legal privacy policy, terms of service agreements.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openModal('modal-bit-feed')">
              <div class="profile-section-left">
                <div class="profile-section-icon" style="background: rgba(21,127,138,0.15);"><i class="fa-solid fa-compass"></i></div>
                <div class="profile-section-text">
                  <h4>BIT Tool Active Feed</h4>
                  <p>Access the live activity dashboard tracking vehicle events across city sectors.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
          </div>
          
        </div>
      </section>
      
      <!-- 5. DYNAMIC PROFILE SUB-PAGE VIEW PANEL -->
      <section class="tab-screen" id="tab-profile-subpage">
        <div class="dashboard-card" style="max-width: 800px; margin: 20px auto;">
          <div class="subpage-header">
            <button class="back-btn" onclick="backToProfile()"><i class="fa-solid fa-chevron-left"></i> Back to Profile</button>
            <h2 id="subpage-title-txt" style="font-size: 20px; font-weight: 800;">Settings Section</h2>
          </div>
          <hr style="border:0; border-top: 1px solid var(--dark-border); margin: 20px 0;">
          <div id="subpage-content-container">
            <!-- Loaded dynamically via js -->
          </div>
        </div>
      </section>
      
    </main>
    
`}}):null}function N(){let[a,b]=(0,h.useState)(!1);return((0,h.useEffect)(()=>{b(!0)},[]),a)?(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:`      <!-- 4. SUPER WALLET TAB -->
      <section class="tab-screen" id="tab-wallet">
        <div class="wallet-page-layout">
          
          <div class="wallet-dashboard-col">
            <div class="dashboard-card wallet-card-wide">
              <div class="wallet-page-header">
                <h2>Super Wallet Dashboard</h2>
                <span class="gold-tier-badge">GOLD ELITE MEMBER</span>
              </div>
              
              <div class="wallet-page-metrics">
                <div class="wallet-metric-box">
                  <span class="lbl">Available Balance</span>
                  <h1 class="val" id="wallet-pg-balance">₹15,000.00</h1>
                  <span class="subtext">Secure escrow holding</span>
                </div>
                <div class="wallet-metric-box">
                  <span class="lbl">Loyalty Points</span>
                  <h1 class="val" style="color:var(--secondary);" id="wallet-pg-points">2,450 pts</h1>
                  <span class="subtext">Claim details under profile</span>
                </div>
                <div class="wallet-metric-box">
                  <span class="lbl">Accumulated Cashback</span>
                  <h1 class="val" style="color:var(--success);" id="wallet-pg-cashback">₹350.00</h1>
                  <button class="claim-btn" onclick="claimCashbackMoney()">Claim to Balance</button>
                </div>
              </div>
            </div>

            <!-- Wallet Forms row -->
            <div class="wallet-forms-row">
              <div class="dashboard-card" style="flex: 1;">
                <h3><i class="fa-solid fa-plus" style="color:var(--success);"></i> Load Funds</h3>
                <p style="font-size:11px; color:var(--text-secondary); margin-bottom:12px;">Add instant digital currency to your wallet balance.</p>
                
                <div class="form-group">
                  <label>Amount to Deposit (INR)</label>
                  <input type="number" class="input-field" id="wallet-pg-deposit-amount" value="5000">
                </div>
                <div class="form-group">
                  <label>Payment Source Card</label>
                  <select class="input-field select-field" id="wallet-pg-deposit-source">
                    <option value="Visa (last 4: 4242)">Visa •••• 4242</option>
                    <option value="Mastercard (last 4: 8839)">Mastercard •••• 8839</option>
                  </select>
                </div>
                <button class="action-btn" onclick="executeWalletPageDeposit()">Process Deposit</button>
              </div>

              <div class="dashboard-card" style="flex: 1;">
                <h3><i class="fa-solid fa-paper-plane" style="color:var(--primary);"></i> Send Money (UPI)</h3>
                <p style="font-size:11px; color:var(--text-secondary); margin-bottom:12px;">Transfer funds immediately to any UPI ID or account number.</p>
                
                <div class="form-group">
                  <label>Recipient Address</label>
                  <input type="text" class="input-field" id="wallet-pg-transfer-recipient" placeholder="upi-id@bank or account no" value="rajesh.kumar@upi">
                </div>
                <div class="form-group">
                  <label>Amount to Send (INR)</label>
                  <input type="number" class="input-field" id="wallet-pg-transfer-amount" value="1000">
                </div>
                <button class="action-btn" onclick="executeWalletPageTransfer()">Transfer Funds</button>
              </div>
            </div>
          </div>

          <div class="wallet-history-col">
            <div class="dashboard-card" style="height: 100%; display: flex; flex-direction: column;">
              <h3>Recent Transaction Registry</h3>
              <p style="font-size:11px; color:var(--text-secondary); margin-bottom:14px;">Audit log of recent wallet charges and top-ups.</p>
              <div class="transactions-full-list" id="wallet-pg-transactions-list" style="flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:10px;">
                <!-- Dynamically loaded -->
              </div>
            </div>
          </div>

        </div>
      </section>
      
`}}):null}let O=[{name:"Chennai",active:!0},{name:"Bangalore"},{name:"Goa"},{name:"Hyderabad"},{name:"Kolkata"},{name:"Mumbai"},{name:"Pune"}],P="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),Q={A:["Abohar","Abu Road","Achampet","Acharapakkam","Addanki","Adilabad","Adipur","Adoni","Adoor","Agar","Agartala","Agra","Ahmedabad","Ahmedgarh","Ahmednagar","Aizawl","Ajmer","Akbarpur"],B:["Badami","Baddi","Badlapur","Badrinath","Bagalkot","Baghpat","Bahadurgarh","Baharampur","Baheri","Bahraich","Bajpe","Bakhtiarpur","Balaghat","Balasore","Ballia","Bally","Balrampur","Banda","Bandikui","Bandi"],C:["Cachar","Calicut","Cambay","Canning","Canacona","Canning","Captainganj","Caranzalem","Chabua","Chaibasa","Chakradharpur","Chalisgaon","Chamba","Chamoli","Champawat","Chamrajnagar","Chandanagar","Chandigarh","Chandrapur"],D:["Dabhoi","Dabra","Dahanu","Dahod","Dalhousie","Dalkhola","Dalli Rajhara","Dalsinghsarai","Daltonganj","Daman","Damoh","Dandeli","Darbhanga","Darjeeling","Daryapur","Dasua","Datia","Daund","Dausa"],E:["Edappal","Edar","Edathala","Egra","Elamakkara","Elanthoor","Elayirampannai","Eluru","Emmiganur","Erattupetta","Eraviperoor","Ernakulam","Erode","Errum Manzil","Erumely","Etah","Etawah","Ettumanoor"],F:["Faizabad","Faizpur","Falaknuma","Falakata","Faridabad","Faridkot","Farrukhabad","Fatehabad","Fatehgarh Sahib","Fatehpur","Fazilka","Firozabad","Firozpur","Firozpur Cantt","Forbesganj"],G:["Gachibowli","Gadag","Gadarwara","Gadchiroli","Gadhinglaj","Gadwal","Gagret","Gajraula","Gajuwaka","Galiakot","Ganderbal","Gandhidham","Gandhinagar","Gangapur","Gangarampur","Gangavati","Gangtok","Gannavaram"],H:["Habra","Hagaribommanahalli","Hajo","Haldia","Haldwani","Haliyal","Halol","Hampi","Hansi","Hanumangarh","Hapur","Harda","Hardoi","Haridwar","Harihar","Hasanpur","Hassan","Hathras","Havelock"],I:["Ibrahimpatnam","Ichalkaranji","Idappadi","Idukki","Igatpuri","Ikkadu","Ilkal","Imphal","Indapur","Indi","Indiranagar","Indore","Indravati","Irinjalakuda","Islampur","Itanagar","Itarsi"],J:["Jabalpur","Jadugora","Jagalur","Jagatdal","Jagdalpur","Jagraon","Jagtial","Jaipur","Jaisalmer","Jajpur","Jalalabad","Jalandhar","Jalaun","Jalgaon","Jalna","Jalpaiguri","Jamalpur","Jamkhandi","Jammu"],K:["Kadapa","Kadi","Kadiri","Kadirur","Kagaznagar","Kailashahar","Kaithal","Kakinada","Kalady","Kalamassery","Kalamboli","Kalimpong","Kalka","Kallakurichi","Kalpetta","Kalyan","Kamakshyanagar","Kamareddy","Kanchipuram"],L:["Lachung","Ladwa","Lahar","Laharpur","Lakhimpur","Lakhisarai","Lakshadweep","Lalkuan","Lalitpur","Lalganj","Lalgudi","Latur","Leh","Lonavala","Lucknow","Ludhiana","Lumding","Lunawada"],M:["Macherla","Machilipatnam","Madanapalle","Madgaon","Madhubani","Madikeri","Madurai","Mahabaleshwar","Mahabubnagar","Mahad","Maharajganj","Mahasamund","Mahbubabad","Mahe","Mahoba","Mahuva","Maihar","Mainpuri","Malappuram","Mumbai"],N:["Nabadwip","Nabarangpur","Nabha","Nadia","Nadiad","Nagaon","Nagapattinam","Nagaur","Nagda","Nagercoil","Nagpur","Nahan","Naharlagun","Naihati","Nainital","Najibabad","Nakodar","Nalbari","Nalgonda"],O:["Obra","Odalavarevu","Olandai","Olavakkode","Old Goa","Olpad","Omalur","Omerga","Omkareshwar","Ond","Ongole","Ooty","Orai","Orathanadu","Osmanabad","Ottapalam","Ozar"],P:["Pachmarhi","Padmanabhapuram","Padra","Padrauna","Pahalgam","Pakaur","Palakkad","Palampur","Palanpur","Palghar","Pali","Palwal","Panaji","Panchkula","Pandharpur","Panipat","Panna","Panvel","Pune"],Q:["Qadian","Qazigund","Quilandy","Quilon","Quthbullapur"],R:["Raebareli","Raichur","Raiganj","Raigarh","Raipur","Rajahmundry","Rajapalayam","Rajgarh","Rajkot","Rajnandgaon","Rajouri","Rajpura","Rajsamand","Ramagundam","Ramanagara","Ramanathapuram","Ramgarh","Rampur","Ranchi"],S:["Sabroom","Sadasivpet","Sagar","Saharanpur","Saharsa","Salem","Samastipur","Sambalpur","Sambhal","Sangareddy","Sangli","Sangrur","Satara","Satna","Secunderabad","Sehore","Seoni","Shahdol","Shahjahanpur"],T:["Tadepalligudem","Tadipatri","Tambaram","Tamluk","Tandur","Tarn Taran","Tezpur","Thalassery","Thane","Thanjavur","Theni","Thiruvananthapuram","Thoothukudi","Thrissur","Tindivanam","Tinsukia","Tiptur","Tiruchirappalli","Tirunelveli"],U:["Udaipur","Udgir","Udhagamandalam","Udhampur","Udupi","Ujjain","Ulhasnagar","Uluberia","Umaria","Una","Unjha","Unnao","Upleta","Uran","Uran Islampur","Uravakonda","Urmar Tanda","Usilampatti","Utraula"],V:["Vadakara","Vadalur","Vadipatti","Vadnagar","Vadodara","Vaikom","Valparai","Valsad","Vandavasi","Vaniyambadi","Vapi","Varanasi","Varkala","Vasai","Vasco Da Gama","Vellore","Vidisha","Vijayawada","Viluppuram"],W:["Wadgaon Road","Wadhwan","Wadi","Wai","Wanaparthy","Wani","Wankaner","Wara Seoni","Warangal","Wardha","Warhapur","Warisaliganj","Warora","Warud","Washim","Wayanad","Wokha"],X:["Xeldem","Xerxes (Historical site)"],Y:["Yadgir","Yamunanagar","Yanam","Yavatmal","Yawal","Yellandu","Yemmiganur","Yerraguntla","Yevla"],Z:["Zahirabad","Zaidpur","Zamania","Zira","Zirakpur","Zunheboto"]};function R({isOpen:a,onClose:b}){let[c,d]=(0,h.useState)(""),[e,f]=(0,h.useState)("A");if(!a)return null;let i=a=>{b()},j=Q[e]||[];return(0,g.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3},onClick:b,children:(0,g.jsxs)("div",{className:"new-city-modal",onClick:a=>a.stopPropagation(),children:[(0,g.jsxs)("div",{className:"new-city-header",children:[(0,g.jsx)("h2",{className:"new-city-title",children:"Select Location"}),(0,g.jsx)("button",{className:"new-city-close",onClick:b,children:(0,g.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,g.jsxs)("div",{className:"new-city-body",children:[(0,g.jsxs)("div",{className:"new-city-search",children:[(0,g.jsx)("i",{className:"fa-solid fa-magnifying-glass search-icon"}),(0,g.jsx)("input",{type:"text",placeholder:"Search city, area or locality",value:c,onChange:a=>d(a.target.value)})]}),(0,g.jsxs)("div",{className:"use-current-location",onClick:()=>{alert("GPS Location requested"),b()},children:[(0,g.jsx)("i",{className:"fa-solid fa-location-crosshairs"}),(0,g.jsx)("span",{children:"Use Current Location"})]}),(0,g.jsx)("div",{className:"new-cities-grid",children:O.map(a=>(0,g.jsxs)("div",{className:`new-city-card ${a.active?"active":""}`,onClick:()=>i(a.name),children:[(0,g.jsx)("i",{className:"fa-solid fa-location-dot city-pin"}),(0,g.jsx)("span",{className:"city-name",children:a.name})]},a.name))}),(0,g.jsx)("h3",{className:"all-cities-title",children:"All Cities"}),(0,g.jsx)("div",{className:"alphabet-row",children:P.map(a=>(0,g.jsx)("span",{className:`alphabet-letter ${e===a?"active":""}`,onClick:()=>f(a),children:a},a))}),j.length>0&&(0,g.jsxs)("div",{className:"alphabet-cities-container",style:{marginTop:"20px"},children:[(0,g.jsx)("h4",{style:{color:"#4b5563",marginBottom:"15px"},children:e}),(0,g.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"15px"},children:j.map((a,b)=>(0,g.jsx)("div",{onClick:()=>i(a),style:{cursor:"pointer",color:"#4b5563",fontSize:"14px",padding:"5px 0"},className:"alphabet-city-item",children:a},`${a}-${b}`))})]})]})]})})}a.s(["default",0,function(){let[a,b]=(0,h.useState)(!1),[c,d]=(0,h.useState)(!1),[e,f]=(0,h.useState)(!1),[j,k]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{let a=a=>{"modal-ride"===a.detail?b(!0):"modal-carrier"===a.detail?d(!0):"modal-rental"===a.detail?f(!0):"modal-city-selector"===a.detail&&k(!0)};return window.addEventListener("openReactModal",a),()=>{window.removeEventListener("openReactModal",a)}},[]),(0,g.jsxs)("div",{className:"web-app-layout",children:[(0,g.jsx)(n,{}),(0,g.jsx)(o,{}),(0,g.jsxs)("main",{className:"web-main-content",children:[(0,g.jsx)(K,{}),(0,g.jsx)(L,{}),(0,g.jsx)(N,{}),(0,g.jsx)(M,{}),(0,g.jsx)(E,{})]}),(0,g.jsx)(i.default,{src:"/app.js",strategy:"lazyOnload"}),(0,g.jsx)(t,{isOpen:a,onClose:()=>b(!1)}),(0,g.jsx)(y,{isOpen:c,onClose:()=>d(!1)}),(0,g.jsx)(D,{isOpen:e,onClose:()=>f(!1)}),(0,g.jsx)(R,{isOpen:j,onClose:()=>k(!1)})]})}],40777)}];

//# sourceMappingURL=_0f_e3og._.js.map