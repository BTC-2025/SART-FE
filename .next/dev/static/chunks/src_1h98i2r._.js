(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RideBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RideBookingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CarrierBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CarrierBookingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RentalBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RentalBookingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$UniversalModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/UniversalModals.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tabs$2f$HomeTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tabs/HomeTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tabs$2f$StoreTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tabs/StoreTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tabs$2f$ProfileTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tabs/ProfileTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tabs$2f$WalletTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tabs/WalletTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$CitySelectorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/CitySelectorModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingsRegistryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookingsRegistryModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [isRideModalOpen, setIsRideModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCarrierModalOpen, setIsCarrierModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRentalModalOpen, setIsRentalModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCityModalOpen, setIsCityModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBookingsModalOpen, setIsBookingsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleOpenModal = {
                "Home.useEffect.handleOpenModal": (e)=>{
                    if (e.detail === 'modal-ride') {
                        setIsRideModalOpen(true);
                    } else if (e.detail === 'modal-carrier') {
                        setIsCarrierModalOpen(true);
                    } else if (e.detail === 'modal-rental') {
                        setIsRentalModalOpen(true);
                    } else if (e.detail === 'modal-city-selector') {
                        setIsCityModalOpen(true);
                    } else if (e.detail === 'modal-bookings-registry') {
                        setIsBookingsModalOpen(true);
                    }
                }
            }["Home.useEffect.handleOpenModal"];
            window.addEventListener('openReactModal', handleOpenModal);
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener('openReactModal', handleOpenModal);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "web-app-layout",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "web-main-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tabs$2f$HomeTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tabs$2f$StoreTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tabs$2f$WalletTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tabs$2f$ProfileTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$UniversalModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/app.js",
                strategy: "lazyOnload"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RideBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isRideModalOpen,
                onClose: ()=>setIsRideModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CarrierBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCarrierModalOpen,
                onClose: ()=>setIsCarrierModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RentalBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isRentalModalOpen,
                onClose: ()=>setIsRentalModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$CitySelectorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCityModalOpen,
                onClose: ()=>setIsCityModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingsRegistryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isBookingsModalOpen,
                onClose: ()=>setIsBookingsModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Home, "1zVhoQL1p+UioiZFnmgIBiLMhWk=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BookingsRegistryModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingsRegistryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const MOCK_BOOKINGS = [
    {
        id: 'bk-001',
        title: 'Tata Nexon EV Rental',
        type: 'rental',
        dateTime: new Date(Date.now() + 172800000).toLocaleString(),
        details: 'Pickup: 10:00 AM • 3 Days Duration',
        status: 'Active',
        cost: 4500.00
    },
    {
        id: 'bk-002',
        title: 'Tire Diagnostics & Balance',
        type: 'mechanic',
        dateTime: new Date(Date.now() - 259200000).toLocaleString(),
        details: 'Assigned: Rajesh Kumar • Completed',
        status: 'Completed',
        cost: 1200.00
    },
    {
        id: 'bk-003',
        title: 'Airport Taxi Booking',
        type: 'ride',
        dateTime: new Date(Date.now() - 720000000).toLocaleString(),
        details: 'Terminal 1 • Completed',
        status: 'Completed',
        cost: 800.00
    }
];
function BookingsRegistryModal({ isOpen, onClose }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('active');
    // Prevent background scrolling when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingsRegistryModal.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "BookingsRegistryModal.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["BookingsRegistryModal.useEffect"];
        }
    }["BookingsRegistryModal.useEffect"], [
        isOpen
    ]);
    if (!isOpen) return null;
    const filteredBookings = MOCK_BOOKINGS.filter((b)=>activeTab === 'active' ? b.status === 'Active' : b.status === 'Completed');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "react-modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "react-modal-content slide-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "react-modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-bag-shopping",
                                    style: {
                                        color: 'var(--primary)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                " My Bookings"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "react-modal-close",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-xmark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "react-modal-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bookings-tabs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `booking-tab-btn ${activeTab === 'active' ? 'active' : ''}`,
                                    onClick: ()=>setActiveTab('active'),
                                    children: "Active"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `booking-tab-btn ${activeTab === 'past' ? 'active' : ''}`,
                                    onClick: ()=>setActiveTab('past'),
                                    children: "Past"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bookings-list",
                            children: filteredBookings.length > 0 ? filteredBookings.map((booking)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "booking-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "booking-card-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "booking-id",
                                                    children: [
                                                        "#",
                                                        booking.id
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `booking-status ${booking.status.toLowerCase()}`,
                                                    children: booking.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "booking-title",
                                            children: booking.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "booking-details",
                                            children: booking.details
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "booking-card-footer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "booking-date",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-regular fa-clock"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 52
                                                        }, this),
                                                        " ",
                                                        booking.dateTime
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "booking-cost",
                                                    children: [
                                                        "₹",
                                                        booking.cost.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, booking.id, true, {
                                    fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-bookings",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-box-open",
                                        style: {
                                            fontSize: '48px',
                                            color: '#cbd5e1',
                                            marginBottom: '16px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "No ",
                                            activeTab,
                                            " bookings found."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingsRegistryModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingsRegistryModal.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BookingsRegistryModal.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(BookingsRegistryModal, "gpDudIPP8uugcEVth9Wwu3hyAWY=");
_c = BookingsRegistryModal;
var _c;
__turbopack_context__.k.register(_c, "BookingsRegistryModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CarrierBookingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarrierBookingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ROAD_CARRIERS = [
    {
        title: 'Bikes, Trucks & Lorries',
        vehicles: [
            {
                id: 'c-bike',
                name: 'Delivery Bike / Moto',
                icon: 'fa-motorcycle',
                color: '#ff6b6b',
                price: 150
            },
            {
                id: 'c-auto',
                name: 'Electric Three-Wheeler Cargo',
                icon: 'fa-truck-fast',
                color: '#f59e0b',
                price: 400
            },
            {
                id: 'c-minitruck',
                name: 'Small Commercial Mini-Truck',
                icon: 'fa-truck-pickup',
                color: '#3b82f6',
                price: 900
            },
            {
                id: 'c-lcv',
                name: 'Light Commercial Lorry (LCV)',
                icon: 'fa-truck',
                color: '#2563eb',
                price: 2500
            },
            {
                id: 'c-hcv',
                name: 'Heavy Rigid Lorry (HCV)',
                icon: 'fa-truck-front',
                color: '#8b5cf6',
                price: 8000
            },
            {
                id: 'c-trailer',
                name: 'Multi-Axle Semi-Trailer',
                icon: 'fa-truck-moving',
                color: '#ec4899',
                price: 15000
            }
        ]
    }
];
const SEA_CARRIERS = [
    {
        title: 'Marine Cargo & Freight',
        vehicles: [
            {
                id: 'c-barge',
                name: 'Small Coastal Cargo Barge',
                icon: 'fa-sailboat',
                color: '#0ea5e9',
                price: 25000
            },
            {
                id: 'c-general',
                name: 'General Cargo Ship',
                icon: 'fa-ship',
                color: '#0284c7',
                price: 150000
            },
            {
                id: 'c-feeder',
                name: 'Feedership Container Ship',
                icon: 'fa-anchor',
                color: '#4f46e5',
                price: 500000
            },
            {
                id: 'c-mega',
                name: 'Mega Container Ship',
                icon: 'fa-ferry',
                color: '#be123c',
                price: 2500000
            }
        ]
    }
];
const AIR_CARRIERS = [
    {
        title: 'Express Aviation Freight',
        vehicles: [
            {
                id: 'c-drone',
                name: 'Delivery Drone / Quadcopter',
                icon: 'fa-helicopter-symbol',
                color: '#10b981',
                price: 500
            },
            {
                id: 'c-belly',
                name: 'Passenger Aircraft Belly Cargo',
                icon: 'fa-plane',
                color: '#f59e0b',
                price: 15000
            },
            {
                id: 'c-turboprop',
                name: 'Regional Turboprop Freighter',
                icon: 'fa-plane-departure',
                color: '#d97706',
                price: 120000
            },
            {
                id: 'c-narrow',
                name: 'Narrow-Body Jet Freighter',
                icon: 'fa-plane-up',
                color: '#3b82f6',
                price: 650000
            },
            {
                id: 'c-wide',
                name: 'Wide-Body Heavy Jet Freighter',
                icon: 'fa-globe',
                color: '#be123c',
                price: 3500000
            }
        ]
    }
];
const ALL_CARRIERS = [
    ...ROAD_CARRIERS.map((c)=>c.vehicles).flat(),
    ...SEA_CARRIERS.map((c)=>c.vehicles).flat(),
    ...AIR_CARRIERS.map((c)=>c.vehicles).flat()
];
function CarrierBookingModal({ isOpen, onClose }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedVehicle, setSelectedVehicle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('c-minitruck');
    const [pickup, setPickup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Current Location');
    const [dropoff, setDropoff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    if (!isOpen) return null;
    const handleClose = ()=>{
        setStep(1);
        onClose();
    };
    const handleBook = ()=>{
        let vehicleName = 'Cargo Carrier';
        let vehiclePrice = 900;
        const found = ALL_CARRIERS.find((v)=>v.id === selectedVehicle);
        if (found) {
            vehicleName = found.name;
            vehiclePrice = found.price;
        }
        let subtitle = `${vehicleName} • Logistics Freight`;
        if (date || time) {
            subtitle += ` • Scheduled: ${date} ${time}`.trim();
        }
        if (window.executeGenericBooking) {
            window.executeGenericBooking('carrier', `Cargo: ${pickup} to ${dropoff || 'Destination'}`, subtitle, vehiclePrice, {
                from: pickup,
                to: dropoff,
                date,
                time
            });
        }
        handleClose();
    };
    const selectedVehicleObj = ALL_CARRIERS.find((v)=>v.id === selectedVehicle);
    const renderGridSection = (title, icon, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                marginBottom: '32px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: '20px',
                        fontWeight: '800',
                        color: '#111827',
                        margin: '24px 0 16px 0',
                        paddingBottom: '8px',
                        borderBottom: '2px solid #e5e7eb',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: `fa-solid ${icon}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                            lineNumber: 96,
                            columnNumber: 9
                        }, this),
                        " ",
                        title
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                    lineNumber: 95,
                    columnNumber: 7
                }, this),
                data.map((category, catIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    color: '#4b5563',
                                    marginBottom: '16px'
                                },
                                children: category.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                                    gap: '16px'
                                },
                                children: category.vehicles.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setSelectedVehicle(v.id);
                                            setStep(2);
                                        },
                                        style: {
                                            background: '#ffffff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '16px',
                                            padding: '16px 12px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                            transition: 'all 0.2s ease'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '56px',
                                                    height: '56px',
                                                    borderRadius: '50%',
                                                    background: v.color + '20',
                                                    color: v.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '24px',
                                                    marginBottom: '12px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `fa-solid ${v.icon}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '13px',
                                                    fontWeight: '600',
                                                    color: '#1f2937',
                                                    textAlign: 'center',
                                                    lineHeight: '1.2'
                                                },
                                                children: v.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, v.id, true, {
                                        fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, catIdx, true, {
                        fileName: "[project]/src/components/CarrierBookingModal.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CarrierBookingModal.tsx",
            lineNumber: 94,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay open",
        style: {
            display: 'flex',
            zIndex: 1000,
            background: 'rgba(0,0,0,0.6)'
        },
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-sheet centered-modal",
            style: {
                maxWidth: '900px',
                width: '95%',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#f9fafb',
                borderRadius: '24px',
                overflow: 'hidden'
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 24px',
                        background: '#ffffff',
                        borderBottom: '1px solid #e5e7eb'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '22px',
                                fontWeight: '800',
                                color: '#111827',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-truck-fast",
                                    style: {
                                        color: '#0ea5e9'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                " Cargo & Carrier Booking"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            style: {
                                background: '#f3f4f6',
                                border: 'none',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                color: '#4b5563',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-xmark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        overflowY: 'auto',
                        padding: '24px'
                    },
                    children: [
                        renderGridSection('ROAD PARCEL CARRIERS', 'fa-truck', ROAD_CARRIERS),
                        renderGridSection('SEA PARCEL CARRIERS', 'fa-ship', SEA_CARRIERS),
                        renderGridSection('AIR PARCEL CARRIERS', 'fa-plane', AIR_CARRIERS)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this),
                step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        overflowY: 'auto',
                        padding: '32px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep(1),
                            style: {
                                background: 'transparent',
                                border: 'none',
                                color: '#6b7280',
                                cursor: 'pointer',
                                fontSize: '15px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '0 0 24px 0'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-arrow-left"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                " Back to Carriers"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        selectedVehicleObj && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                background: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '16px',
                                padding: '20px',
                                marginBottom: '32px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        background: selectedVehicleObj.color + '20',
                                        color: selectedVehicleObj.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '28px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `fa-solid ${selectedVehicleObj.icon}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                        lineNumber: 171,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: 0,
                                                fontSize: '20px',
                                                fontWeight: '800',
                                                color: '#111827'
                                            },
                                            children: selectedVehicleObj.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: '4px 0 0 0',
                                                fontSize: '14px',
                                                color: '#6b7280'
                                            },
                                            children: "Selected Cargo Carrier"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '24px',
                                        fontWeight: '800',
                                        color: '#111827'
                                    },
                                    children: [
                                        "₹",
                                        selectedVehicleObj.price.toLocaleString('en-IN')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                            lineNumber: 169,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '16px',
                                padding: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                fontSize: '13px',
                                                fontWeight: '700',
                                                color: '#4b5563',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            },
                                            children: "Pickup Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            style: {
                                                width: '100%',
                                                padding: '14px',
                                                borderRadius: '10px',
                                                border: '1px solid #d1d5db',
                                                background: '#f9fafb',
                                                color: '#111827',
                                                fontSize: '15px'
                                            },
                                            placeholder: "Enter pickup address",
                                            value: pickup,
                                            onChange: (e)=>setPickup(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                fontSize: '13px',
                                                fontWeight: '700',
                                                color: '#4b5563',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            },
                                            children: "Dropoff Destination"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            style: {
                                                width: '100%',
                                                padding: '14px',
                                                borderRadius: '10px',
                                                border: '1px solid #d1d5db',
                                                background: '#f9fafb',
                                                color: '#111827',
                                                fontSize: '15px'
                                            },
                                            placeholder: "Enter destination address",
                                            value: dropoff,
                                            onChange: (e)=>setDropoff(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '16px',
                                        marginBottom: '32px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '13px',
                                                        fontWeight: '700',
                                                        color: '#4b5563',
                                                        marginBottom: '8px',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1px'
                                                    },
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    style: {
                                                        width: '100%',
                                                        padding: '14px',
                                                        borderRadius: '10px',
                                                        border: '1px solid #d1d5db',
                                                        background: '#f9fafb',
                                                        color: '#111827',
                                                        fontSize: '15px'
                                                    },
                                                    value: date,
                                                    onChange: (e)=>setDate(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '13px',
                                                        fontWeight: '700',
                                                        color: '#4b5563',
                                                        marginBottom: '8px',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1px'
                                                    },
                                                    children: "Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    style: {
                                                        width: '100%',
                                                        padding: '14px',
                                                        borderRadius: '10px',
                                                        border: '1px solid #d1d5db',
                                                        background: '#f9fafb',
                                                        color: '#111827',
                                                        fontSize: '15px'
                                                    },
                                                    value: time,
                                                    onChange: (e)=>setTime(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBook,
                                    style: {
                                        width: '100%',
                                        padding: '16px',
                                        borderRadius: '12px',
                                        background: '#0ea5e9',
                                        color: '#ffffff',
                                        border: 'none',
                                        fontSize: '16px',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.background = '#0284c7',
                                    onMouseLeave: (e)=>e.currentTarget.style.background = '#0ea5e9',
                                    children: "Confirm Cargo Booking"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CarrierBookingModal.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CarrierBookingModal.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CarrierBookingModal.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CarrierBookingModal.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(CarrierBookingModal, "B9Ha9BxybcPacexSYpZUjeQJm8w=");
_c = CarrierBookingModal;
var _c;
__turbopack_context__.k.register(_c, "CarrierBookingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MapEngine.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function MapEngine() {
    const openGlobalModal = (id)=>{
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.openModal) {
            window.openModal(id);
        }
    };
    const toggleMapHotspots = ()=>{
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.toggleMapHotspots) {
            window.toggleMapHotspots();
        }
    };
    const zoomInMap = ()=>{
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.zoomInMap) {
            window.zoomInMap();
        }
    };
    const zoomOutMap = ()=>{
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.zoomOutMap) {
            window.zoomOutMap();
        }
    };
    const recenterMap = ()=>{
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.recenterMap) {
            window.recenterMap();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home-map-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-map-title-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Live Fleet & Route Tracker"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapEngine.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "action-link",
                        onClick: toggleMapHotspots,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-radar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapEngine.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            " Refresh Nearby Fleet"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapEngine.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapEngine.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-map-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "explore-map"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapEngine.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "map-floating-bottom-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "map-action-btn-liked",
                            id: "home-liked-btn",
                            onClick: ()=>openGlobalModal('modal-liked'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-star"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapEngine.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                " LIKED"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MapEngine.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapEngine.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "map-floating-bottom-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "map-action-btn-nearby",
                            id: "home-nearby-btn",
                            onClick: toggleMapHotspots,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-radar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapEngine.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                " NEAR BY FIND"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MapEngine.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapEngine.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "map-floating-controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "map-circle-btn",
                                onClick: zoomInMap,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-plus"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapEngine.tsx",
                                    lineNumber: 62,
                                    columnNumber: 66
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapEngine.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "map-circle-btn",
                                onClick: zoomOutMap,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-minus"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapEngine.tsx",
                                    lineNumber: 63,
                                    columnNumber: 67
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapEngine.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "map-circle-btn",
                                onClick: recenterMap,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-crosshairs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapEngine.tsx",
                                    lineNumber: 64,
                                    columnNumber: 68
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapEngine.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapEngine.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "map-active-booking-panel floating-map-booking-panel",
                        id: "map-active-booking-card",
                        style: {
                            display: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-header-badge",
                                children: "LIVE TRACKING ACTIVE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapEngine.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-main",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel-icon-wrap",
                                        id: "map-active-booking-icon-container",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-car-side",
                                            id: "map-active-booking-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MapEngine.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapEngine.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel-desc",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                id: "map-active-booking-title",
                                                children: "Ride to Kempegowda Airport"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MapEngine.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                id: "map-active-booking-desc",
                                                children: "Driver is starting journey..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MapEngine.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MapEngine.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapEngine.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "cancel-booking-btn",
                                onClick: ()=>openGlobalModal('modal-bookings-registry'),
                                children: "Manage Ticket Details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapEngine.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapEngine.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapEngine.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MapEngine.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = MapEngine;
var _c;
__turbopack_context__.k.register(_c, "MapEngine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useSartStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Navbar() {
    _s();
    const { wallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSartStore"])();
    const [isProfileOpen, setIsProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchExpanded, setIsSearchExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentLocation, setCurrentLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Chennai');
    const profileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const SEARCH_OPTIONS = [
        {
            title: 'Road Ride Booking',
            kw: [
                'ride',
                'taxi',
                'car',
                'cab',
                'economy',
                'suv'
            ],
            modal: 'modal-ride',
            icon: 'fa-car',
            color: 'var(--primary)'
        },
        {
            title: 'Logistics Cargo Truck',
            kw: [
                'carrier',
                'truck',
                'logistics',
                'delivery',
                'cargo'
            ],
            modal: 'modal-carrier',
            icon: 'fa-truck',
            color: 'var(--secondary)'
        },
        {
            title: 'Hourly Vehicle Rental',
            kw: [
                'rental',
                'key',
                'nexon',
                'himalayan',
                'bike',
                'motorcycle'
            ],
            modal: 'modal-rental',
            icon: 'fa-key',
            color: 'var(--accent)'
        },
        {
            title: 'Personal Chauffeur Hire',
            kw: [
                'driver',
                'chauffeur',
                'verified'
            ],
            modal: 'modal-drivers',
            icon: 'fa-user-tie',
            color: 'var(--warning)'
        },
        {
            title: 'Shared Parking Spot',
            kw: [
                'parking',
                'slot',
                'ev slot'
            ],
            modal: 'modal-parking',
            icon: 'fa-square-p',
            color: '#8b5cf6'
        },
        {
            title: 'Mechanic Diagnostic Visit',
            kw: [
                'mechanic',
                'repair',
                'wheel',
                'overhaul'
            ],
            modal: 'modal-mechanic',
            icon: 'fa-screwdriver-wrench',
            color: '#64748b'
        },
        {
            title: 'Ferry & Yacht Sea Booking',
            kw: [
                'sea',
                'ferry',
                'yacht',
                'maritime',
                'boat',
                'water'
            ],
            modal: 'modal-sea',
            icon: 'fa-ship',
            color: 'var(--success)'
        },
        {
            title: 'Flight & Heli Air Booking',
            kw: [
                'air',
                'flight',
                'helicopter',
                'chopper',
                'plane',
                'sky'
            ],
            modal: 'modal-air',
            icon: 'fa-plane',
            color: 'var(--warning)'
        },
        {
            title: 'Train Vande Bharat Book',
            kw: [
                'train',
                'express',
                'metro',
                'railway',
                'vande',
                'rajdhani'
            ],
            modal: 'modal-train',
            icon: 'fa-train',
            color: '#c864ff'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleLocationUpdate = {
                "Navbar.useEffect.handleLocationUpdate": (e)=>{
                    setCurrentLocation(e.detail);
                }
            }["Navbar.useEffect.handleLocationUpdate"];
            window.addEventListener('updateLocation', handleLocationUpdate);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('updateLocation', handleLocationUpdate)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (event)=>{
                    if (profileRef.current && !profileRef.current.contains(event.target)) {
                        setIsProfileOpen(false);
                    }
                }
            }["Navbar.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "web-navbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-brand",
                        onClick: ()=>console.log('Home'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-compass-drafting brand-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SART"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-badge",
                                children: "UNIVERSAL"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "location-nav-btn",
                        style: {
                            flexShrink: 0,
                            alignSelf: 'center'
                        },
                        onClick: ()=>{
                            if ("TURBOPACK compile-time truthy", 1) {
                                window.dispatchEvent(new CustomEvent('openReactModal', {
                                    detail: 'modal-city-selector'
                                }));
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-location-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                id: "nav-location-txt",
                                children: currentLocation
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-chevron-down",
                                style: {
                                    fontSize: '10px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "nav-links",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-link active",
                        id: "nav-btn-home",
                        onClick: ()=>window.switchTab('home'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-link",
                        id: "nav-btn-store",
                        onClick: ()=>window.switchTab('store'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Store"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-link",
                        id: "nav-btn-booking",
                        onClick: ()=>window.switchTab('booking'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Booking"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            isSearchExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "expanded-search-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fa-solid fa-magnifying-glass search-icon-left"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "expanded-search-input",
                        placeholder: "Search...",
                        autoFocus: true,
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        onBlur: ()=>setTimeout(()=>{
                                setIsSearchExpanded(false);
                                setSearchQuery('');
                            }, 200)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-dropdown",
                        children: SEARCH_OPTIONS.filter((opt)=>opt.title.toLowerCase().includes(searchQuery.toLowerCase()) || opt.kw.some((k)=>k.includes(searchQuery.toLowerCase()))).length > 0 ? SEARCH_OPTIONS.filter((opt)=>opt.title.toLowerCase().includes(searchQuery.toLowerCase()) || opt.kw.some((k)=>k.includes(searchQuery.toLowerCase()))).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "booking-card",
                                onClick: ()=>{
                                    window.openModal(opt.modal);
                                    setIsSearchExpanded(false);
                                    setSearchQuery('');
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "booking-card-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '50%',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: opt.color
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `fa-solid ${opt.icon}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 95,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "booking-card-text",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: '13px',
                                                            color: '#fff'
                                                        },
                                                        children: opt.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            margin: '2px 0 0 0',
                                                            fontSize: '9px',
                                                            textTransform: 'uppercase',
                                                            color: 'var(--text-secondary)'
                                                        },
                                                        children: "Shortcut trigger"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 98,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 94,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-chevron-right",
                                        style: {
                                            fontSize: '10px',
                                            color: 'var(--text-secondary)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 103,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, opt.title, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 93,
                                columnNumber: 19
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                color: 'var(--text-secondary)',
                                padding: '15px',
                                fontSize: '12px'
                            },
                            children: "No matching modules found in directory."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 107,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ctrl-btn",
                        style: {
                            visibility: isSearchExpanded ? 'hidden' : 'visible'
                        },
                        onClick: ()=>setIsSearchExpanded(true),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-magnifying-glass"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ctrl-btn",
                        onClick: ()=>window.openModal('modal-liked'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-heart"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ctrl-btn",
                        onClick: ()=>{
                            if ("TURBOPACK compile-time truthy", 1) {
                                window.dispatchEvent(new CustomEvent('openReactModal', {
                                    detail: 'modal-bookings-registry'
                                }));
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-bag-shopping"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: profileRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "profile-nav-btn",
                                onClick: ()=>setIsProfileOpen(!isProfileOpen),
                                style: {
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-circle-user"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Alex Carter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-chevron-down",
                                        style: {
                                            fontSize: '9px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            isProfileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "profile-dropdown-menu show",
                                style: {
                                    width: '320px',
                                    padding: '24px',
                                    borderRadius: '28px',
                                    textAlign: 'center',
                                    background: '#ffffff',
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    color: '#000000'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            width: '80px',
                                            height: '80px',
                                            margin: '0 auto 12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '50%',
                                                    background: '#0b57d0',
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '36px',
                                                    fontWeight: 500
                                                },
                                                children: "V"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    right: 0,
                                                    background: 'white',
                                                    color: 'black',
                                                    width: '26px',
                                                    height: '26px',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '13px',
                                                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-camera"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        style: {
                                                            display: 'none'
                                                        },
                                                        onChange: (e)=>{
                                                            if (e.target.files && e.target.files[0]) alert('Selected file: ' + e.target.files[0].name);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            margin: 0,
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            color: '#000000'
                                        },
                                        children: "vinothkumar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: '4px 0 16px',
                                            fontSize: '14px',
                                            color: '#4b5563'
                                        },
                                        children: "gmvinoth@bnxmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>console.log('Manage Account'),
                                        style: {
                                            background: 'transparent',
                                            border: '1px solid #d1d5db',
                                            color: '#000000',
                                            borderRadius: '24px',
                                            padding: '10px 20px',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            marginBottom: '20px',
                                            width: 'auto'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-user-gear"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            " Manage your account"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            marginBottom: '20px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    document.body.classList.add('light-theme');
                                                    localStorage.setItem('sart-theme', 'light');
                                                },
                                                style: {
                                                    background: '#f3f4f6',
                                                    border: 'none',
                                                    color: '#000000',
                                                    padding: '8px 16px',
                                                    borderRadius: '12px',
                                                    fontSize: '13px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-sun"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 333
                                                    }, this),
                                                    " Light"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    document.body.classList.remove('light-theme');
                                                    localStorage.setItem('sart-theme', 'dark');
                                                },
                                                style: {
                                                    background: '#f3f4f6',
                                                    border: 'none',
                                                    color: '#000000',
                                                    padding: '8px 16px',
                                                    borderRadius: '12px',
                                                    fontSize: '13px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-moon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 335
                                                    }, this),
                                                    " Dark"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderTop: '1px solid #e5e7eb',
                                            margin: '0 -24px 10px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "dropdown-item",
                                        style: {
                                            padding: '12px 24px',
                                            textAlign: 'left',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            color: '#000000',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        },
                                        onClick: ()=>console.log('Add account'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-user-plus",
                                                style: {
                                                    fontSize: '18px',
                                                    color: '#4b5563'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            " Add another account"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "dropdown-item signout-btn",
                                        style: {
                                            padding: '12px 24px',
                                            textAlign: 'left',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            color: '#000000',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        },
                                        onClick: ()=>{
                                            console.log('Sign out');
                                            setIsProfileOpen(false);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-arrow-right-from-bracket",
                                                style: {
                                                    fontSize: '18px',
                                                    color: '#4b5563'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            " Sign out of this account"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Navbar, "5KN5TeSc8rFN1xmUxFIZg+HnzEM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSartStore"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NewsFeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function NewsFeed() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dashboard-card",
        id: "news-section-div",
        style: {
            marginTop: '18px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-header-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "card-headline",
                        children: "Latest Transit Ecosystem News"
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewsFeed.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "action-link",
                        onClick: ()=>alert('Auto News RSS Feed connected.'),
                        children: "See All Feed"
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewsFeed.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NewsFeed.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "web-news-row",
                id: "news-cards-container"
            }, void 0, false, {
                fileName: "[project]/src/components/NewsFeed.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NewsFeed.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = NewsFeed;
var _c;
__turbopack_context__.k.register(_c, "NewsFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/OffersSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OffersSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const OFFERS = [
    {
        id: 1,
        title: "Short Trip Offer",
        discount: "5% OFF",
        desc: "Use code STMB5 and get 5% off upto ₹500",
        code: "STMB5"
    },
    {
        id: 2,
        title: "Special 5 Day offer",
        discount: "10% OFF",
        desc: "Use code STMB10 and get 10% off upto ₹1000",
        code: "STMB10"
    },
    {
        id: 3,
        title: "Long Trip Offer",
        discount: "15% OFF",
        desc: "Use code STMB15 and get 15% off upto ₹2000",
        code: "STMB15"
    },
    {
        id: 4,
        title: "New User Offer",
        discount: "20% OFF",
        desc: "Use code NEW20 and get 20% off upto ₹500",
        code: "NEW20"
    },
    {
        id: 5,
        title: "Weekend Getaway",
        discount: "12% OFF",
        desc: "Use code WKND12 and get 12% off upto ₹1500",
        code: "WKND12"
    }
];
function OffersSlider() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleNext = ()=>{
        if (currentIndex < OFFERS.length - 1) {
            setCurrentIndex((prev)=>prev + 1);
        }
    };
    const handlePrev = ()=>{
        if (currentIndex > 0) {
            setCurrentIndex((prev)=>prev - 1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "offers-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "offers-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Offers"
                    }, void 0, false, {
                        fileName: "[project]/src/components/OffersSlider.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "offers-nav",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "offers-nav-btn",
                                onClick: handlePrev,
                                disabled: currentIndex === 0,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-chevron-left"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OffersSlider.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/OffersSlider.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "offers-nav-btn",
                                onClick: handleNext,
                                disabled: currentIndex >= OFFERS.length - 3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-chevron-right"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OffersSlider.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/OffersSlider.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OffersSlider.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OffersSlider.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "offers-slider-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "offers-slider-track",
                    ref: trackRef,
                    style: {
                        transform: `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 5.3}px))`
                    },
                    children: OFFERS.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "offer-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "offer-card-top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "offer-title-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "offer-title",
                                                    children: offer.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OffersSlider.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "offer-discount",
                                                    children: offer.discount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OffersSlider.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/OffersSlider.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "offer-desc",
                                            children: offer.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OffersSlider.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OffersSlider.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "offer-card-bottom",
                                    style: {
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23199c95' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center bottom',
                                        backgroundRepeat: 'no-repeat'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "offer-code",
                                            children: offer.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OffersSlider.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "offer-tnc",
                                            children: "T&C"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OffersSlider.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OffersSlider.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, offer.id, true, {
                            fileName: "[project]/src/components/OffersSlider.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/OffersSlider.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/OffersSlider.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/OffersSlider.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(OffersSlider, "0JgL5SfeRlXP+OT6XR9fSRdJcKU=");
_c = OffersSlider;
var _c;
__turbopack_context__.k.register(_c, "OffersSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QuickBookingForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuickBookingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function QuickBookingForm() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "quick-booking-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "quick-booking-title",
                children: "Choose Your Ride"
            }, void 0, false, {
                fileName: "[project]/src/components/QuickBookingForm.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "quick-booking-form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "qb-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "PICKUP"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuickBookingForm.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "qb-input-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Enter Pickup Location"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuickBookingForm.tsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-location-crosshairs target-icon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuickBookingForm.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuickBookingForm.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuickBookingForm.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "qb-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "DROP"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuickBookingForm.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "qb-input-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Enter Drop Location"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuickBookingForm.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuickBookingForm.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "qb-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "WHEN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuickBookingForm.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "qb-input-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "datetime-local"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuickBookingForm.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuickBookingForm.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "qb-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "RIDE TYPE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuickBookingForm.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "qb-input-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                            label: "Road - Micro-Mobility",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "bike",
                                                    children: "Bike / Moto"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "escooter",
                                                    children: "Electric Scooter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "auto",
                                                    children: "Auto-Rickshaw"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "erickshaw",
                                                    children: "E-Rickshaw"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuickBookingForm.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                            label: "Road - Cabs & Sedans",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "micro",
                                                    children: "Micro Hatchback"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "sedan",
                                                    children: "Standard Sedan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "exec",
                                                    children: "Executive Sedan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "luxury",
                                                    children: "Luxury Sedan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuickBookingForm.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                            label: "Road - SUVs & Minivans",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "csuv",
                                                    children: "Compact SUV"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "psuv",
                                                    children: "Premium SUV"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "lsuv",
                                                    children: "Large SUV / XL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "minivan",
                                                    children: "Minivan / Maxi-Cab"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuickBookingForm.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                            label: "Road - Cargo & Logistics",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "delivery",
                                                    children: "Delivery Bike"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "minitruck",
                                                    children: "Mini-Truck"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "pickup",
                                                    children: "Pickup Truck"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "heavytruck",
                                                    children: "Heavy Truck"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuickBookingForm.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                            label: "Air & Sea",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "helicopter",
                                                    children: "Helicopter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "privatejet",
                                                    children: "Private Jet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "motorboat",
                                                    children: "Motorboat"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "yacht",
                                                    children: "Luxury Yacht"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuickBookingForm.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuickBookingForm.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuickBookingForm.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuickBookingForm.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "qb-action",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "qb-confirm-btn",
                    children: "CONFIRM BOOKING"
                }, void 0, false, {
                    fileName: "[project]/src/components/QuickBookingForm.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/QuickBookingForm.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuickBookingForm.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = QuickBookingForm;
var _c;
__turbopack_context__.k.register(_c, "QuickBookingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RentalBookingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RentalBookingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ROAD_RENTAL_FLEET = [
    {
        title: 'Two-Wheelers & Micro-Mobility',
        vehicles: [
            {
                id: 'r-bicycle',
                name: 'Geared Bicycle',
                icon: 'fa-bicycle',
                color: '#10b981',
                price: 250
            },
            {
                id: 'r-scooter',
                name: 'City Scooter (Gearless)',
                icon: 'fa-motorcycle',
                color: '#3b82f6',
                price: 400
            },
            {
                id: 'r-commuter',
                name: 'Standard Commuter Bike',
                icon: 'fa-motorcycle',
                color: '#f59e0b',
                price: 600
            },
            {
                id: 'r-sports',
                name: 'Premium Sports Bike',
                icon: 'fa-motorcycle',
                color: '#ef4444',
                price: 1200
            },
            {
                id: 'r-adv',
                name: 'Adventure Tourer',
                icon: 'fa-mountain',
                color: '#8b5cf6',
                price: 1800
            }
        ]
    },
    {
        title: 'Economy & City Cars',
        vehicles: [
            {
                id: 'r-micro',
                name: 'Micro Hatchback',
                icon: 'fa-car-side',
                color: '#0ea5e9',
                price: 1500
            },
            {
                id: 'r-premium-hatch',
                name: 'Premium Hatchback',
                icon: 'fa-car',
                color: '#6366f1',
                price: 2000
            },
            {
                id: 'r-sedan',
                name: 'Standard Sedan',
                icon: 'fa-car',
                color: '#3b82f6',
                price: 2500
            }
        ]
    },
    {
        title: 'Premium & Executive Cars',
        vehicles: [
            {
                id: 'r-exec',
                name: 'Executive Sedan',
                icon: 'fa-briefcase',
                color: '#1d4ed8',
                price: 4500
            },
            {
                id: 'r-luxury',
                name: 'Luxury Sedan',
                icon: 'fa-gem',
                color: '#8b5cf6',
                price: 8000
            },
            {
                id: 'r-sports-car',
                name: 'Sports / Convertible',
                icon: 'fa-car-burst',
                color: '#e11d48',
                price: 15000
            }
        ]
    },
    {
        title: 'SUVs & Off-Roaders',
        vehicles: [
            {
                id: 'r-csuv',
                name: 'Compact SUV',
                icon: 'fa-truck-pickup',
                color: '#ec4899',
                price: 3000
            },
            {
                id: 'r-4x4',
                name: '4x4 Off-Roader',
                icon: 'fa-mountain-sun',
                color: '#f97316',
                price: 5500
            },
            {
                id: 'r-premium-suv',
                name: 'Premium 7-Seater SUV',
                icon: 'fa-crown',
                color: '#eab308',
                price: 7000
            },
            {
                id: 'r-luxury-suv',
                name: 'Luxury Full-Size SUV',
                icon: 'fa-truck-monster',
                color: '#be123c',
                price: 12000
            }
        ]
    },
    {
        title: 'Vans, RVs & Specialty',
        vehicles: [
            {
                id: 'r-minivan',
                name: 'Passenger Minivan (8 Seater)',
                icon: 'fa-van-shuttle',
                color: '#14b8a6',
                price: 4000
            },
            {
                id: 'r-camper',
                name: 'Camper Van / RV',
                icon: 'fa-caravan',
                color: '#06b6d4',
                price: 8500
            },
            {
                id: 'r-vanity',
                name: 'Luxury Vanity Van',
                icon: 'fa-star',
                color: '#db2777',
                price: 25000
            },
            {
                id: 'r-moving',
                name: 'Self-Drive Moving Truck',
                icon: 'fa-truck',
                color: '#4f46e5',
                price: 5000
            }
        ]
    }
];
const SEA_RENTAL_FLEET = [
    {
        title: 'Personal Watercraft',
        vehicles: [
            {
                id: 'r-jetski',
                name: 'Jet Ski / WaveRunner',
                icon: 'fa-water',
                color: '#0ea5e9',
                price: 3500
            },
            {
                id: 'r-skiff',
                name: 'Small Motorboat / Skiff',
                icon: 'fa-sailboat',
                color: '#38bdf8',
                price: 6000
            }
        ]
    },
    {
        title: 'Private Charters & Speedboats',
        vehicles: [
            {
                id: 'r-speedboat',
                name: 'Standard Speedboat',
                icon: 'fa-ship',
                color: '#0284c7',
                price: 12000
            },
            {
                id: 'r-cabin',
                name: 'Premium Cabin Cruiser',
                icon: 'fa-anchor',
                color: '#0369a1',
                price: 25000
            }
        ]
    },
    {
        title: 'Luxury Yachts & Catamarans',
        vehicles: [
            {
                id: 'r-catamaran',
                name: 'Sailing Catamaran',
                icon: 'fa-sailboat',
                color: '#0f766e',
                price: 45000
            },
            {
                id: 'r-yacht',
                name: 'Luxury Private Yacht',
                icon: 'fa-champagne-glasses',
                color: '#eab308',
                price: 150000
            }
        ]
    }
];
const AIR_RENTAL_FLEET = [
    {
        title: 'Urban Air Mobility & Choppers',
        vehicles: [
            {
                id: 'r-evtol',
                name: 'eVTOL / Air Taxi',
                icon: 'fa-helicopter-symbol',
                color: '#10b981',
                price: 35000
            },
            {
                id: 'r-chopper',
                name: 'Light Helicopter',
                icon: 'fa-helicopter',
                color: '#059669',
                price: 85000
            }
        ]
    },
    {
        title: 'Private Jets & Charters',
        vehicles: [
            {
                id: 'r-lightjet',
                name: 'Light Private Jet',
                icon: 'fa-plane-up',
                color: '#8b5cf6',
                price: 250000
            },
            {
                id: 'r-heavyjet',
                name: 'Heavy Ultra-Long-Range Jet',
                icon: 'fa-gem',
                color: '#7c3aed',
                price: 850000
            }
        ]
    }
];
const ALL_RENTALS = [
    ...ROAD_RENTAL_FLEET.map((c)=>c.vehicles).flat(),
    ...SEA_RENTAL_FLEET.map((c)=>c.vehicles).flat(),
    ...AIR_RENTAL_FLEET.map((c)=>c.vehicles).flat()
];
function RentalBookingModal({ isOpen, onClose }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedVehicle, setSelectedVehicle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('r-premium-hatch');
    const [pickup, setPickup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Current Location');
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [returnDate, setReturnDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [returnTime, setReturnTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    if (!isOpen) return null;
    const handleClose = ()=>{
        setStep(1);
        onClose();
    };
    const handleBook = ()=>{
        let vehicleName = 'Self-Drive Vehicle';
        let vehiclePrice = 1500;
        const found = ALL_RENTALS.find((v)=>v.id === selectedVehicle);
        if (found) {
            vehicleName = found.name;
            vehiclePrice = found.price;
        }
        let subtitle = `${vehicleName} • Self-Drive Rental`;
        if (startDate && returnDate) {
            subtitle += ` • From ${startDate} to ${returnDate}`;
        }
        if (window.executeGenericBooking) {
            window.executeGenericBooking('rental', `Rental: ${pickup}`, subtitle, vehiclePrice, {
                from: pickup,
                startDate,
                startTime,
                returnDate,
                returnTime
            });
        }
        handleClose();
    };
    const selectedVehicleObj = ALL_RENTALS.find((v)=>v.id === selectedVehicle);
    const renderGridSection = (title, icon, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                marginBottom: '32px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: '20px',
                        fontWeight: '800',
                        color: '#111827',
                        margin: '24px 0 16px 0',
                        paddingBottom: '8px',
                        borderBottom: '2px solid #e5e7eb',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: `fa-solid ${icon}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                            lineNumber: 146,
                            columnNumber: 9
                        }, this),
                        " ",
                        title
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                    lineNumber: 145,
                    columnNumber: 7
                }, this),
                data.map((category, catIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    color: '#4b5563',
                                    marginBottom: '16px'
                                },
                                children: category.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/RentalBookingModal.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                                    gap: '16px'
                                },
                                children: category.vehicles.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setSelectedVehicle(v.id);
                                            setStep(2);
                                        },
                                        style: {
                                            background: '#ffffff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '16px',
                                            padding: '16px 12px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                            transition: 'all 0.2s ease'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '56px',
                                                    height: '56px',
                                                    borderRadius: '50%',
                                                    background: v.color + '20',
                                                    color: v.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '24px',
                                                    marginBottom: '12px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `fa-solid ${v.icon}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '13px',
                                                    fontWeight: '600',
                                                    color: '#1f2937',
                                                    textAlign: 'center',
                                                    lineHeight: '1.2'
                                                },
                                                children: v.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, v.id, true, {
                                        fileName: "[project]/src/components/RentalBookingModal.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RentalBookingModal.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, catIdx, true, {
                        fileName: "[project]/src/components/RentalBookingModal.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RentalBookingModal.tsx",
            lineNumber: 144,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay open",
        style: {
            display: 'flex',
            zIndex: 1000,
            background: 'rgba(0,0,0,0.6)'
        },
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-sheet centered-modal",
            style: {
                maxWidth: '900px',
                width: '95%',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#f9fafb',
                borderRadius: '24px',
                overflow: 'hidden'
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 24px',
                        background: '#ffffff',
                        borderBottom: '1px solid #e5e7eb'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '22px',
                                fontWeight: '800',
                                color: '#111827',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-key",
                                    style: {
                                        color: '#0ea5e9'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                " Omni-Transit Rental Booking"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            style: {
                                background: '#f3f4f6',
                                border: 'none',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                color: '#4b5563',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-xmark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RentalBookingModal.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this),
                step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        overflowY: 'auto',
                        padding: '24px'
                    },
                    children: [
                        renderGridSection('ROAD RENTALS', 'fa-car-side', ROAD_RENTAL_FLEET),
                        renderGridSection('SEA & MARINE RENTALS', 'fa-ship', SEA_RENTAL_FLEET),
                        renderGridSection('AIR & CHARTER RENTALS', 'fa-plane', AIR_RENTAL_FLEET)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                    lineNumber: 201,
                    columnNumber: 11
                }, this),
                step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        overflowY: 'auto',
                        padding: '32px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep(1),
                            style: {
                                background: 'transparent',
                                border: 'none',
                                color: '#6b7280',
                                cursor: 'pointer',
                                fontSize: '15px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '0 0 24px 0'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-arrow-left"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this),
                                " Back to Fleet Options"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this),
                        selectedVehicleObj && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                background: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '16px',
                                padding: '20px',
                                marginBottom: '32px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        background: selectedVehicleObj.color + '20',
                                        color: selectedVehicleObj.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '28px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `fa-solid ${selectedVehicleObj.icon}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RentalBookingModal.tsx",
                                        lineNumber: 221,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                    lineNumber: 220,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: 0,
                                                fontSize: '20px',
                                                fontWeight: '800',
                                                color: '#111827'
                                            },
                                            children: selectedVehicleObj.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: '4px 0 0 0',
                                                fontSize: '14px',
                                                color: '#6b7280'
                                            },
                                            children: "Selected Rental Vehicle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '16px',
                                        fontWeight: '700',
                                        color: '#111827',
                                        textAlign: 'right'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '24px',
                                                fontWeight: '800'
                                            },
                                            children: [
                                                "₹",
                                                selectedVehicleObj.price.toLocaleString('en-IN')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                                            lineNumber: 228,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '12px',
                                                color: '#6b7280'
                                            },
                                            children: "per day / block"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                    lineNumber: 227,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                            lineNumber: 219,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '16px',
                                padding: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '24px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                fontSize: '13px',
                                                fontWeight: '700',
                                                color: '#4b5563',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            },
                                            children: "Pickup & Dropoff Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            style: {
                                                width: '100%',
                                                padding: '14px',
                                                borderRadius: '10px',
                                                border: '1px solid #d1d5db',
                                                background: '#f9fafb',
                                                color: '#111827',
                                                fontSize: '15px'
                                            },
                                            placeholder: "Enter location (e.g., Airport Terminal 1, Marina Bay)",
                                            value: pickup,
                                            onChange: (e)=>setPickup(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontSize: '14px',
                                        fontWeight: '700',
                                        color: '#111827',
                                        margin: '0 0 16px 0',
                                        borderBottom: '1px solid #e5e7eb',
                                        paddingBottom: '8px'
                                    },
                                    children: "Rental Period"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '16px',
                                        marginBottom: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        color: '#6b7280',
                                                        marginBottom: '6px'
                                                    },
                                                    children: "Start Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    style: {
                                                        width: '100%',
                                                        padding: '12px',
                                                        borderRadius: '8px',
                                                        border: '1px solid #d1d5db',
                                                        background: '#f9fafb',
                                                        color: '#111827',
                                                        fontSize: '14px'
                                                    },
                                                    value: startDate,
                                                    onChange: (e)=>setStartDate(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        color: '#6b7280',
                                                        marginBottom: '6px'
                                                    },
                                                    children: "Start Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    style: {
                                                        width: '100%',
                                                        padding: '12px',
                                                        borderRadius: '8px',
                                                        border: '1px solid #d1d5db',
                                                        background: '#f9fafb',
                                                        color: '#111827',
                                                        fontSize: '14px'
                                                    },
                                                    value: startTime,
                                                    onChange: (e)=>setStartTime(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '16px',
                                        marginBottom: '32px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        color: '#6b7280',
                                                        marginBottom: '6px'
                                                    },
                                                    children: "Return Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    style: {
                                                        width: '100%',
                                                        padding: '12px',
                                                        borderRadius: '8px',
                                                        border: '1px solid #d1d5db',
                                                        background: '#f9fafb',
                                                        color: '#111827',
                                                        fontSize: '14px'
                                                    },
                                                    value: returnDate,
                                                    onChange: (e)=>setReturnDate(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        color: '#6b7280',
                                                        marginBottom: '6px'
                                                    },
                                                    children: "Return Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    style: {
                                                        width: '100%',
                                                        padding: '12px',
                                                        borderRadius: '8px',
                                                        border: '1px solid #d1d5db',
                                                        background: '#f9fafb',
                                                        color: '#111827',
                                                        fontSize: '14px'
                                                    },
                                                    value: returnTime,
                                                    onChange: (e)=>setReturnTime(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBook,
                                    style: {
                                        width: '100%',
                                        padding: '16px',
                                        borderRadius: '12px',
                                        background: '#0ea5e9',
                                        color: '#ffffff',
                                        border: 'none',
                                        fontSize: '16px',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.background = '#0284c7',
                                    onMouseLeave: (e)=>e.currentTarget.style.background = '#0ea5e9',
                                    children: "Confirm Rental Booking"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalBookingModal.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RentalBookingModal.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RentalBookingModal.tsx",
            lineNumber: 189,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RentalBookingModal.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(RentalBookingModal, "DZ91iXpy2MphFDZqZs20gM5UX0o=");
_c = RentalBookingModal;
var _c;
__turbopack_context__.k.register(_c, "RentalBookingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RideBookingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RideBookingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ROAD_FLEET = [
    {
        title: 'Micro-Mobility & Last-Mile',
        vehicles: [
            {
                id: 'bike',
                name: 'Bike / Moto',
                icon: 'fa-motorcycle',
                color: '#ff6b6b',
                price: 250
            },
            {
                id: 'escooter',
                name: 'Electric Scooter',
                icon: 'fa-bolt',
                color: '#10b981',
                price: 150
            },
            {
                id: 'auto',
                name: 'Auto-Rickshaw',
                icon: 'fa-taxi',
                color: '#f59e0b',
                price: 350
            },
            {
                id: 'erickshaw',
                name: 'E-Rickshaw',
                icon: 'fa-taxi',
                color: '#34d399',
                price: 200
            }
        ]
    },
    {
        title: 'Economy & Premium Cabs',
        vehicles: [
            {
                id: 'micro',
                name: 'Micro Hatchback',
                icon: 'fa-car-side',
                color: '#3b82f6',
                price: 800
            },
            {
                id: 'sedan',
                name: 'Standard Sedan',
                icon: 'fa-car',
                color: '#2563eb',
                price: 1200
            },
            {
                id: 'exec',
                name: 'Executive Sedan',
                icon: 'fa-briefcase',
                color: '#1d4ed8',
                price: 1800
            },
            {
                id: 'luxury',
                name: 'Luxury Sedan',
                icon: 'fa-gem',
                color: '#8b5cf6',
                price: 3500
            }
        ]
    },
    {
        title: 'Multi-Utility & SUVs',
        vehicles: [
            {
                id: 'csuv',
                name: 'Compact SUV',
                icon: 'fa-truck-pickup',
                color: '#ec4899',
                price: 1500
            },
            {
                id: 'mpv',
                name: 'Standard MPV',
                icon: 'fa-van-shuttle',
                color: '#f43f5e',
                price: 2200
            },
            {
                id: 'psuv',
                name: 'Premium SUV',
                icon: 'fa-crown',
                color: '#eab308',
                price: 4500
            },
            {
                id: 'lsuv',
                name: 'Large SUV / XL',
                icon: 'fa-truck-monster',
                color: '#f97316',
                price: 5500
            }
        ]
    },
    {
        title: 'Minivans & Maxi-Cabs',
        vehicles: [
            {
                id: 'minivan',
                name: 'Standard Minivan',
                icon: 'fa-shuttle-van',
                color: '#14b8a6',
                price: 6500
            },
            {
                id: 'maxicab',
                name: 'Maxi-Cab',
                icon: 'fa-bus-simple',
                color: '#06b6d4',
                price: 8500
            },
            {
                id: 'microcoach',
                name: 'Luxury Micro-Coach',
                icon: 'fa-bus',
                color: '#0ea5e9',
                price: 12000
            }
        ]
    },
    {
        title: 'Buses, Coaches & Mass Transit',
        vehicles: [
            {
                id: 'minibus',
                name: 'Mini-Bus',
                icon: 'fa-bus-simple',
                color: '#6366f1',
                price: 18000
            },
            {
                id: 'citybus',
                name: 'Standard City Bus',
                icon: 'fa-bus',
                color: '#8b5cf6',
                price: 25000
            },
            {
                id: 'sleeper',
                name: 'Sleeper Coach',
                icon: 'fa-bed',
                color: '#a855f7',
                price: 35000
            },
            {
                id: 'doubledecker',
                name: 'Double-Decker Bus',
                icon: 'fa-bus',
                color: '#d946ef',
                price: 45000
            },
            {
                id: 'articulated',
                name: 'Articulated Bus',
                icon: 'fa-truck-front',
                color: '#f43f5e',
                price: 60000
            }
        ]
    }
];
const SEA_FLEET = [
    {
        title: 'Micro-Watercraft',
        vehicles: [
            {
                id: 'jetski',
                name: 'Jet Ski',
                icon: 'fa-water',
                color: '#0ea5e9',
                price: 1500
            },
            {
                id: 'skiff',
                name: 'Small Motorboat',
                icon: 'fa-sailboat',
                color: '#38bdf8',
                price: 3500
            }
        ]
    },
    {
        title: 'Private Charters & Speedboats',
        vehicles: [
            {
                id: 'speedboat',
                name: 'Standard Speedboat',
                icon: 'fa-ship',
                color: '#0284c7',
                price: 8500
            },
            {
                id: 'cabin',
                name: 'Premium Cabin Cruiser',
                icon: 'fa-anchor',
                color: '#0369a1',
                price: 15000
            },
            {
                id: 'smallyacht',
                name: 'Small Luxury Yacht',
                icon: 'fa-champagne-glasses',
                color: '#eab308',
                price: 45000
            }
        ]
    },
    {
        title: 'Mid-Sized Passenger Craft',
        vehicles: [
            {
                id: 'watertaxi',
                name: 'Commercial Water Taxi',
                icon: 'fa-ferry',
                color: '#0d9488',
                price: 25000
            },
            {
                id: 'catamaran',
                name: 'Sailing Catamaran',
                icon: 'fa-sailboat',
                color: '#0f766e',
                price: 65000
            },
            {
                id: 'partyyacht',
                name: 'Luxury Party Yacht',
                icon: 'fa-martini-glass',
                color: '#db2777',
                price: 120000
            }
        ]
    },
    {
        title: 'Regional Marine Transit',
        vehicles: [
            {
                id: 'hydrofoil',
                name: 'Hydrofoil / Fast Ferry',
                icon: 'fa-ship',
                color: '#4f46e5',
                price: 85000
            },
            {
                id: 'riverboat',
                name: 'Large Sightseeing River Boat',
                icon: 'fa-camera',
                color: '#7c3aed',
                price: 150000
            }
        ]
    },
    {
        title: 'Mass Marine Transit & Ships',
        vehicles: [
            {
                id: 'roro',
                name: 'Ro-Ro Passenger Ferry',
                icon: 'fa-ferry',
                color: '#4338ca',
                price: 350000
            },
            {
                id: 'cruise',
                name: 'Ocean-Going Cruise Liner',
                icon: 'fa-ship',
                color: '#be123c',
                price: 2500000
            }
        ]
    }
];
const AIR_FLEET = [
    {
        title: 'Urban Air Mobility & Light Choppers',
        vehicles: [
            {
                id: 'evtol',
                name: 'eVTOL / Air Taxi',
                icon: 'fa-helicopter',
                color: '#10b981',
                price: 25000
            },
            {
                id: 'lightchopper',
                name: 'Light Helicopter',
                icon: 'fa-helicopter',
                color: '#059669',
                price: 45000
            }
        ]
    },
    {
        title: 'Regional Turboprops & Twin-Engines',
        vehicles: [
            {
                id: 'utilityturbo',
                name: 'Utility Turboprop',
                icon: 'fa-plane',
                color: '#f59e0b',
                price: 120000
            },
            {
                id: 'twinturbo',
                name: 'Twin-Engine Turboprop',
                icon: 'fa-plane-departure',
                color: '#d97706',
                price: 250000
            }
        ]
    },
    {
        title: 'Private Executive Jets',
        vehicles: [
            {
                id: 'lightjet',
                name: 'Light Private Jet',
                icon: 'fa-plane-up',
                color: '#8b5cf6',
                price: 450000
            },
            {
                id: 'heavyjet',
                name: 'Heavy Ultra-Long-Range Jet',
                icon: 'fa-gem',
                color: '#7c3aed',
                price: 1250000
            }
        ]
    },
    {
        title: 'Regional Airliners & Corporate Shuttles',
        vehicles: [
            {
                id: 'largetwin',
                name: 'Large Twin-Turboprop',
                icon: 'fa-plane',
                color: '#3b82f6',
                price: 650000
            },
            {
                id: 'regionaljet',
                name: 'Regional Jet Airliner',
                icon: 'fa-plane-departure',
                color: '#2563eb',
                price: 1500000
            }
        ]
    },
    {
        title: 'Commercial Group Charters',
        vehicles: [
            {
                id: 'narrowbody',
                name: 'Narrow-Body Charter',
                icon: 'fa-plane-arrival',
                color: '#e11d48',
                price: 3500000
            },
            {
                id: 'widebody',
                name: 'Wide-Body Mega-Charter',
                icon: 'fa-globe',
                color: '#be123c',
                price: 8500000
            }
        ]
    }
];
const ALL_FLEETS = [
    ...ROAD_FLEET.map((c)=>c.vehicles).flat(),
    ...SEA_FLEET.map((c)=>c.vehicles).flat(),
    ...AIR_FLEET.map((c)=>c.vehicles).flat()
];
function RideBookingModal({ isOpen, onClose }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedVehicle, setSelectedVehicle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('micro');
    const [pickup, setPickup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Current Location');
    const [dropoff, setDropoff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    if (!isOpen) return null;
    const handleClose = ()=>{
        setStep(1);
        onClose();
    };
    const handleBook = ()=>{
        let vehicleName = 'Vehicle';
        let vehiclePrice = 800;
        const found = ALL_FLEETS.find((v)=>v.id === selectedVehicle);
        if (found) {
            vehicleName = found.name;
            vehiclePrice = found.price;
        }
        let subtitle = `${vehicleName} • Premium Chauffeur`;
        if (date || time) {
            subtitle += ` • Scheduled: ${date} ${time}`.trim();
        }
        if (window.executeGenericBooking) {
            window.executeGenericBooking('ride', `Booking: ${pickup} to ${dropoff || 'Destination'}`, subtitle, vehiclePrice, {
                from: pickup,
                to: dropoff,
                date,
                time
            });
        }
        handleClose();
    };
    const selectedVehicleObj = ALL_FLEETS.find((v)=>v.id === selectedVehicle);
    const renderGridSection = (title, icon, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                marginBottom: '32px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: '20px',
                        fontWeight: '800',
                        color: '#111827',
                        margin: '24px 0 16px 0',
                        paddingBottom: '8px',
                        borderBottom: '2px solid #e5e7eb',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: `fa-solid ${icon}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/RideBookingModal.tsx",
                            lineNumber: 183,
                            columnNumber: 9
                        }, this),
                        " ",
                        title
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RideBookingModal.tsx",
                    lineNumber: 182,
                    columnNumber: 7
                }, this),
                data.map((category, catIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    color: '#4b5563',
                                    marginBottom: '16px'
                                },
                                children: category.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/RideBookingModal.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                                    gap: '16px'
                                },
                                children: category.vehicles.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setSelectedVehicle(v.id);
                                            setStep(2);
                                        },
                                        style: {
                                            background: '#ffffff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '16px',
                                            padding: '16px 12px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                            transition: 'all 0.2s ease'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '56px',
                                                    height: '56px',
                                                    borderRadius: '50%',
                                                    background: v.color + '20',
                                                    color: v.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '24px',
                                                    marginBottom: '12px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `fa-solid ${v.icon}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RideBookingModal.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '13px',
                                                    fontWeight: '600',
                                                    color: '#1f2937',
                                                    textAlign: 'center',
                                                    lineHeight: '1.2'
                                                },
                                                children: v.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RideBookingModal.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, v.id, true, {
                                        fileName: "[project]/src/components/RideBookingModal.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RideBookingModal.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, catIdx, true, {
                        fileName: "[project]/src/components/RideBookingModal.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RideBookingModal.tsx",
            lineNumber: 181,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay open",
        style: {
            display: 'flex',
            zIndex: 1000,
            background: 'rgba(0,0,0,0.6)'
        },
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-sheet centered-modal",
            style: {
                maxWidth: '900px',
                width: '95%',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#f9fafb',
                borderRadius: '24px',
                overflow: 'hidden'
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 24px',
                        background: '#ffffff',
                        borderBottom: '1px solid #e5e7eb'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '22px',
                                fontWeight: '800',
                                color: '#111827',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-compass",
                                    style: {
                                        color: '#0ea5e9'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                " Omni-Transit Booking"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RideBookingModal.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            style: {
                                background: '#f3f4f6',
                                border: 'none',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                color: '#4b5563',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-xmark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RideBookingModal.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RideBookingModal.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RideBookingModal.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this),
                step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        overflowY: 'auto',
                        padding: '24px'
                    },
                    children: [
                        renderGridSection('ROAD TRANSIT', 'fa-car', ROAD_FLEET),
                        renderGridSection('SEA / WATER TRANSIT', 'fa-ship', SEA_FLEET),
                        renderGridSection('AIR TRANSIT', 'fa-plane', AIR_FLEET)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RideBookingModal.tsx",
                    lineNumber: 238,
                    columnNumber: 11
                }, this),
                step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        overflowY: 'auto',
                        padding: '32px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep(1),
                            style: {
                                background: 'transparent',
                                border: 'none',
                                color: '#6b7280',
                                cursor: 'pointer',
                                fontSize: '15px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '0 0 24px 0'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-arrow-left"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this),
                                " Back to Fleet Options"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RideBookingModal.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this),
                        selectedVehicleObj && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                background: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '16px',
                                padding: '20px',
                                marginBottom: '32px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        background: selectedVehicleObj.color + '20',
                                        color: selectedVehicleObj.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '28px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `fa-solid ${selectedVehicleObj.icon}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RideBookingModal.tsx",
                                        lineNumber: 258,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 257,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: 0,
                                                fontSize: '20px',
                                                fontWeight: '800',
                                                color: '#111827'
                                            },
                                            children: selectedVehicleObj.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: '4px 0 0 0',
                                                fontSize: '14px',
                                                color: '#6b7280'
                                            },
                                            children: "Selected Vehicle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 262,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 260,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '24px',
                                        fontWeight: '800',
                                        color: '#111827'
                                    },
                                    children: [
                                        "₹",
                                        selectedVehicleObj.price.toLocaleString('en-IN')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RideBookingModal.tsx",
                            lineNumber: 256,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '16px',
                                padding: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                fontSize: '13px',
                                                fontWeight: '700',
                                                color: '#4b5563',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            },
                                            children: "Pickup Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            style: {
                                                width: '100%',
                                                padding: '14px',
                                                borderRadius: '10px',
                                                border: '1px solid #d1d5db',
                                                background: '#f9fafb',
                                                color: '#111827',
                                                fontSize: '15px'
                                            },
                                            placeholder: "Enter pickup address",
                                            value: pickup,
                                            onChange: (e)=>setPickup(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                fontSize: '13px',
                                                fontWeight: '700',
                                                color: '#4b5563',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            },
                                            children: "Dropoff Destination"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            style: {
                                                width: '100%',
                                                padding: '14px',
                                                borderRadius: '10px',
                                                border: '1px solid #d1d5db',
                                                background: '#f9fafb',
                                                color: '#111827',
                                                fontSize: '15px'
                                            },
                                            placeholder: "Enter destination address",
                                            value: dropoff,
                                            onChange: (e)=>setDropoff(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '16px',
                                        marginBottom: '32px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '13px',
                                                        fontWeight: '700',
                                                        color: '#4b5563',
                                                        marginBottom: '8px',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1px'
                                                    },
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    style: {
                                                        width: '100%',
                                                        padding: '14px',
                                                        borderRadius: '10px',
                                                        border: '1px solid #d1d5db',
                                                        background: '#f9fafb',
                                                        color: '#111827',
                                                        fontSize: '15px'
                                                    },
                                                    value: date,
                                                    onChange: (e)=>setDate(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '13px',
                                                        fontWeight: '700',
                                                        color: '#4b5563',
                                                        marginBottom: '8px',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1px'
                                                    },
                                                    children: "Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    style: {
                                                        width: '100%',
                                                        padding: '14px',
                                                        borderRadius: '10px',
                                                        border: '1px solid #d1d5db',
                                                        background: '#f9fafb',
                                                        color: '#111827',
                                                        fontSize: '15px'
                                                    },
                                                    value: time,
                                                    onChange: (e)=>setTime(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBook,
                                    style: {
                                        width: '100%',
                                        padding: '16px',
                                        borderRadius: '12px',
                                        background: '#0ea5e9',
                                        color: '#ffffff',
                                        border: 'none',
                                        fontSize: '16px',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.background = '#0284c7',
                                    onMouseLeave: (e)=>e.currentTarget.style.background = '#0ea5e9',
                                    children: "Confirm Booking"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RideBookingModal.tsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RideBookingModal.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RideBookingModal.tsx",
            lineNumber: 226,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RideBookingModal.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_s(RideBookingModal, "6tXLA6Xni5ASCptW3x+9wBX3bsw=");
_c = RideBookingModal;
var _c;
__turbopack_context__.k.register(_c, "RideBookingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServicesGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const SERVICES = [
    {
        id: 'modal-ride',
        title: 'Rides',
        tag: 'Road',
        rating: 4.9,
        icon: '🚗',
        price: 'From ₹800',
        colorClass: 'rec-card-red',
        pos: {
            left: '17.7%',
            top: '79.5%'
        }
    },
    {
        id: 'modal-carrier',
        title: 'Carrier',
        tag: 'Logistics',
        rating: 4.8,
        icon: '🚛',
        price: 'From ₹3,500',
        colorClass: 'rec-card-orange',
        pos: {
            left: '25.6%',
            top: '79.5%'
        }
    },
    {
        id: 'modal-rental',
        title: 'Rental',
        tag: 'Self-Drive',
        rating: 4.9,
        icon: '🔑',
        price: 'From ₹1,800/day',
        colorClass: 'rec-card-blue',
        pos: {
            left: '33.4%',
            top: '79.5%'
        }
    },
    {
        id: 'modal-community',
        title: 'Community',
        tag: 'Shared',
        rating: 4.7,
        icon: '👥',
        price: 'Ride Pooling',
        colorClass: 'rec-card-purple',
        pos: {
            left: '59.9%',
            top: '79.5%'
        }
    },
    {
        id: 'modal-drivers',
        title: 'Drivers',
        tag: 'On Demand',
        rating: 4.8,
        icon: '👨‍✈️',
        price: 'From ₹1,200',
        colorClass: 'rec-card-green',
        pos: {
            left: '68.1%',
            top: '79.5%'
        }
    },
    {
        id: 'modal-parking',
        title: 'Parking',
        tag: 'Shared',
        rating: 4.6,
        icon: '🅿️',
        price: 'From ₹150',
        colorClass: 'rec-card-teal',
        pos: {
            left: '83.1%',
            top: '79.5%'
        }
    },
    {
        id: 'modal-mechanic',
        title: 'Mechanic',
        tag: 'Service',
        rating: 4.8,
        icon: '🔧',
        price: 'From ₹1,200',
        colorClass: 'rec-card-slate',
        pos: {
            left: '91.2%',
            top: '79.5%'
        }
    }
];
function ServicesGrid() {
    const openModal = (id)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('openReactModal', {
                detail: id
            }));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "recommended-section",
        style: {
            position: 'static'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    position: 'absolute',
                    top: '62%',
                    /* Positions the heading on the brown chassis rail */ left: '-8%',
                    /* Shifted slightly to the left */ width: '100%',
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: 900,
                    color: '#fff',
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                    letterSpacing: '2px',
                    zIndex: 10
                },
                children: "Book a Services"
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesGrid.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tire-grid",
                children: SERVICES.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tire-card",
                        onClick: ()=>openModal(service.id),
                        style: {
                            left: service.pos.left,
                            top: service.pos.top
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tire-center-cap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "tire-icon",
                                    children: service.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicesGrid.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "tire-title",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicesGrid.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServicesGrid.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    }, service.id, false, {
                        fileName: "[project]/src/components/ServicesGrid.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesGrid.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServicesGrid.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = ServicesGrid;
var _c;
__turbopack_context__.k.register(_c, "ServicesGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SubNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function SubNavbar() {
    const openModal = (id)=>{
        console.log('Opening modal:', id);
    // Connect to Zustand later
    };
    const switchTab = (tab)=>{
        console.log('Switching to tab:', tab);
    // Connect to Zustand later
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "web-subnavbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "subnav-links"
            }, void 0, false, {
                fileName: "[project]/src/components/SubNavbar.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "subnav-actions",
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "subnav-btn",
                        onClick: ()=>alert('SART Vendor Registration Panel loading...'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-store",
                                style: {
                                    fontSize: '14px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            " VENDOR"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "subnav-btn",
                        onClick: ()=>window.switchTab('wallet'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-wallet",
                                style: {
                                    fontSize: '14px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            " ₹15,000.00"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "subnav-btn",
                        onClick: ()=>alert('Help and Support'),
                        style: {
                            padding: '2px 5px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-headset",
                            style: {
                                fontSize: '14px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubNavbar.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "subnav-btn",
                        onClick: ()=>window.switchTab('profile'),
                        style: {
                            padding: '2px 5px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-gear",
                            style: {
                                fontSize: '14px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubNavbar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SubNavbar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SubNavbar.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = SubNavbar;
var _c;
__turbopack_context__.k.register(_c, "SubNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/CitySelectorModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CitySelectorModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const TOP_CITIES = [
    {
        name: 'Chennai',
        active: true
    },
    {
        name: 'Bangalore'
    },
    {
        name: 'Goa'
    },
    {
        name: 'Hyderabad'
    },
    {
        name: 'Kolkata'
    },
    {
        name: 'Mumbai'
    },
    {
        name: 'Pune'
    }
];
const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ALL_CITIES_DICT = {
    'A': [
        'Abohar',
        'Abu Road',
        'Achampet',
        'Acharapakkam',
        'Addanki',
        'Adilabad',
        'Adipur',
        'Adoni',
        'Adoor',
        'Agar',
        'Agartala',
        'Agra',
        'Ahmedabad',
        'Ahmedgarh',
        'Ahmednagar',
        'Aizawl',
        'Ajmer',
        'Akbarpur'
    ],
    'B': [
        'Badami',
        'Baddi',
        'Badlapur',
        'Badrinath',
        'Bagalkot',
        'Baghpat',
        'Bahadurgarh',
        'Baharampur',
        'Baheri',
        'Bahraich',
        'Bajpe',
        'Bakhtiarpur',
        'Balaghat',
        'Balasore',
        'Ballia',
        'Bally',
        'Balrampur',
        'Banda',
        'Bandikui',
        'Bandi'
    ],
    'C': [
        'Cachar',
        'Calicut',
        'Cambay',
        'Canning',
        'Canacona',
        'Canning',
        'Captainganj',
        'Caranzalem',
        'Chabua',
        'Chaibasa',
        'Chakradharpur',
        'Chalisgaon',
        'Chamba',
        'Chamoli',
        'Champawat',
        'Chamrajnagar',
        'Chandanagar',
        'Chandigarh',
        'Chandrapur'
    ],
    'D': [
        'Dabhoi',
        'Dabra',
        'Dahanu',
        'Dahod',
        'Dalhousie',
        'Dalkhola',
        'Dalli Rajhara',
        'Dalsinghsarai',
        'Daltonganj',
        'Daman',
        'Damoh',
        'Dandeli',
        'Darbhanga',
        'Darjeeling',
        'Daryapur',
        'Dasua',
        'Datia',
        'Daund',
        'Dausa'
    ],
    'E': [
        'Edappal',
        'Edar',
        'Edathala',
        'Egra',
        'Elamakkara',
        'Elanthoor',
        'Elayirampannai',
        'Eluru',
        'Emmiganur',
        'Erattupetta',
        'Eraviperoor',
        'Ernakulam',
        'Erode',
        'Errum Manzil',
        'Erumely',
        'Etah',
        'Etawah',
        'Ettumanoor'
    ],
    'F': [
        'Faizabad',
        'Faizpur',
        'Falaknuma',
        'Falakata',
        'Faridabad',
        'Faridkot',
        'Farrukhabad',
        'Fatehabad',
        'Fatehgarh Sahib',
        'Fatehpur',
        'Fazilka',
        'Firozabad',
        'Firozpur',
        'Firozpur Cantt',
        'Forbesganj'
    ],
    'G': [
        'Gachibowli',
        'Gadag',
        'Gadarwara',
        'Gadchiroli',
        'Gadhinglaj',
        'Gadwal',
        'Gagret',
        'Gajraula',
        'Gajuwaka',
        'Galiakot',
        'Ganderbal',
        'Gandhidham',
        'Gandhinagar',
        'Gangapur',
        'Gangarampur',
        'Gangavati',
        'Gangtok',
        'Gannavaram'
    ],
    'H': [
        'Habra',
        'Hagaribommanahalli',
        'Hajo',
        'Haldia',
        'Haldwani',
        'Haliyal',
        'Halol',
        'Hampi',
        'Hansi',
        'Hanumangarh',
        'Hapur',
        'Harda',
        'Hardoi',
        'Haridwar',
        'Harihar',
        'Hasanpur',
        'Hassan',
        'Hathras',
        'Havelock'
    ],
    'I': [
        'Ibrahimpatnam',
        'Ichalkaranji',
        'Idappadi',
        'Idukki',
        'Igatpuri',
        'Ikkadu',
        'Ilkal',
        'Imphal',
        'Indapur',
        'Indi',
        'Indiranagar',
        'Indore',
        'Indravati',
        'Irinjalakuda',
        'Islampur',
        'Itanagar',
        'Itarsi'
    ],
    'J': [
        'Jabalpur',
        'Jadugora',
        'Jagalur',
        'Jagatdal',
        'Jagdalpur',
        'Jagraon',
        'Jagtial',
        'Jaipur',
        'Jaisalmer',
        'Jajpur',
        'Jalalabad',
        'Jalandhar',
        'Jalaun',
        'Jalgaon',
        'Jalna',
        'Jalpaiguri',
        'Jamalpur',
        'Jamkhandi',
        'Jammu'
    ],
    'K': [
        'Kadapa',
        'Kadi',
        'Kadiri',
        'Kadirur',
        'Kagaznagar',
        'Kailashahar',
        'Kaithal',
        'Kakinada',
        'Kalady',
        'Kalamassery',
        'Kalamboli',
        'Kalimpong',
        'Kalka',
        'Kallakurichi',
        'Kalpetta',
        'Kalyan',
        'Kamakshyanagar',
        'Kamareddy',
        'Kanchipuram'
    ],
    'L': [
        'Lachung',
        'Ladwa',
        'Lahar',
        'Laharpur',
        'Lakhimpur',
        'Lakhisarai',
        'Lakshadweep',
        'Lalkuan',
        'Lalitpur',
        'Lalganj',
        'Lalgudi',
        'Latur',
        'Leh',
        'Lonavala',
        'Lucknow',
        'Ludhiana',
        'Lumding',
        'Lunawada'
    ],
    'M': [
        'Macherla',
        'Machilipatnam',
        'Madanapalle',
        'Madgaon',
        'Madhubani',
        'Madikeri',
        'Madurai',
        'Mahabaleshwar',
        'Mahabubnagar',
        'Mahad',
        'Maharajganj',
        'Mahasamund',
        'Mahbubabad',
        'Mahe',
        'Mahoba',
        'Mahuva',
        'Maihar',
        'Mainpuri',
        'Malappuram',
        'Mumbai'
    ],
    'N': [
        'Nabadwip',
        'Nabarangpur',
        'Nabha',
        'Nadia',
        'Nadiad',
        'Nagaon',
        'Nagapattinam',
        'Nagaur',
        'Nagda',
        'Nagercoil',
        'Nagpur',
        'Nahan',
        'Naharlagun',
        'Naihati',
        'Nainital',
        'Najibabad',
        'Nakodar',
        'Nalbari',
        'Nalgonda'
    ],
    'O': [
        'Obra',
        'Odalavarevu',
        'Olandai',
        'Olavakkode',
        'Old Goa',
        'Olpad',
        'Omalur',
        'Omerga',
        'Omkareshwar',
        'Ond',
        'Ongole',
        'Ooty',
        'Orai',
        'Orathanadu',
        'Osmanabad',
        'Ottapalam',
        'Ozar'
    ],
    'P': [
        'Pachmarhi',
        'Padmanabhapuram',
        'Padra',
        'Padrauna',
        'Pahalgam',
        'Pakaur',
        'Palakkad',
        'Palampur',
        'Palanpur',
        'Palghar',
        'Pali',
        'Palwal',
        'Panaji',
        'Panchkula',
        'Pandharpur',
        'Panipat',
        'Panna',
        'Panvel',
        'Pune'
    ],
    'Q': [
        'Qadian',
        'Qazigund',
        'Quilandy',
        'Quilon',
        'Quthbullapur'
    ],
    'R': [
        'Raebareli',
        'Raichur',
        'Raiganj',
        'Raigarh',
        'Raipur',
        'Rajahmundry',
        'Rajapalayam',
        'Rajgarh',
        'Rajkot',
        'Rajnandgaon',
        'Rajouri',
        'Rajpura',
        'Rajsamand',
        'Ramagundam',
        'Ramanagara',
        'Ramanathapuram',
        'Ramgarh',
        'Rampur',
        'Ranchi'
    ],
    'S': [
        'Sabroom',
        'Sadasivpet',
        'Sagar',
        'Saharanpur',
        'Saharsa',
        'Salem',
        'Samastipur',
        'Sambalpur',
        'Sambhal',
        'Sangareddy',
        'Sangli',
        'Sangrur',
        'Satara',
        'Satna',
        'Secunderabad',
        'Sehore',
        'Seoni',
        'Shahdol',
        'Shahjahanpur'
    ],
    'T': [
        'Tadepalligudem',
        'Tadipatri',
        'Tambaram',
        'Tamluk',
        'Tandur',
        'Tarn Taran',
        'Tezpur',
        'Thalassery',
        'Thane',
        'Thanjavur',
        'Theni',
        'Thiruvananthapuram',
        'Thoothukudi',
        'Thrissur',
        'Tindivanam',
        'Tinsukia',
        'Tiptur',
        'Tiruchirappalli',
        'Tirunelveli'
    ],
    'U': [
        'Udaipur',
        'Udgir',
        'Udhagamandalam',
        'Udhampur',
        'Udupi',
        'Ujjain',
        'Ulhasnagar',
        'Uluberia',
        'Umaria',
        'Una',
        'Unjha',
        'Unnao',
        'Upleta',
        'Uran',
        'Uran Islampur',
        'Uravakonda',
        'Urmar Tanda',
        'Usilampatti',
        'Utraula'
    ],
    'V': [
        'Vadakara',
        'Vadalur',
        'Vadipatti',
        'Vadnagar',
        'Vadodara',
        'Vaikom',
        'Valparai',
        'Valsad',
        'Vandavasi',
        'Vaniyambadi',
        'Vapi',
        'Varanasi',
        'Varkala',
        'Vasai',
        'Vasco Da Gama',
        'Vellore',
        'Vidisha',
        'Vijayawada',
        'Viluppuram'
    ],
    'W': [
        'Wadgaon Road',
        'Wadhwan',
        'Wadi',
        'Wai',
        'Wanaparthy',
        'Wani',
        'Wankaner',
        'Wara Seoni',
        'Warangal',
        'Wardha',
        'Warhapur',
        'Warisaliganj',
        'Warora',
        'Warud',
        'Washim',
        'Wayanad',
        'Wokha'
    ],
    'X': [
        'Xeldem',
        'Xerxes (Historical site)'
    ],
    'Y': [
        'Yadgir',
        'Yamunanagar',
        'Yanam',
        'Yavatmal',
        'Yawal',
        'Yellandu',
        'Yemmiganur',
        'Yerraguntla',
        'Yevla'
    ],
    'Z': [
        'Zahirabad',
        'Zaidpur',
        'Zamania',
        'Zira',
        'Zirakpur',
        'Zunheboto'
    ]
};
function CitySelectorModal({ isOpen, onClose }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedAlphabet, setSelectedAlphabet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('A');
    if (!isOpen) return null;
    const handleCitySelect = (cityName)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('updateLocation', {
                detail: cityName
            }));
        }
        onClose();
    };
    const visibleCities = ALL_CITIES_DICT[selectedAlphabet] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay open",
        style: {
            display: 'flex',
            zIndex: 1000
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "new-city-modal",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "new-city-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "new-city-title",
                            children: "Select Location"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "new-city-close",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-xmark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "new-city-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "new-city-search",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-magnifying-glass search-icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search city, area or locality",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "use-current-location",
                            onClick: ()=>{
                                alert('GPS Location requested');
                                onClose();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-location-crosshairs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Use Current Location"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "new-cities-grid",
                            children: TOP_CITIES.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `new-city-card ${city.active ? 'active' : ''}`,
                                    onClick: ()=>handleCitySelect(city.name),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-location-dot city-pin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "city-name",
                                            children: city.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, city.name, true, {
                                    fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "all-cities-title",
                            children: "All Cities"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alphabet-row",
                            children: ALPHABETS.map((letter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `alphabet-letter ${selectedAlphabet === letter ? 'active' : ''}`,
                                    onClick: ()=>setSelectedAlphabet(letter),
                                    children: letter
                                }, letter, false, {
                                    fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        visibleCities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alphabet-cities-container",
                            style: {
                                marginTop: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        color: '#4b5563',
                                        marginBottom: '15px'
                                    },
                                    children: selectedAlphabet
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: '15px'
                                    },
                                    children: visibleCities.map((city, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>handleCitySelect(city),
                                            style: {
                                                cursor: 'pointer',
                                                color: '#4b5563',
                                                fontSize: '14px',
                                                padding: '5px 0'
                                            },
                                            className: "alphabet-city-item",
                                            children: city
                                        }, `${city}-${index}`, false, {
                                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/CitySelectorModal.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(CitySelectorModal, "h9H1ZbXh29nIvBjzF06BAVE7pwo=");
_c = CitySelectorModal;
var _c;
__turbopack_context__.k.register(_c, "CitySelectorModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/UniversalModals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UniversalModals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function UniversalModals() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UniversalModals.useEffect": ()=>{
            setMounted(true);
        }
    }["UniversalModals.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            dangerouslySetInnerHTML: {
                __html: `

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
      `
            }
        }, void 0, false, {
            fileName: "[project]/src/components/modals/UniversalModals.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/UniversalModals.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(UniversalModals, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = UniversalModals;
var _c;
__turbopack_context__.k.register(_c, "UniversalModals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tabs/HomeTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SubNavbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServicesGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuickBookingForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuickBookingForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MapEngine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NewsFeed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OffersSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OffersSlider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function HomeTab() {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeTab.useEffect": ()=>{
            const timer = setInterval({
                "HomeTab.useEffect.timer": ()=>{
                    setCurrentSlide({
                        "HomeTab.useEffect.timer": (prev)=>prev === 0 ? 1 : 0
                    }["HomeTab.useEffect.timer"]);
                }
            }["HomeTab.useEffect.timer"], 5000);
            return ({
                "HomeTab.useEffect": ()=>clearInterval(timer)
            })["HomeTab.useEffect"];
        }
    }["HomeTab.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "tab-screen active",
        id: "tab-home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "truck-hero-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truck-subnav-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/tabs/HomeTab.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truck-cargo-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-sliding-banner",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-slider-track",
                                style: {
                                    transform: `translateX(-${currentSlide * 100}%)`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-slide-item",
                                        style: {
                                            backgroundImage: "url('/hero-left.jpg')"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-slide-item",
                                        style: {
                                            backgroundImage: "url('/hero-right.jpg')"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/tabs/HomeTab.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truck-wheels-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/tabs/HomeTab.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuickBookingForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OffersSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '7fr 5fr',
                    gap: '24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tabs/HomeTab.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(HomeTab, "/jm+XmndjAYlDCFyCnfFEXJOloU=");
_c = HomeTab;
var _c;
__turbopack_context__.k.register(_c, "HomeTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tabs/ProfileTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ProfileTab() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileTab.useEffect": ()=>{
            setMounted(true);
        }
    }["ProfileTab.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dangerouslySetInnerHTML: {
            __html: `      <!-- 5. PROFILE TAB (Premium Redesign) -->
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
    
`
        }
    }, void 0, false, {
        fileName: "[project]/src/components/tabs/ProfileTab.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(ProfileTab, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ProfileTab;
var _c;
__turbopack_context__.k.register(_c, "ProfileTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tabs/StoreTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function StoreTab() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreTab.useEffect": ()=>{
            setMounted(true);
        }
    }["StoreTab.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dangerouslySetInnerHTML: {
            __html: `      <!-- 3. PREMIUM SART STORE TAB -->
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
      
`
        }
    }, void 0, false, {
        fileName: "[project]/src/components/tabs/StoreTab.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(StoreTab, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = StoreTab;
var _c;
__turbopack_context__.k.register(_c, "StoreTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tabs/WalletTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WalletTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function WalletTab() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalletTab.useEffect": ()=>{
            setMounted(true);
        }
    }["WalletTab.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dangerouslySetInnerHTML: {
            __html: `      <!-- 4. SUPER WALLET TAB -->
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
      
`
        }
    }, void 0, false, {
        fileName: "[project]/src/components/tabs/WalletTab.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(WalletTab, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = WalletTab;
var _c;
__turbopack_context__.k.register(_c, "WalletTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/useSartStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSartStore",
    ()=>useSartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const DEFAULT_STATE = {
    wallet: {
        balance: 15000.00,
        points: 2450,
        cashback: 350.00,
        transactions: [
            {
                id: 'tx-001',
                title: 'Airport Taxi Booking',
                amount: 800.00,
                date: new Date(Date.now() - 7200000).toLocaleString(),
                isCredit: false,
                category: 'Ride'
            },
            {
                id: 'tx-002',
                title: 'Tire Air Replacement Kit',
                amount: 3500.00,
                date: new Date(Date.now() - 86400000).toLocaleString(),
                isCredit: false,
                category: 'Store'
            },
            {
                id: 'tx-003',
                title: 'Visa Top-up Loaded',
                amount: 10000.00,
                date: new Date(Date.now() - 172800000).toLocaleString(),
                isCredit: true,
                category: 'Deposit'
            }
        ]
    },
    bookings: [
        {
            id: 'bk-001',
            title: 'Tata Nexon EV Rental',
            type: 'rental',
            dateTime: new Date(Date.now() + 172800000).toLocaleString(),
            details: 'Pickup: 10:00 AM • 3 Days Duration',
            status: 'Active',
            cost: 4500.00
        },
        {
            id: 'bk-002',
            title: 'Tire Diagnostics & Balance',
            type: 'mechanic',
            dateTime: new Date(Date.now() - 259200000).toLocaleString(),
            details: 'Assigned: Rajesh Kumar • Completed',
            status: 'Completed',
            cost: 1200.00
        }
    ],
    cart: [],
    wishlist: [],
    notifications: [
        {
            id: 'notif-1',
            title: 'Gold Tier Perks Unlocked!',
            desc: 'Enjoy free airport terminal lounge access & priority dispatch.',
            read: false,
            date: 'Today'
        },
        {
            id: 'notif-2',
            title: 'EV Battery Status Optimized',
            desc: 'Tata Nexon EV charge finished cycle. Ready for commutes.',
            read: false,
            date: 'Yesterday'
        },
        {
            id: 'notif-3',
            title: 'Toll Refund Processed',
            desc: '₹120 refund credited for NH-44 Fastag anomaly.',
            read: true,
            date: '3 days ago'
        }
    ],
    location: "Indiranagar, Bengaluru",
    activeBookingId: null
};
const useSartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        ...DEFAULT_STATE,
        addTransaction: (tx)=>set((state)=>({
                    wallet: {
                        ...state.wallet,
                        transactions: [
                            tx,
                            ...state.wallet.transactions
                        ]
                    }
                })),
        updateBalance: (amount, isDeposit)=>set((state)=>{
                const newBalance = isDeposit ? state.wallet.balance + amount : state.wallet.balance - amount;
                return {
                    wallet: {
                        ...state.wallet,
                        balance: newBalance
                    }
                };
            }),
        addBooking: (booking)=>set((state)=>({
                    bookings: [
                        booking,
                        ...state.bookings
                    ],
                    activeBookingId: booking.id
                })),
        addToCart: (item)=>set((state)=>{
                const existing = state.cart.find((i)=>i.id === item.id);
                if (existing) {
                    return {
                        cart: state.cart.map((i)=>i.id === item.id ? {
                                ...i,
                                quantity: i.quantity + 1
                            } : i)
                    };
                }
                return {
                    cart: [
                        ...state.cart,
                        item
                    ]
                };
            }),
        removeFromCart: (itemId)=>set((state)=>({
                    cart: state.cart.filter((i)=>i.id !== itemId)
                })),
        clearCart: ()=>set({
                cart: []
            }),
        toggleWishlist: (itemId)=>set((state)=>{
                const exists = state.wishlist.includes(itemId);
                return {
                    wishlist: exists ? state.wishlist.filter((id)=>id !== itemId) : [
                        ...state.wishlist,
                        itemId
                    ]
                };
            }),
        setLocation: (loc)=>set({
                location: loc
            }),
        setActiveBookingId: (id)=>set({
                activeBookingId: id
            })
    }), {
    name: 'sart-storage-v2',
    partialize: (state)=>({
            wallet: state.wallet,
            bookings: state.bookings,
            cart: state.cart,
            wishlist: state.wishlist,
            location: state.location
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1h98i2r._.js.map