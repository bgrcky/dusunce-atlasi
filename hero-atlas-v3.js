(function(){
 function init(){const p=document.querySelector('.prologue');if(!p||p.dataset.heroV3)return false;p.dataset.heroV3='1';const k=p.querySelector('.prologue-k'),h=p.querySelector('h1'),deck=p.querySelector('.prologue-deck'),copy=p.querySelector('.prologue-copy'),time=p.querySelector('.timeband');if(!h||!copy)return false;document.querySelector('.prologue-grid')?.remove();
 const grid=document.createElement('div');grid.className='prologue-grid';const left=document.createElement('div');left.className='prologue-copycol';[k,h,deck].filter(Boolean).forEach(el=>left.appendChild(el));
 const actions=document.createElement('div');actions.className='hero-actions';actions.innerHTML='<a class="hero-primary" href="harita.html?katman=western">Haritayı keşfet →</a><a class="hero-secondary" href="#donemler">10 dönemi gör ↓</a>';
 const how=document.createElement('div');how.className='hero-how';how.innerHTML='<div class="hero-how-step"><b>01 · DÖNEM</b><span>Çağın temel sorusunu gör.</span></div><div class="hero-how-step"><b>02 · ESER</b><span>Cevabı veren metne in.</span></div><div class="hero-how-step"><b>03 · BAĞLANTI</b><span>Fikrin yolculuğunu takip et.</span></div>';left.append(actions,how);
 const v=document.createElement('div');v.className='hero-collage';v.innerHTML=`<svg viewBox="0 0 760 430" aria-hidden="true">
 <g class="layer-back">
  <path class="gridline" d="M40 60H720M40 120H720M40 180H720M40 240H720M40 300H720M40 360H720M100 30V392M180 30V392M260 30V392M340 30V392M420 30V392M500 30V392M580 30V392M660 30V392"/>
  <path class="route-soft" d="M42 326 C148 252 226 274 314 208 S478 150 708 120"/>
  <path class="route-soft" d="M66 110 C180 138 250 118 350 162 S530 250 708 284"/>
  <circle class="solid" cx="590" cy="148" r="92"/><circle class="solid" cx="214" cy="274" r="58"/>
 </g>
 <g class="layer-mid">
  <!-- Greek colonnade -->
  <path class="arch" d="M54 322H188M65 322V214M92 322V214M119 322V214M146 322V214M173 322V214M56 214H184M65 204H175M73 196H167"/>
  <path class="arch-soft" d="M60 330H182M72 190L120 166L168 190"/>
  <!-- Chinese courtyard / roof -->
  <path class="arch" d="M74 112H214M88 112V155M200 112V155M74 112L100 88H190L214 112M92 98H196M101 88L91 76M190 88L200 76"/>
  <path class="arch-soft" d="M112 155V122M143 155V122M174 155V122"/>
  <!-- Roman arch -->
  <path class="arch" d="M254 326V232H356V326M276 326V264A29 29 0 0 1 334 264V326M254 232H356M266 219H344"/>
  <path class="arch-soft" d="M244 334H366"/>
  <!-- Islamic dome / geometry -->
  <path class="arch" d="M356 318V250H480V318M374 250A44 44 0 0 1 462 250M418 206V184M402 214L418 184L434 214"/>
  <path class="arch-soft" d="M380 276L456 276M396 250L440 318M440 250L396 318M376 318H462"/>
  <!-- Renaissance perspective -->
  <path class="arch" d="M504 326H666M530 326L585 212M640 326L585 212M548 326L585 246M622 326L585 246M585 212V326"/>
  <path class="arch-soft" d="M515 294H655M525 266H645M542 238H628"/>
 </g>
 <g class="layer-front">
  <path class="route" d="M111 286 C180 276 230 294 302 278 S402 247 436 242 S540 229 605 236"/>
  <path class="route" d="M144 122 C230 150 280 176 366 226 S515 280 648 280"/>
  <circle class="node" cx="111" cy="286" r="4"/><text class="city" x="122" y="290">ATİNA</text><text class="thinker" x="73" y="270">Sokrates</text>
  <circle class="node" cx="144" cy="122" r="4"/><text class="city" x="155" y="126">QUFU</text><text class="thinker" x="104" y="105">Konfüçyüs</text>
  <circle class="node" cx="302" cy="278" r="4"/><text class="city" x="313" y="282">ROMA</text><text class="thinker" x="273" y="259">Cicero</text>
  <circle class="node" cx="436" cy="242" r="4"/><text class="city" x="447" y="246">BAĞDAT</text><text class="thinker" x="399" y="224">İbn Sina</text>
  <circle class="node" cx="540" cy="229" r="4"/><text class="city" x="551" y="233">FLORANSA</text><text class="thinker" x="511" y="210">Machiavelli</text>
  <circle class="node" cx="648" cy="280" r="4"/><text class="city" x="659" y="284">PARİS</text><text class="thinker" x="621" y="262">Rousseau</text>
  <text class="era-label" x="72" y="380">ANTİK</text><text class="era-label" x="274" y="380">ROMA</text><text class="era-label" x="402" y="380">BAĞDAT</text><text class="era-label" x="544" y="380">RÖNESANS → MODERNİTE</text>
 </g>
 </svg><div class="hero-collage-caption"><strong>Fikir coğrafyası</strong><span>şehir · mimari · metin · düşünce rotası</span></div>`;
 p.insertBefore(grid,time||null);grid.append(left,v);if(time)grid.insertAdjacentElement('afterend',time);const sec=document.querySelector('.hero');if(sec&&!sec.id)sec.id='donemler';
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches){v.addEventListener('pointermove',e=>{const r=v.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;v.style.setProperty('--px1',(x*-5)+'px');v.style.setProperty('--py1',(y*-3)+'px');v.style.setProperty('--px2',(x*7)+'px');v.style.setProperty('--py2',(y*4)+'px');v.style.setProperty('--px3',(x*11)+'px');v.style.setProperty('--py3',(y*6)+'px')});v.addEventListener('pointerleave',()=>['--px1','--py1','--px2','--py2','--px3','--py3'].forEach(k=>v.style.setProperty(k,'0px')))}return true}
 let n=0;(function wait(){if(!init()&&n++<100)setTimeout(wait,40)})();
})();
