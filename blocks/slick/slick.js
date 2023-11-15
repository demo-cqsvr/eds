/*
 * Simple Block
 * Show a video referenced by a link
 * https://www.hlx.live/developer/block-collection/video
 */

export default async function decorate(block) {
    let head = document.getElementsByTagName('head').item(0);
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css';
    link.type = 'text/css';
    head.appendChild(link);

    let link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css';
    head.appendChild(link2);

    let script = document.createElement('script');
    script.type="text/javascript";
    script.src="https://code.jquery.com/jquery-1.11.0.min.js";
    head.appendChild(script);

    let script2 = document.createElement('script');
    script2.type="text/javascript";
    script2.src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
    head.appendChild(script2);


    const defaultHTML = block.innerHTML;
    block.innerHTML = `
    <link ref="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css/>
    <link ref="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css/>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
    <h1> Slick Block </h1>
    <div id="slick-items">
    ${defaultHTML}
    </div>
    <script>
    $('#slick-items').slick({
        slideToSho: 1,
        slidesToScroll: 1,
    });

    </script>
    `;      
}