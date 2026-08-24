(function(){
 function init(){const p=document.querySelector('.prologue');if(!p||p.dataset.heroV2)return false;p.dataset.heroV2='1';
 const k=p.querySelector('.prologue-k'),h=p.querySelector('h1'),deck=p.querySelector('.prologue-deck'),copy=p.querySelector('.prologue-copy'),time=p.querySelector('.timeband');
 if(!h||!copy)return false;
 const grid=document.createElement('div');grid.className='prologue-grid';const left=document.createElement('div');left.className='prologue-copycol';
 [k,h,deck].filter(Boolean).forEach(el=>left.appendChild(el));
 const actions=document.createElement('div');actions.className='hero-actions';actions.innerHTML='<a class="hero-primary" href="harita.html?katman=western">Haritayı keşfet →</a><a class="hero-secondary" href="#donemler">10 dönemi gör ↓</a>';
 const how=document.createElement('div');how.className='hero-how';how.innerHTML='<div class="hero-how-step"><b>01 · DÖNEM</b><span>Önce çağın temel sorusunu gör.</span></div><div class="hero-how-step"><b>02 · ESER</b><span>Sonra cevabı veren metne in.</span></div><div class="hero-how-step"><b>03 · BAĞLANTI</b><span>Fikrin nereden gelip nereye gittiğini izle.</span></div>';left.append(actions,how);
 const visual=document.createElement('div');visual.className='hero-visual';visual.innerHTML=`<svg viewBox="0 0 620 430" aria-hidden="true">
 <path class="geo" d="M36 322 C105 278 164 300 222 252 S345 190 409 216 S508 242 588 184"/>
 <path class="geo" d="M54 132 C125 96 179 118 235 92 S355 80 414 112 S515 128 578 88"/>
 <path class="route-strong" d="M70 300 C132 256 172 267 220 230 S328 178 390 196 S486 226 552 165"/>
 <path class="route" d="M92 122 C150 155 188 140 242 166 S340 196 390 232 S480 270 550 244"/>
 <path class="route" d="M68 300 C165 327 230 300 307 328 S454 340 558 294"/>
 <circle class="accent" cx="70" cy="300" r="4"/><text class="label" x="82" y="304">ATİNA</text><text class="thinker" x="48" y="278">Sokrates</text>
 <circle class="accent" cx="220" cy="230" r="4"/><text class="label" x="232" y="234">ROMA</text><text class="thinker" x="190" y="210">Cicero</text>
 <circle class="accent" cx="390" cy="196" r="4"/><text class="label" x="402" y="200">FLORANSA</text><text class="thinker" x="355" y="176">Machiavelli</text>
 <circle class="accent" cx="552" cy="165" r="4"/><text class="label" x="520" y="148">PARİS</text><text class="thinker" x="515" y="190">Rousseau</text>
 <circle class="accent" cx="92" cy="122" r="4"/><text class="label" x="104" y="126">QUFU</text><text class="thinker" x="66" y="103">Konfüçyüs</text>
 <circle class="accent" cx="307" cy="328" r="4"/><text class="label" x="319" y="332">BAĞDAT</text><text class="thinker" x="274" y="309">İbn Sina</text>
 <circle class="accent" cx="550" cy="244" r="4"/><text class="label" x="510" y="265">VARANASİ</text><text class="thinker" x="514" y="225">Buddha</text>
 <path class="geo" d="M145 354V283M132 283H158M286 130V61M273 61H299M462 332V262M449 262H475"/>
 <path class="geo" d="M125 354H165M266 130H306M442 332H482"/>
 <text class="era" x="250" y="245">2500 YIL</text>
 </svg><div class="hero-visual-caption"><strong>Fikir coğrafyası</strong><span>Atina · Qufu · Roma · Bağdat · Floransa · Paris</span></div>`;
 p.insertBefore(grid,time||null);grid.append(left,visual);if(time)grid.insertAdjacentElement('afterend',time);
 const sec=document.querySelector('.hero');if(sec&&!sec.id)sec.id='donemler';return true}
 let n=0;(function wait(){if(!init()&&n++<100)setTimeout(wait,40)})();
})();
