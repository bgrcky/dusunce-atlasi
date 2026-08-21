(function(){
  function enhance(){
    const link=document.getElementById('atlasLink');
    if(!link)return false;
    function paint(){
      const isEast=(new URLSearchParams(location.search).get('katman')==='dogu') || document.getElementById('eastBtn')?.classList.contains('active');
      const title=isEast?'Doğu Düşüncesi Haritasını Aç':'Batı Düşüncesi Haritasını Aç';
      const sub=isEast?'Eserleri, dönemleri ve bağlantıları harita üzerinde keşfet.':'Eserleri, dönemleri ve bağlantıları harita üzerinde keşfet.';
      link.innerHTML='<span class="cta-copy"><span class="cta-title">'+title+'</span><span class="cta-sub">'+sub+'</span></span>';
      link.setAttribute('aria-label',title);
    }
    paint();
    const w=document.getElementById('westBtn'),e=document.getElementById('eastBtn');
    if(w)w.addEventListener('click',()=>setTimeout(paint,0));
    if(e)e.addEventListener('click',()=>setTimeout(paint,0));
    addEventListener('popstate',()=>setTimeout(paint,0));
    return true;
  }
  let n=0;(function wait(){if(!enhance()&&n++<80)setTimeout(wait,50)})();
})();
