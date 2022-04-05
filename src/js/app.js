import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  const areAnimation = () => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true
    });

    tl
      .fromTo('[are-point-1-js]', {opacity: 0}, {duration: 1, opacity: 1})
      .fromTo('[are-line-1-js]', {height: 0}, {duration: 1, height: '100%'})
      .fromTo('[are-line-2-js]', {width: 0}, {duration: 1, width: '100%'})
      .fromTo('[are-line-3-js]', {width: 0}, {duration: 1, width: '100%'}, '-=1')
      .fromTo('[are-line-4-js], [are-line-5-js], [are-line-6-js], [are-line-7-js]', {height: 0}, {duration: 1, height: '100%'})
      .fromTo('[are-point-2-js], [are-point-3-js], [are-point-4-js], [are-point-5-js]', {opacity: 0}, {duration: 1, opacity: 1})
    ;
  };

  const aboutAnimation = () => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true
    });

    tl
      .fromTo('.about__bg-wrapper span:nth-of-type(1)', {height: 0}, {duration: 1, height: '350'})
      .fromTo('.about__bg-wrapper span:nth-of-type(2)', {width: 0}, {duration: 1, width: '110'})
      .fromTo('.about__bg-wrapper span:nth-of-type(3)', {height: 0}, {duration: 1, height: '50'})
      .fromTo('.about__bg-wrapper i', {opacity: 0}, {duration: 1, opacity: 1}, '-=0.2')
    ;

    gsap.to(".about__bg-cover", {
      scrollTrigger: {
        scrub: true
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    });

    gsap.to(".are__bg-bottom", {
      scrollTrigger: {
        scrub: true
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    });
  };

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


  // areAnimation();
  aboutAnimation();
  footerAnimation();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
