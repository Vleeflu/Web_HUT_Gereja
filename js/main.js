/* ---- ICONS ---- */
const I={
 decor:'<path d="M12 2l2.5 5L20 8l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1z"/>',
 hands:'<path d="M20 11l-4-4M4 11l4-4M2 13l5 5a3 3 0 004 0M22 13l-5 5"/><path d="M12 8v8"/>',
 cross:'<path d="M12 2v20M5 9h14"/>',
 film:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5M16 4v5"/>',
 brush:'<path d="M3 21c3 0 4-2 4-4M14 4l6 6-9 9H7v-4z"/>',
 music:'<path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
 book:'<path d="M12 6c-2-1.5-5-1.5-7 0v12c2-1.5 5-1.5 7 0 2-1.5 5-1.5 7 0V6c-2-1.5-5-1.5-7 0zM12 6v12"/>',
 star:'<path d="M12 3l2.6 6.3L21 10l-5 4.3L17.5 21 12 17.3 6.5 21 8 14.3 3 10l6.4-.7z"/>',
 ball:'<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 000 18M3 12h18"/>',
 chef:'<path d="M7 13a4 4 0 01-1-7.9A4 4 0 0112 4a4 4 0 016 1.1A4 4 0 0117 13M7 13v6h10v-6"/>',
 people:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0M16 6a3 3 0 010 6M21 20a5 5 0 00-4-5"/>',
 bible:'<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 7v8M9 11h6"/>',
 shop:'<path d="M3 9l1-5h16l1 5M4 9v11h16V9M4 9h16"/>',
 walk:'<circle cx="13" cy="4" r="2"/><path d="M13 7l-2 5 3 3v5M11 12l-3 2M14 10l3 1"/>',
 drop:'<path d="M12 3s6 6 6 11a6 6 0 01-12 0c0-5 6-11 6-11z"/>',
 peak:'<path d="M12 2l2 5 5 .5-3.5 3.5L17 17l-5-3-5 3 1.5-6L5 7.5 10 7z"/><path d="M5 21h14"/>'
};
/* ---- DATA (sesuai PDF) ---- */
const acara=[
 {d:"30 Mei · 6, 13, 20, 27 Juni · 4, 10, 24 Juli 2026",t:"Lomba Hias Altar",l:"Paroki Rawamangun, Gereja Keluarga Kudus",c:"lomba",ic:"decor",k:"peach",btns:[{t:"Lihat Poster",pk:"hias-altar"},{t:"Lihat Jadwal",pk:"hias-altar-jadwal"}]},
 {d:"1 – 2 Juli 2026",t:"Social Project — Menanam Mangrove",l:"Pulau Tidung",c:"sosial",ic:"hands",k:"lemon",pk:"social-project"},
 {d:"4 & 18 Juli 2026",t:"Fun Sport — Volley & Soccer",l:"Lapangan Tarakanita",c:"olahraga",ic:"ball",k:"lilac",pk:"fun-sport"},
 {d:"4 Juli 2026",t:"Demo & Lomba Masak",l:"GKP Lantai 1",c:"lomba",ic:"chef",k:"rose",btns:[{t:"Demo Masak",pk:"demo-masak"},{t:"Lomba Masak",pk:"lomba-masak"}]},
 {d:"5 Juli 2026",t:"Lomba Mewarnai Anak",l:"Kelas Tarakanita",c:"lomba",ic:"brush",k:"peach",pk:"mewarnai"},
 {d:"11 Juli 2026",t:"Lomba Paduan Suara",l:"Paroki Rawamangun, Gereja Keluarga Kudus",c:"lomba",ic:"music",k:"mint",pk:"padus"},
 {d:"12 Juli 2026",t:"Lomba Story Telling Anak",l:"Paroki Rawamangun, Gereja Keluarga Kudus",c:"lomba",ic:"book",k:"blue",pk:"storytelling"},
 {d:"12 Juli 2026",t:"Lomba Got Talent",l:"GKP Lantai 3",c:"lomba",ic:"star",k:"lilac",pk:"got-talent"},
 {d:"17 Juli 2026 · Pengumpulan",t:"Lomba Short Movie Wilayah — Remaja",l:"Pengumpulan Karya",c:"lomba",ic:"film",k:"blue",pk:"short-movie"},
 {d:"18 Juli 2026",t:"Seminar Sarasehan Keluarga",l:"GKP Lantai 3",c:"rohani",ic:"people",k:"rose",pk:"seminar"},
 {d:"18 Juli 2026 · Pengumpulan",t:'Lomba Video "Bible in Daily Life"',l:"Pengumpulan Karya",c:"lomba",ic:"film",k:"peach",pk:"video-bible"},
 {d:"19 Juli 2026",t:"Lomba Narasi Kitab Suci",l:"GKP Lantai 1",c:"lomba",ic:"bible",k:"lemon",pk:"narasi"},
 {d:"19 Juli 2026",t:"Lomba Bible Talent Show",l:"Paroki Rawamangun, Gereja Keluarga Kudus",c:"lomba",ic:"bible",k:"mint",pk:"bible-talent"},
 {d:"19 Juli 2026",t:"Lomba Family Bible",l:"GKP Lantai 2",c:"lomba",ic:"book",k:"blue",pk:"family-bible"},
 {d:"19 Juli 2026",t:"Bazar UMKM",l:"Area Gereja",c:"sosial",ic:"shop",k:"lemon",pk:"bazar"},
 {d:"25 Juli 2026",t:"Lomba Jalan Sehat, Senam Pagi & Line Dance",l:"Parkiran GKP",c:"olahraga",ic:"walk",k:"lilac",pk:"jalan-sehat"},
 {d:"25 Juli 2026",t:"Malam Puncak",l:"Paroki Rawamangun, Gereja Keluarga Kudus & Parkiran GKP",c:"puncak",ic:"peak",k:"rose",pk:"malam-puncak"},
 {d:"26 Juli 2026",t:"Donor Darah",l:"GKP Lantai 1",c:"sosial",ic:"drop",k:"peach",pk:"donor"},
];
/* ---- POSTER carousel (file di images/content) ---- */
const posters=[
 {key:"hias-altar",img:"images/content/[Liturgi] lomba hias altar.jpg",t:"Lomba Hias Altar",s:"Antar Wilayah",form:"https://docs.google.com/forms/d/e/1FAIpQLScSJbNfHRfWNmokiGL1nm64IhLXPp8uL-1SYqZAlS3xTPCuMw/viewform"},
 {key:"hias-altar-jadwal",img:"images/content/[Liturgi] Jadwal Hias Altar.png",t:"Urutan Lomba Hias Altar",s:"Jadwal & Ketentuan"},
 {key:"social-project",img:"images/content/[LH] Social Project.jpg",t:"Social Project — Menanam Mangrove",s:"Umum · Pulau Tidung"},
 {key:"fun-sport",img:"images/content/[OMK] Fun Volly & minisoccer pot.jpg",t:"Fun Sport — Volley & Soccer",s:"Antar Wilayah",form:"https://forms.gle/rs6ccq2cc2NHXKDA8"},
 {key:"demo-masak",img:"images/content/[pse] demo masak.jpeg",t:"Demo Masak",s:"HUT Paroki"},
 {key:"lomba-masak",img:"images/content/Lomba Masak.jpeg",t:"Lomba Masak",s:"HUT Paroki"},
 {key:"mewarnai",img:"images/content/[BIA BIR] lomba mewarnai.jpeg",t:"Lomba Mewarnai Anak",s:"TK",form:"https://forms.gle/9g4jB4DHPbfeXEsB7"},
 {key:"padus",img:"images/content/[liturgi] LOMBA PADUS.png",t:"Lomba Paduan Suara",s:"Antar Wilayah",form:"https://daftarlombapaduansuarahutgkkr56.my.canva.site/"},
 {key:"storytelling",img:"images/content/[BIAR BIR story telling].jpeg",t:"Lomba Story Telling Anak",s:"SD Kelas 1 – 3",form:"https://forms.gle/u6n2EQCAPU8amGnH6"},
 {key:"got-talent",img:"images/content/[OMK] got talent.jpeg",t:"Lomba Got Talent",s:"Anak, OMK, Dewasa",note:"Daftar via Koordinator Wilayah masing-masing"},
 {key:"short-movie",img:"images/content/[BIA BIR] short movie.jpeg",t:"Lomba Short Movie",s:"Wilayah — Remaja",form:"https://forms.gle/16EYc58SyrCpTzBa7"},
 {key:"seminar",img:"images/content/[SKK] Seminar Keluarga.jpg",t:"Seminar Sarasehan Keluarga",s:"Keluarga"},
 {key:"video-bible",img:"images/content/[KKS]lomba video bible in daily life.jpeg",t:'Lomba Video "Bible in Daily Life"',s:"Antar Lingkungan",form:"https://docs.google.com/forms/d/e/1FAIpQLScTNEf-SUqTaVHIWIueHflKL-TZ4B4j38H04jwcGDMEcVkz2w/viewform"},
 {key:"narasi",img:"images/content/[kks]lomba narasi kitab suci.jpeg",t:"Lomba Narasi Kitab Suci",s:"OMK & Dewasa 17 – 60",form:"https://docs.google.com/forms/d/e/1FAIpQLSftY6Wk6q2VDXgUPxT0sjj6AT53Cs5DR4DrY5Uu1EGjBO0ryQ/viewform"},
 {key:"bible-talent",img:"images/content/[KKS]bible talent show.jpeg",t:"Lomba Bible Talent Show",s:"Antar Wilayah",form:"https://docs.google.com/forms/d/e/1FAIpQLScYnRaDeLV1NnaVcke5G32xF4If9Ma9gsPrdMPp07b2sqv_hw/viewform"},
 {key:"family-bible",img:"images/content/[BIA BIR] family bible.jpeg",t:"Lomba Family Bible",s:"Keluarga",form:"https://docs.google.com/forms/d/e/1FAIpQLSfy266kOWUQkVb9mebwR2r8rh8qqhodHjii4XoKftPjduMMWw/viewform"},
 {key:"bazar",img:"images/content/[PSE]bazaar UMKM.jpeg",t:"Bazar UMKM",s:"Umum"},
 {key:"jalan-sehat",img:"images/content/[HAAK] jalan sehat, senam, line dance 2.jpeg",t:"Jalan Sehat, Senam Pagi & Line Dance",s:"Wilayah dan Umum",note:"Daftar via Koordinator Wilayah masing-masing"},
 {key:"malam-puncak",img:"images/content/[panitia]malam puncak.jpeg",t:"Malam Puncak",s:"Puncak Perayaan"},
 {key:"donor",img:"images/content/[PSE] Donor Darah.jpeg",t:"Donor Darah",s:"Umum"},
];
const pin='📌';
const tl=document.getElementById("tl");
acara.forEach((a,i)=>{
 const side=i%2===0?"left":"right";
 const el=document.createElement("div");
 el.className=`tl-item ${side}`;el.dataset.cat=a.c;
 const mkBtn=b=>{
   if(b.href)return `<a class="tl-cta" href="${b.href}" target="_blank" rel="noopener">${b.t} &rarr;</a>`;
   const j=posters.findIndex(p=>p.key===b.pk);
   return j>=0?`<button class="tl-cta" data-pi="${j}">${b.t} &rarr;</button>`:"";
 };
 const btns=a.btns||(a.pk?[{t:"Lihat Poster",pk:a.pk}]:[]);
 const posterBtn=btns.map(mkBtn).join("");
 el.innerHTML=`
   <div class="tl-node n-${a.k}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[a.ic]}</svg></div>
   <div class="tl-card">
     <span class="tl-pill p-${a.k}">${a.d}</span>
     <h3>${a.t}</h3>
     <div class="tl-loc"><span class="e">${pin}</span><span>${a.l}</span></div>
     ${posterBtn}
   </div>`;
 tl.appendChild(el);
});
tl.addEventListener("click",e=>{
 const b=e.target.closest("button.tl-cta");if(!b)return;
 openBook(+b.dataset.pi);
});
document.getElementById("filters").addEventListener("click",e=>{
 const b=e.target.closest(".chip");if(!b)return;
 document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
 b.classList.add("active");const f=b.dataset.f;
 let v=0;
 document.querySelectorAll(".tl-item").forEach(it=>{
   const show=f==="all"||it.dataset.cat===f;
   it.classList.toggle("hide",!show);
   if(show){it.classList.toggle("left",v%2===0);it.classList.toggle("right",v%2===1);v++;}
 });
});

