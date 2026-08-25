(function(){
 const atlasLinks={
  'Antigone':'./atlas/antigone.html',
  'Kral Oidipus':'./atlas/kral-oidipus.html',
  'Medea':'./atlas/medea.html',
  "Sokrates'in Son Günleri":'./atlas/sokratesin-son-gunleri.html',
  "Nikomakhos'a Etik":'./atlas/nikomakhosa-etik.html',
  'El Kitabı':'./atlas/epiktetos-el-kitabi.html',
  'Ahlak Mektupları':'./atlas/seneca-ahlak-mektuplari.html'
 };
 const norm=s=>String(s||'').toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’‘`]/g,"'").replace(/[^a-z0-9çğıöşü']+/g,' ').trim();
 function resolve(title){const t=norm(title);for(const [name,url] of Object.entries(atlasLinks)){const n=norm(name);if(t===n||t.includes(n)||n.includes(t))return url}return null}
 function decorate(){const card=document.querySelector('.v5-card.open');if(!card)return;const h=card.querySelector('h2');if(!h)return;const url=resolve(h.textContent);let existing=card.querySelector('[data-literary-atlas]');if(!url){existing?.remove();return}if(existing)return;const a=document.createElement('a');a.href=url;a.target='_self';a.rel='noopener';a.dataset.literaryAtlas='1';a.className='literary-atlas-link';a.innerHTML='<span>ATLAS</span><b>Kitabın görsel atlasını aç</b><i>↗</i>';const identity=card.querySelector('.v4-identity');(identity||h).insertAdjacentElement('afterend',a)}
 const css=document.createElement('style');css.textContent='.literary-atlas-link{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;margin:10px 0 16px;padding:11px 12px;border:1px solid color-mix(in srgb,var(--gold) 45%,var(--border));background:color-mix(in srgb,var(--gold) 5%,var(--card));text-decoration:none;color:var(--text);transition:.2s}.literary-atlas-link span{font:8px var(--font-mono);letter-spacing:.15em;color:var(--gold)}.literary-atlas-link b{font:500 13px var(--font-display)}.literary-atlas-link i{font-style:normal;color:var(--gold)}.literary-atlas-link:hover{border-color:var(--gold);background:color-mix(in srgb,var(--gold) 9%,var(--card))}';document.head.appendChild(css);
 new MutationObserver(decorate).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});document.addEventListener('click',()=>setTimeout(decorate,0),true);window.DUSUNCE_ATLAS_LINKS=atlasLinks;
})();