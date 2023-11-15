/*
 * Simple Block
 * Show a video referenced by a link
 * https://www.hlx.live/developer/block-collection/video
 */

export default async function decorate(block) {
    const defaultHTML = block.innerHTML;
    const swWrapper = block.closest('div');
    block.classList.add('swiper-wrapper');
    const slides = block.querySelector('div');
    [...block.children].forEach( (slide) => {
        slide.classList.add('swiper-slide');
    });
    // block.innerHTML = `
    // <h1> Swiper Block Ver0.1 </h1>
    // <div class="swiper-container">
    // ${defaultHTML}
    // </div>
    // `;

    let head = document.getElementsByTagName('head').item(0);
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/swiper@8/swiper-bundle.min.css';
    link.type = 'text/css';
    head.appendChild(link);

    let link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://unpkg.com/swiper@8/swiper.min.css';
    head.appendChild(link2);

    let script = document.createElement('script');
    script.type="text/javascript";
    script.src="https://unpkg.com/swiper@8/swiper-bundle.min.js";
    head.appendChild(script);



    let script3 = document.createElement('script');
    script3.innerHTML = `
        setTimeout( function() {
            const mySwiper = new Swiper('.slider-wrapper',{
                loop: true
            });
        },1000 );
    `;
    document.body.appendChild(script3);

    
}