const lb=document.getElementById("lb"),lbimg=document.getElementById("lbimg");
function openLB(src,alt){lbimg.src=src;lbimg.alt=alt;lb.classList.add("open")}
lb.addEventListener("click",()=>lb.classList.remove("open"));
document.getElementById("lbx").addEventListener("click",()=>lb.classList.remove("open"));
document.querySelectorAll("[data-lb]").forEach(el=>el.addEventListener("click",()=>openLB(encodeURI(el.dataset.lb),el.dataset.lbAlt||"")));

/* ---- RAK POSTER (bookcase) ---- */
const shelvesEl=document.getElementById("bcShelves");
const catLabel={lomba:"Lomba",sosial:"Sosial",rohani:"Rohani",olahraga:"Olahraga",puncak:"Puncak"};
/* kategori + tanggal + lokasi tiap poster diturunkan dari data acara (lewat key/pk) */
const catByKey={},acaraByKey={};
acara.forEach(a=>{
 const keys=(a.btns?a.btns.map(b=>b.pk):[a.pk]).filter(Boolean);
 keys.forEach(k=>{if(!(k in catByKey)){catByKey[k]=a.c;acaraByKey[k]=a;}});
});
posters.forEach((p,i)=>{
 const src=encodeURI(p.img);
 const b=document.createElement("button");
 b.type="button";b.className="book";b.dataset.pi=i;
 b.setAttribute("aria-label","Buka detail "+p.t);
 b.innerHTML=`<span class="book-cover">${p.form?'<span class="book-badge">Daftar</span>':""}<img src="${src}" alt="Poster ${p.t}" loading="lazy"/></span><span class="book-label">${p.t}</span>`;
 b.addEventListener("click",()=>openBook(i));
 shelvesEl.appendChild(b);
});

