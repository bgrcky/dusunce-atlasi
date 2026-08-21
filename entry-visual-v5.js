(function(){
 function init(){
  const p=document.querySelector('.prologue'); if(!p||p.querySelector('.idea-geo'))return !!p;
  const g=document.createElement('div');g.className='idea-geo';
  g.innerHTML=`<svg viewBox="0 0 1200 560" preserveAspectRatio="none" aria-hidden="true">
   <path d="M80 340 C180 250 255 290 345 210 S535 150 625 235 S790 310 930 185"/>
   <path d="M105 420 C225 365 300 390 420 330 S655 300 760 365 S930 425 1090 330"/>
   <path d="M210 120 C330 185 435 100 555 155 S780 130 990 95"/>
   <circle cx="105" cy="338" r="3"/><text x="117" y="342">ATİNA</text><text class="thinker" x="76" y="318">Sokrates</text>
   <circle cx="345" cy="210" r="3"/><text x="357" y="214">ROMA</text><text class="thinker" x="315" y="190">Marcus Aurelius</text>
   <circle cx="625" cy="235" r="3"/><text x="637" y="239">FLORANSA</text><text class="thinker" x="594" y="216">Machiavelli</text>
   <circle cx="930" cy="185" r="3"/><text x="942" y="189">PARİS</text><text class="thinker" x="899" y="166">Rousseau</text>
   <circle cx="210" cy="420" r="3"/><text x="222" y="424">QUFU</text><text class="thinker" x="176" y="401">Konfüçyüs</text>
   <circle cx="420" cy="330" r="3"/><text x="432" y="334">VARANASİ</text><text class="thinker" x="388" y="311">Buddha</text>
   <circle cx="760" cy="365" r="3"/><text x="772" y="369">BAĞDAT</text><text class="thinker" x="727" y="346">İbn Sina</text>
   <circle cx="1090" cy="330" r="3"/><text x="1102" y="334">KYOTO</text>
   <circle cx="555" cy="155" r="3"/><text x="567" y="159">KÖNİGSBERG</text><text class="thinker" x="526" y="135">Kant</text>
  </svg>`;
  p.prepend(g);return true;
 }
 let n=0;(function wait(){if(!init()&&n++<80)setTimeout(wait,50)})();
})();
