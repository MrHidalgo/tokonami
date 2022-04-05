import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  const footerAnimation = () => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true
    });

    function gaspHelper() {
      tl
        .fromTo(".footer__animation-1 span:nth-of-type(3)",{height: 0}, {duration: 0.5, height: '100'})
        .fromTo(".footer__animation-1 span:nth-of-type(2)",{width: 0}, {duration: 0.5, width: '260'})
        .fromTo(".footer__animation-1 span:nth-of-type(1)",{height: 0}, {duration: 0.5, height: '80'})
        .fromTo(".footer__animation-1 i",{opacity: 0}, {duration: 0.5, opacity: 1}, '-=0.2')
        .fromTo(".footer__animation-1 img",{opacity:1, scale: 0.5}, {duration: 1.5, opacity: 1, scale: 1, ease: "elastic.out(1, 0.2)"})
        .fromTo(".footer__animation-1 span:nth-of-type(4)",{height: 0}, {duration: 0.5, height: Number((document.querySelector('.footer__block-wrapper-1').offsetHeight - document.querySelector('.footer__animation-1 .footer__animation-box').offsetHeight)) + 'px'})
        .fromTo(".footer__animation-2 i",{opacity: 0}, {duration: 0.5, opacity: 1}, '-=0.2')
        .fromTo(".footer__animation-2 img",{opacity:1, scale: 0.5}, {duration: 1.5, opacity: 1, scale: 1, ease: "elastic.out(1, 0.2)"})
        .fromTo(".footer__animation-2 span",{height: 0}, {duration: 0.5, height: Number((document.querySelector('.footer__block-wrapper-2').offsetHeight - document.querySelector('.footer__animation-1 .footer__animation-box').offsetHeight)) + 'px'})
        .fromTo(".footer__animation-3 i",{opacity: 0}, {duration: 0.5, opacity: 1}, '-=0.2')
        .fromTo(".footer__animation-3 img",{opacity:1, scale: 0.5}, {duration: 1.5, opacity: 1, scale: 1, ease: "elastic.out(1, 0.2)"})
      ;
    }

    gaspHelper();

    window.addEventListener('resize', (ev) => {
      tl.clear();
      gaspHelper();
      tl.restart();
    }, false);
  };

  footerAnimation();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
