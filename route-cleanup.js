(function(){
  function clearRouteArtifacts(){
    document.querySelectorAll('.v5-svg').forEach(el=>el.remove());
    document.querySelectorAll('.node.v5-dim,.node.v5-hit').forEach(n=>n.classList.remove('v5-dim','v5-hit'));
  }

  function clearIfIdle(){
    if(!document.querySelector('.v5-path')) clearRouteArtifacts();
  }

  // Sayfa ilk açıldığında önceki/geç yüklenen bir rota SVG artefaktı kalmasın.
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',()=>setTimeout(clearIfIdle,0),{once:true});
  }else{
    setTimeout(clearIfIdle,0);
  }

  // Rota paneli DOM'dan kalktığı anda ona ait vurgu çizgileri de kalkmalı.
  const observer=new MutationObserver(mutations=>{
    let routeRemoved=false;
    let orphanSvgAdded=false;
    mutations.forEach(m=>{
      m.removedNodes.forEach(n=>{
        if(n.nodeType===1 && (n.matches?.('.v5-path') || n.querySelector?.('.v5-path'))) routeRemoved=true;
      });
      m.addedNodes.forEach(n=>{
        if(n.nodeType===1 && (n.matches?.('.v5-svg') || n.querySelector?.('.v5-svg'))) orphanSvgAdded=true;
      });
    });
    if(routeRemoved || orphanSvgAdded) requestAnimationFrame(clearIfIdle);
  });
  observer.observe(document.body,{childList:true,subtree:true});

  // Bütün kapatma yollarını güvenceye al.
  document.addEventListener('click',e=>{
    if(e.target.closest?.('.route-close') || e.target.closest?.('#v5close')){
      setTimeout(clearIfIdle,0);
    }
  },true);
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape') setTimeout(clearIfIdle,0);
  });

  // Sekme geri geldiğinde de idle durumda hayalet çizgi bırakma.
  document.addEventListener('visibilitychange',()=>{
    if(!document.hidden) setTimeout(clearIfIdle,0);
  });
})();
