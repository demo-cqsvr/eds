/*
 * Simple Block
 * Show a video referenced by a link
 * https://www.hlx.live/developer/block-collection/video
 */

export default async function decorate(block) {
  const defaultText = block.innerHTML;
  block.innerHTML = `
      <hr>
      <h1> Hello Simple Block v0.2 </h1>
      <h2>${defaultText}</h2>
      <hr>
      `;
}
