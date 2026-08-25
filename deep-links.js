(function(){
 const qs=()=>new URLSearchParams(location.search);
 const norm=s=>String(s||'').toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 function periodIndex(){const p=qs().get('donem');if(p===null)return null;const n=parseInt(p,10);return Number.isFinite(n)?Math.max(0,Math.min(9,n-1)):null}
 function mapColumn(i){const east=qs().get('katman')==='dogu';const eastMap=[0,1,1,2,2,3,4,6,8,9];return east?eastMap[i]:i}
 function focusPeriod(){const i=periodIndex();if(i===null)return;let tries=0;const go=()=>{const sc=document.querySelector('.scroll'),map=document.getElementById('map'),cols=[...document.querySelectorAll('.col-title')];if((!sc||!map||cols.length<10)&&tries++<120)return setTimeout(go,80);const ci=mapColumn(i),c=cols[ci];if(!c)return;const isEast=qs().get('katman')==='dogu',mapRect=map.getBoundingClientRect(),cRect=c.getBoundingClientRect(),scale=map.offsetWidth?mapRect.width/map.offsetWidth:1;const targetX=Math.max(0,(cRect.left-mapRect.left)/Math.max(scale,.01)-sc.clientWidth*.18);let nearby=[];
 sc.scrollTo({left:targetX,behavior:'smooth'});
 if(isEast){
   const eastNodes=[...document.querySelectorAll('.node.tier-Dogu')];
   nearby=eastNodes.filter(n=>{const r=n.getBoundingClientRect();return Math.abs(r.left-cRect.left)<260});
   const anchor=nearby[0]||eastNodes[0]||[...document.querySelectorAll('.section-title')].find(x=>/Doğu Düşüncesi/i.test(x.textContent));
   if(anchor){setTimeout(()=>{const r=anchor.getBoundingClientRect();const y=window.scrollY+r.top-Math.max(110,document.querySelector('header')?.offsetHeight||0)-24;window.scrollTo({top:Math.max(0,y),behavior:'smooth'})},420)}
 } else {
   nearby=[...document.querySelectorAll('.node')].filter(n=>{const r=n.getBoundingClientRect();return Math.abs(r.left-cRect.left)<220&&r.top<window.innerHeight+900});
 }
 c.classList.add('deep-period-focus');nearby.forEach(n=>n.classList.add('deep-period-node'));setTimeout(()=>{c.classList.remove('deep-period-focus');nearby.forEach(n=>n.classList.remove('deep-period-node'))},3800)};go()}
 function openWork(){const wanted=qs().get('eser');if(!wanted)return;let tries=0;const go=()=>{const nodes=[...document.querySelectorAll('.node[data-eser]')];if(!nodes.length&&tries++<100)return setTimeout(go,80);const hit=nodes.find(n=>norm(n.dataset.eser)===norm(wanted)||norm(n.dataset.eser).includes(norm(wanted)));if(!hit)return;hit.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});hit.classList.add('deep-work-focus');setTimeout(()=>hit.click(),450);setTimeout(()=>hit.classList.remove('deep-work-focus'),3500)};go()}
 function shareState(){document.addEventListener('click',e=>{const n=e.target.closest('.node[data-eser]');if(!n)return;const u=new URL(location.href);u.searchParams.set('eser',norm(n.dataset.eser));history.replaceState({eser:n.dataset.eser},'',u)},true);document.addEventListener('click',e=>{if(!e.target.closest('.v5-close'))return;const u=new URL(location.href);u.searchParams.delete('eser');history.replaceState({},'',u)},true)}
 const css=document.createElement('style');css.textContent='.deep-period-focus{color:var(--gold)!important;text-shadow:0 0 18px color-mix(in srgb,var(--gold) 35%,transparent);transition:.25s}.node.deep-period-node{box-shadow:0 0 0 1px color-mix(in srgb,var(--gold) 70%,transparent),0 0 20px color-mix(in srgb,var(--gold) 20%,transparent)!important;transition:.3s}.deep-work-focus{outline:2px solid var(--gold)!important;outline-offset:5px;box-shadow:0 0 28px color-mix(in srgb,var(--gold) 35%,transparent)!important;z-index:30!important}';document.head.appendChild(css);
 function init(){focusPeriod();openWork();shareState()}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();