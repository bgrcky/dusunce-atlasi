(function(){
  function lockLegend(){
    const d=document.querySelector('details.legend-toggle');
    if(!d) return false;
    d.open=true;
    const s=d.querySelector('summary');
    if(s){
      s.textContent='Lejant — etiketler';
      s.addEventListener('click',function(e){e.preventDefault();d.open=true;});
    }
    return true;
  }
  if(!lockLegend()){
    let n=0;const t=setInterval(function(){if(lockLegend()||n++>40)clearInterval(t);},100);
  }
})();
