/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 27) {}
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "body";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initLoad = function initLoad() {
    pressESC();
    clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  var headingParallax = function headingParallax() {
    gsap.to(".heading__bg img", {
      scrollTrigger: {
        scrub: true
      },
      y: function y(i, target) {
        return -ScrollTrigger.maxScroll(window) * target.dataset.speed;
      },
      ease: "none"
    });
    gsap.to(".heading__text", {
      scrollTrigger: {
        scrub: true
      },
      y: function y(i, target) {
        return -ScrollTrigger.maxScroll(window) * target.dataset.speed;
      },
      ease: "none"
    });
  };

  var areAnimation = function areAnimation() {
    var tl = gsap.timeline({
      repeat: -1,
      yoyo: true
    });
    tl.fromTo('[are-point-1-js]', {
      opacity: 0
    }, {
      duration: 1,
      opacity: 1
    }).fromTo('[are-line-1-js]', {
      height: 0
    }, {
      duration: 1,
      height: '100%'
    }).fromTo('[are-line-2-js]', {
      width: 0
    }, {
      duration: 1,
      width: '100%'
    }).fromTo('[are-line-3-js]', {
      width: 0
    }, {
      duration: 1,
      width: '100%'
    }, '-=1').fromTo('[are-line-4-js], [are-line-5-js], [are-line-6-js], [are-line-7-js]', {
      height: 0
    }, {
      duration: 1,
      height: '100%'
    }).fromTo('[are-point-2-js], [are-point-3-js], [are-point-4-js], [are-point-5-js]', {
      opacity: 0
    }, {
      duration: 1,
      opacity: 1
    });
  };

  var aboutAnimation = function aboutAnimation() {
    var tl = gsap.timeline({
      repeat: -1,
      yoyo: true
    });
    tl.fromTo('.about__bg-wrapper span:nth-of-type(1)', {
      height: 0
    }, {
      duration: 1,
      height: '350'
    }).fromTo('.about__bg-wrapper span:nth-of-type(2)', {
      width: 0
    }, {
      duration: 1,
      width: '110'
    }).fromTo('.about__bg-wrapper span:nth-of-type(3)', {
      height: 0
    }, {
      duration: 1,
      height: '50'
    }).fromTo('.about__bg-wrapper i', {
      opacity: 0
    }, {
      duration: 1,
      opacity: 1
    }, '-=0.2');
    gsap.to(".about__bg-cover", {
      scrollTrigger: {
        scrub: true
      },
      y: function y(i, target) {
        return -ScrollTrigger.maxScroll(window) * target.dataset.speed;
      },
      ease: "none"
    });
    gsap.to(".are__bg-bottom", {
      scrollTrigger: {
        scrub: true
      },
      y: function y(i, target) {
        return -ScrollTrigger.maxScroll(window) * target.dataset.speed;
      },
      ease: "none"
    });
  };

  var footerAnimation = function footerAnimation() {
    var tl = gsap.timeline({
      repeat: -1,
      yoyo: true
    });

    function gaspHelper() {
      tl.fromTo(".footer__animation-1 span:nth-of-type(3)", {
        height: 0
      }, {
        duration: 0.5,
        height: '100'
      }).fromTo(".footer__animation-1 span:nth-of-type(2)", {
        width: 0
      }, {
        duration: 0.5,
        width: '260'
      }).fromTo(".footer__animation-1 span:nth-of-type(1)", {
        height: 0
      }, {
        duration: 0.5,
        height: '80'
      }).fromTo(".footer__animation-1 i", {
        opacity: 0
      }, {
        duration: 0.5,
        opacity: 1
      }, '-=0.2').fromTo(".footer__animation-1 img", {
        opacity: 1,
        scale: 0.5
      }, {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        ease: "elastic.out(1, 0.2)"
      }).fromTo(".footer__animation-1 span:nth-of-type(4)", {
        height: 0
      }, {
        duration: 0.5,
        height: Number(document.querySelector('.footer__block-wrapper-1').offsetHeight - document.querySelector('.footer__animation-1 .footer__animation-box').offsetHeight) + 'px'
      }).fromTo(".footer__animation-2 i", {
        opacity: 0
      }, {
        duration: 0.5,
        opacity: 1
      }, '-=0.2').fromTo(".footer__animation-2 img", {
        opacity: 1,
        scale: 0.5
      }, {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        ease: "elastic.out(1, 0.2)"
      }).fromTo(".footer__animation-2 span", {
        height: 0
      }, {
        duration: 0.5,
        height: Number(document.querySelector('.footer__block-wrapper-2').offsetHeight - document.querySelector('.footer__animation-1 .footer__animation-box').offsetHeight) + 'px'
      }).fromTo(".footer__animation-3 i", {
        opacity: 0
      }, {
        duration: 0.5,
        opacity: 1
      }, '-=0.2').fromTo(".footer__animation-3 img", {
        opacity: 1,
        scale: 0.5
      }, {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        ease: "elastic.out(1, 0.2)"
      });
    }

    gaspHelper();
    window.addEventListener('resize', function (ev) {
      tl.clear();
      gaspHelper();
      tl.restart();
    }, false);
  };

  headingParallax();
  areAnimation();
  aboutAnimation();
  footerAnimation();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);
}();
/******/ })()
;