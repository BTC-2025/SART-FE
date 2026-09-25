(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3303,(e,a,i)=>{a.exports=e.r(79520)},52683,e=>{"use strict";let a,i,t,s;var o,l=e.i(43476),r=e.i(71645),n=e.i(3303);let d=e=>{let a,i=new Set,t=(e,t)=>{let s="function"==typeof e?e(a):e;if(!Object.is(s,a)){let e=a;a=(null!=t?t:"object"!=typeof s||null===s)?s:Object.assign({},a,s),i.forEach(i=>i(a,e))}},s=()=>a,o={setState:t,getState:s,getInitialState:()=>l,subscribe:e=>(i.add(e),()=>i.delete(e))},l=a=e(t,s,o);return o},c=e=>a=>{try{let i=e(a);if(i instanceof Promise)return i;return{then:e=>c(e)(i),catch(e){return this}}}catch(e){return{then(e){return this},catch:a=>c(a)(e)}}},p={wallet:{balance:15e3,points:2450,cashback:350,transactions:[{id:"tx-001",title:"Airport Taxi Booking",amount:800,date:new Date(Date.now()-72e5).toLocaleString(),isCredit:!1,category:"Ride"},{id:"tx-002",title:"Tire Air Replacement Kit",amount:3500,date:new Date(Date.now()-864e5).toLocaleString(),isCredit:!1,category:"Store"},{id:"tx-003",title:"Visa Top-up Loaded",amount:1e4,date:new Date(Date.now()-1728e5).toLocaleString(),isCredit:!0,category:"Deposit"}]},bookings:[{id:"bk-001",title:"Tata Nexon EV Rental",type:"rental",dateTime:new Date(Date.now()+1728e5).toLocaleString(),details:"Pickup: 10:00 AM • 3 Days Duration",status:"Active",cost:4500},{id:"bk-002",title:"Tire Diagnostics & Balance",type:"mechanic",dateTime:new Date(Date.now()-2592e5).toLocaleString(),details:"Assigned: Rajesh Kumar • Completed",status:"Completed",cost:1200}],cart:[],wishlist:[],notifications:[{id:"notif-1",title:"Gold Tier Perks Unlocked!",desc:"Enjoy free airport terminal lounge access & priority dispatch.",read:!1,date:"Today"},{id:"notif-2",title:"EV Battery Status Optimized",desc:"Tata Nexon EV charge finished cycle. Ready for commutes.",read:!1,date:"Yesterday"},{id:"notif-3",title:"Toll Refund Processed",desc:"₹120 refund credited for NH-44 Fastag anomaly.",read:!0,date:"3 days ago"}],location:"Indiranagar, Bengaluru",activeBookingId:null},f=(t=(o=(a=e=>({...p,addTransaction:a=>e(e=>({wallet:{...e.wallet,transactions:[a,...e.wallet.transactions]}})),updateBalance:(a,i)=>e(e=>{let t=i?e.wallet.balance+a:e.wallet.balance-a;return{wallet:{...e.wallet,balance:t}}}),addBooking:a=>e(e=>({bookings:[a,...e.bookings],activeBookingId:a.id})),addToCart:a=>e(e=>e.cart.find(e=>e.id===a.id)?{cart:e.cart.map(e=>e.id===a.id?{...e,quantity:e.quantity+1}:e)}:{cart:[...e.cart,a]}),removeFromCart:a=>e(e=>({cart:e.cart.filter(e=>e.id!==a)})),clearCart:()=>e({cart:[]}),toggleWishlist:a=>e(e=>({wishlist:e.wishlist.includes(a)?e.wishlist.filter(e=>e!==a):[...e.wishlist,a]})),setLocation:a=>e({location:a}),setActiveBookingId:a=>e({activeBookingId:a})}),i={name:"sart-storage-v2",partialize:e=>({wallet:e.wallet,bookings:e.bookings,cart:e.cart,wishlist:e.wishlist,location:e.location})},(e,t,s)=>{let o,l={storage:function(e){let a;try{a=e()}catch(e){return}return{getItem:e=>{var i;let t=e=>null===e?null:JSON.parse(e,void 0),s=null!=(i=a.getItem(e))?i:null;return s instanceof Promise?s.then(t):t(s)},setItem:(e,i)=>a.setItem(e,JSON.stringify(i,void 0)),removeItem:e=>a.removeItem(e)}}(()=>window.localStorage),partialize:e=>e,version:0,merge:(e,a)=>({...a,...e}),...i},r=!1,n=0,d=new Set,p=new Set,f=l.storage;if(!f)return a((...a)=>{console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`),e(...a)});let x=()=>{let e=l.partialize({...t()});return f.setItem(l.name,{state:e,version:l.version})},m=s.setState;s.setState=(e,a)=>(m(e,a),x());let u=a((...a)=>(e(...a),x()));s.getInitialState=()=>u;let h=()=>{var a,i;if(!f)return;let s=++n;r=!1,d.forEach(e=>{var a;return e(null!=(a=t())?a:u)});let m=(null==(i=l.onRehydrateStorage)?void 0:i.call(l,null!=(a=t())?a:u))||void 0;return c(f.getItem.bind(f))(l.name).then(e=>{if(e)if("number"!=typeof e.version||e.version===l.version)return[!1,e.state];else{if(l.migrate){let a=l.migrate(e.state,e.version);return a instanceof Promise?a.then(e=>[!0,e]):[!0,a]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(a=>{var i;if(s!==n)return;let[r,d]=a;if(e(o=l.merge(d,null!=(i=t())?i:u),!0),r)return x()}).then(()=>{s===n&&(null==m||m(t(),void 0),o=t(),r=!0,p.forEach(e=>e(o)))}).catch(e=>{s===n&&(null==m||m(void 0,e))})};return s.persist={setOptions:e=>{l={...l,...e},e.storage&&(f=e.storage)},clearStorage:()=>{++n,null==f||f.removeItem(l.name)},getOptions:()=>l,rehydrate:()=>h(),hasHydrated:()=>r,onHydrate:e=>(d.add(e),()=>{d.delete(e)}),onFinishHydration:e=>(p.add(e),()=>{p.delete(e)})},l.skipHydration||h(),o||u}))?d(o):d,Object.assign(s=e=>(function(e,a=e=>e){let i=r.default.useSyncExternalStore(e.subscribe,r.default.useCallback(()=>a(e.getState()),[e,a]),r.default.useCallback(()=>a(e.getInitialState()),[e,a]));return r.default.useDebugValue(i),i})(t,e),t),s);function x(){let{wallet:e}=f(),[a,i]=(0,r.useState)(!1),[t,s]=(0,r.useState)(!1),[o,n]=(0,r.useState)(""),[d,c]=(0,r.useState)("Chennai"),p=(0,r.useRef)(null),x=[{title:"Road Ride Booking",kw:["ride","taxi","car","cab","economy","suv"],modal:"modal-ride",icon:"fa-car",color:"var(--primary)"},{title:"Logistics Cargo Truck",kw:["carrier","truck","logistics","delivery","cargo"],modal:"modal-carrier",icon:"fa-truck",color:"var(--secondary)"},{title:"Hourly Vehicle Rental",kw:["rental","key","nexon","himalayan","bike","motorcycle"],modal:"modal-rental",icon:"fa-key",color:"var(--accent)"},{title:"Personal Chauffeur Hire",kw:["driver","chauffeur","verified"],modal:"modal-drivers",icon:"fa-user-tie",color:"var(--warning)"},{title:"Shared Parking Spot",kw:["parking","slot","ev slot"],modal:"modal-parking",icon:"fa-square-p",color:"#8b5cf6"},{title:"Mechanic Diagnostic Visit",kw:["mechanic","repair","wheel","overhaul"],modal:"modal-mechanic",icon:"fa-screwdriver-wrench",color:"#64748b"},{title:"Ferry & Yacht Sea Booking",kw:["sea","ferry","yacht","maritime","boat","water"],modal:"modal-sea",icon:"fa-ship",color:"var(--success)"},{title:"Flight & Heli Air Booking",kw:["air","flight","helicopter","chopper","plane","sky"],modal:"modal-air",icon:"fa-plane",color:"var(--warning)"},{title:"Train Vande Bharat Book",kw:["train","express","metro","railway","vande","rajdhani"],modal:"modal-train",icon:"fa-train",color:"#c864ff"}];return(0,r.useEffect)(()=>{let e=e=>{c(e.detail)};return window.addEventListener("updateLocation",e),()=>window.removeEventListener("updateLocation",e)},[]),(0,r.useEffect)(()=>{let e=e=>{p.current&&!p.current.contains(e.target)&&i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,l.jsxs)("header",{className:"web-navbar",children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,l.jsxs)("div",{className:"nav-brand",onClick:()=>console.log("Home"),children:[(0,l.jsx)("i",{className:"fa-solid fa-compass-drafting brand-icon"}),(0,l.jsx)("span",{children:"SART"}),(0,l.jsx)("span",{className:"brand-badge",children:"UNIVERSAL"})]}),(0,l.jsxs)("div",{className:"location-nav-btn",style:{flexShrink:0,alignSelf:"center"},onClick:()=>{window.dispatchEvent(new CustomEvent("openReactModal",{detail:"modal-city-selector"}))},children:[(0,l.jsx)("i",{className:"fa-solid fa-location-dot"}),(0,l.jsx)("span",{id:"nav-location-txt",children:d}),(0,l.jsx)("i",{className:"fa-solid fa-chevron-down",style:{fontSize:"10px"}})]})]}),(0,l.jsxs)("nav",{className:"nav-links",children:[(0,l.jsx)("div",{className:"nav-link active",id:"nav-btn-home",onClick:()=>window.switchTab("home"),children:(0,l.jsx)("span",{children:"Home"})}),(0,l.jsx)("div",{className:"nav-link",id:"nav-btn-store",onClick:()=>window.switchTab("store"),children:(0,l.jsx)("span",{children:"Store"})}),(0,l.jsx)("div",{className:"nav-link",id:"nav-btn-booking",onClick:()=>window.switchTab("booking"),children:(0,l.jsx)("span",{children:"Booking"})})]}),t&&(0,l.jsxs)("div",{className:"expanded-search-container",children:[(0,l.jsx)("i",{className:"fa-solid fa-magnifying-glass search-icon-left"}),(0,l.jsx)("input",{type:"text",className:"expanded-search-input",placeholder:"Search...",autoFocus:!0,value:o,onChange:e=>n(e.target.value),onBlur:()=>setTimeout(()=>{s(!1),n("")},200)}),o&&(0,l.jsx)("div",{className:"search-dropdown",children:x.filter(e=>e.title.toLowerCase().includes(o.toLowerCase())||e.kw.some(e=>e.includes(o.toLowerCase()))).length>0?x.filter(e=>e.title.toLowerCase().includes(o.toLowerCase())||e.kw.some(e=>e.includes(o.toLowerCase()))).map(e=>(0,l.jsxs)("div",{className:"booking-card",onClick:()=>{window.openModal(e.modal),s(!1),n("")},children:[(0,l.jsxs)("div",{className:"booking-card-left",children:[(0,l.jsx)("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",color:e.color},children:(0,l.jsx)("i",{className:`fa-solid ${e.icon}`})}),(0,l.jsxs)("div",{className:"booking-card-text",children:[(0,l.jsx)("h4",{style:{margin:0,fontSize:"13px",color:"#fff"},children:e.title}),(0,l.jsx)("p",{style:{margin:"2px 0 0 0",fontSize:"9px",textTransform:"uppercase",color:"var(--text-secondary)"},children:"Shortcut trigger"})]})]}),(0,l.jsx)("i",{className:"fa-solid fa-chevron-right",style:{fontSize:"10px",color:"var(--text-secondary)"}})]},e.title)):(0,l.jsx)("div",{style:{textAlign:"center",color:"var(--text-secondary)",padding:"15px",fontSize:"12px"},children:"No matching modules found in directory."})})]}),(0,l.jsxs)("div",{className:"nav-controls",children:[(0,l.jsx)("div",{className:"ctrl-btn",style:{visibility:t?"hidden":"visible"},onClick:()=>s(!0),children:(0,l.jsx)("i",{className:"fa-solid fa-magnifying-glass"})}),(0,l.jsx)("div",{className:"ctrl-btn",onClick:()=>window.openModal("modal-liked"),children:(0,l.jsx)("i",{className:"fa-solid fa-heart"})}),(0,l.jsx)("div",{className:"ctrl-btn",onClick:()=>{window.dispatchEvent(new CustomEvent("openReactModal",{detail:"modal-bookings-registry"}))},children:(0,l.jsx)("i",{className:"fa-solid fa-bag-shopping"})}),(0,l.jsxs)("div",{ref:p,children:[(0,l.jsxs)("div",{className:"profile-nav-btn",onClick:()=>i(!a),style:{position:"relative"},children:[(0,l.jsx)("i",{className:"fa-solid fa-circle-user"}),(0,l.jsx)("span",{children:"Alex Carter"}),(0,l.jsx)("i",{className:"fa-solid fa-chevron-down",style:{fontSize:"9px"}})]}),a&&(0,l.jsxs)("div",{className:"profile-dropdown-menu show",style:{width:"320px",padding:"24px",borderRadius:"28px",textAlign:"center",background:"#ffffff",border:"1px solid #e5e7eb",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",color:"#000000"},children:[(0,l.jsxs)("div",{style:{position:"relative",width:"80px",height:"80px",margin:"0 auto 12px"},children:[(0,l.jsx)("div",{style:{width:"100%",height:"100%",borderRadius:"50%",background:"#0b57d0",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"36px",fontWeight:500},children:"V"}),(0,l.jsxs)("label",{style:{position:"absolute",bottom:0,right:0,background:"white",color:"black",width:"26px",height:"26px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",cursor:"pointer"},children:[(0,l.jsx)("i",{className:"fa-solid fa-camera"}),(0,l.jsx)("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:e=>{e.target.files&&e.target.files[0]&&alert("Selected file: "+e.target.files[0].name)}})]})]}),(0,l.jsx)("h3",{style:{margin:0,fontSize:"18px",fontWeight:600,color:"#000000"},children:"vinothkumar"}),(0,l.jsx)("p",{style:{margin:"4px 0 16px",fontSize:"14px",color:"#4b5563"},children:"gmvinoth@bnxmail.com"}),(0,l.jsxs)("button",{onClick:()=>console.log("Manage Account"),style:{background:"transparent",border:"1px solid #d1d5db",color:"#000000",borderRadius:"24px",padding:"10px 20px",fontSize:"14px",fontWeight:500,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"8px",marginBottom:"20px",width:"auto"},children:[(0,l.jsx)("i",{className:"fa-solid fa-user-gear"})," Manage your account"]}),(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginBottom:"20px"},children:[(0,l.jsxs)("button",{onClick:()=>{document.body.classList.add("light-theme"),localStorage.setItem("sart-theme","light")},style:{background:"#f3f4f6",border:"none",color:"#000000",padding:"8px 16px",borderRadius:"12px",fontSize:"13px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-sun"})," Light"]}),(0,l.jsxs)("button",{onClick:()=>{document.body.classList.remove("light-theme"),localStorage.setItem("sart-theme","dark")},style:{background:"#f3f4f6",border:"none",color:"#000000",padding:"8px 16px",borderRadius:"12px",fontSize:"13px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-moon"})," Dark"]})]}),(0,l.jsx)("div",{style:{borderTop:"1px solid #e5e7eb",margin:"0 -24px 10px"}}),(0,l.jsxs)("a",{className:"dropdown-item",style:{padding:"12px 24px",textAlign:"left",fontSize:"14px",fontWeight:500,color:"#000000",display:"flex",alignItems:"center",gap:"12px"},onClick:()=>console.log("Add account"),children:[(0,l.jsx)("i",{className:"fa-solid fa-user-plus",style:{fontSize:"18px",color:"#4b5563"}})," Add another account"]}),(0,l.jsxs)("a",{className:"dropdown-item signout-btn",style:{padding:"12px 24px",textAlign:"left",fontSize:"14px",fontWeight:500,color:"#000000",display:"flex",alignItems:"center",gap:"12px"},onClick:()=>{console.log("Sign out"),i(!1)},children:[(0,l.jsx)("i",{className:"fa-solid fa-arrow-right-from-bracket",style:{fontSize:"18px",color:"#4b5563"}})," Sign out of this account"]})]})]})]})]})}let m=[{title:"Micro-Mobility & Last-Mile",vehicles:[{id:"bike",name:"Bike / Moto",icon:"fa-motorcycle",color:"#ff6b6b",price:250},{id:"escooter",name:"Electric Scooter",icon:"fa-bolt",color:"#10b981",price:150},{id:"auto",name:"Auto-Rickshaw",icon:"fa-taxi",color:"#f59e0b",price:350},{id:"erickshaw",name:"E-Rickshaw",icon:"fa-taxi",color:"#34d399",price:200}]},{title:"Economy & Premium Cabs",vehicles:[{id:"micro",name:"Micro Hatchback",icon:"fa-car-side",color:"#3b82f6",price:800},{id:"sedan",name:"Standard Sedan",icon:"fa-car",color:"#2563eb",price:1200},{id:"exec",name:"Executive Sedan",icon:"fa-briefcase",color:"#1d4ed8",price:1800},{id:"luxury",name:"Luxury Sedan",icon:"fa-gem",color:"#8b5cf6",price:3500}]},{title:"Multi-Utility & SUVs",vehicles:[{id:"csuv",name:"Compact SUV",icon:"fa-truck-pickup",color:"#ec4899",price:1500},{id:"mpv",name:"Standard MPV",icon:"fa-van-shuttle",color:"#f43f5e",price:2200},{id:"psuv",name:"Premium SUV",icon:"fa-crown",color:"#eab308",price:4500},{id:"lsuv",name:"Large SUV / XL",icon:"fa-truck-monster",color:"#f97316",price:5500}]},{title:"Minivans & Maxi-Cabs",vehicles:[{id:"minivan",name:"Standard Minivan",icon:"fa-shuttle-van",color:"#14b8a6",price:6500},{id:"maxicab",name:"Maxi-Cab",icon:"fa-bus-simple",color:"#06b6d4",price:8500},{id:"microcoach",name:"Luxury Micro-Coach",icon:"fa-bus",color:"#0ea5e9",price:12e3}]},{title:"Buses, Coaches & Mass Transit",vehicles:[{id:"minibus",name:"Mini-Bus",icon:"fa-bus-simple",color:"#6366f1",price:18e3},{id:"citybus",name:"Standard City Bus",icon:"fa-bus",color:"#8b5cf6",price:25e3},{id:"sleeper",name:"Sleeper Coach",icon:"fa-bed",color:"#a855f7",price:35e3},{id:"doubledecker",name:"Double-Decker Bus",icon:"fa-bus",color:"#d946ef",price:45e3},{id:"articulated",name:"Articulated Bus",icon:"fa-truck-front",color:"#f43f5e",price:6e4}]}],u=[{title:"Micro-Watercraft",vehicles:[{id:"jetski",name:"Jet Ski",icon:"fa-water",color:"#0ea5e9",price:1500},{id:"skiff",name:"Small Motorboat",icon:"fa-sailboat",color:"#38bdf8",price:3500}]},{title:"Private Charters & Speedboats",vehicles:[{id:"speedboat",name:"Standard Speedboat",icon:"fa-ship",color:"#0284c7",price:8500},{id:"cabin",name:"Premium Cabin Cruiser",icon:"fa-anchor",color:"#0369a1",price:15e3},{id:"smallyacht",name:"Small Luxury Yacht",icon:"fa-champagne-glasses",color:"#eab308",price:45e3}]},{title:"Mid-Sized Passenger Craft",vehicles:[{id:"watertaxi",name:"Commercial Water Taxi",icon:"fa-ferry",color:"#0d9488",price:25e3},{id:"catamaran",name:"Sailing Catamaran",icon:"fa-sailboat",color:"#0f766e",price:65e3},{id:"partyyacht",name:"Luxury Party Yacht",icon:"fa-martini-glass",color:"#db2777",price:12e4}]},{title:"Regional Marine Transit",vehicles:[{id:"hydrofoil",name:"Hydrofoil / Fast Ferry",icon:"fa-ship",color:"#4f46e5",price:85e3},{id:"riverboat",name:"Large Sightseeing River Boat",icon:"fa-camera",color:"#7c3aed",price:15e4}]},{title:"Mass Marine Transit & Ships",vehicles:[{id:"roro",name:"Ro-Ro Passenger Ferry",icon:"fa-ferry",color:"#4338ca",price:35e4},{id:"cruise",name:"Ocean-Going Cruise Liner",icon:"fa-ship",color:"#be123c",price:25e5}]}],h=[{title:"Urban Air Mobility & Light Choppers",vehicles:[{id:"evtol",name:"eVTOL / Air Taxi",icon:"fa-helicopter",color:"#10b981",price:25e3},{id:"lightchopper",name:"Light Helicopter",icon:"fa-helicopter",color:"#059669",price:45e3}]},{title:"Regional Turboprops & Twin-Engines",vehicles:[{id:"utilityturbo",name:"Utility Turboprop",icon:"fa-plane",color:"#f59e0b",price:12e4},{id:"twinturbo",name:"Twin-Engine Turboprop",icon:"fa-plane-departure",color:"#d97706",price:25e4}]},{title:"Private Executive Jets",vehicles:[{id:"lightjet",name:"Light Private Jet",icon:"fa-plane-up",color:"#8b5cf6",price:45e4},{id:"heavyjet",name:"Heavy Ultra-Long-Range Jet",icon:"fa-gem",color:"#7c3aed",price:125e4}]},{title:"Regional Airliners & Corporate Shuttles",vehicles:[{id:"largetwin",name:"Large Twin-Turboprop",icon:"fa-plane",color:"#3b82f6",price:65e4},{id:"regionaljet",name:"Regional Jet Airliner",icon:"fa-plane-departure",color:"#2563eb",price:15e5}]},{title:"Commercial Group Charters",vehicles:[{id:"narrowbody",name:"Narrow-Body Charter",icon:"fa-plane-arrival",color:"#e11d48",price:35e5},{id:"widebody",name:"Wide-Body Mega-Charter",icon:"fa-globe",color:"#be123c",price:85e5}]}],g=[...m.map(e=>e.vehicles).flat(),...u.map(e=>e.vehicles).flat(),...h.map(e=>e.vehicles).flat()];function v({isOpen:e,onClose:a}){let[i,t]=(0,r.useState)(1),[s,o]=(0,r.useState)("micro"),[n,d]=(0,r.useState)("Current Location"),[c,p]=(0,r.useState)(""),[f,x]=(0,r.useState)(""),[b,y]=(0,r.useState)("");if(!e)return null;let k=()=>{t(1),a()},j=g.find(e=>e.id===s),S=(e,a,i)=>(0,l.jsxs)("div",{style:{marginBottom:"32px"},children:[(0,l.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"800",color:"#111827",margin:"24px 0 16px 0",paddingBottom:"8px",borderBottom:"2px solid #e5e7eb",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:`fa-solid ${a}`})," ",e]}),i.map((e,a)=>(0,l.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,l.jsx)("h3",{style:{fontSize:"14px",fontWeight:"700",color:"#4b5563",marginBottom:"16px"},children:e.title}),(0,l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))",gap:"16px"},children:e.vehicles.map(e=>(0,l.jsxs)("div",{onClick:()=>{o(e.id),t(2)},style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"16px 12px",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-4px)",e.currentTarget.style.boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,l.jsx)("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:e.color+"20",color:e.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",marginBottom:"12px"},children:(0,l.jsx)("i",{className:`fa-solid ${e.icon}`})}),(0,l.jsx)("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1f2937",textAlign:"center",lineHeight:"1.2"},children:e.name})]},e.id))})]},a))]});return(0,l.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3,background:"rgba(0,0,0,0.6)"},onClick:k,children:(0,l.jsxs)("div",{className:"modal-sheet centered-modal",style:{maxWidth:"900px",width:"95%",height:"90vh",display:"flex",flexDirection:"column",backgroundColor:"#f9fafb",borderRadius:"24px",overflow:"hidden"},onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 24px",background:"#ffffff",borderBottom:"1px solid #e5e7eb"},children:[(0,l.jsxs)("div",{style:{fontSize:"22px",fontWeight:"800",color:"#111827",display:"flex",alignItems:"center",gap:"12px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-compass",style:{color:"#0ea5e9"}})," Omni-Transit Booking"]}),(0,l.jsx)("button",{onClick:k,style:{background:"#f3f4f6",border:"none",width:"36px",height:"36px",borderRadius:"50%",color:"#4b5563",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:(0,l.jsx)("i",{className:"fa-solid fa-xmark"})})]}),1===i&&(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"24px"},children:[S("ROAD TRANSIT","fa-car",m),S("SEA / WATER TRANSIT","fa-ship",u),S("AIR TRANSIT","fa-plane",h)]}),2===i&&(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"32px"},children:[(0,l.jsxs)("button",{onClick:()=>t(1),style:{background:"transparent",border:"none",color:"#6b7280",cursor:"pointer",fontSize:"15px",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",padding:"0 0 24px 0"},children:[(0,l.jsx)("i",{className:"fa-solid fa-arrow-left"})," Back to Fleet Options"]}),j&&(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px",background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",marginBottom:"32px",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,l.jsx)("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:j.color+"20",color:j.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px"},children:(0,l.jsx)("i",{className:`fa-solid ${j.icon}`})}),(0,l.jsxs)("div",{style:{flex:1},children:[(0,l.jsx)("h3",{style:{margin:0,fontSize:"20px",fontWeight:"800",color:"#111827"},children:j.name}),(0,l.jsx)("p",{style:{margin:"4px 0 0 0",fontSize:"14px",color:"#6b7280"},children:"Selected Vehicle"})]}),(0,l.jsxs)("div",{style:{fontSize:"24px",fontWeight:"800",color:"#111827"},children:["₹",j.price.toLocaleString("en-IN")]})]}),(0,l.jsxs)("div",{style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"24px"},children:[(0,l.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Pickup Location"}),(0,l.jsx)("input",{type:"text",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},placeholder:"Enter pickup address",value:n,onChange:e=>d(e.target.value)})]}),(0,l.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Dropoff Destination"}),(0,l.jsx)("input",{type:"text",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},placeholder:"Enter destination address",value:c,onChange:e=>p(e.target.value)})]}),(0,l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"32px"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Date"}),(0,l.jsx)("input",{type:"date",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},value:f,onChange:e=>x(e.target.value)})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Time"}),(0,l.jsx)("input",{type:"time",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},value:b,onChange:e=>y(e.target.value)})]})]}),(0,l.jsx)("button",{onClick:()=>{let e="Vehicle",a=800,i=g.find(e=>e.id===s);i&&(e=i.name,a=i.price);let t=`${e} • Premium Chauffeur`;(f||b)&&(t+=` • Scheduled: ${f} ${b}`.trim()),window.executeGenericBooking&&window.executeGenericBooking("ride",`Booking: ${n} to ${c||"Destination"}`,t,a,{from:n,to:c,date:f,time:b}),k()},style:{width:"100%",padding:"16px",borderRadius:"12px",background:"#0ea5e9",color:"#ffffff",border:"none",fontSize:"16px",fontWeight:"700",cursor:"pointer",transition:"background 0.2s"},onMouseEnter:e=>e.currentTarget.style.background="#0284c7",onMouseLeave:e=>e.currentTarget.style.background="#0ea5e9",children:"Confirm Booking"})]})]})]})})}let b=[{title:"Bikes, Trucks & Lorries",vehicles:[{id:"c-bike",name:"Delivery Bike / Moto",icon:"fa-motorcycle",color:"#ff6b6b",price:150},{id:"c-auto",name:"Electric Three-Wheeler Cargo",icon:"fa-truck-fast",color:"#f59e0b",price:400},{id:"c-minitruck",name:"Small Commercial Mini-Truck",icon:"fa-truck-pickup",color:"#3b82f6",price:900},{id:"c-lcv",name:"Light Commercial Lorry (LCV)",icon:"fa-truck",color:"#2563eb",price:2500},{id:"c-hcv",name:"Heavy Rigid Lorry (HCV)",icon:"fa-truck-front",color:"#8b5cf6",price:8e3},{id:"c-trailer",name:"Multi-Axle Semi-Trailer",icon:"fa-truck-moving",color:"#ec4899",price:15e3}]}],y=[{title:"Marine Cargo & Freight",vehicles:[{id:"c-barge",name:"Small Coastal Cargo Barge",icon:"fa-sailboat",color:"#0ea5e9",price:25e3},{id:"c-general",name:"General Cargo Ship",icon:"fa-ship",color:"#0284c7",price:15e4},{id:"c-feeder",name:"Feedership Container Ship",icon:"fa-anchor",color:"#4f46e5",price:5e5},{id:"c-mega",name:"Mega Container Ship",icon:"fa-ferry",color:"#be123c",price:25e5}]}],k=[{title:"Express Aviation Freight",vehicles:[{id:"c-drone",name:"Delivery Drone / Quadcopter",icon:"fa-helicopter-symbol",color:"#10b981",price:500},{id:"c-belly",name:"Passenger Aircraft Belly Cargo",icon:"fa-plane",color:"#f59e0b",price:15e3},{id:"c-turboprop",name:"Regional Turboprop Freighter",icon:"fa-plane-departure",color:"#d97706",price:12e4},{id:"c-narrow",name:"Narrow-Body Jet Freighter",icon:"fa-plane-up",color:"#3b82f6",price:65e4},{id:"c-wide",name:"Wide-Body Heavy Jet Freighter",icon:"fa-globe",color:"#be123c",price:35e5}]}],j=[...b.map(e=>e.vehicles).flat(),...y.map(e=>e.vehicles).flat(),...k.map(e=>e.vehicles).flat()];function S({isOpen:e,onClose:a}){let[i,t]=(0,r.useState)(1),[s,o]=(0,r.useState)("c-minitruck"),[n,d]=(0,r.useState)("Current Location"),[c,p]=(0,r.useState)(""),[f,x]=(0,r.useState)(""),[m,u]=(0,r.useState)("");if(!e)return null;let h=()=>{t(1),a()},g=j.find(e=>e.id===s),v=(e,a,i)=>(0,l.jsxs)("div",{style:{marginBottom:"32px"},children:[(0,l.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"800",color:"#111827",margin:"24px 0 16px 0",paddingBottom:"8px",borderBottom:"2px solid #e5e7eb",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:`fa-solid ${a}`})," ",e]}),i.map((e,a)=>(0,l.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,l.jsx)("h3",{style:{fontSize:"14px",fontWeight:"700",color:"#4b5563",marginBottom:"16px"},children:e.title}),(0,l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))",gap:"16px"},children:e.vehicles.map(e=>(0,l.jsxs)("div",{onClick:()=>{o(e.id),t(2)},style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"16px 12px",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-4px)",e.currentTarget.style.boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,l.jsx)("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:e.color+"20",color:e.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",marginBottom:"12px"},children:(0,l.jsx)("i",{className:`fa-solid ${e.icon}`})}),(0,l.jsx)("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1f2937",textAlign:"center",lineHeight:"1.2"},children:e.name})]},e.id))})]},a))]});return(0,l.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3,background:"rgba(0,0,0,0.6)"},onClick:h,children:(0,l.jsxs)("div",{className:"modal-sheet centered-modal",style:{maxWidth:"900px",width:"95%",height:"90vh",display:"flex",flexDirection:"column",backgroundColor:"#f9fafb",borderRadius:"24px",overflow:"hidden"},onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 24px",background:"#ffffff",borderBottom:"1px solid #e5e7eb"},children:[(0,l.jsxs)("div",{style:{fontSize:"22px",fontWeight:"800",color:"#111827",display:"flex",alignItems:"center",gap:"12px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-truck-fast",style:{color:"#0ea5e9"}})," Cargo & Carrier Booking"]}),(0,l.jsx)("button",{onClick:h,style:{background:"#f3f4f6",border:"none",width:"36px",height:"36px",borderRadius:"50%",color:"#4b5563",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:(0,l.jsx)("i",{className:"fa-solid fa-xmark"})})]}),1===i&&(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"24px"},children:[v("ROAD PARCEL CARRIERS","fa-truck",b),v("SEA PARCEL CARRIERS","fa-ship",y),v("AIR PARCEL CARRIERS","fa-plane",k)]}),2===i&&(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"32px"},children:[(0,l.jsxs)("button",{onClick:()=>t(1),style:{background:"transparent",border:"none",color:"#6b7280",cursor:"pointer",fontSize:"15px",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",padding:"0 0 24px 0"},children:[(0,l.jsx)("i",{className:"fa-solid fa-arrow-left"})," Back to Carriers"]}),g&&(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px",background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",marginBottom:"32px",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,l.jsx)("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:g.color+"20",color:g.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px"},children:(0,l.jsx)("i",{className:`fa-solid ${g.icon}`})}),(0,l.jsxs)("div",{style:{flex:1},children:[(0,l.jsx)("h3",{style:{margin:0,fontSize:"20px",fontWeight:"800",color:"#111827"},children:g.name}),(0,l.jsx)("p",{style:{margin:"4px 0 0 0",fontSize:"14px",color:"#6b7280"},children:"Selected Cargo Carrier"})]}),(0,l.jsxs)("div",{style:{fontSize:"24px",fontWeight:"800",color:"#111827"},children:["₹",g.price.toLocaleString("en-IN")]})]}),(0,l.jsxs)("div",{style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"24px"},children:[(0,l.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Pickup Location"}),(0,l.jsx)("input",{type:"text",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},placeholder:"Enter pickup address",value:n,onChange:e=>d(e.target.value)})]}),(0,l.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Dropoff Destination"}),(0,l.jsx)("input",{type:"text",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},placeholder:"Enter destination address",value:c,onChange:e=>p(e.target.value)})]}),(0,l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"32px"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Date"}),(0,l.jsx)("input",{type:"date",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},value:f,onChange:e=>x(e.target.value)})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Time"}),(0,l.jsx)("input",{type:"time",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},value:m,onChange:e=>u(e.target.value)})]})]}),(0,l.jsx)("button",{onClick:()=>{let e="Cargo Carrier",a=900,i=j.find(e=>e.id===s);i&&(e=i.name,a=i.price);let t=`${e} • Logistics Freight`;(f||m)&&(t+=` • Scheduled: ${f} ${m}`.trim()),window.executeGenericBooking&&window.executeGenericBooking("carrier",`Cargo: ${n} to ${c||"Destination"}`,t,a,{from:n,to:c,date:f,time:m}),h()},style:{width:"100%",padding:"16px",borderRadius:"12px",background:"#0ea5e9",color:"#ffffff",border:"none",fontSize:"16px",fontWeight:"700",cursor:"pointer",transition:"background 0.2s"},onMouseEnter:e=>e.currentTarget.style.background="#0284c7",onMouseLeave:e=>e.currentTarget.style.background="#0ea5e9",children:"Confirm Cargo Booking"})]})]})]})})}let w=[{title:"Two-Wheelers & Micro-Mobility",vehicles:[{id:"r-bicycle",name:"Geared Bicycle",icon:"fa-bicycle",color:"#10b981",price:250},{id:"r-scooter",name:"City Scooter (Gearless)",icon:"fa-motorcycle",color:"#3b82f6",price:400},{id:"r-commuter",name:"Standard Commuter Bike",icon:"fa-motorcycle",color:"#f59e0b",price:600},{id:"r-sports",name:"Premium Sports Bike",icon:"fa-motorcycle",color:"#ef4444",price:1200},{id:"r-adv",name:"Adventure Tourer",icon:"fa-mountain",color:"#8b5cf6",price:1800}]},{title:"Economy & City Cars",vehicles:[{id:"r-micro",name:"Micro Hatchback",icon:"fa-car-side",color:"#0ea5e9",price:1500},{id:"r-premium-hatch",name:"Premium Hatchback",icon:"fa-car",color:"#6366f1",price:2e3},{id:"r-sedan",name:"Standard Sedan",icon:"fa-car",color:"#3b82f6",price:2500}]},{title:"Premium & Executive Cars",vehicles:[{id:"r-exec",name:"Executive Sedan",icon:"fa-briefcase",color:"#1d4ed8",price:4500},{id:"r-luxury",name:"Luxury Sedan",icon:"fa-gem",color:"#8b5cf6",price:8e3},{id:"r-sports-car",name:"Sports / Convertible",icon:"fa-car-burst",color:"#e11d48",price:15e3}]},{title:"SUVs & Off-Roaders",vehicles:[{id:"r-csuv",name:"Compact SUV",icon:"fa-truck-pickup",color:"#ec4899",price:3e3},{id:"r-4x4",name:"4x4 Off-Roader",icon:"fa-mountain-sun",color:"#f97316",price:5500},{id:"r-premium-suv",name:"Premium 7-Seater SUV",icon:"fa-crown",color:"#eab308",price:7e3},{id:"r-luxury-suv",name:"Luxury Full-Size SUV",icon:"fa-truck-monster",color:"#be123c",price:12e3}]},{title:"Vans, RVs & Specialty",vehicles:[{id:"r-minivan",name:"Passenger Minivan (8 Seater)",icon:"fa-van-shuttle",color:"#14b8a6",price:4e3},{id:"r-camper",name:"Camper Van / RV",icon:"fa-caravan",color:"#06b6d4",price:8500},{id:"r-vanity",name:"Luxury Vanity Van",icon:"fa-star",color:"#db2777",price:25e3},{id:"r-moving",name:"Self-Drive Moving Truck",icon:"fa-truck",color:"#4f46e5",price:5e3}]}],C=[{title:"Personal Watercraft",vehicles:[{id:"r-jetski",name:"Jet Ski / WaveRunner",icon:"fa-water",color:"#0ea5e9",price:3500},{id:"r-skiff",name:"Small Motorboat / Skiff",icon:"fa-sailboat",color:"#38bdf8",price:6e3}]},{title:"Private Charters & Speedboats",vehicles:[{id:"r-speedboat",name:"Standard Speedboat",icon:"fa-ship",color:"#0284c7",price:12e3},{id:"r-cabin",name:"Premium Cabin Cruiser",icon:"fa-anchor",color:"#0369a1",price:25e3}]},{title:"Luxury Yachts & Catamarans",vehicles:[{id:"r-catamaran",name:"Sailing Catamaran",icon:"fa-sailboat",color:"#0f766e",price:45e3},{id:"r-yacht",name:"Luxury Private Yacht",icon:"fa-champagne-glasses",color:"#eab308",price:15e4}]}],N=[{title:"Urban Air Mobility & Choppers",vehicles:[{id:"r-evtol",name:"eVTOL / Air Taxi",icon:"fa-helicopter-symbol",color:"#10b981",price:35e3},{id:"r-chopper",name:"Light Helicopter",icon:"fa-helicopter",color:"#059669",price:85e3}]},{title:"Private Jets & Charters",vehicles:[{id:"r-lightjet",name:"Light Private Jet",icon:"fa-plane-up",color:"#8b5cf6",price:25e4},{id:"r-heavyjet",name:"Heavy Ultra-Long-Range Jet",icon:"fa-gem",color:"#7c3aed",price:85e4}]}],R=[...w.map(e=>e.vehicles).flat(),...C.map(e=>e.vehicles).flat(),...N.map(e=>e.vehicles).flat()];function B({isOpen:e,onClose:a}){let[i,t]=(0,r.useState)(1),[s,o]=(0,r.useState)("r-premium-hatch"),[n,d]=(0,r.useState)("Current Location"),[c,p]=(0,r.useState)(""),[f,x]=(0,r.useState)(""),[m,u]=(0,r.useState)(""),[h,g]=(0,r.useState)("");if(!e)return null;let v=()=>{t(1),a()},b=R.find(e=>e.id===s),y=(e,a,i)=>(0,l.jsxs)("div",{style:{marginBottom:"32px"},children:[(0,l.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"800",color:"#111827",margin:"24px 0 16px 0",paddingBottom:"8px",borderBottom:"2px solid #e5e7eb",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:`fa-solid ${a}`})," ",e]}),i.map((e,a)=>(0,l.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,l.jsx)("h3",{style:{fontSize:"14px",fontWeight:"700",color:"#4b5563",marginBottom:"16px"},children:e.title}),(0,l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))",gap:"16px"},children:e.vehicles.map(e=>(0,l.jsxs)("div",{onClick:()=>{o(e.id),t(2)},style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"16px 12px",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-4px)",e.currentTarget.style.boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,l.jsx)("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:e.color+"20",color:e.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",marginBottom:"12px"},children:(0,l.jsx)("i",{className:`fa-solid ${e.icon}`})}),(0,l.jsx)("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1f2937",textAlign:"center",lineHeight:"1.2"},children:e.name})]},e.id))})]},a))]});return(0,l.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3,background:"rgba(0,0,0,0.6)"},onClick:v,children:(0,l.jsxs)("div",{className:"modal-sheet centered-modal",style:{maxWidth:"900px",width:"95%",height:"90vh",display:"flex",flexDirection:"column",backgroundColor:"#f9fafb",borderRadius:"24px",overflow:"hidden"},onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 24px",background:"#ffffff",borderBottom:"1px solid #e5e7eb"},children:[(0,l.jsxs)("div",{style:{fontSize:"22px",fontWeight:"800",color:"#111827",display:"flex",alignItems:"center",gap:"12px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-key",style:{color:"#0ea5e9"}})," Omni-Transit Rental Booking"]}),(0,l.jsx)("button",{onClick:v,style:{background:"#f3f4f6",border:"none",width:"36px",height:"36px",borderRadius:"50%",color:"#4b5563",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:(0,l.jsx)("i",{className:"fa-solid fa-xmark"})})]}),1===i&&(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"24px"},children:[y("ROAD RENTALS","fa-car-side",w),y("SEA & MARINE RENTALS","fa-ship",C),y("AIR & CHARTER RENTALS","fa-plane",N)]}),2===i&&(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"32px"},children:[(0,l.jsxs)("button",{onClick:()=>t(1),style:{background:"transparent",border:"none",color:"#6b7280",cursor:"pointer",fontSize:"15px",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",padding:"0 0 24px 0"},children:[(0,l.jsx)("i",{className:"fa-solid fa-arrow-left"})," Back to Fleet Options"]}),b&&(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px",background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",marginBottom:"32px",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,l.jsx)("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:b.color+"20",color:b.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px"},children:(0,l.jsx)("i",{className:`fa-solid ${b.icon}`})}),(0,l.jsxs)("div",{style:{flex:1},children:[(0,l.jsx)("h3",{style:{margin:0,fontSize:"20px",fontWeight:"800",color:"#111827"},children:b.name}),(0,l.jsx)("p",{style:{margin:"4px 0 0 0",fontSize:"14px",color:"#6b7280"},children:"Selected Rental Vehicle"})]}),(0,l.jsxs)("div",{style:{fontSize:"16px",fontWeight:"700",color:"#111827",textAlign:"right"},children:[(0,l.jsxs)("div",{style:{fontSize:"24px",fontWeight:"800"},children:["₹",b.price.toLocaleString("en-IN")]}),(0,l.jsx)("div",{style:{fontSize:"12px",color:"#6b7280"},children:"per day / block"})]})]}),(0,l.jsxs)("div",{style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"24px"},children:[(0,l.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#4b5563",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"1px"},children:"Pickup & Dropoff Location"}),(0,l.jsx)("input",{type:"text",style:{width:"100%",padding:"14px",borderRadius:"10px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"15px"},placeholder:"Enter location (e.g., Airport Terminal 1, Marina Bay)",value:n,onChange:e=>d(e.target.value)})]}),(0,l.jsx)("h4",{style:{fontSize:"14px",fontWeight:"700",color:"#111827",margin:"0 0 16px 0",borderBottom:"1px solid #e5e7eb",paddingBottom:"8px"},children:"Rental Period"}),(0,l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"16px"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"12px",fontWeight:"600",color:"#6b7280",marginBottom:"6px"},children:"Start Date"}),(0,l.jsx)("input",{type:"date",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"14px"},value:c,onChange:e=>p(e.target.value)})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"12px",fontWeight:"600",color:"#6b7280",marginBottom:"6px"},children:"Start Time"}),(0,l.jsx)("input",{type:"time",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"14px"},value:f,onChange:e=>x(e.target.value)})]})]}),(0,l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"32px"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"12px",fontWeight:"600",color:"#6b7280",marginBottom:"6px"},children:"Return Date"}),(0,l.jsx)("input",{type:"date",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"14px"},value:m,onChange:e=>u(e.target.value)})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"12px",fontWeight:"600",color:"#6b7280",marginBottom:"6px"},children:"Return Time"}),(0,l.jsx)("input",{type:"time",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid #d1d5db",background:"#f9fafb",color:"#111827",fontSize:"14px"},value:h,onChange:e=>g(e.target.value)})]})]}),(0,l.jsx)("button",{onClick:()=>{let e="Self-Drive Vehicle",a=1500,i=R.find(e=>e.id===s);i&&(e=i.name,a=i.price);let t=`${e} • Self-Drive Rental`;c&&m&&(t+=` • From ${c} to ${m}`),window.executeGenericBooking&&window.executeGenericBooking("rental",`Rental: ${n}`,t,a,{from:n,startDate:c,startTime:f,returnDate:m,returnTime:h}),v()},style:{width:"100%",padding:"16px",borderRadius:"12px",background:"#0ea5e9",color:"#ffffff",border:"none",fontSize:"16px",fontWeight:"700",cursor:"pointer",transition:"background 0.2s"},onMouseEnter:e=>e.currentTarget.style.background="#0284c7",onMouseLeave:e=>e.currentTarget.style.background="#0ea5e9",children:"Confirm Rental Booking"})]})]})]})})}function T(){let[e,a]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{a(!0)},[]),e)?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:`

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
      `}})}):null}function z(){return(0,l.jsxs)("div",{className:"web-subnavbar",children:[(0,l.jsx)("div",{className:"subnav-links"}),(0,l.jsxs)("div",{className:"subnav-actions",style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,l.jsxs)("button",{className:"subnav-btn",onClick:()=>alert("SART Vendor Registration Panel loading..."),children:[(0,l.jsx)("i",{className:"fa-solid fa-store",style:{fontSize:"14px"}})," VENDOR"]}),(0,l.jsxs)("button",{className:"subnav-btn",onClick:()=>window.switchTab("wallet"),children:[(0,l.jsx)("i",{className:"fa-solid fa-wallet",style:{fontSize:"14px"}})," ₹15,000.00"]}),(0,l.jsx)("div",{className:"subnav-btn",onClick:()=>alert("Help and Support"),style:{padding:"2px 5px"},children:(0,l.jsx)("i",{className:"fa-solid fa-headset",style:{fontSize:"14px"}})}),(0,l.jsx)("div",{className:"subnav-btn",onClick:()=>window.switchTab("profile"),style:{padding:"2px 5px"},children:(0,l.jsx)("i",{className:"fa-solid fa-gear",style:{fontSize:"14px"}})})]})]})}let I=[{id:"modal-ride",title:"Rides",tag:"Road",rating:4.9,icon:"🚗",price:"From ₹800",colorClass:"rec-card-red",pos:{left:"17.7%",top:"79.5%"}},{id:"modal-carrier",title:"Carrier",tag:"Logistics",rating:4.8,icon:"🚛",price:"From ₹3,500",colorClass:"rec-card-orange",pos:{left:"25.6%",top:"79.5%"}},{id:"modal-rental",title:"Rental",tag:"Self-Drive",rating:4.9,icon:"🔑",price:"From ₹1,800/day",colorClass:"rec-card-blue",pos:{left:"33.4%",top:"79.5%"}},{id:"modal-community",title:"Community",tag:"Shared",rating:4.7,icon:"👥",price:"Ride Pooling",colorClass:"rec-card-purple",pos:{left:"59.9%",top:"79.5%"}},{id:"modal-drivers",title:"Drivers",tag:"On Demand",rating:4.8,icon:"👨‍✈️",price:"From ₹1,200",colorClass:"rec-card-green",pos:{left:"68.1%",top:"79.5%"}},{id:"modal-parking",title:"Parking",tag:"Shared",rating:4.6,icon:"🅿️",price:"From ₹150",colorClass:"rec-card-teal",pos:{left:"83.1%",top:"79.5%"}},{id:"modal-mechanic",title:"Mechanic",tag:"Service",rating:4.8,icon:"🔧",price:"From ₹1,200",colorClass:"rec-card-slate",pos:{left:"91.2%",top:"79.5%"}}];function M(){return(0,l.jsxs)("div",{className:"recommended-section",style:{position:"static"},children:[(0,l.jsx)("h2",{style:{position:"absolute",top:"62%",left:"-8%",width:"100%",textAlign:"center",fontSize:"15px",fontWeight:900,color:"#fff",textShadow:"0 2px 10px rgba(0,0,0,0.8)",letterSpacing:"2px",zIndex:10},children:"Book a Services"}),(0,l.jsx)("div",{className:"tire-grid",children:I.map(e=>(0,l.jsx)("div",{className:"tire-card",onClick:()=>{var a;return a=e.id,void window.dispatchEvent(new CustomEvent("openReactModal",{detail:a}))},style:{left:e.pos.left,top:e.pos.top},children:(0,l.jsxs)("div",{className:"tire-center-cap",children:[(0,l.jsx)("span",{className:"tire-icon",children:e.icon}),(0,l.jsx)("span",{className:"tire-title",children:e.title})]})},e.id))})]})}function A(){return(0,l.jsxs)("div",{className:"quick-booking-container",children:[(0,l.jsx)("h2",{className:"quick-booking-title",children:"Choose Your Ride"}),(0,l.jsxs)("div",{className:"quick-booking-form",children:[(0,l.jsxs)("div",{className:"qb-field",children:[(0,l.jsx)("label",{children:"PICKUP"}),(0,l.jsxs)("div",{className:"qb-input-wrap",children:[(0,l.jsx)("input",{type:"text",placeholder:"Enter Pickup Location"}),(0,l.jsx)("i",{className:"fa-solid fa-location-crosshairs target-icon"})]})]}),(0,l.jsxs)("div",{className:"qb-field",children:[(0,l.jsx)("label",{children:"DROP"}),(0,l.jsx)("div",{className:"qb-input-wrap",children:(0,l.jsx)("input",{type:"text",placeholder:"Enter Drop Location"})})]}),(0,l.jsxs)("div",{className:"qb-field",children:[(0,l.jsx)("label",{children:"WHEN"}),(0,l.jsx)("div",{className:"qb-input-wrap",children:(0,l.jsx)("input",{type:"datetime-local"})})]}),(0,l.jsxs)("div",{className:"qb-field",children:[(0,l.jsx)("label",{children:"RIDE TYPE"}),(0,l.jsx)("div",{className:"qb-input-wrap",children:(0,l.jsxs)("select",{children:[(0,l.jsxs)("optgroup",{label:"Road - Micro-Mobility",children:[(0,l.jsx)("option",{value:"bike",children:"Bike / Moto"}),(0,l.jsx)("option",{value:"escooter",children:"Electric Scooter"}),(0,l.jsx)("option",{value:"auto",children:"Auto-Rickshaw"}),(0,l.jsx)("option",{value:"erickshaw",children:"E-Rickshaw"})]}),(0,l.jsxs)("optgroup",{label:"Road - Cabs & Sedans",children:[(0,l.jsx)("option",{value:"micro",children:"Micro Hatchback"}),(0,l.jsx)("option",{value:"sedan",children:"Standard Sedan"}),(0,l.jsx)("option",{value:"exec",children:"Executive Sedan"}),(0,l.jsx)("option",{value:"luxury",children:"Luxury Sedan"})]}),(0,l.jsxs)("optgroup",{label:"Road - SUVs & Minivans",children:[(0,l.jsx)("option",{value:"csuv",children:"Compact SUV"}),(0,l.jsx)("option",{value:"psuv",children:"Premium SUV"}),(0,l.jsx)("option",{value:"lsuv",children:"Large SUV / XL"}),(0,l.jsx)("option",{value:"minivan",children:"Minivan / Maxi-Cab"})]}),(0,l.jsxs)("optgroup",{label:"Road - Cargo & Logistics",children:[(0,l.jsx)("option",{value:"delivery",children:"Delivery Bike"}),(0,l.jsx)("option",{value:"minitruck",children:"Mini-Truck"}),(0,l.jsx)("option",{value:"pickup",children:"Pickup Truck"}),(0,l.jsx)("option",{value:"heavytruck",children:"Heavy Truck"})]}),(0,l.jsxs)("optgroup",{label:"Air & Sea",children:[(0,l.jsx)("option",{value:"helicopter",children:"Helicopter"}),(0,l.jsx)("option",{value:"privatejet",children:"Private Jet"}),(0,l.jsx)("option",{value:"motorboat",children:"Motorboat"}),(0,l.jsx)("option",{value:"yacht",children:"Luxury Yacht"})]})]})})]})]}),(0,l.jsx)("div",{className:"qb-action",children:(0,l.jsx)("button",{className:"qb-confirm-btn",children:"CONFIRM BOOKING"})})]})}function L(){let e=e=>{window.openModal&&window.openModal(e)},a=()=>{window.toggleMapHotspots&&window.toggleMapHotspots()};return(0,l.jsxs)("div",{className:"home-map-wrapper",children:[(0,l.jsxs)("div",{className:"home-map-title-row",children:[(0,l.jsx)("h2",{children:"Live Fleet & Route Tracker"}),(0,l.jsxs)("span",{className:"action-link",onClick:a,children:[(0,l.jsx)("i",{className:"fa-solid fa-radar"})," Refresh Nearby Fleet"]})]}),(0,l.jsxs)("div",{className:"home-map-panel",children:[(0,l.jsx)("div",{id:"explore-map"}),(0,l.jsx)("div",{className:"map-floating-bottom-left",children:(0,l.jsxs)("button",{className:"map-action-btn-liked",id:"home-liked-btn",onClick:()=>e("modal-liked"),children:[(0,l.jsx)("i",{className:"fa-solid fa-star"})," LIKED"]})}),(0,l.jsx)("div",{className:"map-floating-bottom-right",children:(0,l.jsxs)("button",{className:"map-action-btn-nearby",id:"home-nearby-btn",onClick:a,children:[(0,l.jsx)("i",{className:"fa-solid fa-radar"})," NEAR BY FIND"]})}),(0,l.jsxs)("div",{className:"map-floating-controls",children:[(0,l.jsx)("button",{className:"map-circle-btn",onClick:()=>{window.zoomInMap&&window.zoomInMap()},children:(0,l.jsx)("i",{className:"fa-solid fa-plus"})}),(0,l.jsx)("button",{className:"map-circle-btn",onClick:()=>{window.zoomOutMap&&window.zoomOutMap()},children:(0,l.jsx)("i",{className:"fa-solid fa-minus"})}),(0,l.jsx)("button",{className:"map-circle-btn",onClick:()=>{window.recenterMap&&window.recenterMap()},children:(0,l.jsx)("i",{className:"fa-solid fa-crosshairs"})})]}),(0,l.jsxs)("div",{className:"map-active-booking-panel floating-map-booking-panel",id:"map-active-booking-card",style:{display:"none"},children:[(0,l.jsx)("div",{className:"panel-header-badge",children:"LIVE TRACKING ACTIVE"}),(0,l.jsxs)("div",{className:"panel-main",children:[(0,l.jsx)("div",{className:"panel-icon-wrap",id:"map-active-booking-icon-container",children:(0,l.jsx)("i",{className:"fa-solid fa-car-side",id:"map-active-booking-icon"})}),(0,l.jsxs)("div",{className:"panel-desc",children:[(0,l.jsx)("h4",{id:"map-active-booking-title",children:"Ride to Kempegowda Airport"}),(0,l.jsx)("p",{id:"map-active-booking-desc",children:"Driver is starting journey..."})]})]}),(0,l.jsx)("button",{className:"cancel-booking-btn",onClick:()=>e("modal-bookings-registry"),children:"Manage Ticket Details"})]})]})]})}function P(){return(0,l.jsxs)("div",{className:"dashboard-card",id:"news-section-div",style:{marginTop:"18px"},children:[(0,l.jsxs)("div",{className:"section-header-row",children:[(0,l.jsx)("h2",{className:"card-headline",children:"Latest Transit Ecosystem News"}),(0,l.jsx)("span",{className:"action-link",onClick:()=>alert("Auto News RSS Feed connected."),children:"See All Feed"})]}),(0,l.jsx)("div",{className:"web-news-row",id:"news-cards-container"})]})}let D=[{id:1,title:"Short Trip Offer",discount:"5% OFF",desc:"Use code STMB5 and get 5% off upto ₹500",code:"STMB5"},{id:2,title:"Special 5 Day offer",discount:"10% OFF",desc:"Use code STMB10 and get 10% off upto ₹1000",code:"STMB10"},{id:3,title:"Long Trip Offer",discount:"15% OFF",desc:"Use code STMB15 and get 15% off upto ₹2000",code:"STMB15"},{id:4,title:"New User Offer",discount:"20% OFF",desc:"Use code NEW20 and get 20% off upto ₹500",code:"NEW20"},{id:5,title:"Weekend Getaway",discount:"12% OFF",desc:"Use code WKND12 and get 12% off upto ₹1500",code:"WKND12"}];function W(){let[e,a]=(0,r.useState)(0),i=(0,r.useRef)(null);return(0,l.jsxs)("div",{className:"offers-container",children:[(0,l.jsxs)("div",{className:"offers-header",children:[(0,l.jsx)("h2",{children:"Offers"}),(0,l.jsxs)("div",{className:"offers-nav",children:[(0,l.jsx)("button",{className:"offers-nav-btn",onClick:()=>{e>0&&a(e=>e-1)},disabled:0===e,children:(0,l.jsx)("i",{className:"fa-solid fa-chevron-left"})}),(0,l.jsx)("button",{className:"offers-nav-btn",onClick:()=>{e<D.length-1&&a(e=>e+1)},disabled:e>=D.length-3,children:(0,l.jsx)("i",{className:"fa-solid fa-chevron-right"})})]})]}),(0,l.jsx)("div",{className:"offers-slider-wrapper",children:(0,l.jsx)("div",{className:"offers-slider-track",ref:i,style:{transform:`translateX(calc(-${33.333*e}% - ${5.3*e}px))`},children:D.map(e=>(0,l.jsxs)("div",{className:"offer-card",children:[(0,l.jsxs)("div",{className:"offer-card-top",children:[(0,l.jsxs)("div",{className:"offer-title-row",children:[(0,l.jsx)("h3",{className:"offer-title",children:e.title}),(0,l.jsx)("span",{className:"offer-discount",children:e.discount})]}),(0,l.jsx)("p",{className:"offer-desc",children:e.desc})]}),(0,l.jsxs)("div",{className:"offer-card-bottom",style:{backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23199c95' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",backgroundSize:"cover",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"},children:[(0,l.jsx)("span",{className:"offer-code",children:e.code}),(0,l.jsx)("span",{className:"offer-tnc",children:"T&C"})]})]},e.id))})})]})}function E(){let[e,a]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=setInterval(()=>{a(e=>+(0===e))},5e3);return()=>clearInterval(e)},[]),(0,l.jsxs)("section",{className:"tab-screen active",id:"tab-home",children:[(0,l.jsxs)("div",{className:"truck-hero-container",children:[(0,l.jsx)("div",{className:"truck-subnav-overlay",children:(0,l.jsx)(z,{})}),(0,l.jsx)("div",{className:"truck-cargo-overlay",children:(0,l.jsx)("div",{className:"hero-sliding-banner",children:(0,l.jsxs)("div",{className:"hero-slider-track",style:{transform:`translateX(-${100*e}%)`},children:[(0,l.jsx)("div",{className:"hero-slide-item",style:{backgroundImage:"url('/hero-left.jpg')"}}),(0,l.jsx)("div",{className:"hero-slide-item",style:{backgroundImage:"url('/hero-right.jpg')"}})]})})}),(0,l.jsx)("div",{className:"truck-wheels-overlay",children:(0,l.jsx)(M,{})})]}),(0,l.jsx)(A,{}),(0,l.jsx)(W,{}),(0,l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"7fr 5fr",gap:"24px"},children:[(0,l.jsx)(L,{}),(0,l.jsx)(P,{})]})]})}function F(){let[e,a]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{a(!0)},[]),e)?(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:`      <!-- 3. PREMIUM SART STORE TAB -->
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
      
`}}):null}function V(){let[e,a]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{a(!0)},[]),e)?(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:`      <!-- 5. PROFILE TAB (Premium Redesign) -->
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
    
`}}):null}function O(){let[e,a]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{a(!0)},[]),e)?(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:`      <!-- 4. SUPER WALLET TAB -->
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
      
`}}):null}let H=[{id:"bk-001",title:"Tata Nexon EV Rental",type:"rental",dateTime:"Oct 02, 2026, 10:00 AM",details:"Pickup: 10:00 AM • 3 Days Duration",status:"Active",cost:4500},{id:"bk-002",title:"Tire Diagnostics & Balance",type:"mechanic",dateTime:"Sept 22, 2026, 02:30 PM",details:"Assigned: Rajesh Kumar • Completed",status:"Completed",cost:1200},{id:"bk-003",title:"Airport Taxi Booking",type:"ride",dateTime:"Sept 15, 2026, 08:45 AM",details:"Terminal 1 • Completed",status:"Completed",cost:800}];function U(){let[e,a]=(0,r.useState)("active"),i=H.filter(a=>"active"===e?"Active"===a.status:"Completed"===a.status);return(0,l.jsx)("section",{className:"tab-screen",id:"tab-booking",children:(0,l.jsxs)("div",{className:"bookings-tab-container",children:[(0,l.jsxs)("div",{className:"bookings-tab-header",children:[(0,l.jsxs)("h2",{children:[(0,l.jsx)("i",{className:"fa-solid fa-calendar-check",style:{color:"var(--primary)",marginRight:"12px"}})," My Bookings"]}),(0,l.jsx)("p",{children:"View and manage all your past and upcoming SART transport bookings."})]}),(0,l.jsxs)("div",{className:"bookings-tabs-nav",children:[(0,l.jsx)("button",{className:`booking-tab-btn ${"active"===e?"active":""}`,onClick:()=>a("active"),children:"Active Bookings"}),(0,l.jsx)("button",{className:`booking-tab-btn ${"past"===e?"active":""}`,onClick:()=>a("past"),children:"Past Bookings"})]}),(0,l.jsx)("div",{className:"bookings-list",children:i.length>0?i.map(e=>(0,l.jsxs)("div",{className:"booking-card-item",children:[(0,l.jsxs)("div",{className:"booking-card-header",children:[(0,l.jsxs)("span",{className:"booking-id",children:["#",e.id]}),(0,l.jsx)("span",{className:`booking-status ${e.status.toLowerCase()}`,children:e.status})]}),(0,l.jsx)("h3",{className:"booking-title",children:e.title}),(0,l.jsx)("p",{className:"booking-details",children:e.details}),(0,l.jsxs)("div",{className:"booking-card-footer",children:[(0,l.jsxs)("span",{className:"booking-date",children:[(0,l.jsx)("i",{className:"fa-regular fa-clock"})," ",e.dateTime]}),(0,l.jsxs)("span",{className:"booking-cost",children:["₹",e.cost.toFixed(2)]})]})]},e.id)):(0,l.jsxs)("div",{className:"no-bookings",children:[(0,l.jsx)("i",{className:"fa-solid fa-box-open",style:{fontSize:"64px",color:"#cbd5e1",marginBottom:"24px"}}),(0,l.jsxs)("p",{children:["No ",e," bookings found."]}),(0,l.jsx)("button",{className:"book-now-btn",onClick:()=>window.switchTab("home"),children:"Book a Service Now"})]})})]})})}let Y=[{name:"Chennai",active:!0},{name:"Bangalore"},{name:"Goa"},{name:"Hyderabad"},{name:"Kolkata"},{name:"Mumbai"},{name:"Pune"}],G="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),K={A:["Abohar","Abu Road","Achampet","Acharapakkam","Addanki","Adilabad","Adipur","Adoni","Adoor","Agar","Agartala","Agra","Ahmedabad","Ahmedgarh","Ahmednagar","Aizawl","Ajmer","Akbarpur"],B:["Badami","Baddi","Badlapur","Badrinath","Bagalkot","Baghpat","Bahadurgarh","Baharampur","Baheri","Bahraich","Bajpe","Bakhtiarpur","Balaghat","Balasore","Ballia","Bally","Balrampur","Banda","Bandikui","Bandi"],C:["Cachar","Calicut","Cambay","Canning","Canacona","Canning","Captainganj","Caranzalem","Chabua","Chaibasa","Chakradharpur","Chalisgaon","Chamba","Chamoli","Champawat","Chamrajnagar","Chandanagar","Chandigarh","Chandrapur"],D:["Dabhoi","Dabra","Dahanu","Dahod","Dalhousie","Dalkhola","Dalli Rajhara","Dalsinghsarai","Daltonganj","Daman","Damoh","Dandeli","Darbhanga","Darjeeling","Daryapur","Dasua","Datia","Daund","Dausa"],E:["Edappal","Edar","Edathala","Egra","Elamakkara","Elanthoor","Elayirampannai","Eluru","Emmiganur","Erattupetta","Eraviperoor","Ernakulam","Erode","Errum Manzil","Erumely","Etah","Etawah","Ettumanoor"],F:["Faizabad","Faizpur","Falaknuma","Falakata","Faridabad","Faridkot","Farrukhabad","Fatehabad","Fatehgarh Sahib","Fatehpur","Fazilka","Firozabad","Firozpur","Firozpur Cantt","Forbesganj"],G:["Gachibowli","Gadag","Gadarwara","Gadchiroli","Gadhinglaj","Gadwal","Gagret","Gajraula","Gajuwaka","Galiakot","Ganderbal","Gandhidham","Gandhinagar","Gangapur","Gangarampur","Gangavati","Gangtok","Gannavaram"],H:["Habra","Hagaribommanahalli","Hajo","Haldia","Haldwani","Haliyal","Halol","Hampi","Hansi","Hanumangarh","Hapur","Harda","Hardoi","Haridwar","Harihar","Hasanpur","Hassan","Hathras","Havelock"],I:["Ibrahimpatnam","Ichalkaranji","Idappadi","Idukki","Igatpuri","Ikkadu","Ilkal","Imphal","Indapur","Indi","Indiranagar","Indore","Indravati","Irinjalakuda","Islampur","Itanagar","Itarsi"],J:["Jabalpur","Jadugora","Jagalur","Jagatdal","Jagdalpur","Jagraon","Jagtial","Jaipur","Jaisalmer","Jajpur","Jalalabad","Jalandhar","Jalaun","Jalgaon","Jalna","Jalpaiguri","Jamalpur","Jamkhandi","Jammu"],K:["Kadapa","Kadi","Kadiri","Kadirur","Kagaznagar","Kailashahar","Kaithal","Kakinada","Kalady","Kalamassery","Kalamboli","Kalimpong","Kalka","Kallakurichi","Kalpetta","Kalyan","Kamakshyanagar","Kamareddy","Kanchipuram"],L:["Lachung","Ladwa","Lahar","Laharpur","Lakhimpur","Lakhisarai","Lakshadweep","Lalkuan","Lalitpur","Lalganj","Lalgudi","Latur","Leh","Lonavala","Lucknow","Ludhiana","Lumding","Lunawada"],M:["Macherla","Machilipatnam","Madanapalle","Madgaon","Madhubani","Madikeri","Madurai","Mahabaleshwar","Mahabubnagar","Mahad","Maharajganj","Mahasamund","Mahbubabad","Mahe","Mahoba","Mahuva","Maihar","Mainpuri","Malappuram","Mumbai"],N:["Nabadwip","Nabarangpur","Nabha","Nadia","Nadiad","Nagaon","Nagapattinam","Nagaur","Nagda","Nagercoil","Nagpur","Nahan","Naharlagun","Naihati","Nainital","Najibabad","Nakodar","Nalbari","Nalgonda"],O:["Obra","Odalavarevu","Olandai","Olavakkode","Old Goa","Olpad","Omalur","Omerga","Omkareshwar","Ond","Ongole","Ooty","Orai","Orathanadu","Osmanabad","Ottapalam","Ozar"],P:["Pachmarhi","Padmanabhapuram","Padra","Padrauna","Pahalgam","Pakaur","Palakkad","Palampur","Palanpur","Palghar","Pali","Palwal","Panaji","Panchkula","Pandharpur","Panipat","Panna","Panvel","Pune"],Q:["Qadian","Qazigund","Quilandy","Quilon","Quthbullapur"],R:["Raebareli","Raichur","Raiganj","Raigarh","Raipur","Rajahmundry","Rajapalayam","Rajgarh","Rajkot","Rajnandgaon","Rajouri","Rajpura","Rajsamand","Ramagundam","Ramanagara","Ramanathapuram","Ramgarh","Rampur","Ranchi"],S:["Sabroom","Sadasivpet","Sagar","Saharanpur","Saharsa","Salem","Samastipur","Sambalpur","Sambhal","Sangareddy","Sangli","Sangrur","Satara","Satna","Secunderabad","Sehore","Seoni","Shahdol","Shahjahanpur"],T:["Tadepalligudem","Tadipatri","Tambaram","Tamluk","Tandur","Tarn Taran","Tezpur","Thalassery","Thane","Thanjavur","Theni","Thiruvananthapuram","Thoothukudi","Thrissur","Tindivanam","Tinsukia","Tiptur","Tiruchirappalli","Tirunelveli"],U:["Udaipur","Udgir","Udhagamandalam","Udhampur","Udupi","Ujjain","Ulhasnagar","Uluberia","Umaria","Una","Unjha","Unnao","Upleta","Uran","Uran Islampur","Uravakonda","Urmar Tanda","Usilampatti","Utraula"],V:["Vadakara","Vadalur","Vadipatti","Vadnagar","Vadodara","Vaikom","Valparai","Valsad","Vandavasi","Vaniyambadi","Vapi","Varanasi","Varkala","Vasai","Vasco Da Gama","Vellore","Vidisha","Vijayawada","Viluppuram"],W:["Wadgaon Road","Wadhwan","Wadi","Wai","Wanaparthy","Wani","Wankaner","Wara Seoni","Warangal","Wardha","Warhapur","Warisaliganj","Warora","Warud","Washim","Wayanad","Wokha"],X:["Xeldem","Xerxes (Historical site)"],Y:["Yadgir","Yamunanagar","Yanam","Yavatmal","Yawal","Yellandu","Yemmiganur","Yerraguntla","Yevla"],Z:["Zahirabad","Zaidpur","Zamania","Zira","Zirakpur","Zunheboto"]};function J({isOpen:e,onClose:a}){let[i,t]=(0,r.useState)(""),[s,o]=(0,r.useState)("A");if(!e)return null;let n=e=>{window.dispatchEvent(new CustomEvent("updateLocation",{detail:e})),a()},d=K[s]||[];return(0,l.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3},onClick:a,children:(0,l.jsxs)("div",{className:"new-city-modal",onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)("div",{className:"new-city-header",children:[(0,l.jsx)("h2",{className:"new-city-title",children:"Select Location"}),(0,l.jsx)("button",{className:"new-city-close",onClick:a,children:(0,l.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,l.jsxs)("div",{className:"new-city-body",children:[(0,l.jsxs)("div",{className:"new-city-search",children:[(0,l.jsx)("i",{className:"fa-solid fa-magnifying-glass search-icon"}),(0,l.jsx)("input",{type:"text",placeholder:"Search city, area or locality",value:i,onChange:e=>t(e.target.value)})]}),(0,l.jsxs)("div",{className:"use-current-location",onClick:()=>{alert("GPS Location requested"),a()},children:[(0,l.jsx)("i",{className:"fa-solid fa-location-crosshairs"}),(0,l.jsx)("span",{children:"Use Current Location"})]}),(0,l.jsx)("div",{className:"new-cities-grid",children:Y.map(e=>(0,l.jsxs)("div",{className:`new-city-card ${e.active?"active":""}`,onClick:()=>n(e.name),children:[(0,l.jsx)("i",{className:"fa-solid fa-location-dot city-pin"}),(0,l.jsx)("span",{className:"city-name",children:e.name})]},e.name))}),(0,l.jsx)("h3",{className:"all-cities-title",children:"All Cities"}),(0,l.jsx)("div",{className:"alphabet-row",children:G.map(e=>(0,l.jsx)("span",{className:`alphabet-letter ${s===e?"active":""}`,onClick:()=>o(e),children:e},e))}),d.length>0&&(0,l.jsxs)("div",{className:"alphabet-cities-container",style:{marginTop:"20px"},children:[(0,l.jsx)("h4",{style:{color:"#4b5563",marginBottom:"15px"},children:s}),(0,l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"15px"},children:d.map((e,a)=>(0,l.jsx)("div",{onClick:()=>n(e),style:{cursor:"pointer",color:"#4b5563",fontSize:"14px",padding:"5px 0"},className:"alphabet-city-item",children:e},`${e}-${a}`))})]})]})]})})}let $=[{id:"bk-001",title:"Tata Nexon EV Rental",type:"rental",dateTime:"Oct 02, 2026, 10:00 AM",details:"Pickup: 10:00 AM • 3 Days Duration",status:"Active",cost:4500},{id:"bk-002",title:"Tire Diagnostics & Balance",type:"mechanic",dateTime:"Sept 22, 2026, 02:30 PM",details:"Assigned: Rajesh Kumar • Completed",status:"Completed",cost:1200},{id:"bk-003",title:"Airport Taxi Booking",type:"ride",dateTime:"Sept 15, 2026, 08:45 AM",details:"Terminal 1 • Completed",status:"Completed",cost:800}];function q({isOpen:e,onClose:a}){let[i,t]=(0,r.useState)("active");if((0,r.useEffect)(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),!e)return null;let s=$.filter(e=>"active"===i?"Active"===e.status:"Completed"===e.status);return(0,l.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3,background:"rgba(0,0,0,0.6)"},onClick:a,children:(0,l.jsxs)("div",{className:"modal-sheet centered-modal",style:{maxWidth:"600px",width:"95%",height:"80vh",display:"flex",flexDirection:"column",backgroundColor:"#f9fafb",borderRadius:"24px",overflow:"hidden"},onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 24px",background:"#ffffff",borderBottom:"1px solid #e5e7eb"},children:[(0,l.jsxs)("div",{style:{fontSize:"22px",fontWeight:"800",color:"#111827",display:"flex",alignItems:"center",gap:"12px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-bag-shopping",style:{color:"var(--primary)"}})," My Bookings"]}),(0,l.jsx)("button",{onClick:a,style:{background:"#f3f4f6",border:"none",width:"36px",height:"36px",borderRadius:"50%",color:"#4b5563",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:(0,l.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"24px"},children:[(0,l.jsxs)("div",{className:"bookings-tabs",children:[(0,l.jsx)("button",{className:`booking-tab-btn ${"active"===i?"active":""}`,onClick:()=>t("active"),children:"Active"}),(0,l.jsx)("button",{className:`booking-tab-btn ${"past"===i?"active":""}`,onClick:()=>t("past"),children:"Past"})]}),(0,l.jsx)("div",{className:"bookings-list",children:s.length>0?s.map(e=>(0,l.jsxs)("div",{className:"booking-card",children:[(0,l.jsxs)("div",{className:"booking-card-header",children:[(0,l.jsxs)("span",{className:"booking-id",children:["#",e.id]}),(0,l.jsx)("span",{className:`booking-status ${e.status.toLowerCase()}`,children:e.status})]}),(0,l.jsx)("h3",{className:"booking-title",children:e.title}),(0,l.jsx)("p",{className:"booking-details",children:e.details}),(0,l.jsxs)("div",{className:"booking-card-footer",children:[(0,l.jsxs)("span",{className:"booking-date",children:[(0,l.jsx)("i",{className:"fa-regular fa-clock"})," ",e.dateTime]}),(0,l.jsxs)("span",{className:"booking-cost",children:["₹",e.cost.toFixed(2)]})]})]},e.id)):(0,l.jsxs)("div",{className:"no-bookings",children:[(0,l.jsx)("i",{className:"fa-solid fa-box-open",style:{fontSize:"48px",color:"#cbd5e1",marginBottom:"16px"}}),(0,l.jsxs)("p",{children:["No ",i," bookings found."]})]})})]})]})})}let X=[{title:"Road Drivers",icon:"fa-car",drivers:[{id:"rd-1",name:"Ramesh Kumar",vehicleType:"Cars & SUVs",experience:"8 Years",rating:4.9,price:1200,avatar:"fa-user-tie",color:"#3b82f6"},{id:"rd-2",name:"Suresh Babu",vehicleType:"Heavy Trucks (HGVs)",experience:"12 Years",rating:4.8,price:2500,avatar:"fa-user-helmet-safety",color:"#f59e0b"},{id:"rd-3",name:"Anita Desai",vehicleType:"Luxury Chauffeur",experience:"5 Years",rating:5,price:3e3,avatar:"fa-user-tie",color:"#8b5cf6"}]},{title:"Sea / Water Captains",icon:"fa-ship",drivers:[{id:"sd-1",name:"Capt. Vikram Singh",vehicleType:"Private Yachts",experience:"15 Years",rating:4.9,price:15e3,avatar:"fa-anchor",color:"#0ea5e9"},{id:"sd-2",name:"Capt. Thomas Raj",vehicleType:"Commercial Boats",experience:"20 Years",rating:4.7,price:12e3,avatar:"fa-anchor",color:"#2563eb"}]},{title:"Air Pilots",icon:"fa-plane",drivers:[{id:"ad-1",name:"Capt. Aisha Khan",vehicleType:"Helicopters",experience:"10 Years",rating:4.9,price:45e3,avatar:"fa-plane-up",color:"#10b981"},{id:"ad-2",name:"Capt. Rahul Sharma",vehicleType:"Charter Jets",experience:"14 Years",rating:5,price:8e4,avatar:"fa-plane-departure",color:"#059669"}]}];function Q({isOpen:e,onClose:a}){let[i,t]=(0,r.useState)(1),[s,o]=(0,r.useState)(null),[n,d]=(0,r.useState)(""),[c,p]=(0,r.useState)("");if(!e)return null;let f=()=>{t(1),o(null),a()},x=X.flatMap(e=>e.drivers).find(e=>e.id===s);return(0,l.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3,background:"rgba(0,0,0,0.6)"},onClick:f,children:(0,l.jsxs)("div",{className:"modal-sheet centered-modal",style:{maxWidth:"900px",width:"95%",height:"90vh",display:"flex",flexDirection:"column",backgroundColor:"#f9fafb",borderRadius:"24px",overflow:"hidden"},onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 24px",background:"#ffffff",borderBottom:"1px solid #e5e7eb"},children:[(0,l.jsxs)("div",{style:{fontSize:"22px",fontWeight:"800",color:"#111827",display:"flex",alignItems:"center",gap:"12px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-id-card-clip",style:{color:"#10b981"}})," Rent Professional Drivers"]}),(0,l.jsx)("button",{onClick:f,style:{background:"#f3f4f6",border:"none",width:"36px",height:"36px",borderRadius:"50%",color:"#4b5563",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:(0,l.jsx)("i",{className:"fa-solid fa-xmark"})})]}),1===i&&(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"24px"},children:[(0,l.jsx)("p",{style:{color:"#64748b",fontSize:"16px",marginBottom:"12px",fontWeight:"500"},children:"Hire highly trained, background-verified professionals for Road, Sea, or Air transport."}),X.map(e=>{let a,i,s;return(0,l.jsx)(r.default.Fragment,{children:(a=e.title,i=e.icon,s=e.drivers,(0,l.jsxs)("div",{style:{marginBottom:"32px"},children:[(0,l.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"800",color:"#111827",margin:"24px 0 16px 0",paddingBottom:"8px",borderBottom:"2px solid #e5e7eb",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:`fa-solid ${i}`})," ",a]}),(0,l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"16px"},children:s.map(e=>(0,l.jsxs)("div",{onClick:()=>{o(e.id),t(2)},style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"16px",display:"flex",flexDirection:"row",alignItems:"center",gap:"16px",cursor:"pointer",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.05)",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-4px)",e.currentTarget.style.boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.05)"},children:[(0,l.jsx)("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:e.color+"20",color:e.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",flexShrink:0},children:(0,l.jsx)("i",{className:`fa-solid ${e.avatar}`})}),(0,l.jsxs)("div",{style:{flex:1},children:[(0,l.jsx)("div",{style:{fontSize:"16px",fontWeight:"700",color:"#1f2937"},children:e.name}),(0,l.jsxs)("div",{style:{fontSize:"13px",color:"#6b7280",margin:"2px 0 4px 0"},children:[e.vehicleType," • ",e.experience," Exp."]}),(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,l.jsxs)("span",{style:{fontSize:"12px",fontWeight:"600",color:"#f59e0b"},children:[(0,l.jsx)("i",{className:"fa-solid fa-star"})," ",e.rating]}),(0,l.jsxs)("span",{style:{fontSize:"14px",fontWeight:"800",color:"#10b981"},children:["₹",e.price,"/day"]})]})]})]},e.id))})]}))},e.title)})]}),2===i&&(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"32px"},children:[(0,l.jsxs)("button",{onClick:()=>t(1),style:{background:"transparent",border:"none",color:"#6b7280",cursor:"pointer",fontSize:"15px",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",padding:"0 0 24px 0"},children:[(0,l.jsx)("i",{className:"fa-solid fa-arrow-left"})," Back to driver selection"]}),(0,l.jsxs)("div",{style:{background:"#ffffff",borderRadius:"20px",padding:"24px",border:"1px solid #e5e7eb",boxShadow:"0 4px 6px -1px rgba(0,0,0,0.05)",marginBottom:"24px"},children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"24px",paddingBottom:"24px",borderBottom:"1px solid #f3f4f6"},children:[(0,l.jsx)("div",{style:{width:"80px",height:"80px",borderRadius:"50%",background:(x?.color||"#3b82f6")+"20",color:x?.color||"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"36px"},children:(0,l.jsx)("i",{className:`fa-solid ${x?.avatar||"fa-user-tie"}`})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{style:{fontSize:"24px",fontWeight:"800",color:"#111827",margin:"0 0 4px 0"},children:x?.name}),(0,l.jsxs)("p",{style:{fontSize:"15px",color:"#6b7280",margin:"0 0 8px 0"},children:[x?.vehicleType," • ",x?.experience," Experience"]}),(0,l.jsxs)("span",{style:{display:"inline-block",background:"#ecfdf5",color:"#10b981",padding:"4px 12px",borderRadius:"20px",fontSize:"13px",fontWeight:"700"},children:[(0,l.jsx)("i",{className:"fa-solid fa-shield-check"})," Background Verified"]})]})]}),(0,l.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,l.jsx)("h4",{style:{fontSize:"16px",fontWeight:"700",color:"#374151",marginBottom:"12px"},children:"Schedule Details"}),(0,l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",color:"#6b7280",marginBottom:"4px",fontWeight:"600"},children:"Start Date"}),(0,l.jsxs)("div",{style:{position:"relative"},children:[(0,l.jsx)("i",{className:"fa-solid fa-calendar",style:{position:"absolute",left:"16px",top:"50%",transform:"translateY(-50%)",color:"#9ca3af"}}),(0,l.jsx)("input",{type:"date",value:n,onChange:e=>d(e.target.value),style:{width:"100%",padding:"12px 16px 12px 42px",borderRadius:"12px",border:"1px solid #d1d5db",fontSize:"15px",outline:"none"}})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{style:{display:"block",fontSize:"13px",color:"#6b7280",marginBottom:"4px",fontWeight:"600"},children:"Time"}),(0,l.jsxs)("div",{style:{position:"relative"},children:[(0,l.jsx)("i",{className:"fa-solid fa-clock",style:{position:"absolute",left:"16px",top:"50%",transform:"translateY(-50%)",color:"#9ca3af"}}),(0,l.jsx)("input",{type:"time",value:c,onChange:e=>p(e.target.value),style:{width:"100%",padding:"12px 16px 12px 42px",borderRadius:"12px",border:"1px solid #d1d5db",fontSize:"15px",outline:"none"}})]})]})]})]})]})]}),2===i&&(0,l.jsxs)("div",{style:{padding:"24px",background:"#ffffff",borderTop:"1px solid #e5e7eb",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{fontSize:"14px",color:"#6b7280",fontWeight:"600"},children:"Estimated Cost"}),(0,l.jsxs)("div",{style:{fontSize:"28px",fontWeight:"800",color:"#111827"},children:["₹",x?.price||1200," ",(0,l.jsx)("span",{style:{fontSize:"14px",color:"#6b7280",fontWeight:"500"},children:"/ day"})]})]}),(0,l.jsxs)("button",{onClick:()=>{let e="Driver",a=1200;for(let i of X){let t=i.drivers.find(e=>e.id===s);if(t){e=t.name,a=t.price;break}}let i=`Professional Driver • ${e}`;(n||c)&&(i+=` • Scheduled: ${n} ${c}`.trim()),window.executeGenericBooking&&window.executeGenericBooking("drivers",`Driver Rental: ${e}`,i,a,{date:n,time:c}),f()},style:{background:"#10b981",color:"#fff",border:"none",padding:"16px 40px",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:"pointer",boxShadow:"0 4px 12px rgba(16, 185, 129, 0.3)",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"8px"},onMouseEnter:e=>e.currentTarget.style.transform="translateY(-2px)",onMouseLeave:e=>e.currentTarget.style.transform="translateY(0)",children:["Confirm Booking ",(0,l.jsx)("i",{className:"fa-solid fa-check"})]})]})]})})}function Z({isOpen:e,onClose:a}){let[i,t]=(0,r.useState)("private"),[s,o]=(0,r.useState)(!1),[n,d]=(0,r.useState)(!1);return e?(0,l.jsxs)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3,background:"rgba(0,0,0,0.6)"},onClick:a,children:[(0,l.jsxs)("div",{className:"modal-sheet centered-modal",style:{maxWidth:"1000px",width:"95%",height:"90vh",display:"flex",flexDirection:"column",backgroundColor:"#f9fafb",borderRadius:"24px",overflow:"hidden"},onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 24px",background:"#ffffff",borderBottom:"1px solid #e5e7eb"},children:[(0,l.jsxs)("div",{style:{fontSize:"22px",fontWeight:"800",color:"#111827",display:"flex",alignItems:"center",gap:"12px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-users",style:{color:"#8b5cf6"}})," SART Communities"]}),(0,l.jsx)("button",{onClick:a,style:{background:"#f3f4f6",border:"none",width:"36px",height:"36px",borderRadius:"50%",color:"#4b5563",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:(0,l.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,l.jsxs)("div",{style:{display:"flex",borderBottom:"1px solid #e5e7eb",background:"#ffffff",padding:"0 24px"},children:[(0,l.jsxs)("button",{onClick:()=>t("private"),style:{padding:"16px 24px",border:"none",background:"transparent",fontSize:"16px",fontWeight:"700",color:"private"===i?"#8b5cf6":"#6b7280",borderBottom:"private"===i?"3px solid #8b5cf6":"3px solid transparent",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-building-user"})," Private (Fleet Owners)"]}),(0,l.jsxs)("button",{onClick:()=>t("public"),style:{padding:"16px 24px",border:"none",background:"transparent",fontSize:"16px",fontWeight:"700",color:"public"===i?"#10b981":"#6b7280",borderBottom:"public"===i?"3px solid #10b981":"3px solid transparent",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-people-group"})," Public (Unions & Stands)"]})]}),(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"24px"},children:["private"===i&&(0,l.jsxs)("div",{className:"fade-in",children:[(0,l.jsxs)("div",{style:{marginBottom:"24px",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{style:{margin:"0 0 8px 0",fontSize:"24px",fontWeight:"800",color:"#1f2937"},children:"Fleet Management Hub"}),(0,l.jsx)("p",{style:{margin:0,color:"#6b7280",fontSize:"15px"},children:"Track your owned vehicles, manage drivers, and allocate resources efficiently."})]}),(0,l.jsxs)("div",{style:{display:"flex",gap:"12px"},children:[(0,l.jsxs)("button",{onClick:()=>d(!0),style:{background:"#ffffff",color:"#1f2937",border:"1px solid #d1d5db",padding:"10px 16px",borderRadius:"12px",fontWeight:"600",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-truck-medical"})," Add Vehicle"]}),(0,l.jsxs)("button",{onClick:()=>o(!0),style:{background:"#8b5cf6",color:"#ffffff",border:"none",padding:"10px 16px",borderRadius:"12px",fontWeight:"600",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-user-plus"})," Allocate Driver"]})]})]}),(0,l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px",marginBottom:"32px"},children:[(0,l.jsxs)("div",{style:{background:"#ffffff",padding:"20px",borderRadius:"16px",border:"1px solid #e5e7eb",display:"flex",alignItems:"center",gap:"16px"},children:[(0,l.jsx)("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"#f3e8ff",color:"#8b5cf6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"},children:(0,l.jsx)("i",{className:"fa-solid fa-truck"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{fontSize:"24px",fontWeight:"800",color:"#111827"},children:"12"}),(0,l.jsx)("div",{style:{fontSize:"13px",color:"#6b7280",fontWeight:"600"},children:"Total Vehicles"})]})]}),(0,l.jsxs)("div",{style:{background:"#ffffff",padding:"20px",borderRadius:"16px",border:"1px solid #e5e7eb",display:"flex",alignItems:"center",gap:"16px"},children:[(0,l.jsx)("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"#dcfce7",color:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"},children:(0,l.jsx)("i",{className:"fa-solid fa-id-card"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{fontSize:"24px",fontWeight:"800",color:"#111827"},children:"8"}),(0,l.jsx)("div",{style:{fontSize:"13px",color:"#6b7280",fontWeight:"600"},children:"Active Drivers"})]})]}),(0,l.jsxs)("div",{style:{background:"#ffffff",padding:"20px",borderRadius:"16px",border:"1px solid #e5e7eb",display:"flex",alignItems:"center",gap:"16px"},children:[(0,l.jsx)("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"#e0f2fe",color:"#0ea5e9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"},children:(0,l.jsx)("i",{className:"fa-solid fa-route"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{fontSize:"24px",fontWeight:"800",color:"#111827"},children:"5"}),(0,l.jsx)("div",{style:{fontSize:"13px",color:"#6b7280",fontWeight:"600"},children:"On Duty (Live)"})]})]}),(0,l.jsxs)("div",{style:{background:"#ffffff",padding:"20px",borderRadius:"16px",border:"1px solid #e5e7eb",display:"flex",alignItems:"center",gap:"16px"},children:[(0,l.jsx)("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"#ffedd5",color:"#f59e0b",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"},children:(0,l.jsx)("i",{className:"fa-solid fa-triangle-exclamation"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{fontSize:"24px",fontWeight:"800",color:"#111827"},children:"2"}),(0,l.jsx)("div",{style:{fontSize:"13px",color:"#6b7280",fontWeight:"600"},children:"Needs Maint."})]})]})]}),(0,l.jsx)("h3",{style:{fontSize:"18px",fontWeight:"700",color:"#374151",marginBottom:"16px"},children:"Live Fleet Tracking & Allocation"}),(0,l.jsx)("div",{style:{background:"#ffffff",borderRadius:"16px",border:"1px solid #e5e7eb",overflow:"hidden"},children:(0,l.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left"},children:[(0,l.jsx)("thead",{style:{background:"#f9fafb"},children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{style:{padding:"16px",fontSize:"13px",color:"#6b7280",fontWeight:"600",borderBottom:"1px solid #e5e7eb"},children:"Vehicle"}),(0,l.jsx)("th",{style:{padding:"16px",fontSize:"13px",color:"#6b7280",fontWeight:"600",borderBottom:"1px solid #e5e7eb"},children:"Assigned Driver"}),(0,l.jsx)("th",{style:{padding:"16px",fontSize:"13px",color:"#6b7280",fontWeight:"600",borderBottom:"1px solid #e5e7eb"},children:"Status"}),(0,l.jsx)("th",{style:{padding:"16px",fontSize:"13px",color:"#6b7280",fontWeight:"600",borderBottom:"1px solid #e5e7eb"},children:"Live Location"}),(0,l.jsx)("th",{style:{padding:"16px",fontSize:"13px",color:"#6b7280",fontWeight:"600",borderBottom:"1px solid #e5e7eb"},children:"Action"})]})}),(0,l.jsx)("tbody",{children:[{v:"TN-01-AB-1234 (Ashok Leyland)",d:"Ramesh Kumar",stat:"On Duty",loc:"Chennai - Bangalore Hwy",color:"#10b981"},{v:"TN-02-XY-9876 (Tata Signa)",d:"Suresh Babu",stat:"Resting",loc:"Vellore Checkpost",color:"#f59e0b"},{v:"TN-04-KL-5566 (Mahindra Blazo)",d:"Unassigned",stat:"Idle",loc:"Chennai Hub",color:"#9ca3af"}].map((e,a)=>(0,l.jsxs)("tr",{style:{borderBottom:"1px solid #f3f4f6"},children:[(0,l.jsx)("td",{style:{padding:"16px",fontSize:"14px",fontWeight:"600",color:"#1f2937"},children:e.v}),(0,l.jsx)("td",{style:{padding:"16px",fontSize:"14px",color:"#4b5563"},children:e.d}),(0,l.jsx)("td",{style:{padding:"16px"},children:(0,l.jsx)("span",{style:{padding:"4px 10px",borderRadius:"12px",background:e.color+"20",color:e.color,fontSize:"12px",fontWeight:"700"},children:e.stat})}),(0,l.jsxs)("td",{style:{padding:"16px",fontSize:"14px",color:"#6b7280"},children:[(0,l.jsx)("i",{className:"fa-solid fa-location-dot",style:{color:"#ef4444",marginRight:"6px"}})," ",e.loc]}),(0,l.jsx)("td",{style:{padding:"16px"},children:(0,l.jsxs)("button",{style:{background:"#f3f4f6",border:"none",padding:"6px 12px",borderRadius:"8px",cursor:"pointer",color:"#374151",fontWeight:"600",fontSize:"12px"},children:["Track ",(0,l.jsx)("i",{className:"fa-solid fa-arrow-right"})]})})]},a))})]})})]}),"public"===i&&(0,l.jsxs)("div",{className:"fade-in",children:[(0,l.jsxs)("div",{style:{marginBottom:"24px",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{style:{margin:"0 0 8px 0",fontSize:"24px",fontWeight:"800",color:"#1f2937"},children:"Unions & Vehicle Stands"}),(0,l.jsx)("p",{style:{margin:0,color:"#6b7280",fontSize:"15px"},children:"Register as a driver, join local unions, add your vehicle, and connect with people directly."})]}),(0,l.jsxs)("div",{style:{display:"flex",gap:"12px"},children:[(0,l.jsxs)("button",{style:{background:"#ffffff",color:"#1f2937",border:"1px solid #d1d5db",padding:"10px 16px",borderRadius:"12px",fontWeight:"600",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-id-badge"})," Register as Driver"]}),(0,l.jsxs)("button",{style:{background:"#10b981",color:"#ffffff",border:"none",padding:"10px 16px",borderRadius:"12px",fontWeight:"600",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-handshake-angle"})," Join a Union"]})]})]}),(0,l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("h3",{style:{fontSize:"18px",fontWeight:"700",color:"#374151",marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-map-location-dot",style:{color:"#0ea5e9"}})," Local Stands & Unions (Chennai Area)"]}),(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[{name:"Koyambedu Lorry Union",members:1250,type:"Heavy Transport",rating:4.8},{name:"T-Nagar Auto Stand",members:85,type:"Passenger Transit",rating:4.5},{name:"Chennai Port Container Hub",members:340,type:"Logistics / Sea",rating:4.9}].map((e,a)=>(0,l.jsxs)("div",{style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"16px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 2px 4px rgba(0,0,0,0.02)"},children:[(0,l.jsxs)("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[(0,l.jsx)("div",{style:{width:"48px",height:"48px",borderRadius:"50%",background:"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",color:"#4b5563"},children:(0,l.jsx)("i",{className:"fa-solid fa-users"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{fontSize:"16px",fontWeight:"700",color:"#111827",marginBottom:"4px"},children:e.name}),(0,l.jsxs)("div",{style:{fontSize:"13px",color:"#6b7280"},children:[e.type," • ",e.members," Members"]})]})]}),(0,l.jsx)("button",{style:{background:"#ecfdf5",color:"#10b981",border:"1px solid #a7f3d0",padding:"6px 16px",borderRadius:"20px",fontWeight:"700",fontSize:"13px",cursor:"pointer"},children:"Connect"})]},a))})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h3",{style:{fontSize:"18px",fontWeight:"700",color:"#374151",marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-comments",style:{color:"#f59e0b"}})," Union Notice Board"]}),(0,l.jsxs)("div",{style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"20px",height:"350px",overflowY:"auto"},children:[(0,l.jsxs)("div",{style:{marginBottom:"20px",paddingBottom:"20px",borderBottom:"1px solid #f3f4f6"},children:[(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[(0,l.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,l.jsx)("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:"#3b82f6",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px"},children:"M"}),(0,l.jsx)("div",{style:{fontSize:"14px",fontWeight:"700",color:"#1f2937"},children:"Muthu (Koyambedu Union)"})]}),(0,l.jsx)("span",{style:{fontSize:"12px",color:"#9ca3af"},children:"2 hrs ago"})]}),(0,l.jsx)("p",{style:{margin:0,fontSize:"14px",color:"#4b5563",lineHeight:"1.5"},children:"Need 2 backup drivers for Bangalore route tonight. Any free members from our union? Standard union rates apply. Contact me directly!"}),(0,l.jsxs)("div",{style:{marginTop:"12px",display:"flex",gap:"16px"},children:[(0,l.jsxs)("span",{style:{fontSize:"13px",color:"#10b981",fontWeight:"600",cursor:"pointer"},children:[(0,l.jsx)("i",{className:"fa-solid fa-reply"})," Reply"]}),(0,l.jsxs)("span",{style:{fontSize:"13px",color:"#3b82f6",fontWeight:"600",cursor:"pointer"},children:[(0,l.jsx)("i",{className:"fa-solid fa-phone"})," Call Now"]})]})]}),(0,l.jsxs)("div",{style:{marginBottom:"20px",paddingBottom:"20px",borderBottom:"1px solid #f3f4f6"},children:[(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[(0,l.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,l.jsx)("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:"#f59e0b",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px"},children:"A"}),(0,l.jsx)("div",{style:{fontSize:"14px",fontWeight:"700",color:"#1f2937"},children:"Union President (T-Nagar)"})]}),(0,l.jsx)("span",{style:{fontSize:"12px",color:"#9ca3af"},children:"5 hrs ago"})]}),(0,l.jsx)("p",{style:{margin:0,fontSize:"14px",color:"#4b5563",lineHeight:"1.5"},children:"Important update: The local authorities have closed the main road near the station for the next 3 days due to metro work. All auto drivers are requested to use the alternate route via South Usman Road to avoid passenger delays."})]})]}),(0,l.jsxs)("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[(0,l.jsx)("input",{type:"text",placeholder:"Post a message to your union...",style:{flex:1,padding:"12px 16px",borderRadius:"24px",border:"1px solid #d1d5db",outline:"none"}}),(0,l.jsx)("button",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"#10b981",color:"#fff",border:"none",cursor:"pointer"},children:(0,l.jsx)("i",{className:"fa-solid fa-paper-plane"})})]})]})]})]})]})]}),s&&(0,l.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",zIndex:1100,display:"flex",alignItems:"center",justifyContent:"center"},onClick:()=>o(!1),children:(0,l.jsxs)("div",{style:{background:"#fff",padding:"32px",borderRadius:"16px",width:"400px"},onClick:e=>e.stopPropagation(),children:[(0,l.jsx)("h3",{style:{margin:"0 0 16px 0"},children:"Allocate Driver"}),(0,l.jsxs)("select",{style:{width:"100%",padding:"12px",marginBottom:"16px",borderRadius:"8px",border:"1px solid #ccc"},children:[(0,l.jsx)("option",{children:"Select Unassigned Vehicle"}),(0,l.jsx)("option",{children:"TN-04-KL-5566"})]}),(0,l.jsxs)("select",{style:{width:"100%",padding:"12px",marginBottom:"24px",borderRadius:"8px",border:"1px solid #ccc"},children:[(0,l.jsx)("option",{children:"Select Available Driver"}),(0,l.jsx)("option",{children:"Mahesh D."}),(0,l.jsx)("option",{children:"Abdul K."})]}),(0,l.jsxs)("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[(0,l.jsx)("button",{onClick:()=>o(!1),style:{padding:"10px 16px",background:"#f3f4f6",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Cancel"}),(0,l.jsx)("button",{onClick:()=>{alert("Driver Allocated Successfully!"),o(!1)},style:{padding:"10px 16px",background:"#8b5cf6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Allocate"})]})]})})]}):null}let _=[{id:"ms-1",name:"AutoCare Garage",type:"Multi-Brand Service",distance:"1.2 km",rating:4.8,address:"OMR Road, Chennai",available:!0},{id:"ms-2",name:"Elite Motors",type:"Premium Vehicles",distance:"2.5 km",rating:4.9,address:"T-Nagar, Chennai",available:!0},{id:"ms-3",name:"QuickFix Auto",type:"Two-Wheeler Specialist",distance:"3.1 km",rating:4.5,address:"Velachery, Chennai",available:!1}],ee=[{id:"rs-1",name:"Flat Tire / Puncture",icon:"fa-truck-pickup",price:"₹500",time:"15 mins"},{id:"rs-2",name:"Battery Jumpstart",icon:"fa-car-battery",price:"₹400",time:"20 mins"},{id:"rs-3",name:"Empty Fuel Delivery",icon:"fa-gas-pump",price:"₹200 + Fuel",time:"15 mins"},{id:"rs-4",name:"Towing Service",icon:"fa-truck-fast",price:"₹1500 (Base)",time:"30 mins"}];function ea({isOpen:e,onClose:a}){let[i,t]=(0,r.useState)(null);return e?(0,l.jsx)("div",{className:"modal-overlay open",style:{display:"flex",zIndex:1e3,background:"rgba(0,0,0,0.6)"},onClick:a,children:(0,l.jsxs)("div",{className:"modal-sheet centered-modal",style:{maxWidth:"900px",width:"95%",height:"85vh",display:"flex",flexDirection:"column",backgroundColor:"#f9fafb",borderRadius:"24px",overflow:"hidden"},onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 24px",background:"#ffffff",borderBottom:"1px solid #e5e7eb"},children:[(0,l.jsxs)("div",{style:{fontSize:"22px",fontWeight:"800",color:"#111827",display:"flex",alignItems:"center",gap:"12px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-wrench",style:{color:"#f59e0b"}})," Mechanics & Roadside Assistance"]}),(0,l.jsx)("button",{onClick:a,style:{background:"#f3f4f6",border:"none",width:"36px",height:"36px",borderRadius:"50%",color:"#4b5563",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:(0,l.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,l.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"24px"},children:[(0,l.jsxs)("div",{style:{marginBottom:"24px",padding:"16px",background:"#e0f2fe",borderRadius:"16px",border:"1px solid #bae6fd",display:"flex",alignItems:"center",gap:"12px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-location-crosshairs",style:{fontSize:"24px",color:"#0ea5e9"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{fontSize:"14px",color:"#0369a1",fontWeight:"600"},children:"Your Current Location"}),(0,l.jsx)("div",{style:{fontSize:"16px",fontWeight:"700",color:"#0c4a6e"},children:"Chennai, Tamil Nadu (Based on Top Nav)"})]}),(0,l.jsx)("button",{style:{marginLeft:"auto",background:"#0284c7",color:"#fff",border:"none",padding:"8px 16px",borderRadius:"12px",fontWeight:"600",cursor:"pointer"},children:"Change"})]}),(0,l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"},children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"800",color:"#1f2937",marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-triangle-exclamation",style:{color:"#ef4444"}})," Emergency Roadside Service"]}),(0,l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:ee.map(e=>(0,l.jsxs)("div",{onClick:()=>t(e.id),style:{background:"#ffffff",border:i===e.id?"2px solid #ef4444":"1px solid #e5e7eb",borderRadius:"16px",padding:"16px",cursor:"pointer",textAlign:"center",boxShadow:i===e.id?"0 4px 12px rgba(239, 68, 68, 0.1)":"0 2px 4px rgba(0,0,0,0.02)",transition:"all 0.2s"},children:[(0,l.jsx)("div",{style:{width:"48px",height:"48px",margin:"0 auto 12px auto",background:"#fee2e2",color:"#ef4444",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"},children:(0,l.jsx)("i",{className:`fa-solid ${e.icon}`})}),(0,l.jsx)("div",{style:{fontSize:"14px",fontWeight:"700",color:"#1f2937",marginBottom:"4px"},children:e.name}),(0,l.jsxs)("div",{style:{fontSize:"12px",color:"#6b7280",marginBottom:"8px"},children:["ETA: ",e.time]}),(0,l.jsx)("div",{style:{fontSize:"15px",fontWeight:"800",color:"#ef4444"},children:e.price})]},e.id))}),(0,l.jsx)("button",{disabled:!i,style:{marginTop:"24px",width:"100%",background:i?"#ef4444":"#f3f4f6",color:i?"#ffffff":"#9ca3af",border:"none",padding:"16px",borderRadius:"12px",fontSize:"16px",fontWeight:"700",cursor:i?"pointer":"not-allowed",transition:"background 0.2s"},onClick:()=>{alert("Emergency Service Dispatched!"),a()},children:"Request SOS Service Now"})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{style:{fontSize:"20px",fontWeight:"800",color:"#1f2937",marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fa-solid fa-shop",style:{color:"#10b981"}})," Nearby Mechanic Shops"]}),(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:_.map(e=>(0,l.jsxs)("div",{style:{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"16px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,l.jsxs)("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[(0,l.jsx)("div",{style:{width:"56px",height:"56px",background:"#f3f4f6",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",color:"#4b5563"},children:(0,l.jsx)("i",{className:"fa-solid fa-toolbox"})}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{fontSize:"16px",fontWeight:"700",color:"#1f2937",marginBottom:"2px",display:"flex",alignItems:"center",gap:"8px"},children:[e.name,e.available?(0,l.jsx)("span",{style:{width:"8px",height:"8px",background:"#10b981",borderRadius:"50%"}}):(0,l.jsx)("span",{style:{width:"8px",height:"8px",background:"#ef4444",borderRadius:"50%"}})]}),(0,l.jsx)("div",{style:{fontSize:"13px",color:"#6b7280",marginBottom:"4px"},children:e.type}),(0,l.jsxs)("div",{style:{display:"flex",gap:"12px",fontSize:"12px",color:"#9ca3af",fontWeight:"600"},children:[(0,l.jsxs)("span",{children:[(0,l.jsx)("i",{className:"fa-solid fa-star",style:{color:"#f59e0b"}})," ",e.rating]}),(0,l.jsxs)("span",{children:[(0,l.jsx)("i",{className:"fa-solid fa-location-dot"})," ",e.distance]})]})]})]}),(0,l.jsx)("button",{style:{background:"#ecfdf5",color:"#10b981",border:"1px solid #a7f3d0",padding:"8px 16px",borderRadius:"20px",fontWeight:"700",fontSize:"13px",cursor:"pointer"},onClick:()=>alert(`Navigating to ${e.name}...`),children:"Navigate"})]},e.id))})]})]})]})]})}):null}e.s(["default",0,function(){let[e,a]=(0,r.useState)(!1),[i,t]=(0,r.useState)(!1),[s,o]=(0,r.useState)(!1),[d,c]=(0,r.useState)(!1),[p,f]=(0,r.useState)(!1),[m,u]=(0,r.useState)(!1),[h,g]=(0,r.useState)(!1),[b,y]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=e=>{"modal-ride"===e.detail?a(!0):"modal-carrier"===e.detail?t(!0):"modal-rental"===e.detail?o(!0):"modal-city-selector"===e.detail?c(!0):"modal-bookings-registry"===e.detail?f(!0):"modal-drivers"===e.detail?u(!0):"modal-community"===e.detail?g(!0):"modal-mechanic"===e.detail&&y(!0)};return window.addEventListener("openReactModal",e),()=>{window.removeEventListener("openReactModal",e)}},[]),(0,l.jsxs)("div",{className:"web-app-layout",children:[(0,l.jsx)(x,{}),(0,l.jsxs)("main",{className:"web-main-content",children:[(0,l.jsx)(E,{}),(0,l.jsx)(F,{}),(0,l.jsx)(U,{}),(0,l.jsx)(O,{}),(0,l.jsx)(V,{}),(0,l.jsx)(T,{})]}),(0,l.jsx)(n.default,{src:"/app.js",strategy:"lazyOnload"}),(0,l.jsx)(v,{isOpen:e,onClose:()=>a(!1)}),(0,l.jsx)(S,{isOpen:i,onClose:()=>t(!1)}),(0,l.jsx)(B,{isOpen:s,onClose:()=>o(!1)}),(0,l.jsx)(J,{isOpen:d,onClose:()=>c(!1)}),(0,l.jsx)(q,{isOpen:p,onClose:()=>f(!1)}),(0,l.jsx)(Q,{isOpen:m,onClose:()=>u(!1)}),(0,l.jsx)(Z,{isOpen:h,onClose:()=>g(!1)}),(0,l.jsx)(ea,{isOpen:b,onClose:()=>y(!1)})]})}],52683)}]);