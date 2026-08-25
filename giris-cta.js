(function(){
  function enhance(){
    const link=document.getElementById('atlasLink');
    if(!link)return false;
    function currentPeriod(){const open=document.querySelector('.period.inline-open');if(open){const cards=[...document.querySelectorAll('#periods .period')];const i=cards.indexOf(open);if(i>=0)return i+1}return null}
    function paint(){
      const isEast=(new URLSearchParams(location.search).get('katman')==='dogu') || document.getElementById('eastBtn')?.classList.contains('active');
      const title=isEast?'Doğu Düşüncesi Haritasını Aç':'Batı Düşüncesi Haritasını Aç';
      const sub='Eserleri, dönemleri ve bağlantıları harita üzerinde keşfet.';
      const p=currentPeriod();
      link.href='./harita.html?katman='+(isEast?'dogu':'western')+(p?'&donem='+p:'');
      link.innerHTML='<span class="cta-copy"><span class="cta-title">'+title+'</span><span class="cta-sub">'+sub+'</span></span>';
      link.setAttribute('aria-label',title);
    }
    paint();
    document.getElementById('periods')?.addEventListener('click',()=>setTimeout(paint,0));
    const w=document.getElementById('westBtn'),e=document.getElementById('eastBtn');
    if(w)w.addEventListener('click',()=>setTimeout(paint,0));
    if(e)e.addEventListener('click',()=>setTimeout(paint,0));
    addEventListener('popstate',()=>setTimeout(paint,0));
    return true;
  }
  let n=0;(function wait(){if(!enhance()&&n++<80)setTimeout(wait,50)})();
})();