/* ---- detail poster (buka buku dari rak) ---- */
const pm=document.getElementById("pmodal");
const pmImg=document.getElementById("pmImg"),pmTitle=document.getElementById("pmTitle"),
      pmSub=document.getElementById("pmSub"),pmCat=document.getElementById("pmCat"),
      pmMeta=document.getElementById("pmMeta"),pmAction=document.getElementById("pmAction"),
      pmCur=document.getElementById("pmCur"),pmTot=document.getElementById("pmTot");
let pmSrc="",pmIdx=0;
pmTot.textContent=posters.length;
const metaItem=(ico,txt)=>`<span class="pm-meta-item"><span class="pm-meta-ico">${ico}</span>${txt}</span>`;
function openBook(i){
 pmIdx=(i+posters.length)%posters.length;
 const p=posters[pmIdx];if(!p)return;
 pmSrc=encodeURI(p.img);
 pmImg.src=pmSrc;pmImg.alt="Poster "+p.t;
 pmTitle.textContent=p.t;
 pmSub.textContent=p.s||"";
 const cat=catByKey[p.key],a=acaraByKey[p.key];
 if(cat){pmCat.textContent=catLabel[cat]||cat;pmCat.className="pm-cat cat-"+cat;pmCat.hidden=false;}
 else pmCat.hidden=true;
 const m=[];
 if(a&&a.d)m.push(metaItem("🗓️",a.d));
 if(a&&a.l)m.push(metaItem("📍",a.l));
 pmMeta.innerHTML=m.join("");
 pmAction.innerHTML=p.form
  ?`<a class="pm-cta" href="${p.form}" target="_blank" rel="noopener">Daftar Sekarang &rarr;</a>`
  :p.note?`<span class="pm-note">${p.note}</span>`:"";
 pmCur.textContent=pmIdx+1;
 pm.classList.add("open");pm.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeBook(){pm.classList.remove("open");pm.setAttribute("aria-hidden","true");document.body.style.overflow="";}
document.getElementById("pmX").addEventListener("click",closeBook);
document.getElementById("pmBackdrop").addEventListener("click",closeBook);
document.getElementById("pmPrev").addEventListener("click",()=>openBook(pmIdx-1));
document.getElementById("pmNext").addEventListener("click",()=>openBook(pmIdx+1));
const zoomPoster=()=>openLB(pmSrc,pmTitle.textContent);
document.getElementById("pmZoom").addEventListener("click",zoomPoster);
pmImg.addEventListener("click",zoomPoster);
addEventListener("keydown",e=>{
 if(lb.classList.contains("open")){if(e.key==="Escape")lb.classList.remove("open");return;}
 if(!pm.classList.contains("open"))return;
 if(e.key==="Escape")closeBook();
 else if(e.key==="ArrowLeft")openBook(pmIdx-1);
 else if(e.key==="ArrowRight")openBook(pmIdx+1);
});

/* ---- HP: rak kecil 2x2 dengan tombol geser (multi-level) ---- */
const pager=document.getElementById("bcPager"),
      bcPrev=document.getElementById("bcPrev"),bcNext=document.getElementById("bcNext"),
      bcCur=document.getElementById("bcCur"),bcTot=document.getElementById("bcTot");
const PER_PAGE=4,mqMobile=matchMedia("(max-width:640px)");
let page=0;
const books=()=>Array.from(shelvesEl.children);
const totalPages=()=>Math.max(1,Math.ceil(posters.length/PER_PAGE));
function applyMobile(){
 const start=page*PER_PAGE,end=start+PER_PAGE;
 books().forEach((el,i)=>el.classList.toggle("is-hidden",i<start||i>=end));
 bcCur.textContent=page+1;bcTot.textContent=totalPages();
 bcPrev.disabled=page===0;bcNext.disabled=page>=totalPages()-1;
}
function layoutShelves(){
 if(mqMobile.matches){
  page=Math.min(Math.max(page,0),totalPages()-1);
  pager.hidden=false;applyMobile();
 }else{
  pager.hidden=true;books().forEach(el=>el.classList.remove("is-hidden"));
 }
}
bcPrev.addEventListener("click",()=>{if(page>0){page--;applyMobile();}});
bcNext.addEventListener("click",()=>{if(page<totalPages()-1){page++;applyMobile();}});
if(mqMobile.addEventListener)mqMobile.addEventListener("change",layoutShelves);
else mqMobile.addListener(layoutShelves);
layoutShelves();

/* ---- countdown ---- */
const target=new Date("2026-07-25T18:00:00+07:00").getTime();
const $=id=>document.getElementById(id);
let cdInt;
function tick(){const left=target-Date.now();
 if(left<=0){document.querySelector(".cd-main")?.classList.add("is-ended");clearInterval(cdInt);}
 let x=Math.max(0,left);
 const day=Math.floor(x/864e5);x-=day*864e5;const h=Math.floor(x/36e5);x-=h*36e5;const m=Math.floor(x/6e4);x-=m*6e4;const s=Math.floor(x/1e3);
 const p=n=>String(n).padStart(2,"0");$("cd-d").textContent=day;$("cd-h").textContent=p(h);$("cd-m").textContent=p(m);$("cd-s").textContent=p(s);}
cdInt=setInterval(tick,1000);tick();

/* ---- nav + reveal ---- */
const nav=document.getElementById("nav");
addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>40));
const burger=document.getElementById("burger"),links=document.getElementById("navlinks");
burger.addEventListener("click",()=>burger.setAttribute("aria-expanded",links.classList.toggle("open")));
links.addEventListener("click",e=>{if(e.target.tagName==="A"){links.classList.remove("open");burger.setAttribute("aria-expanded","false");}});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

