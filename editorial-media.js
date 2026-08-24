(function(){
 const fp=n=>'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(n);
 const west=[
  [fp('Parthenon.jpg'),'Atina · Antik Yunan'],
  ['https://static.zpe.gov.pl/portal/f/res-minimized/R13KCmbifjoYi/1657581090/WT2wmUgo4frhK5iMfLdcIys9ShBF4ZK4.jpg','Sokrates · polis ve yurttaşlık'],
  [fp('Augustine, De Civitate Dei - New York Public Library, Spencer Collection MS 30, 1470, Opening of text, with historiated initial.jpg'),'Augustinus · elyazması kültürü'],
  ['https://www.mkg-hamburg.de/sites/default/files/externals/4/5/453313424f7e709bb48f67a067594d53.jpg','Floransa · Rönesans'],
  [fp('Delacroix - La liberte.jpg'),'Devrim · yurttaşlık ve özgürlük'],
  [fp('Indigo factory, Allahabad, an engraving by E. Therond, 1878.jpg'),'Sanayi · üretim ve sınıf'],
  [fp('Nietzsche1882.jpg'),'Nietzsche · modernitenin krizi'],
  [fp('Berlin-1945.jpg'),'Berlin 1945 · yıkım ve anlam'],
  [fp('Nietzsche1882 detail.jpg'),'Modern birey · karar ve belirsizlik'],
  [fp('Delacroix - La liberte.jpg'),'İmge · temsil ve bakış']
 ];
 const east=[
  ['https://upload.wikimedia.org/wikipedia/commons/4/4f/Konfuzius-1770.jpg','Konfüçyüs · erdem ve düzen'],
  ['https://upload.wikimedia.org/wikipedia/commons/4/4f/Konfuzius-1770.jpg','Çin düşüncesi · yol ve uyum'],
  [fp('Parthenon.jpg'),'Benlik · içsel yol'],
  ['https://upload.wikimedia.org/wikipedia/commons/6/6b/Avicenna-Logo.png','İbn Sina · akıl ve vahiy'],
  ['https://upload.wikimedia.org/wikipedia/commons/6/6b/Avicenna-Logo.png','Tasavvuf · içsel tecrübe'],
  [fp('Indigo factory, Allahabad, an engraving by E. Therond, 1878.jpg'),'Şehir · devlet · gündelik hayat'],
  [fp('Indigo factory, Allahabad, an engraving by E. Therond, 1878.jpg'),'Modernleşme · teknoloji ve kurum'],
  ['https://upload.wikimedia.org/wikipedia/commons/4/4f/Konfuzius-1770.jpg','Doğu modernitesi · kimlik'],
  [fp('Berlin-1945.jpg'),'Sömürge sonrası dünya · temsil'],
  [fp('Parthenon.jpg'),'Çok merkezli dünya · küresel düşünce']
 ];
 function current(){return document.getElementById('eastBtn')?.classList.contains('active')?east:west}
 function decoratePeriods(){const box=document.getElementById('periods');if(!box)return;const data=current();[...box.querySelectorAll('.period')].forEach((card,i)=>{const d=data[i];if(!d)return;const key=d[0];let m=card.querySelector('.period-media');if(m?.dataset.key===key)return;if(m)m.remove();m=document.createElement('div');m.className='period-media';m.dataset.key=key;m.innerHTML='<img loading="lazy" src="'+d[0]+'" alt=""><span>'+d[1]+'</span>';card.prepend(m)})}
 function decorateStory(){const data=current();document.querySelectorAll('.story2500-step').forEach((card,i)=>{const d=data[i];if(!d)return;let media=card.querySelector('.story2500-media');if(media?.dataset.key===d[0])return;if(media){media.remove();const body=card.querySelector('.story2500-body');if(body){while(body.firstChild)card.appendChild(body.firstChild);body.remove()}}media=document.createElement('div');media.className='story2500-media';media.dataset.key=d[0];media.innerHTML='<img loading="lazy" src="'+d[0]+'" alt="">';const wrap=document.createElement('div');wrap.className='story2500-body';while(card.firstChild)wrap.appendChild(card.firstChild);card.append(media,wrap)})}
 function detailForNode(node){if(!node)return west[0];const rect=node.getBoundingClientRect(),sc=document.querySelector('.scroll'),logical=(sc?.scrollLeft||0)+rect.left;const i=Math.max(0,Math.min(9,Math.round(logical/292)));return west[i]}
 document.addEventListener('click',e=>{const node=e.target.closest('.node[data-eser]');if(node){window.__atlasLastMedia=detailForNode(node);setTimeout(()=>{const panel=document.querySelector('.v5-card.open,.v5-modal');if(!panel||panel.querySelector('.editorial-detail-media'))return;const d=window.__atlasLastMedia;const m=document.createElement('div');m.className='editorial-detail-media';m.innerHTML='<img src="'+d[0]+'" alt=""><span>'+d[1]+'</span>';panel.prepend(m)},120)}});
 let queued=false;const refresh=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;decoratePeriods();decorateStory()})};
 const obs=new MutationObserver(refresh);function init(){if(!document.getElementById('periods'))return requestAnimationFrame(init);refresh();obs.observe(document.body,{childList:true,subtree:true});document.getElementById('westBtn')?.addEventListener('click',()=>setTimeout(refresh,140));document.getElementById('eastBtn')?.addEventListener('click',()=>setTimeout(refresh,140))}init();
})();
