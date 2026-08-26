(function(){
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function getPanel(){return document.querySelector('.v5-card')}
 function openFallback(node){
  const panel=getPanel(); if(!panel||!node)return false;
  const eser=node.dataset.eser||node.querySelector('.t')?.textContent?.trim()||'Eser';
  const title=node.querySelector('.t')?.textContent?.trim()||eser;
  const author=node.querySelector('.s')?.textContent?.trim()||'';
  const why=node.querySelector('.why')?.textContent?.trim()||'';
  const kw=node.querySelector('.kw')?.textContent?.trim()||'';
  const tags=[...node.querySelectorAll('.tag')].map(x=>x.textContent.trim()).filter(Boolean);
  const layer=node.classList.contains('tier-Dogu')?'Doğu':node.classList.contains('tier-Muzik')?'Müzik':node.classList.contains('tier-Mimari')?'Mimari':node.classList.contains('tier-Roman')?'Roman':'Batı';
  panel.innerHTML='<button class="v5-close">×</button><div class="v5-k">Companion</div><h2>'+esc(title)+'</h2>'+
   '<div class="v5-block"><label>Eser kimliği</label><div>'+esc(author||'—')+'</div></div>'+
   (why?'<div class="v5-block"><label>Neden bu eseri okumalı?</label><div>'+esc(why)+'</div></div>':'')+
   (kw?'<div class="v5-block"><label>Ana kavramlar</label><div>'+kw.split('·').map(x=>'<span class="v5-tag">'+esc(x.trim())+'</span>').join('')+'</div></div>':'')+
   '<div class="v5-block"><label>Katman</label><div>'+esc(layer)+'</div></div>'+
   (tags.length?'<div class="v5-block"><label>Etiketler</label><div>'+tags.map(x=>'<span class="v5-tag">'+esc(x)+'</span>').join('')+'</div></div>':'');
  panel.classList.add('open');
  panel.querySelector('.v5-close').onclick=()=>panel.classList.remove('open');
  return true;
 }
 document.addEventListener('click',e=>{
  const title=e.target.closest('.node .t'); if(!title)return;
  const node=title.closest('.node[data-eser]'); if(!node)return;
  requestAnimationFrame(()=>{const panel=getPanel(); if(panel&&!panel.classList.contains('open'))openFallback(node)});
 },false);
 window.DUSUNCE_OPEN_FALLBACK=openFallback;
})();