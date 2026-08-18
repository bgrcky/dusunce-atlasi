(async function(){
  const [fikirHatlari, companion] = await Promise.all([
    fetch('./data/fikirHatlari.json').then(r=>r.json()),
    fetch('./data/companion.json').then(r=>r.json())
  ]);

  const style = document.createElement('style');
  style.textContent = `
    .node.idea-dim{opacity:.10!important;filter:saturate(.25)}
    .node.idea-hit{box-shadow:0 0 0 2px var(--gold)!important;z-index:12!important}
    .nav-btn.idea-active{background:var(--gold);color:var(--card);border-color:var(--gold)}
    #navIdeas{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:6px}
    .idea-note{font-family:var(--font-display);font-size:11px;line-height:1.35;color:var(--text-sec);margin:2px 0 7px;display:none}
    .idea-note.visible{display:block}
    .companion-panel{position:fixed;top:0;right:0;width:min(420px,92vw);height:100vh;z-index:80;background:var(--card);border-left:1px solid var(--border);box-shadow:-12px 0 38px rgba(20,14,4,.24);padding:26px 24px 32px;overflow-y:auto;transform:translateX(105%);transition:transform .28s ease}
    .companion-panel.open{transform:translateX(0)}
    .companion-kicker{font-family:var(--font-mono);font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:var(--gold);margin-bottom:8px}
    .companion-panel h2{font-family:var(--font-display);font-size:26px;line-height:1.1;margin:0 36px 8px 0;color:var(--text)}
    .companion-close{position:absolute;right:16px;top:16px;border:0;background:none;color:var(--text-sec);font-size:22px;cursor:pointer}
    .companion-block{padding:15px 0;border-top:.5px solid var(--border)}
    .companion-label{font-family:var(--font-mono);font-size:9.5px;text-transform:uppercase;letter-spacing:1px;color:var(--gold);margin-bottom:6px}
    .companion-copy{font-family:var(--font-display);font-size:15px;line-height:1.55;color:var(--text)}
    .companion-main{font-style:italic;font-size:17px}
    .companion-tags{display:flex;gap:6px;flex-wrap:wrap}
    .companion-tag,.companion-jump{font-family:var(--font-mono);font-size:10px;padding:5px 8px;border:.5px solid var(--border);border-radius:12px;background:var(--bg);color:var(--text-sec)}
    button.companion-jump{cursor:pointer}
    button.companion-jump:hover{border-color:var(--gold);color:var(--gold)}
    .difficulty{letter-spacing:3px;color:var(--gold);font-size:14px}
    .companion-hint{font-family:var(--font-mono);font-size:9px;color:var(--text-sec);margin-top:14px}
    @media(max-width:640px){.companion-panel{padding:22px 18px 28px}.companion-panel h2{font-size:23px}}
  `;
  document.head.appendChild(style);

  function waitForAtlas(){
    return new Promise(resolve=>{
      const check=()=>{
        if(document.querySelector('.node[data-eser]') && document.getElementById('navBody')) resolve();
        else requestAnimationFrame(check);
      };
      check();
    });
  }
  await waitForAtlas();

  const navBody = document.getElementById('navBody');
  const syncLabel = Array.from(navBody.querySelectorAll('.nav-row-label')).find(el=>el.textContent.trim()==='Senkron kodu');
  const label = document.createElement('div');
  label.className='nav-row-label'; label.textContent='Fikirler';
  const ideasWrap = document.createElement('div'); ideasWrap.id='navIdeas'; ideasWrap.className='nav-row';
  const note = document.createElement('div'); note.className='idea-note';
  if(syncLabel){ navBody.insertBefore(label,syncLabel); navBody.insertBefore(ideasWrap,syncLabel); navBody.insertBefore(note,syncLabel); }
  else { navBody.append(label,ideasWrap,note); }

  let activeIdea=null;
  function clearIdea(){
    document.querySelectorAll('.node').forEach(n=>n.classList.remove('idea-dim','idea-hit'));
    ideasWrap.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('idea-active'));
    note.classList.remove('visible'); note.textContent=''; activeIdea=null;
  }
  function applyIdea(idea,btn){
    if(activeIdea===idea.id){ clearIdea(); return; }
    clearIdea();
    activeIdea=idea.id; btn.classList.add('idea-active');
    const set=new Set(idea.eserler);
    let first=null;
    document.querySelectorAll('.node').forEach(n=>{
      const hit=set.has(n.dataset.eser);
      n.classList.add(hit?'idea-hit':'idea-dim');
      if(hit && !first) first=n;
    });
    note.textContent=idea.aciklama; note.classList.add('visible');
    if(first) requestAnimationFrame(()=>first.scrollIntoView({behavior:'smooth',block:'center',inline:'center'}));
  }
  fikirHatlari.forEach(idea=>{
    const btn=document.createElement('button'); btn.className='nav-btn nav-btn-wide'; btn.textContent=idea.label;
    btn.addEventListener('click',()=>applyIdea(idea,btn)); ideasWrap.appendChild(btn);
  });

  const panel=document.createElement('aside'); panel.className='companion-panel'; panel.setAttribute('aria-live','polite');
  document.body.appendChild(panel);
  function jumps(arr){
    if(!arr || !arr.length) return '<span class="companion-copy">—</span>';
    return arr.map(x=>'<button class="companion-jump" data-jump="'+x.replace(/"/g,'&quot;')+'">'+x+'</button>').join(' ');
  }
  function openCompanion(eser){
    const c=companion[eser]; if(!c) return false;
    panel.innerHTML='<button class="companion-close" aria-label="Kapat">×</button>'+
      '<div class="companion-kicker">Companion Card</div><h2>'+eser+'</h2>'+
      '<div class="companion-block"><div class="companion-label">Neden önemli?</div><div class="companion-copy">'+c.nedenOnemli+'</div></div>'+
      '<div class="companion-block"><div class="companion-label">Ana fikir</div><div class="companion-copy companion-main">'+c.anaFikir+'</div></div>'+
      '<div class="companion-block"><div class="companion-label">Önce</div><div class="companion-tags">'+jumps(c.once)+'</div></div>'+
      '<div class="companion-block"><div class="companion-label">Sonra</div><div class="companion-tags">'+jumps(c.sonra)+'</div></div>'+
      '<div class="companion-block"><div class="companion-label">Fikirler</div><div class="companion-tags">'+(c.fikirler||[]).map(x=>'<span class="companion-tag">'+x+'</span>').join('')+'</div></div>'+
      '<div class="companion-block"><div class="companion-label">Zorluk</div><div class="difficulty">'+('●'.repeat(c.zorluk||1)+'○'.repeat(Math.max(0,5-(c.zorluk||1))))+'</div></div>'+
      '<div class="companion-hint">Haritadaki eser başlığına tıklayarak bu kartı açabilirsin.</div>';
    panel.classList.add('open');
    panel.querySelector('.companion-close').addEventListener('click',()=>panel.classList.remove('open'));
    panel.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>{
      const n=document.querySelector('.node[data-eser="'+CSS.escape(b.dataset.jump)+'"]');
      if(n){ panel.classList.remove('open'); n.scrollIntoView({behavior:'smooth',block:'center',inline:'center'}); setTimeout(()=>openCompanion(b.dataset.jump),350); }
    }));
    return true;
  }

  document.addEventListener('click',e=>{
    const title=e.target.closest('.node .t');
    if(!title) return;
    const node=title.closest('.node');
    if(node && companion[node.dataset.eser]){
      e.preventDefault(); e.stopImmediatePropagation(); openCompanion(node.dataset.eser);
    }
  },true);
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') panel.classList.remove('open'); });

  const input=document.getElementById('searchInput');
  if(input){
    input.placeholder='Eser, yazar veya fikir ara…';
    input.addEventListener('input',()=>{
      const q=input.value.trim().toLocaleLowerCase('tr-TR');
      if(!q) return;
      const idea=fikirHatlari.find(i=>i.label.toLocaleLowerCase('tr-TR').includes(q));
      if(idea){
        const btn=Array.from(ideasWrap.children)[fikirHatlari.indexOf(idea)];
        applyIdea(idea,btn);
      }
    });
  }
})();
