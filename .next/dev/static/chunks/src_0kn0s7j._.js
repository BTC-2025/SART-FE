(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var e = new Error("Could not parse module '[project]/src/app/page.tsx'\n\nExpected '</', got '<eof>'");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SART"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-badge",
                                children: "UNIVERSAL"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 14,
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
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                id: "nav-location-txt",
                                children: "Chennai"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-chevron-down",
                                style: {
                                    fontSize: '8px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 13,
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
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 32,
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
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-link",
                        id: "nav-btn-bookings",
                        onClick: ()=>window.openModal('modal-bookings-registry'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Booking"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ctrl-btn",
                        onClick: ()=>window.openModal('modal-search'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-magnifying-glass"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ctrl-btn",
                        onClick: ()=>window.openModal('modal-liked'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-heart"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ctrl-btn",
                        onClick: ()=>window.openModal('modal-bookings-registry'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-bag-shopping"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
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
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Alex Carter"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-chevron-down",
                                style: {
                                    fontSize: '9px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 56,
                        columnNumber: 9
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
                                    display: 'inline-block',
                                    marginBottom: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            background: '#0b57d0',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '36px',
                                            fontWeight: 500,
                                            margin: '0 auto'
                                        },
                                        children: "V"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-camera"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 66,
                                            columnNumber: 286
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 64,
                                columnNumber: 13
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
                                lineNumber: 68,
                                columnNumber: 13
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
                                lineNumber: 69,
                                columnNumber: 13
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
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    " Manage your account"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 71,
                                columnNumber: 13
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
                                                lineNumber: 76,
                                                columnNumber: 331
                                            }, this),
                                            " Light"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
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
                                                lineNumber: 77,
                                                columnNumber: 333
                                            }, this),
                                            " Dark"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    borderTop: '1px solid #e5e7eb',
                                    margin: '0 -24px 10px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 80,
                                columnNumber: 13
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
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    " Add another account"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 82,
                                columnNumber: 13
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
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    " Sign out of this account"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Navbar, "4z5TKJhFoibvpFsKh26/4srDTMc=", false, function() {
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
const VEHICLES = [
    {
        id: 'auto',
        name: 'Auto',
        icon: 'fa-solid fa-motorcycle',
        emoji: '🛺'
    },
    {
        id: 'mini',
        name: 'Mini (Prime Sedan)',
        icon: 'fa-solid fa-car',
        emoji: '🚕'
    },
    {
        id: 'suv',
        name: 'Prime SUV',
        icon: 'fa-solid fa-car-side',
        emoji: '🚙'
    },
    {
        id: 'bus',
        name: 'Bus',
        icon: 'fa-solid fa-bus',
        emoji: '🚌'
    },
    {
        id: 'truck',
        name: 'Truck',
        icon: 'fa-solid fa-truck',
        emoji: '🚚'
    },
    {
        id: 'towing',
        name: 'Towing & Recovery',
        icon: 'fa-solid fa-truck-pickup',
        emoji: '🚜'
    },
    {
        id: 'unreserved',
        name: 'Unreserved',
        icon: 'fa-solid fa-ticket',
        emoji: '🎟️'
    }
];
function RideBookingModal({ isOpen, onClose }) {
    _s();
    const [selectedVehicle, setSelectedVehicle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('mini');
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay open",
        style: {
            display: 'flex',
            zIndex: 1000
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            style: {
                maxWidth: '900px',
                width: '90%',
                padding: '30px',
                background: '#ffffff',
                color: '#111827'
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                color: '#111827'
                            },
                            children: "Book a Ride"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RideBookingModal.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "close-btn",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-xmark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RideBookingModal.tsx",
                                lineNumber: 30,
                                columnNumber: 59
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RideBookingModal.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RideBookingModal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vehicle-selector-container",
                            children: VEHICLES.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `vehicle-item ${selectedVehicle === v.id ? 'active' : ''}`,
                                    onClick: ()=>setSelectedVehicle(v.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vehicle-icon-wrapper",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '24px'
                                                },
                                                children: v.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RideBookingModal.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "vehicle-name",
                                            children: v.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, v.id, true, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/RideBookingModal.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "booking-form-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                color: '#4b5563'
                                            },
                                            children: "Pickup Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "input-with-icon",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-location-dot",
                                                    style: {
                                                        color: '#10b981'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Enter pickup location",
                                                    defaultValue: "Current Location",
                                                    style: {
                                                        background: '#f9fafb',
                                                        color: '#111827',
                                                        border: '1px solid #d1d5db'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                color: '#4b5563'
                                            },
                                            children: "Drop Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "input-with-icon",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-location-dot",
                                                    style: {
                                                        color: '#ef4444'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Enter destination",
                                                    style: {
                                                        background: '#f9fafb',
                                                        color: '#111827',
                                                        border: '1px solid #d1d5db'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            style: {
                                                flex: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        color: '#4b5563'
                                                    },
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "input-with-icon",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-solid fa-calendar-day",
                                                            style: {
                                                                color: '#6b7280'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            style: {
                                                                background: '#f9fafb',
                                                                color: '#111827',
                                                                border: '1px solid #d1d5db'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            style: {
                                                flex: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        color: '#4b5563'
                                                    },
                                                    children: "Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "input-with-icon",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-solid fa-clock",
                                                            style: {
                                                                color: '#6b7280'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "time",
                                                            style: {
                                                                background: '#f9fafb',
                                                                color: '#111827',
                                                                border: '1px solid #d1d5db'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "search-rides-btn",
                                    children: [
                                        "Search Rides ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-arrow-right"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RideBookingModal.tsx",
                                            lineNumber: 86,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RideBookingModal.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RideBookingModal.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RideBookingModal.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RideBookingModal.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RideBookingModal.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(RideBookingModal, "pZZt5LfqMP9z/MFBU/+FeeOI228=");
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
        colorClass: 'rec-card-red'
    },
    {
        id: 'modal-carrier',
        title: 'Carrier',
        tag: 'Logistics',
        rating: 4.8,
        icon: '🚛',
        price: 'From ₹3,500',
        colorClass: 'rec-card-orange'
    },
    {
        id: 'modal-rental',
        title: 'Rental',
        tag: 'Self-Drive',
        rating: 4.9,
        icon: '🔑',
        price: 'From ₹1,800/day',
        colorClass: 'rec-card-blue'
    },
    {
        id: 'modal-community',
        title: 'Community',
        tag: 'Shared',
        rating: 4.7,
        icon: '👥',
        price: 'Ride Pooling',
        colorClass: 'rec-card-purple'
    },
    {
        id: 'modal-drivers',
        title: 'Drivers On Demand',
        tag: 'On Demand',
        rating: 4.8,
        icon: '👨‍✈️',
        price: 'From ₹1,200',
        colorClass: 'rec-card-green'
    },
    {
        id: 'modal-parking',
        title: 'Shared Parking',
        tag: 'Parking',
        rating: 4.6,
        icon: '🅿️',
        price: 'From ₹150',
        colorClass: 'rec-card-teal'
    },
    {
        id: 'modal-air',
        title: 'Air Travel',
        tag: 'Fly',
        rating: 4.9,
        icon: '✈️',
        price: 'From ₹4,500',
        colorClass: 'rec-card-pink'
    },
    {
        id: 'modal-train',
        title: 'Train',
        tag: 'Rail',
        rating: 4.9,
        icon: '🚆',
        price: 'From ₹850',
        colorClass: 'rec-card-indigo'
    },
    {
        id: 'modal-sea',
        title: 'Sea Voyage',
        tag: 'Sail',
        rating: 4.7,
        icon: '⛴️',
        price: 'From ₹600',
        colorClass: 'rec-card-cyan'
    },
    {
        id: 'modal-mechanic',
        title: 'Mechanic',
        tag: 'Service',
        rating: 4.8,
        icon: '🔧',
        price: 'From ₹1,200',
        colorClass: 'rec-card-slate'
    }
];
function ServicesGrid() {
    const openModal = (id)=>{
        if (id === 'modal-ride') {
            window.dispatchEvent(new CustomEvent('open-modal', {
                detail: id
            }));
        } else if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.openModal) {
            window.openModal(id);
        } else {
            console.log('Open modal fallback:', id);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "recommended-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Book a Service"
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesGrid.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "All SART transportation services at your fingertips"
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesGrid.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "recommended-grid",
                style: {
                    gridTemplateColumns: 'repeat(5, 1fr)'
                },
                children: SERVICES.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `recommended-card ${service.colorClass}`,
                        onClick: ()=>openModal(service.id),
                        style: service.id === 'modal-air' ? {
                            '--glow-pink': '#f59e0b'
                        } : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rec-card-top-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rec-card-tag",
                                        children: service.tag
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServicesGrid.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rec-card-rating",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-star"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServicesGrid.tsx",
                                                lineNumber: 43,
                                                columnNumber: 49
                                            }, this),
                                            " ",
                                            service.rating
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServicesGrid.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServicesGrid.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rec-card-body",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rec-card-illustration",
                                    children: service.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicesGrid.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServicesGrid.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rec-card-footer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "rec-card-title",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServicesGrid.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rec-card-price",
                                        children: service.price
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
                        ]
                    }, service.id, true, {
                        fileName: "[project]/src/components/ServicesGrid.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesGrid.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServicesGrid.tsx",
        lineNumber: 30,
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
                className: "subnav-links",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "subnav-link",
                        onClick: ()=>openModal('modal-air'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-plane"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            " Travel"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "subnav-link",
                        onClick: ()=>openModal('modal-rental'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-hotel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            " Stay & Accommodation"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "subnav-link",
                        onClick: ()=>switchTab('store'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-film"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            " Entertainment"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "subnav-link",
                        onClick: ()=>openModal('modal-parking'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-football"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            " Sports"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "subnav-link",
                        onClick: ()=>openModal('modal-mechanic'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-award"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            " Lifestyle Services"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SubNavbar.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "subnav-actions",
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "subnav-btn btn-vendor",
                        onClick: ()=>alert('SART Vendor Registration Panel loading...'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-store"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            " VENDOR"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "subnav-btn btn-wallet",
                        onClick: ()=>window.switchTab('wallet'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-wallet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            " ₹15,000.00"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ctrl-btn",
                        onClick: ()=>alert('Help and Support'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-headset"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubNavbar.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ctrl-btn",
                        onClick: ()=>window.switchTab('profile'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-gear"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubNavbar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SubNavbar.tsx",
                lineNumber: 35,
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
    <div class="modal-sheet centered-modal">
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
      <div class="form-group">
        <label>Select Vehicle Tier</label>
        <div class="option-select-grid">
          <div class="option-select-card selected" onclick="selectBookingOption(this, 'ride-tier', '800')" data-val="Economy Sedan">
            <i class="fa-solid fa-car-side"></i>
            <span class="option-title">Economy Sedan</span>
            <span class="option-desc">Affordable daily rides</span>
            <span class="option-price">Γé╣800.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'ride-tier', '1500')" data-val="Premium SUV">
            <i class="fa-solid fa-truck-pickup"></i>
            <span class="option-title">Premium SUV</span>
            <span class="option-desc">Luxury and style</span>
            <span class="option-price">Γé╣1,500.00</span>
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
            <span class="option-price">Γé╣3,500.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'carrier-tier', '7500')" data-val="Heavy Duty Truck">
            <i class="fa-solid fa-truck-moving"></i>
            <span class="option-title">Heavy Truck</span>
            <span class="option-desc">Up to 5 tonnes cargo</span>
            <span class="option-price">Γé╣7,500.00</span>
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
            <span class="option-desc">Electric SUV ΓÇó 3 Days</span>
            <span class="option-price">Γé╣4,500.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'rental-tier', '1800')" data-val="RE Himalayan">
            <i class="fa-solid fa-motorcycle"></i>
            <span class="option-title">Himalayan 450</span>
            <span class="option-desc">Adventure Bike ΓÇó 1 Day</span>
            <span class="option-price">Γé╣1,800.00</span>
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
            <span class="option-price">Γé╣1,200.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'driver-tier', '2200')" data-val="Full Day Driver">
            <i class="fa-solid fa-business-time"></i>
            <span class="option-title">Full Day</span>
            <span class="option-desc">Up to 10 hours shift</span>
            <span class="option-price">Γé╣2,200.00</span>
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
            <span class="option-desc">Open roof space ΓÇó 3 hrs</span>
            <span class="option-price">Γé╣150.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'parking-tier', '350')" data-val="Premium EV Slot">
            <i class="fa-solid fa-charging-station"></i>
            <span class="option-title">EV Charged Slot</span>
            <span class="option-desc">Covered + EV Charger</span>
            <span class="option-price">Γé╣350.00</span>
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
            <span class="option-price">Γé╣1,200.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'mechanic-tier', '4500')" data-val="Full Powertrain Diagnostic">
            <i class="fa-solid fa-gears"></i>
            <span class="option-title">Full EV Overhaul</span>
            <span class="option-desc">Powertrain and cell test</span>
            <span class="option-price">Γé╣4,500.00</span>
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
            <span class="option-price">Γé╣600.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'sea-tier', '12500')" data-val="Sapphire Ocean Yacht">
            <i class="fa-solid fa-anchor"></i>
            <span class="option-title">Luxury Yacht Charter</span>
            <span class="option-desc">Private cruise charter</span>
            <span class="option-price">Γé╣12,500.00</span>
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
            <span class="option-price">Γé╣4,500.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'air-tier', '14000')" data-val="Helicopter Charter">
            <i class="fa-solid fa-helicopter"></i>
            <span class="option-title">Heli Apex Charter</span>
            <span class="option-desc">Point-to-point chopper transit</span>
            <span class="option-price">Γé╣14,000.00</span>
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
            <span class="option-price">Γé╣850.00</span>
          </div>
          <div class="option-select-card" onclick="selectBookingOption(this, 'train-tier', '1650')" data-val="Rajdhani First Class AC">
            <i class="fa-solid fa-train-tram"></i>
            <span class="option-title">Rajdhani Express</span>
            <span class="option-desc">First Class AC Sleeper</span>
            <span class="option-price">Γé╣1,650.00</span>
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
          <span class="wallet-balance-val" id="wallet-balance-txt">Γé╣15,000.00</span>
        </div>
        <div class="wallet-perks-row">
          <div class="wallet-perk">
            <span class="wallet-perk-title">Reward Points</span>
            <span class="wallet-perk-val" id="wallet-points-txt">2,450 pts</span>
          </div>
          <div class="wallet-perk">
            <span class="wallet-perk-title">Claimable Cashback</span>
            <span class="wallet-perk-val" id="wallet-cashback-txt">Γé╣350.00</span>
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
            <option value="Visa (last 4: 4242)">Visa ΓÇóΓÇóΓÇóΓÇó 4242</option>
            <option value="Mastercard (last 4: 8839)">Mastercard ΓÇóΓÇóΓÇóΓÇó 8839</option>
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
              <div style="font-size:10px; color:var(--text-secondary);">3 seats vacant ΓÇó Leaves at 05:30 PM</div>
            </div>
            <button class="action-btn" style="padding:6px 12px; font-size:10px; width:auto;" onclick="alert('Joined ride-share group. Details sent!')">Join Pool</button>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; border:1px solid var(--dark-border); padding:10px; border-radius:12px; background:rgba(255,255,255,0.01);">
            <div>
              <div style="font-size:12px; font-weight:bold;">Koramangala to Kempegowda Airport</div>
              <div style="font-size:10px; color:var(--text-secondary);">1 seat vacant ΓÇó Leaves at 08:00 AM</div>
            </div>
            <button class="action-btn" style="padding:6px 12px; font-size:10px; width:auto;" onclick="alert('Joined ride-share group. Details sent!')">Join Pool</button>
          </div>
        </div>
        
        <h4 style="font-size: 14px; margin-top: 16px; margin-bottom: 6px;">Community Bulletins & Chat</h4>
        <div style="border: 1px solid var(--dark-border); border-radius: 12px; padding: 12px; background: rgba(0,0,0,0.2); font-size: 11.5px; line-height: 1.4; color: var(--text-secondary);">
          <p>≡ƒÆ¼ <strong style="color:var(--text-primary);">Rohan K:</strong> High traffic noted near Tin Factory flyover. Suggest taking outer ring road.</p>
          <p style="margin-top: 6px;">≡ƒÆ¼ <strong style="color:var(--text-primary);">Sneha M:</strong> EV fast charger at Indiranagar Metro station is now vacant!</p>
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
            <div style="font-size:10.5px; color:var(--text-secondary); margin-top:2px;">Route: Indiranagar 100 Feet Rd ΓåÆ Whitefield IT Park</div>
          </div>
          <i class="fa-solid fa-chevron-right" style="font-size:10px; color: var(--secondary);"></i>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border: 1px solid var(--dark-border); padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.01); cursor:pointer;" onclick="triggerLikedRoute('Office', 'Airport')">
          <div>
            <div style="font-size:13px; font-weight:bold; color:var(--text-primary);"><i class="fa-solid fa-plane-up" style="color:var(--warning); margin-right:6px;"></i> Tech Office to Kempegowda Airport</div>
            <div style="font-size:10.5px; color:var(--text-secondary); margin-top:2px;">Route: Whitefield ΓåÆ Outer Ring Road ΓåÆ NH-44 Tollroad</div>
          </div>
          <i class="fa-solid fa-chevron-right" style="font-size:10px; color:var(--text-secondary);"></i>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border: 1px solid var(--dark-border); padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.01); cursor:pointer;" onclick="triggerLikedRoute('Home', 'Weekend Villa')">
          <div>
            <div style="font-size:13px; font-weight:bold; color:var(--text-primary);"><i class="fa-solid fa-anchor" style="color:var(--success); margin-right:6px;"></i> Indiranagar to Mandwa Yacht Marina</div>
            <div style="font-size:10.5px; color:var(--text-secondary); margin-top:2px;">Route: Bangalore Highway ΓåÆ Mumbai Coastal NH-66 ΓåÆ Jetty</div>
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServicesGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MapEngine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NewsFeed.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function HomeTab() {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Auto-advance carousel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeTab.useEffect": ()=>{
            const timer = setInterval({
                "HomeTab.useEffect.timer": ()=>{
                    setCurrentSlide({
                        "HomeTab.useEffect.timer": (prev)=>(prev + 1) % 3
                    }["HomeTab.useEffect.timer"]);
                }
            }["HomeTab.useEffect.timer"], 5000);
            return ({
                "HomeTab.useEffect": ()=>clearInterval(timer)
            })["HomeTab.useEffect"];
        }
    }["HomeTab.useEffect"], []);
    const openGlobalModal = (id)=>{
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.openModal) {
            window.openModal(id);
        }
    };
    const openReactModal = (id)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('openReactModal', {
                detail: id
            }));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "tab-screen active",
        id: "tab-home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-top-bar",
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "home-search-bar",
                    onClick: ()=>openGlobalModal('modal-search'),
                    style: {
                        maxWidth: '700px',
                        width: '100%'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-magnifying-glass"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tabs/HomeTab.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            id: "home-portal-search-placeholder",
                            placeholder: "Search rides, flights, trains, carriers, diagnostics...",
                            readOnly: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/tabs/HomeTab.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "search-btn",
                            children: "Search Portal"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tabs/HomeTab.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tabs/HomeTab.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shortcuts-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill",
                        onClick: ()=>openReactModal('modal-ride'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-car-side",
                                style: {
                                    color: '#ef4444'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Rides"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill",
                        onClick: ()=>openGlobalModal('modal-carrier'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-truck-moving",
                                style: {
                                    color: '#f97316'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Carrier"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill",
                        onClick: ()=>openGlobalModal('modal-rental'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-key",
                                style: {
                                    color: '#3b82f6'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Rental"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill",
                        onClick: ()=>openGlobalModal('modal-community'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-users",
                                style: {
                                    color: '#a855f7'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Community"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill",
                        onClick: ()=>openGlobalModal('modal-drivers'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-user-tie",
                                style: {
                                    color: '#10b981'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Drivers On Demand"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill",
                        onClick: ()=>openGlobalModal('modal-air'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-plane-departure",
                                style: {
                                    color: '#06b6d4'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Air Travel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill",
                        onClick: ()=>openGlobalModal('modal-train'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-train",
                                style: {
                                    color: '#6366f1'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Train"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill",
                        onClick: ()=>openGlobalModal('modal-parking'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-square-parking",
                                style: {
                                    color: '#14b8a6'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Shared Parking"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill",
                        onClick: ()=>openGlobalModal('modal-find-vehicle'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-location-crosshairs",
                                style: {
                                    color: '#ec4899'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Find My Vehicle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill",
                        onClick: ()=>openGlobalModal('modal-bookings-registry'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-receipt",
                                style: {
                                    color: '#f5c518'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "My Bookings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shortcut-pill shortcut-add",
                        onClick: ()=>alert('Configure custom shortcut widget'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-plus"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Shortcut +"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-carousel-container",
                style: {
                    marginBottom: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `carousel-slide ${currentSlide === 0 ? 'active' : ''}`,
                        id: "slide-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "slide-bg",
                                style: {
                                    backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80')"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "slide-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "slide-tag",
                                        style: {
                                            background: 'rgba(239, 68, 68, 0.15)',
                                            color: '#ef4444',
                                            borderColor: 'rgba(239,68,68,0.3)'
                                        },
                                        children: "City Rides"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "slide-title",
                                        children: "Book a Ride Instantly"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "slide-desc",
                                        children: "Get a cab, share a ride or book a premium vehicle — wherever you are, in seconds."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "slide-btn",
                                        onClick: ()=>openReactModal('modal-ride'),
                                        children: "BOOK RIDE NOW"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `carousel-slide ${currentSlide === 1 ? 'active' : ''}`,
                        id: "slide-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "slide-bg",
                                style: {
                                    backgroundImage: "url('https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80')"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "slide-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "slide-tag",
                                        style: {
                                            background: 'rgba(59, 130, 246, 0.15)',
                                            color: '#3b82f6',
                                            borderColor: 'rgba(59,130,246,0.3)'
                                        },
                                        children: "Self Drive"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "slide-title",
                                        children: "Tata Nexon EV Rental"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "slide-desc",
                                        children: "Sleek, eco-friendly electric SUVs. 100% charged and ready for daily commutes."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "slide-btn",
                                        onClick: ()=>openGlobalModal('modal-rental'),
                                        children: "RENT EV NOW"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `carousel-slide ${currentSlide === 2 ? 'active' : ''}`,
                        id: "slide-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "slide-bg",
                                style: {
                                    backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80')"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "slide-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "slide-tag",
                                        style: {
                                            background: 'rgba(245, 158, 11, 0.15)',
                                            color: '#f59e0b',
                                            borderColor: 'rgba(245,158,11,0.3)'
                                        },
                                        children: "Carrier & Logistics"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "slide-title",
                                        children: "Heavy Carrier On Demand"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "slide-desc",
                                        children: "Move goods, parcels and industrial cargo with full-track visibility across India."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "slide-btn",
                                        onClick: ()=>openGlobalModal('modal-carrier'),
                                        children: "BOOK CARRIER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "carousel-dots",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `carousel-dot ${currentSlide === 0 ? 'active' : ''}`,
                                onClick: ()=>setCurrentSlide(0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `carousel-dot ${currentSlide === 1 ? 'active' : ''}`,
                                onClick: ()=>setCurrentSlide(1)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `carousel-dot ${currentSlide === 2 ? 'active' : ''}`,
                                onClick: ()=>setCurrentSlide(2)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tabs/HomeTab.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/tabs/HomeTab.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tabs/HomeTab.tsx",
        lineNumber: 33,
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

//# sourceMappingURL=src_0kn0s7j._.js.map