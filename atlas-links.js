(function(){
 const atlasLinks={
  'Antigone':'/atlas_antigone.html',
  'Kral Oidipus':'/atlas_kral_oidipus.html',
  'Oidipus Kral':'/atlas_kral_oidipus.html',
  'Medea':'/atlas_medea.html',
  "Sokrates'in Son Günleri":'/atlas_sokratesin_son_gunleri_atlas.html',
  "Sokrates'in Savunması":'/atlas_sokratesin_son_gunleri_atlas.html',
  'Kriton':'/atlas_sokratesin_son_gunleri_atlas.html',
  'Phaidon':'/atlas_sokratesin_son_gunleri_atlas.html',
  "Nikomakhos'a Etik":'/atlas_nikomakhosa_etik.html',
  'El Kitabı':'/atlas_epiktetos_el_kitabi.html',
  'Ahlak Mektupları':'/atlas_seneca_ahlak_mektuplari.html'
 };
 const norm=s=>String(s||'').toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’‘`]/g,"'").replace(/[^a-z0-9çğıöşü']+/g,' ').trim();
 function resolve(title){const t=norm(title);for(const [name,url] of Object.entries(atlasLinks)){const n=norm(name);if(t===n||t.includes(n)||n.includes(t))return url}return null}
 function decorateMapCards(){
  document.querySelectorAll('.node').forEach(card=>{
   const title=card.querySelector('.t')?.textContent||'';
   const url=resolve(title);
   const link=card.querySelector('.ozet-link');
   if(!url||!link)return;
   link.href=url;
   link.target='_self';
   link.rel='noopener';
   link.dataset.literaryAtlas='1';
   link.classList.add('literary-atlas-compact');
   link.innerHTML='<span>Görsel Atlas</span><b>→</b>';
   link.title='Bu eseri haritalar, karakterler ve bağlamıyla keşfet';
  });
 }
 function decorateOpenCard(){
  const card=document.querySelector('.v5-card.open');if(!card)return;
  const h=card.querySelector('h2');if(!h)return;
  const url=resolve(h.textContent);let existing=card.querySelector('.literary-atlas-link');
  if(!url){existing?.remove();return}if(existing){existing.href=url;return}
  const a=document.createElement('a');a.href=url;a.target='_self';a.rel='noopener';a.className='literary-atlas-link';a.innerHTML='<span class="literary-atlas-k">GÖRSEL ATLAS</span><span class="literary-atlas-copy"><b>Bu eseri bağlamıyla keşfet</b><em>Haritalar, karakterler ve fikir katmanlarıyla.</em></span><i>→</i>';
  const identity=card.querySelector('.v4-identity');(identity||h).insertAdjacentElement('afterend',a)
 }
 function decorate(){decorateMapCards();decorateOpenCard()}
 const css=document.createElement('style');css.textContent=`
 .node .ozet-link.literary-atlas-compact{margin-left:auto;display:inline-flex;align-items:center;gap:5px;padding:3px 7px;border:1px solid color-mix(in srgb,var(--gold) 55%,transparent);border-radius:3px;background:color-mix(in srgb,var(--gold) 8%,transparent);color:var(--gold);font:600 8.5px/1 var(--font-mono);letter-spacing:.02em;text-decoration:none;white-space:nowrap;transition:.18s}
 .node .ozet-link.literary-atlas-compact b{font-size:11px;font-weight:500;transition:transform .18s}
 .node .ozet-link.literary-atlas-compact:hover{background:color-mix(in srgb,var(--gold) 16%,transparent);border-color:var(--gold);text-decoration:none}
 .node .ozet-link.literary-atlas-compact:hover b{transform:translateX(2px)}
 .literary-atlas-link{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;margin:12px 0 18px;padding:13px 14px;border:1px solid color-mix(in srgb,var(--gold) 45%,var(--border));background:linear-gradient(180deg,color-mix(in srgb,var(--gold) 6%,var(--card)),var(--card));text-decoration:none;color:var(--text);transition:.2s}
 .literary-atlas-k{font:500 9px var(--font-mono);letter-spacing:.16em;color:var(--gold);white-space:nowrap}.literary-atlas-copy{display:block;min-width:0}.literary-atlas-copy b{display:block;font:500 14px/1.25 var(--font-display);margin-bottom:2px}.literary-atlas-copy em{display:block;font:11px/1.35 var(--font-body);font-style:normal;color:var(--text-sec)}.literary-atlas-link i{font-style:normal;color:var(--gold);font-size:18px;transition:transform .2s}.literary-atlas-link:hover{border-color:var(--gold);background:color-mix(in srgb,var(--gold) 10%,var(--card));transform:translateY(-1px)}.literary-atlas-link:hover i{transform:translateX(3px)}
 @media(max-width:520px){.literary-atlas-link{grid-template-columns:1fr auto;gap:8px}.literary-atlas-k{grid-column:1/-1}.literary-atlas-copy b{font-size:13px}.literary-atlas-copy em{font-size:10px}}
 `;document.head.appendChild(css);
 new MutationObserver(()=>requestAnimationFrame(decorate)).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
 document.addEventListener('click',()=>setTimeout(decorate,0),true);
 decorate();
 window.DUSUNCE_ATLAS_LINKS=atlasLinks;
})();