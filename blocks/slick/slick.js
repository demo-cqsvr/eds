/*
 * Simple Block
 * Show a video referenced by a link
 * https://www.hlx.live/developer/block-collection/video
 */

export default async function decorate(block) {
    const defaultHTML = block.innerHTML;
    block.innerHTML = `
    <hr>
    <h1> Slick Block </h1>
    <h2>${defaultHTML}</h2>
    <hr>
    `;      
}