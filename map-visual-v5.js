(function(){
 function init(){
  const sc=document.querySelector('.scroll'),eras=document.getElementById('navEras'),nav=document.getElementById('navPanel');
  if(!sc||!eras||!nav)return false;
  const btns=[...eras.querySelectorAll('button')];
  if(btns.length){
   const mark=()=>{
    const col=Math.max(0,Math.min(btns.length-1,Math.round(sc.scrollLeft/292)));
    btns.forEach((b,i)=>{b.classList.toggle('era-current',i===col);b.setAttribute('aria-current',i===col?'true':'false')});
   };
   const style=document.createElement('style');style.textContent='#navEras .era-current{background:color-mix(in srgb,var(--gold) 18%,var(--bg))!important;border-color:var(--gold)!important;color:var(--gold)!important;box-shadow:inset 0 -2px 0 var(--gold)}';document.head.appendChild(style);
   sc.addEventListener('scroll',mark,{passive:true});mark();
  }
  const toggle=document.getElementById('navToggle');if(toggle)toggle.title='Atlas navigasyonunu aç / kapat';
  return true;
 }
 let n=0;(function wait(){if(!init()&&n++<120)setTimeout(wait,50)})();
})();
