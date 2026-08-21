/* Add FEL/TAR/SİY/PSİ/SAN badges to Doğu reading cards, matching Western cards. */
(function(){
  const labels={felsefe:'FEL',tarih:'TAR',siyaset:'SİY',davranis:'PSİ',sanat:'SAN'};
  async function applyDoguBadges(){
    try{
      const data=await fetch('./data/dogu.json?v=20260821-dogu-badges').then(r=>r.json());
      data.forEach(item=>{
        if(!item.kategori || !labels[item.kategori]) return;
        const nodes=[...document.querySelectorAll('.node[data-eser]')];
        const node=nodes.find(n=>n.dataset.eser===item.eser);
        if(!node || node.querySelector('.row1 > .tag')) return;
        const row=node.querySelector('.row1');
        if(!row) return;
        const tag=document.createElement('span');
        tag.className='tag tag-'+item.kategori;
        tag.textContent=labels[item.kategori];
        row.appendChild(tag);
      });
    }catch(e){}
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(applyDoguBadges,250));
  else setTimeout(applyDoguBadges,250);
  setTimeout(applyDoguBadges,1000);
})();
