(function(){
  const periodData=[
    {title:'I. İnsanı Anlamak',question:'İyi bir hayat nasıl yaşanır?',context:'Antik Yunan ve Roma’da felsefe önce insanın nasıl yaşaması gerektiği sorusuyla başlar.',thinkers:['Sokrates','Aristoteles','Epiktetos'],works:["Sokrates'in Savunması","Nikomakhos'a Etik","El Kitabı"],shift:'Mitik açıklamadan sorgulanan, gerekçelendirilen ve gündelik hayata uygulanabilen bir iyi yaşam fikrine geçilir.'},
    {title:'II. Devlet ve Toplum',question:'İyi insan ile iyi toplum arasındaki ilişki nedir?',context:'Polis, yurttaşlık ve hukuk fikri bireysel erdemi siyasal düzen sorununa bağlar.',thinkers:['Platon','Aristoteles','Cicero'],works:['Devlet','Politika','Yasalar Üzerine'],shift:'Ahlak sorusu kamusal düzene taşınır; adalet artık yalnız bireyin değil kurumların da meselesidir.'},
    {title:'III. İnanç ve Orta Çağ',question:'Akıl ile inanç nasıl birlikte çalışır?',context:'Antik miras tek tanrılı dinlerin teolojisiyle yeniden yorumlanır; hakikat, vahiy ve akıl arasındaki ilişki merkeze gelir.',thinkers:['Augustinus','Boethius','Aquinas'],works:['İtiraflar','Felsefenin Tesellisi','Summa Theologiae'],shift:'Felsefi soru dünyevi iyi yaşamdan kurtuluş, ilahi düzen ve inancın akılla temellendirilmesine genişler.'},
    {title:'IV. Rönesans ve Güç',question:'İnsan dünyayı kendi aklıyla yeniden kurabilir mi?',context:'Rönesans hümanizmi, Reform ve yeni siyasal gerçeklikler insanı yeniden merkeze taşır.',thinkers:['Machiavelli','Montaigne','Erasmus'],works:['Prens','Denemeler','Deliliğe Övgü'],shift:'Otoriteye dayalı kesinlik çözülür; siyaset, benlik ve bilgi daha dünyevi ve eleştirel biçimde ele alınır.'},
    {title:'V. Toplum Sözleşmesi',question:'Siyasal iktidar meşruiyetini nereden alır?',context:'Modern devlet, doğal haklar ve egemenlik tartışmaları eski düzenin yerini yeni bir siyasal sözlüğe bırakır.',thinkers:['Hobbes','Locke','Rousseau'],works:['Leviathan','Yönetim Üzerine İki İnceleme','Toplum Sözleşmesi'],shift:'İktidarın kaynağı gelenekten bireylerin hakları, rızası ve sözleşmesine doğru kayar.'},
    {title:'VI. Piyasa ve Modern Toplum',question:'Ekonomi toplumu nasıl dönüştürür?',context:'Sanayi, ticaret ve sınıf ilişkileri modern toplumsal yapının belirleyici güçleri haline gelir.',thinkers:['Smith','Marx','Mill'],works:['Ulusların Zenginliği','Komünist Manifesto','Özgürlük Üzerine'],shift:'Toplumsal düzen yalnız hukukla değil üretim, emek, piyasa ve sınıf ilişkileriyle açıklanmaya başlanır.'},
    {title:'VII. Kesinliğin Kırılması',question:'İnsan kendisi hakkında ne kadar yanılabilir?',context:'19. yüzyıl sonu ve 20. yüzyıl başında akıl, ahlak ve özneye duyulan güven radikal biçimde sarsılır.',thinkers:['Nietzsche','Freud','Kierkegaard'],works:['Ahlakın Soykütüğü','Rüyaların Yorumu','Korku ve Titreme'],shift:'Özne artık bütünüyle rasyonel ve şeffaf kabul edilmez; bilinçdışı, güç ve varoluş çatışmaları öne çıkar.'},
    {title:'VIII. Anlam Yeniden Aranır',question:'Kesinlik çöktüğünde insan nasıl anlam kurar?',context:'Savaşlar, totalitarizm ve modern yabancılaşma özgürlük, sorumluluk ve anlam sorunlarını keskinleştirir.',thinkers:['Sartre','Camus','Arendt'],works:['Varlık ve Hiçlik','Sisifos Söyleni','İnsanlık Durumu'],shift:'Hazır anlamların yerini seçim, sorumluluk, eylem ve dünyada birlikte yaşama soruları alır.'},
    {title:'IX. Rasyonel İnsan Çözülür',question:'Kararlarımız gerçekten rasyonel mi?',context:'Psikoloji, davranış bilimleri ve karar teorisi insan davranışındaki önyargıları ve sistematik sapmaları görünür kılar.',thinkers:['Kahneman','Tversky','Simon'],works:['Hızlı ve Yavaş Düşünme','Judgment under Uncertainty','Administrative Behavior'],shift:'Soyut rasyonel birey modeli, sınırlı akıl ve davranışsal önyargılarla yeniden tanımlanır.'},
    {title:'X. Bakışın Kendisi Sorgulanır',question:'Gerçekliği kim, hangi bakışla temsil ediyor?',context:'Çağdaş düşünce temsil, medya, kimlik ve bilgi üretimindeki iktidar ilişkilerini sorgular.',thinkers:['Berger','Said','Foucault'],works:['Görme Biçimleri','Oryantalizm','Bilginin Arkeolojisi'],shift:'Düşüncenin konusu yalnız dünya değil, dünyayı hangi çerçevelerle gördüğümüz ve anlattığımız olur.'}
  ];

  const chains=[
    ["Sokrates'in Savunması","Nikomakhos'a Etik","El Kitabı","İtiraflar"],
    ['Devlet','Politika','Leviathan','Yönetim Üzerine İki İnceleme','Toplum Sözleşmesi'],
    ['İtiraflar','Felsefenin Tesellisi','Prens','Denemeler'],
    ['Prens','Leviathan','Toplum Sözleşmesi','Özgürlük Üzerine'],
    ['Ahlakın Soykütüğü','Rüyaların Yorumu','Varlık ve Hiçlik','Sisifos Söyleni'],
    ['Özgürlük Üzerine','Varlık ve Hiçlik','İnsanlık Durumu','İki Özgürlük Kavramı'],
    ['Görme Biçimleri','Oryantalizm','Bilginin Arkeolojisi']
  ];

  const norm=s=>String(s||'').toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i').replace(/[^a-z0-9]+/g,' ').trim();
  const getNodes=()=>[...document.querySelectorAll('.node[data-eser]')];
  const titleOf=n=>n?.querySelector('.t')?.textContent?.trim()||n?.dataset?.eser||'';
  const findNode=name=>getNodes().find(n=>norm(titleOf(n))===norm(name)||norm(n.dataset.eser)===norm(name));

  function openNode(name){const n=findNode(name);if(!n)return; n.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});setTimeout(()=>{const t=n.querySelector('.t');(t||n).dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}))},380)}

  function linksFor(title){
    const chain=chains.find(c=>c.some(x=>norm(x)===norm(title)));
    if(chain){const i=chain.findIndex(x=>norm(x)===norm(title));return {prev:i>0?chain[i-1]:null,next:i<chain.length-1?chain[i+1]:null,chain}}
    const nodes=getNodes().filter(n=>!n.classList.contains('tier-Muzik')&&!n.classList.contains('tier-Mimari')&&!n.classList.contains('tier-Roman'));
    const i=nodes.findIndex(n=>norm(titleOf(n))===norm(title));
    return {prev:i>0?titleOf(nodes[i-1]):null,next:i>=0&&i<nodes.length-1?titleOf(nodes[i+1]):null,chain:[]};
  }

  function decorateCompanion(){
    const panel=document.querySelector('.v5-card.open');if(!panel||panel.querySelector('.idea-bridge'))return;
    const h=panel.querySelector('h2');if(!h)return;const title=h.textContent.trim();const rel=linksFor(title);if(!rel.prev&&!rel.next)return;
    const sec=document.createElement('section');sec.className='idea-bridge';
    sec.innerHTML='<div class="idea-k">FİKİR BAĞLANTILARI</div><div class="idea-lead">Bu eser düşünce zincirinde nereden geliyor, nereye gidiyor?</div><div class="idea-grid">'+
      (rel.prev?'<button type="button" data-idea="'+rel.prev.replace(/"/g,'&quot;')+'"><span>← ÖNCE</span><b>'+rel.prev+'</b><em>Bu fikrin bıraktığı problem</em></button>':'')+
      (rel.next?'<button type="button" data-idea="'+rel.next.replace(/"/g,'&quot;')+'"><span>SONRA →</span><b>'+rel.next+'</b><em>Bu fikrin dönüştüğü yer</em></button>':'')+'</div>';
    panel.appendChild(sec);
  }

  function periodIndexForHeading(el){return [...document.querySelectorAll('.col-title')].indexOf(el)}
  function openPeriod(i){const d=periodData[i];if(!d)return;let ov=document.querySelector('.period-explorer');if(!ov){ov=document.createElement('div');ov.className='period-explorer';document.body.appendChild(ov)}
    ov.innerHTML='<div class="period-sheet"><button class="period-close">×</button><div class="period-k">DÖNEMİ KEŞFET · '+String(i+1).padStart(2,'0')+'</div><h2>'+d.title+'</h2><p class="period-q">'+d.question+'</p><div class="period-cols"><div><label>BAĞLAM</label><p>'+d.context+'</p></div><div><label>NE DEĞİŞTİ?</label><p>'+d.shift+'</p></div></div><div class="period-meta"><div><label>ANA DÜŞÜNÜRLER</label><p>'+d.thinkers.join(' · ')+'</p></div><div><label>TEMEL ESERLER</label><div class="period-worklinks">'+d.works.map(w=>'<button type="button" data-period-work="'+w.replace(/"/g,'&quot;')+'">'+w+' →</button>').join('')+'</div></div></div></div>';
    requestAnimationFrame(()=>ov.classList.add('open'));
  }

  function addPeriodCtas(){[...document.querySelectorAll('.col-title')].slice(0,10).forEach((h,i)=>{const p=h.parentElement;if(!p||p.querySelector('.period-explore-btn'))return;const b=document.createElement('button');b.type='button';b.className='period-explore-btn';b.textContent='Dönemi keşfet →';b.dataset.period=String(i);p.appendChild(b)})}

  document.addEventListener('click',e=>{
    const idea=e.target.closest('[data-idea]');if(idea){e.preventDefault();document.querySelector('.v5-card.open .v5-close')?.click();openNode(idea.dataset.idea);return}
    const pb=e.target.closest('.period-explore-btn');if(pb){e.preventDefault();openPeriod(Number(pb.dataset.period));return}
    const pw=e.target.closest('[data-period-work]');if(pw){document.querySelector('.period-explorer')?.classList.remove('open');setTimeout(()=>openNode(pw.dataset.periodWork),180);return}
    if(e.target.closest('.period-close')||e.target.classList.contains('period-explorer'))document.querySelector('.period-explorer')?.classList.remove('open');
    if(e.target.closest('.node'))setTimeout(decorateCompanion,100);
  });

  let tries=0;const init=()=>{addPeriodCtas();decorateCompanion();if(document.querySelectorAll('.col-title').length<10&&tries++<30)setTimeout(init,250)};init();
})();