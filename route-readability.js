(function(){
  const style=document.createElement('style');
  style.textContent=`
    .v5-path.route-readable{
      left:50%!important;bottom:22px!important;transform:translateX(-50%)!important;
      width:min(1080px,94vw)!important;padding:22px 24px 18px!important;
      border:1px solid var(--gold)!important;border-radius:10px!important;
      background:color-mix(in srgb,var(--card) 96%,#000 4%)!important;
      box-shadow:0 18px 60px rgba(0,0,0,.48)!important;
      max-height:58vh;overflow:auto;
    }
    .route-readable .route-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;margin-bottom:16px}
    .route-readable .route-head-copy{min-width:0}
    .route-readable .route-kicker{font:600 10px/1.2 var(--font-mono);letter-spacing:1.2px;text-transform:uppercase;color:var(--gold);margin-bottom:7px}
    .route-readable h3{font:700 26px/1.12 var(--font-display)!important;color:var(--text)!important;margin:0!important;letter-spacing:-.2px}
    .route-readable .route-sub{font:14px/1.55 var(--font-display);color:var(--text-sec);margin-top:6px;max-width:720px}
    .route-readable .route-close{flex:0 0 auto;border:1px solid var(--border);background:transparent;color:var(--text);border-radius:7px;padding:8px 12px;font:600 11px var(--font-mono);cursor:pointer}
    .route-readable .route-close:hover{border-color:var(--gold);color:var(--gold)}
    .route-readable .route-flow{display:flex;align-items:stretch;gap:9px;overflow-x:auto;padding:3px 1px 8px;scrollbar-width:thin}
    .route-readable .route-card{flex:0 0 205px;min-height:118px;border:1px solid var(--border);border-radius:9px;background:var(--bg);padding:14px 14px 13px;display:flex;flex-direction:column;justify-content:flex-start}
    .route-readable .route-index{font:600 9px/1 var(--font-mono);color:var(--gold);letter-spacing:.8px;margin-bottom:10px}
    .route-readable .route-title{font:700 16px/1.22 var(--font-display);color:var(--text);margin-bottom:6px}
    .route-readable .route-author{font:11px/1.35 var(--font-mono);color:var(--gold)}
    .route-readable .route-link{flex:0 0 150px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:var(--gold);padding:0 5px}
    .route-readable .route-arrow{font:24px/1 var(--font-display);margin-bottom:7px}
    .route-readable .route-relation{font:600 10px/1.35 var(--font-mono);color:var(--gold);max-width:145px}
    .route-readable .route-meta{font:9px/1.3 var(--font-mono);color:var(--text-sec);margin-top:4px;text-transform:uppercase;letter-spacing:.45px}
    @media(max-width:700px){
      .v5-path.route-readable{width:94vw!important;padding:17px 16px 14px!important;max-height:65vh}
      .route-readable h3{font-size:22px!important}
      .route-readable .route-card{flex-basis:178px;min-height:108px}
      .route-readable .route-link{flex-basis:120px}
    }
  `;
  document.head.appendChild(style);

  function authorFor(title){
    try{
      const n=document.querySelector('.node[data-eser="'+CSS.escape(title)+'"]');
      return n?.querySelector('.s')?.textContent?.trim()||'';
    }catch(e){return '';}
  }
  function classifyRelation(text){
    const t=(text||'').toLocaleLowerCase('tr-TR');
    if(t.includes('karşılaştır')||t.includes('problem')&&t.includes('cevap')) return 'karşılaştırma';
    if(t.includes('eleşt')||t.includes('sorgulan')) return 'eleştiri / cevap';
    if(t.includes('doğrudan')||t.includes('miras')||t.includes('öğreti')) return 'gelenek / etki';
    return 'düşünsel geçiş';
  }
  function enhance(path){
    if(!path||path.dataset.readability==='1') return;
    const title=path.querySelector('h3')?.textContent?.trim()||'Düşünce yolu';
    const steps=[...path.querySelectorAll('.v5-step')].map(x=>x.textContent.trim());
    const rels=[...path.querySelectorAll('.v5-rel')].map(x=>x.textContent.replace(/^\s*→|→\s*$/g,'').trim());
    if(!steps.length) return;
    path.dataset.readability='1';
    path.classList.add('route-readable');
    const flow=[];
    steps.forEach((s,i)=>{
      flow.push('<div class="route-card"><div class="route-index">'+String(i+1).padStart(2,'0')+' · DURAK</div><div class="route-title">'+s.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</div><div class="route-author">'+(authorFor(s)||'')+'</div></div>');
      if(i<steps.length-1){
        const r=rels[i]||'düşünsel geçiş';
        flow.push('<div class="route-link"><div class="route-arrow">→</div><div class="route-relation">'+r.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</div><div class="route-meta">'+classifyRelation(r)+'</div></div>');
      }
    });
    path.innerHTML='<div class="route-head"><div class="route-head-copy"><div class="route-kicker">Düşünce rotası</div><h3>'+title.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</h3><div class="route-sub">Eserleri yalnızca sırayla değil, aralarındaki düşünsel geçişi takip ederek oku.</div></div><button class="route-close" type="button">Kapat</button></div><div class="route-flow">'+flow.join('')+'</div>';
    path.querySelector('.route-close').addEventListener('click',()=>{
      document.querySelector('.v5-svg')?.remove();
      document.querySelectorAll('.node').forEach(n=>n.classList.remove('v5-dim','v5-hit'));
      path.remove();
    });
  }
  const observer=new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{
    if(n.nodeType!==1)return;
    if(n.matches?.('.v5-path')) enhance(n);
    n.querySelectorAll?.('.v5-path').forEach(enhance);
  })));
  observer.observe(document.body,{childList:true,subtree:true});
  document.querySelectorAll('.v5-path').forEach(enhance);
})();