/* ---- musik latar (loop terus-menerus, volume 50%) ---- */
const bgm=document.getElementById("bgm");
if(bgm){
 bgm.volume=0.5;
 const tryPlay=()=>{const p=bgm.play();if(p&&p.catch)p.catch(()=>{});};
 tryPlay();                                    // coba putar otomatis begitu web dibuka
 /* Browser modern memblokir autoplay bersuara sampai ada interaksi user.
    Kalau diblokir, mulai musik pada gesture pertama (klik/scroll/tap). */
 const gestures=["pointerdown","keydown","touchstart"];
 const startOnGesture=e=>{
  if(e.target&&e.target.closest&&e.target.closest("#bgm-toggle"))return; // tombol musik urus sendiri
  tryPlay();gestures.forEach(ev=>document.removeEventListener(ev,startOnGesture));
 };
 gestures.forEach(ev=>document.addEventListener(ev,startOnGesture,{passive:true}));
 const bgmBtn=document.getElementById("bgm-toggle");
 if(bgmBtn){
  bgmBtn.addEventListener("click",()=>{bgm.paused?tryPlay():bgm.pause();});
  bgm.addEventListener("play",()=>bgmBtn.classList.add("on"));
  bgm.addEventListener("pause",()=>bgmBtn.classList.remove("on"));
 }
}
