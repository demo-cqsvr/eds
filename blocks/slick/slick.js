/*
 * Simple Block
 * Show a video referenced by a link
 * https://www.hlx.live/developer/block-collection/video
 */

export default async function decorate(block) {
  const defaultHTML = block.innerHTML;
  block.innerHTML = `
    <h1> Slick Block 2</h1>
    <div id="slick-items">
    ${defaultHTML}
    </div>
    `;

  const head = document.getElementsByTagName('head').item(0);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css';
  link.type = 'text/css';
  head.appendChild(link);

  const link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css';
  head.appendChild(link2);

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
  head.appendChild(script);

  const script2 = document.createElement('script');
  script2.type = 'text/javascript';
  script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js';
  head.appendChild(script2);

  const script3 = document.createElement('script');
  script3.innerHTML = `
        setTimeout( function() {
            $('#slick-items').slick({
                slidesToShow: 1,
                slideToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5,
                arrows: true
            })
        },1000 );
    `;
  document.body.appendChild(script3);
}
