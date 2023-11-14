export default function decorate(block) {
  // ブロックは、基本テーブルで定義、テーブルヘッダーの次の１行目の列を数えている
  const cols = [...block.firstElementChild.children];
  // スタイルをセットするための処理 classをつけている
  block.classList.add(`columns2-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      col.classList.add(`block-col2-class`);

      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
