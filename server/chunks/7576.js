"use strict";
exports.id = 7576;
exports.ids = [7576];
exports.modules = {

/***/ 259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_us)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/about-us1.json
const about_us1_namespaceObject = JSON.parse('{"bH":"About Us","TN":"Our Comapny","kQ":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.","BH":"/img/feat.jpg","hm":[{"id":1,"number":"3","letter":"K","stautsName":"Happy Clients"},{"id":2,"number":"14","letter":"K","stautsName":"Success Projects"}]}');
;// CONCATENATED MODULE: ./src/components/About-us/about-us.jsx

/* eslint-disable @next/next/no-img-element */ 

const AboutUs = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "about-us section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 valign md-mb50",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "fw-100 text-u ls10 mb-10",
                                    children: about_us1_namespaceObject.bH
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "fw-600 text-u ls1 mb-30 color-font",
                                    children: about_us1_namespaceObject.TN
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: about_us1_namespaceObject.kQ
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#0",
                                    className: "butn bord curve mt-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Read More"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-7 img",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: about_us1_namespaceObject.BH,
                                alt: ""
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "stauts",
                                children: about_us1_namespaceObject.hm.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    item.number,
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: item.letter
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: item.stautsName
                                            })
                                        ]
                                    }, item.id)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const about_us = (AboutUs);


/***/ }),

/***/ 7178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_works_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2984);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




// import Swiper core and required modules





swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation
]);
const Works = ()=>{
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "work-carousel metro position-re",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-12 no-padding",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "swiper-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                className: "swiper-wrapper",
                                slidesPerView: 2,
                                centeredSlides: true,
                                autoPlay: true,
                                loop: true,
                                navigation: {
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current
                                },
                                onBeforeInit: (swiper)=>{
                                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                                    swiper.params.navigation.nextEl = navigationNextRef.current;
                                },
                                onSwiper: (swiper)=>{
                                    setTimeout(()=>{
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                        swiper.navigation.destroy();
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    });
                                },
                                autoplay: {
                                    delay: 2500,
                                    disableOnInteraction: false
                                },
                                speed: 1000,
                                breakpoints: {
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 0
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 0
                                    },
                                    767: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                        centeredSlides: false
                                    },
                                    991: {
                                        slidesPerView: 2
                                    }
                                },
                                children: _data_sections_works_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                        className: "swiper-slide",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "content wow noraidus fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item-img bg-img wow imago",
                                                    style: {
                                                        backgroundImage: `url(${slide.image})`
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "color-font",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#0",
                                                                children: slide.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                href: "/project-details2/project-details2-dark",
                                                                children: slide.secTex
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, slide.id)
                                )
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: navigationNextRef,
                                className: "swiper-button-next swiper-nav-ctrl simp-next cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "simple-btn right",
                                    children: "Next"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: navigationPrevRef,
                                className: "swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "simple-btn",
                                    children: "Prev"
                                })
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works);

});

/***/ }),

/***/ 6272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable @next/next/no-img-element */ 
const Blogs1 = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "blog section-padding sub-bg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-8 col-md-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sec-head text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "wow fadeIn",
                                    "data-wow-delay": ".5s",
                                    children: "RECENT ARTICLES"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "wow color-font",
                                    children: "From our blogs."
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item md-mb50 wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/blog/1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#0",
                                                            className: "date",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        children: "06"
                                                                    }),
                                                                    " August"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "/"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#0",
                                                            className: "tag",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "WordPress"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#0",
                                                        children: "How to use solid color combine with simple furnitures."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "btn-more",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#0",
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item md-mb50 wow fadeInUp",
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/blog/2.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#0",
                                                            className: "date",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        children: "06"
                                                                    }),
                                                                    " August"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "/"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#0",
                                                            className: "tag",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "WordPress"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#0",
                                                        children: "How to use solid color combine with simple furnitures."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "btn-more",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#0",
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs1);


/***/ }),

/***/ 2984:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"art & illustration","secTex":"Innovation and Crafts","image":"/img/portfolio/metro/01.jpg","slug":"/project-details2/project-details2-dark"},{"id":2,"title":"art & illustration","secTex":"Inspiring new space","image":"/img/portfolio/metro/02.jpg","slug":"/project-details2/project-details2-dark"},{"id":3,"title":"art & illustration","secTex":"Natural plus modern","image":"/img/portfolio/metro/03.jpg","slug":"/project-details2/project-details2-dark"},{"id":4,"title":"art & illustration","secTex":"Innovation and Crafts","image":"/img/portfolio/metro/04.jpg","slug":"/project-details2/project-details2-dark"},{"id":5,"title":"art & illustration","secTex":"Natural plus modern","image":"/img/portfolio/metro/05.jpg","slug":"/project-details2/project-details2-dark"}]');

/***/ })

};
;