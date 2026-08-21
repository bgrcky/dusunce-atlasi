(function(){
const west=[
['İnsanı Anlamak','İyi yaşam nedir?','Atina · Agora · Erdem','agora'],
['Devleti Anlamak','Birlikte nasıl yaşarız?','Polis · Forum · Yurttaşlık','forum'],
['İnanç ve Akıl','Akıl ile vahiy nasıl yan yana gelir?','Katedral · Elyazması · Kozmos','cathedral'],
['Modern İnsanın Doğuşu','İnsan yeniden merkeze gelirse ne değişir?','Floransa · Perspektif · Matbaa','renaissance'],
['Toplum Sözleşmesi','Egemenlik kime aittir?','Taht · Metin · Yurttaş','contract'],
['Ekonomi ve Sınıf','Üretim insanı nasıl dönüştürür?','Fabrika · Tren · Saat','industry'],
['Modernitenin Krizi','Akla olan güven kırılırsa ne kalır?','Ayna · Metropol · Parçalanma','crisis'],
['Savaş, Anlam ve Özgürlük','Yıkımdan sonra anlamı kim kurar?','Harabe · Boşluk · Birey','war'],
['Akıl, Risk ve Davranış','Gerçekten rasyonel miyiz?','Karar · Olasılık · Zihin','risk'],
['Sanat ve Görme','Ne görüyoruz; bize ne gösteriliyor?','Göz · Çerçeve · Ekran','vision']
];
const east=[
['Düzen ve Erdem','İyi insan ilişkiler içinde nasıl kurulur?','Qufu · Avlu · Ritüel','courtyard'],
['Yol ve Doğa','İnsan doğayla uyumu nasıl bulur?','Dağ · Sis · Nehir','tao'],
['Benlik ve Kurtuluş','Benlik nedir; ondan özgürleşmek mümkün mü?','Bodhi · Lotus · Döngü','buddha'],
['Akıl, Vahiy ve Hikmet','Bilgi gelenekler arasında nasıl taşınır?','Bağdat · Kütüphane · Yıldızlar','baghdad'],
['İçsel Yol','Hakikate giden yol dışarıda mı içeride mi?','Gece · Yolcu · Işık','inner'],
['Toplum ve Düzen','Bilgi, iktidar ve gündelik hayat nasıl birleşir?','Şehir · Medrese · Pazar','islamcity'],
['Gelenek ve Modernleşme','Eski dünya yeni teknolojiyle nasıl karşılaşır?','Liman · Ray · Telgraf','modernize'],
['Doğu Modernitesi','Modern olmak Batılılaşmak mıdır?','Gazete · Üniversite · Tren','eastmodern'],
['Kimlik ve Sömürge Sonrası','Kendini başkasının bakışından nasıl geri alırsın?','Harita · Sınır · Kimlik','postcolonial'],
['Küresel Doğu','Tek merkezli dünya sona erdiğinde ne olur?','Metropol · Ağ · Göç','global']
];
function svg(type){const head='<svg viewBox="0 0 520 330" aria-hidden="true">';const tail='</svg>';const line=(x1,y1,x2,y2,c='stroke')=>`<line class="${c}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;const circ=(x,y,r,c='stroke')=>`<circle class="${c}" cx="${x}" cy="${y}" r="${r}"/>`;const rect=(x,y,w,h,c='stroke')=>`<rect class="${c}" x="${x}" y="${y}" width="${w}" height="${h}"/>`;let b='';
switch(type){
case'agora': b+=line(40,265,480,265)+line(90,260,90,150)+line(145,260,145,150)+line(200,260,200,150)+line(255,260,255,150)+line(310,260,310,150)+line(365,260,365,150)+line(420,260,420,150)+line(75,150,435,150)+line(105,115,260,55,'soft')+line(260,55,415,115,'soft')+circ(260,85,38,'soft')+circ(260,85,6,'dot');break;
case'forum': b+=rect(70,135,380,130)+rect(105,100,90,35)+rect(225,80,70,55)+rect(325,105,90,30)+line(260,30,260,275,'soft')+circ(260,160,75,'soft')+circ(260,160,4,'dot');for(let i=0;i<9;i++)b+=circ(110+i*38,245,5,'dot');break;
case'cathedral': b+=`<path class="stroke" d="M90 270V150Q90 75 165 75Q240 75 240 150V270M280 270V135Q280 45 370 45Q460 45 460 135V270"/>`+circ(370,130,38,'soft')+line(332,130,408,130,'soft')+line(370,92,370,168,'soft')+rect(110,190,95,55,'soft')+line(120,200,195,235,'soft');break;
case'renaissance': b+=`<path class="stroke" d="M55 270L150 120L245 270M275 270L360 105L455 270"/>`+line(55,270,455,270)+line(255,30,255,285,'soft')+line(20,285,255,160,'soft')+line(500,285,255,160,'soft')+rect(180,185,150,65,'soft')+circ(255,145,30,'soft');break;
case'contract': b+=rect(100,170,320,90)+line(125,195,395,195,'soft')+line(125,215,365,215,'soft')+line(125,235,335,235,'soft')+`<path class="stroke" d="M185 135L215 80L245 135M275 135L305 80L335 135"/>`;for(let i=0;i<9;i++)b+=circ(110+i*38,290,6,'dot');break;
case'industry': b+=rect(60,170,370,95)+rect(110,110,34,60)+rect(220,90,40,80)+rect(340,120,36,50)+line(45,275,475,275)+line(70,300,455,300,'soft')+circ(140,300,18,'stroke')+circ(350,300,18,'stroke')+`<path class="soft" d="M125 100C100 75 155 60 135 30M240 80C210 50 270 40 250 15M355 110C330 85 385 70 365 40"/>`;break;
case'crisis': b+=`<path class="stroke" d="M260 45L205 100L230 145L185 195L235 285M260 45L315 95L290 140L335 190L285 285M205 100L315 95M230 145L290 140M185 195L335 190"/>`+circ(260,160,120,'soft')+line(120,290,400,290,'soft');break;
case'war': b+=`<path class="stroke" d="M60 270L110 180L155 235L210 130L260 250L330 150L385 225L455 165L490 270"/>`+rect(220,230,65,40,'soft')+line(252,230,252,190,'soft')+circ(252,180,8,'dot')+line(30,290,490,290,'soft');break;
case'risk': b+=circ(145,150,72,'stroke')+`<path class="stroke" d="M145 78C185 95 215 115 235 145C205 160 195 190 185 220C155 205 125 205 95 220C90 185 70 165 55 145C80 120 110 95 145 78Z"/>`+line(255,160,470,160,'soft')+line(330,160,330,95,'soft')+line(330,160,330,235,'soft')+circ(330,95,5,'dot')+circ(330,235,5,'dot')+circ(470,160,5,'dot');break;
case'vision': b+=`<path class="stroke" d="M70 165Q165 80 260 165Q165 250 70 165Z"/>`+circ(165,165,38,'stroke')+circ(165,165,8,'dot')+rect(300,70,145,95,'soft')+rect(320,115,145,95,'soft')+rect(285,160,145,95,'soft');break;
case'courtyard': b+=rect(75,110,370,155)+line(75,110,150,60)+line(445,110,370,60)+line(150,60,370,60)+rect(180,155,160,110,'soft');for(let i=0;i<7;i++)b+=circ(130+i*44,290,5,'dot');break;
case'tao': b+=`<path class="stroke" d="M30 255C95 185 120 210 175 145C220 95 260 130 295 95C345 45 395 70 490 25"/>`+`<path class="soft" d="M20 285C120 250 175 275 250 230C330 185 395 210 500 175"/>`+circ(160,225,8,'dot')+`<path class="stroke" d="M360 95C330 120 330 155 360 180C390 155 390 120 360 95Z"/>`;break;
case'buddha': b+=circ(260,150,95,'soft')+circ(260,150,60,'soft')+circ(260,150,25,'stroke')+`<path class="stroke" d="M260 245C225 205 200 220 180 255C215 255 240 275 260 300C280 275 305 255 340 255C320 220 295 205 260 245Z"/>`+line(260,55,260,245,'soft');break;
case'baghdad': b+=`<path class="stroke" d="M70 270V175Q70 115 130 115Q190 115 190 175V270M220 270V150Q220 75 295 75Q370 75 370 150V270M395 270V185Q395 135 445 135Q495 135 495 185V270"/>`+circ(310,80,70,'soft')+line(310,10,310,150,'soft')+line(240,80,380,80,'soft')+rect(110,205,150,45,'soft');break;
case'inner': b+=circ(390,75,36,'soft')+`<path class="stroke" d="M80 290C120 245 150 225 185 205C225 180 245 145 275 120C315 85 345 95 390 75"/>`+circ(100,280,7,'dot')+circ(260,140,5,'dot')+line(40,300,480,300,'soft');break;
case'islamcity': b+=rect(55,190,410,75)+`<path class="stroke" d="M80 190V145Q80 105 120 105Q160 105 160 145V190M205 190V120Q205 65 260 65Q315 65 315 120V190M360 190V150Q360 115 395 115Q430 115 430 150V190"/>`+line(30,280,490,280,'soft');for(let i=0;i<8;i++)b+=circ(95+i*45,300,5,'dot');break;
case'modernize': b+=line(35,285,485,285)+line(60,305,460,305,'soft')+rect(75,170,115,95)+rect(320,155,120,110)+line(220,75,220,280,'stroke')+line(195,105,245,105,'soft')+line(205,125,235,125,'soft')+`<path class="soft" d="M220 75C270 55 305 45 350 35"/>`;break;
case'eastmodern': b+=rect(70,90,155,170,'soft')+line(90,120,200,120,'soft')+line(90,145,185,145,'soft')+line(90,170,195,170,'soft')+rect(285,140,140,120)+line(355,140,355,80,'stroke')+circ(355,65,9,'dot')+line(35,290,485,290,'soft');break;
case'postcolonial': b+=`<path class="stroke" d="M75 65L160 45L210 90L275 55L350 95L430 70L455 160L395 230L315 255L245 220L170 260L95 215Z"/>`+line(160,45,170,260,'soft')+line(275,55,245,220,'soft')+line(350,95,315,255,'soft')+circ(120,155,18,'stroke')+circ(405,155,18,'stroke')+line(138,155,387,155,'soft');break;
case'global': for(const [x,y,r] of [[90,210,6],[150,120,5],[235,190,7],[315,95,6],[405,170,7],[440,245,5],[285,255,4]])b+=circ(x,y,r,'dot');b+=line(90,210,150,120,'soft')+line(150,120,235,190,'soft')+line(235,190,315,95,'soft')+line(315,95,405,170,'soft')+line(405,170,440,245,'soft')+line(235,190,285,255,'soft')+line(285,255,440,245,'soft')+rect(185,225,160,55,'stroke');break;
}
return head+b+tail;}
function currentLayer(){return new URLSearchParams(location.search).get('katman')==='dogu'?'dogu':'western'}
function buildEntry(){const periods=document.getElementById('periods');if(!periods||periods.dataset.ill)return;periods.dataset.ill='1';periods.classList.add('periods-exhibit');const wrap=document.createElement('div');wrap.className='period-exhibition';const visual=document.createElement('aside');visual.className='period-visual';visual.innerHTML='<div class="period-visual-inner"><div class="period-visual-k">DÖNEMİN DÜNYASI</div><h3></h3><div class="period-visual-question"></div><div class="period-art"></div><div class="period-visual-meta"><span></span><span>çizgisel atlas illüstrasyonu</span></div></div>';periods.parentNode.insertBefore(wrap,periods);wrap.append(visual,periods);
function paint(i){const data=currentLayer()==='dogu'?east:west;const d=data[Math.max(0,Math.min(i,data.length-1))];visual.classList.remove('swap');void visual.offsetWidth;visual.classList.add('swap');visual.querySelector('h3').textContent=d[0];visual.querySelector('.period-visual-question').textContent=d[1];visual.querySelector('.period-art').innerHTML=svg(d[3]);visual.querySelector('.period-visual-meta span').textContent=d[2];[...periods.querySelectorAll('.period')].forEach((p,j)=>p.classList.toggle('active-period',j===i));}
function bind(){[...periods.querySelectorAll('.period')].forEach((p,i)=>{p.onmouseenter=()=>paint(i);p.onclick=()=>paint(i)});paint(0)}
new MutationObserver(()=>setTimeout(bind,0)).observe(periods,{childList:true});bind();document.getElementById('westBtn')?.addEventListener('click',()=>setTimeout(()=>{wrap.dataset.layer='western';paint(0)},30));document.getElementById('eastBtn')?.addEventListener('click',()=>setTimeout(()=>{wrap.dataset.layer='dogu';paint(0)},30));}
function buildMap(){if(!document.getElementById('map'))return;const layer=currentLayer();const data=layer==='dogu'?east:west;const titles=[...document.querySelectorAll('.col-title')];titles.forEach((t,i)=>{t.title='Dönemin dünyasını aç';t.addEventListener('click',()=>{document.querySelector('.period-glimpse')?.remove();const d=data[i]||data[data.length-1],g=document.createElement('aside');g.className='period-glimpse';g.innerHTML='<button class="pg-close">×</button><div class="pg-k">Dönemin dünyası · '+(i+1)+'</div><h3>'+d[0]+'</h3><p>'+d[1]+'</p><div class="period-art">'+svg(d[3])+'</div>';document.body.appendChild(g);g.querySelector('.pg-close').onclick=()=>g.remove()})})}
let n=0;(function wait(){if(document.getElementById('periods'))buildEntry();else if(document.getElementById('map'))buildMap();else if(n++<100)setTimeout(wait,50)})();
})();