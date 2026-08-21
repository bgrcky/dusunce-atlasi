(function(){
  const west=[
    ['İnsanı Anlamak','İyi yaşam nedir?','Atina · Agora · Erdem'],['Devleti Anlamak','Birlikte nasıl yaşarız?','Polis · Forum · Yurttaşlık'],['İnanç ve Akıl','Akıl ile vahiy nasıl yan yana gelir?','Katedral · Elyazması · Kozmos'],['Modern İnsanın Doğuşu','İnsan yeniden merkeze gelirse ne değişir?','Floransa · Perspektif · Matbaa'],['Toplum Sözleşmesi','Egemenlik kime aittir?','Taht · Metin · Yurttaş'],['Ekonomi ve Sınıf','Üretim insanı nasıl dönüştürür?','Fabrika · Tren · Saat'],['Modernitenin Krizi','Akla olan güven kırılırsa ne kalır?','Ayna · Metropol · Parçalanma'],['Savaş, Anlam ve Özgürlük','Yıkımdan sonra anlamı kim kurar?','Harabe · Boşluk · Birey'],['Akıl, Risk ve Davranış','Gerçekten rasyonel miyiz?','Karar · Olasılık · Zihin'],['Sanat ve Görme','Ne görüyoruz; bize ne gösteriliyor?','Göz · Çerçeve · Ekran']
  ];
  const east=[
    ['Düzen ve Erdem','İyi insan ilişkiler içinde nasıl kurulur?','Qufu · Avlu · Ritüel'],['Yol ve Doğa','İnsan doğayla uyumu nasıl bulur?','Dağ · Sis · Nehir'],['Benlik ve Kurtuluş','Benlik nedir; ondan özgürleşmek mümkün mü?','Bodhi · Lotus · Döngü'],['Akıl, Vahiy ve Hikmet','Bilgi gelenekler arasında nasıl taşınır?','Bağdat · Kütüphane · Yıldızlar'],['İçsel Yol','Hakikate giden yol dışarıda mı içeride mi?','Gece · Yolcu · Işık'],['Toplum ve Düzen','Bilgi, iktidar ve gündelik hayat nasıl birleşir?','Şehir · Medrese · Pazar'],['Gelenek ve Modernleşme','Eski dünya yeni teknolojiyle nasıl karşılaşır?','Liman · Ray · Telgraf'],['Doğu Modernitesi','Modern olmak Batılılaşmak mıdır?','Gazete · Üniversite · Tren'],['Kimlik ve Sömürge Sonrası','Kendini başkasının bakışından nasıl geri alırsın?','Harita · Sınır · Kimlik'],['Küresel Doğu','Tek merkezli dünya sona erdiğinde ne olur?','Metropol · Ağ · Göç']
  ];
  function isEast(){return document.getElementById('eastBtn') && document.getElementById('eastBtn').classList.contains('active')}
  function art(i,eastLayer){
    const motifs=eastLayer?['庭','道','◯','✦','⋯','⌂','⇄','▤','◇','◎']:['Ω','POLIS','✟','△','§','⚙','◈','□','⌁','◉'];
    const m=motifs[i]||'◎';
    return '<svg viewBox="0 0 900 260" aria-hidden="true"><g class="pw-soft"><line x1="40" y1="210" x2="860" y2="210"/><line x1="150" y1="40" x2="150" y2="225"/><line x1="450" y1="25" x2="450" y2="230"/><line x1="750" y1="45" x2="750" y2="225"/><circle cx="450" cy="130" r="92"/></g><text x="450" y="163" text-anchor="middle" class="pw-symbol">'+m+'</text><path class="pw-line" d="M70 205 C210 70 310 190 450 100 S700 190 830 70"/><circle class="pw-dot" cx="70" cy="205" r="5"/><circle class="pw-dot" cx="450" cy="100" r="5"/><circle class="pw-dot" cx="830" cy="70" r="5"/></svg>';
  }
  function init(){
    const periods=document.getElementById('periods');
    if(!periods) return false;
    let panel=document.getElementById('periodWorldVisible');
    if(!panel){
      panel=document.createElement('section');
      panel.id='periodWorldVisible';
      panel.className='period-world-visible';
      panel.innerHTML='<div class="pw-copy"><div class="pw-kicker">DÖNEMİN DÜNYASI</div><div class="pw-index">I</div><h3></h3><p></p><div class="pw-meta"></div><div class="pw-hint">Aşağıdaki dönemlerin üzerine gel veya tıkla.</div></div><div class="pw-art"></div>';
      periods.parentNode.insertBefore(panel,periods);
    }
    function paint(i){
      const e=isEast(), data=e?east:west, d=data[Math.max(0,Math.min(9,i))];
      panel.classList.remove('pw-change'); void panel.offsetWidth; panel.classList.add('pw-change');
      panel.querySelector('.pw-index').textContent=['I','II','III','IV','V','VI','VII','VIII','IX','X'][i]||String(i+1);
      panel.querySelector('h3').textContent=d[0]; panel.querySelector('p').textContent=d[1]; panel.querySelector('.pw-meta').textContent=d[2]; panel.querySelector('.pw-art').innerHTML=art(i,e);
      Array.from(periods.querySelectorAll('.period')).forEach(function(p,j){p.classList.toggle('pw-active',j===i)});
    }
    function bind(){Array.from(periods.querySelectorAll('.period')).forEach(function(p,i){p.onmouseenter=function(){paint(i)};p.onclick=function(){paint(i)}})}
    bind(); paint(0);
    new MutationObserver(function(){bind()}).observe(periods,{childList:true});
    ['westBtn','eastBtn'].forEach(function(id){const b=document.getElementById(id);if(b)b.addEventListener('click',function(){setTimeout(function(){bind();paint(0)},60)})});
    return true;
  }
  let tries=0; (function wait(){if(!init() && tries++<200)setTimeout(wait,50)})();
})();