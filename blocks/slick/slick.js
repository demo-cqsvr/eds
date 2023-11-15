/*
 * Simple Block
 * Show a video referenced by a link
 * https://www.hlx.live/developer/block-collection/video
 */

export default async function decorate(block) {
    const defaultHTML = block.innerHTML;
    block.innerHTML = `
    <link ref="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css/>
    <link ref="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css/>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
    <h1> Slick Block </h1>
    <div class="slick-items">
    ${defaultHTML}
    </div>
    `;      
}