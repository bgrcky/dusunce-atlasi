(function(){
 function init(){const p=document.querySelector('.prologue');if(!p||p.dataset.heroV3)return false;p.dataset.heroV3='1';const k=p.querySelector('.prologue-k'),h=p.querySelector('h1'),deck=p.querySelector('.prologue-deck'),copy=p.querySelector('.prologue-copy'),time=p.querySelector('.timeband');if(!h||!copy)return false;document.querySelector('.prologue-grid')?.remove();
 const grid=document.createElement('div');grid.className='prologue-grid';const left=document.createElement('div');left.className='prologue-copycol';[k,h,deck].filter(Boolean).forEach(el=>left.appendChild(el));
 const actions=document.createElement('div');actions.className='hero-actions';actions.innerHTML='<a class="hero-primary" href="harita.html?katman=western">Haritayı keşfet →</a><a class="hero-secondary" href="#donemler">10 dönemi gör ↓</a>';
 const how=document.createElement('div');how.className='hero-how';how.innerHTML='<div class="hero-how-step"><b>01 · DÖNEM</b><span>Çağın temel sorusunu gör.</span></div><div class="hero-how-step"><b>02 · ESER</b><span>Cevabı veren metne in.</span></div><div class="hero-how-step"><b>03 · BAĞLANTI</b><span>Fikrin yolculuğunu takip et.</span></div>';left.append(actions,how);
 const v=document.createElement('div');v.className='hero-collage hero-photo-collage';v.innerHTML=`
 <div class="photo-frame photo-athens"><img src="https://www.gallery.ca/sites/default/files/styles/ngc_scale_1200/public/8704501_0.jpg?itok=K5CVhrpz&timestamp=1656294866" alt="19. yüzyıl Parthenon fotoğrafı"><span>ATİNA · ANTİK</span></div>
 <div class="photo-frame photo-socrates"><img src="https://static.zpe.gov.pl/portal/f/res-minimized/R13KCmbifjoYi/1657581090/WT2wmUgo4frhK5iMfLdcIys9ShBF4ZK4.jpg" alt="Sokrates büstü"><span>SOKRATES</span></div>
 <div class="photo-frame photo-confucius"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Konfuzius-1770.jpg" alt="Konfüçyüs portresi"><span>QUFU · KONFÜÇYÜS</span></div>
 <div class="photo-frame photo-avicenna"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Avicenna-Logo.png" alt="İbn Sina tasviri"><span>İBN SİNA · DOĞU</span></div>
 <div class="photo-frame photo-florence"><img src="https://www.mkg-hamburg.de/sites/default/files/externals/4/5/453313424f7e709bb48f67a067594d53.jpg" alt="19. yüzyıl Floransa Duomo fotoğrafı"><span>FLORANSA · RÖNESANS</span></div>
 <svg class="photo-routes" viewBox="0 0 760 430" aria-hidden="true"><path d="M110 292 C210 235 285 265 355 210 S505 170 650 118"/><path d="M126 92 C235 125 280 175 392 246 S548 300 684 276"/><circle cx="110" cy="292" r="3"/><circle cx="355" cy="210" r="3"/><circle cx="650" cy="118" r="3"/></svg>
 <div class="collage-word word-west">POLIS</div><div class="collage-word word-east">REN</div>
 <div class="hero-collage-caption"><strong>2.500 yıllık fikir coğrafyası</strong><span>Atina · Qufu · Bağdat · Floransa</span></div>`;
 p.insertBefore(grid,time||null);grid.append(left,v);if(time)grid.insertAdjacentElement('afterend',time);const sec=document.querySelector('.hero');if(sec&&!sec.id)sec.id='donemler';
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches){v.addEventListener('pointermove',e=>{const r=v.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;v.style.setProperty('--mx',(x*8)+'px');v.style.setProperty('--my',(y*5)+'px')});v.addEventListener('pointerleave',()=>{v.style.setProperty('--mx','0px');v.style.setProperty('--my','0px')})}return true}
 let n=0;(function wait(){if(!init()&&n++<100)setTimeout(wait,40)})();
})();
