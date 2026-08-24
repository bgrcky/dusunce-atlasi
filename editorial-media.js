(function(){
 const fp=n=>'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(n);
 // Her dönem için ayrı bir tarihsel görsel. Aynı görsel Batı/Doğu içinde veya katmanlar arasında tekrar kullanılmaz.
 const west=[
  [fp('Parthenon from west.jpg'),'Atina · Antik Yunan'],
  [fp('Cicero Denounces Catiline in the Roman Senate by Cesare Maccari - 3.jpg'),'Roma · cumhuriyet ve yurttaşlık'],
  [fp('Meister von San Vitale in Ravenna 003.jpg'),'Ravenna · inanç ve Orta Çağ'],
  [fp('View of Florence from San Miniato by Thomas Cole, 1837.jpg'),'Floransa · Rönesans'],
  [fp('Declaration of the Rights of Man and of the Citizen in 1789.jpg'),'Haklar · devrim ve egemenlik'],
  [fp('Iron and Coal by William Bell Scott 1855-60.jpg'),'Sanayi · emek ve üretim'],
  [fp('Nietzsche1882.jpg'),'Nietzsche · modernitenin krizi'],
  [fp('Berlin-1945.jpg'),'1945 · yıkım ve anlam arayışı'],
  [fp('Daniel Kahneman (3283955327) (cropped).jpg'),'Kahneman · karar ve davranış'],
  [fp('John Berger-2009 (3).jpg'),'Berger · imge, temsil ve bakış']
 ];
 const east=[
  [fp('Confucius Tang Dynasty.jpg'),'Konfüçyüs · erdem ve toplumsal düzen'],
  [fp('Zhuangzi Dreaming of a Butterfly.jpg'),'Zhuangzi · doğa, yol ve uyum'],
  [fp('Gandhara Buddha (tnm).jpeg'),'Buda · benlik, acı ve kurtuluş'],
  [fp('Baghdad 1237.jpg'),'Bağdat · akıl, vahiy ve tercüme'],
  [fp('Dancing dervishes, Avicenna Mausoleum.jpg'),'Tasavvuf · içsel tecrübe'],
  [fp('Ibn Khaldun.jpg'),'İbn Haldun · toplum, devlet ve tarih'],
  [fp('Ottoman printing press.jpg'),'Matbaa · teknoloji ve modernleşme'],
  [fp('Rabindranath Tagore in 1909.jpg'),'Tagore · modernlik ve kimlik'],
  [fp('Edward Said and Daniel Barenboim in Sevilla, 2002.jpg'),'Said · temsil ve sömürge sonrası düşünce'],
  [fp('Shanghai skyline from the bund.jpg'),'Çok merkezli dünya · küresel düşünce']
 ];
 function current(){return document.getElementById('eastBtn')?.classList.contains('active')?east:west}
 function decoratePeriods(){const box=document.getElementById('periods');if(!box)return;const data=current();[...box.querySelectorAll('.period')].forEach((card,i)=>{const d=data[i];if(!d)return;const key=d[0];let m=card.querySelector('.period-media');if(m?.dataset.key===key)return;if(m)m.remove();m=document.createElement('div');m.className='period-media';m.dataset.key=key;m.innerHTML='<img loading="lazy" src="'+d[0]+'" alt=""><span>'+d[1]+'</span>';card.prepend(m)})}
 function decorateStory(){const data=current();document.querySelectorAll('.story2500-step').forEach((card,i)=>{const d=data[i];if(!d)return;let media=card.querySelector('.story2500-media');if(media?.dataset.key===d[0])return;if(media){media.remove();const body=card.querySelector('.story2500-body');if(body){while(body.firstChild)card.appendChild(body.firstChild);body.remove()}}media=document.createElement('div');media.className='story2500-media';media.dataset.key=d[0];media.innerHTML='<img loading="lazy" src="'+d[0]+'" alt="">';const wrap=document.createElement('div');wrap.className='story2500-body';while(card.firstChild)wrap.appendChild(card.firstChild);card.append(media,wrap)})}
 function detailForNode(node){const data=current();if(!node)return data[0];const rect=node.getBoundingClientRect(),sc=document.querySelector('.scroll'),logical=(sc?.scrollLeft||0)+rect.left;const i=Math.max(0,Math.min(9,Math.round(logical/292)));return data[i]}
 document.addEventListener('click',e=>{const node=e.target.closest('.node[data-eser]');if(node){window.__atlasLastMedia=detailForNode(node);setTimeout(()=>{const panel=document.querySelector('.v5-card.open,.v5-modal');if(!panel||panel.querySelector('.editorial-detail-media'))return;const d=window.__atlasLastMedia;const m=document.createElement('div');m.className='editorial-detail-media';m.innerHTML='<img src="'+d[0]+'" alt=""><span>'+d[1]+'</span>';panel.prepend(m)},120)}});
 let queued=false;const refresh=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;decoratePeriods();decorateStory()})};
 const obs=new MutationObserver(refresh);function init(){if(!document.getElementById('periods'))return requestAnimationFrame(init);refresh();obs.observe(document.body,{childList:true,subtree:true});document.getElementById('westBtn')?.addEventListener('click',()=>setTimeout(refresh,140));document.getElementById('eastBtn')?.addEventListener('click',()=>setTimeout(refresh,140))}init();
})();
