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
 {d:"30 Mei · 6, 13, 20, 27 Juni · 4, 10, 24 Juli",t:"Lomba Hias Altar",l:"Gereja Keluarga Kudus Rawamangun",c:"lomba",ic:"decor",k:"peach",btns:[{t:"Daftar",href:"https://docs.google.com/forms/d/e/1FAIpQLScSJbNfHRfWNmokiGL1nm64IhLXPp8uL-1SYqZAlS3xTPCuMw/viewform"},{t:"Lihat Jadwal",pk:"hias-altar-jadwal"}]},
 {d:"27 Juni 2026 · Tentatif",t:"Khitanan Massal",l:"GKP Lantai 1",c:"sosial",ic:"cross",k:"mint"},
 {d:"30 Juni 2026 · Pengumpulan",t:"Lomba Short Movie Wilayah — Remaja",l:"Pengumpulan Karya",c:"lomba",ic:"film",k:"blue",pk:"short-movie"},
 {d:"1 – 2 Juli 2026",t:"Social Project — Menanam Mangrove",l:"Pulau Tidung",c:"sosial",ic:"hands",k:"lemon"},
 {d:"4 & 18 Juli 2026",t:"Fun Sport — Volley & Soccer",l:"Lapangan Tarakanita",c:"olahraga",ic:"ball",k:"lilac",pk:"fun-sport"},
 {d:"4 Juli 2026",t:"Demo & Lomba Masak",l:"GKP Lantai 1",c:"lomba",ic:"chef",k:"rose",pk:"demo-masak"},
 {d:"5 Juli 2026",t:"Lomba Mewarnai Anak",l:"Kelas Tarakanita",c:"lomba",ic:"brush",k:"peach",pk:"mewarnai"},
 {d:"11 Juli 2026",t:"Lomba Paduan Suara",l:"Gereja Keluarga Kudus Rawamangun",c:"lomba",ic:"music",k:"mint",pk:"padus"},
 {d:"12 Juli 2026",t:"Lomba Story Telling Anak",l:"Gereja Keluarga Kudus Rawamangun",c:"lomba",ic:"book",k:"blue",pk:"storytelling"},
 {d:"12 Juli 2026",t:"Lomba Narasi Kitab Suci",l:"GKP Lantai 1",c:"lomba",ic:"bible",k:"lemon",pk:"narasi"},
 {d:"12 Juli 2026",t:"Lomba Got Talent",l:"GKP Lantai 3",c:"lomba",ic:"star",k:"lilac",pk:"got-talent"},
 {d:"18 Juli 2026",t:"Seminar Sarasehan Keluarga",l:"GKP Lantai 3",c:"rohani",ic:"people",k:"rose",pk:"seminar"},
 {d:"18 Juli 2026 · Pengumpulan",t:'Lomba Video "Bible in Daily Life"',l:"Pengumpulan Karya",c:"lomba",ic:"film",k:"peach",pk:"video-bible"},
 {d:"19 Juli 2026",t:"Lomba Bible Talent Show",l:"Gereja Keluarga Kudus Rawamangun",c:"lomba",ic:"bible",k:"mint",pk:"bible-talent"},
 {d:"19 Juli 2026",t:"Lomba Family Bible",l:"Pulau Seribu",c:"lomba",ic:"book",k:"blue",pk:"family-bible"},
 {d:"19 Juli 2026",t:"Bazar UMKM",l:"Area Gereja",c:"sosial",ic:"shop",k:"lemon",pk:"bazar"},
 {d:"25 Juli 2026",t:"Lomba Jalan Sehat, Senam Pagi & Line Dance",l:"Parkiran GKP",c:"olahraga",ic:"walk",k:"lilac",pk:"jalan-sehat"},
 {d:"25 Juli 2026",t:"Malam Puncak",l:"Parkiran GKP",c:"puncak",ic:"peak",k:"rose",pk:"malam-puncak"},
 {d:"26 Juli 2026",t:"Donor Darah",l:"GKP Lantai 1",c:"sosial",ic:"drop",k:"peach",pk:"donor"},
];
/* ---- POSTER carousel (file di images/content) ---- */
const posters=[
 {key:"hias-altar",img:"images/content/[Liturgi] lomba hias altar.jpg",t:"Lomba Hias Altar",s:"Antar Wilayah",form:"https://docs.google.com/forms/d/e/1FAIpQLScSJbNfHRfWNmokiGL1nm64IhLXPp8uL-1SYqZAlS3xTPCuMw/viewform"},
 {key:"hias-altar-jadwal",img:"images/content/[liturgi]urutan lomba hias altar.jpeg",t:"Urutan Lomba Hias Altar",s:"Jadwal & Ketentuan"},
 {key:"short-movie",img:"images/content/[BIA BIR] short movie.jpeg",t:"Lomba Short Movie",s:"Wilayah — Remaja",form:"https://forms.gle/16EYc58SyrCpTzBa7"},
 {key:"fun-sport",img:"images/content/[omk] fun sport (belum fixed karena lokasi blm disetujui}.jpeg",t:"Fun Sport — Volley & Soccer",s:"Antar Wilayah",form:"https://forms.gle/rs6ccq2cc2NHXKDA8"},
 {key:"demo-masak",img:"images/content/[pse] demo masak.jpeg",t:"Demo & Lomba Masak",s:"HUT Paroki"},
 {key:"mewarnai",img:"images/content/[BIA BIR] lomba mewarnai.jpeg",t:"Lomba Mewarnai Anak",s:"TK",form:"https://forms.gle/9g4jB4DHPbfeXEsB7"},
 {key:"padus",img:"images/content/[liturgi] LOMBA PADUS.png",t:"Lomba Paduan Suara",s:"Antar Wilayah",form:"https://daftarlombapaduansuarahutgkkr56.my.canva.site/"},
 {key:"storytelling",img:"images/content/[BIAR BIR story telling].jpeg",t:"Lomba Story Telling Anak",s:"SD Kelas 1 – 3",form:"https://forms.gle/u6n2EQCAPU8amGnH6"},
 {key:"narasi",img:"images/content/[kks]lomba narasi kitab suci .jpeg",t:"Lomba Narasi Kitab Suci",s:"OMK & Dewasa 17 – 60"},
 {key:"got-talent",img:"images/content/[OMK] got talent.jpeg",t:"Lomba Got Talent",s:"OMK",note:"Daftar via Koordinator Wilayah masing-masing"},
 {key:"seminar",img:"images/content/[SKK] seminar.jpeg",t:"Seminar Sarasehan Keluarga",s:"Keluarga"},
 {key:"video-bible",img:"images/content/[KKS]lomba video bible in daily life .jpeg",t:'Lomba Video "Bible in Daily Life"',s:"Umum"},
 {key:"bible-talent",img:"images/content/[KKS]bible talent show.jpeg",t:"Lomba Bible Talent Show",s:"Antar Wilayah"},
 {key:"family-bible",img:"images/content/[BIA BIR] family bible.jpeg",t:"Lomba Family Bible",s:"Keluarga",form:"https://docs.google.com/forms/d/e/1FAIpQLSfy266kOWUQkVb9mebwR2r8rh8qqhodHjii4XoKftPjduMMWw/viewform"},
 {key:"bazar",img:"images/content/[PSE]bazaar UMKM.jpeg",t:"Bazar UMKM",s:"Umum"},
 {key:"jalan-sehat",img:"images/content/[HAAK] jalan sehat, senam, line dance.png",t:"Jalan Sehat, Senam Pagi & Line Dance",s:"Umum"},
 {key:"malam-puncak",img:"images/content/[panitia]malam puncak.jpeg",t:"Malam Puncak",s:"Puncak Perayaan"},
 {key:"donor",img:"images/content/[PSE] Donor Darah.jpeg",t:"Donor Darah",s:"Umum"},
];
const pin='<svg width="15" height="15" viewBox="0 0 24 24" fill="#df4a2e"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>';
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
     <div class="tl-loc">${pin}<span>${a.l}</span></div>
     ${posterBtn}
   </div>`;
 tl.appendChild(el);
});
tl.addEventListener("click",e=>{
 const b=e.target.closest("button.tl-cta");if(!b)return;
 const pi=+b.dataset.pi;
 document.getElementById("lomba").scrollIntoView({behavior:"smooth"});
 go(pi);
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

const track=document.getElementById("ctrack"),dotsEl=document.getElementById("cdots");
let idx=0;
posters.forEach((p,i)=>{
 const s=document.createElement("div");s.className="c-slide";
 const src=encodeURI(p.img);
 const cta=p.form?`<a class="c-cta" href="${p.form}" target="_blank" rel="noopener">Daftar Sekarang &rarr;</a>`
        :p.note?`<span class="c-note">${p.note}</span>`:"";
 s.innerHTML=`<img src="${src}" alt="Poster ${p.t}" loading="lazy"/><div class="cap"><b>${p.t}</b><small>${p.s}</small>${cta}</div>`;
 s.querySelector("img").addEventListener("click",()=>openLB(src,p.t));
 track.appendChild(s);
 const d=document.createElement("button");d.className="c-dot"+(i===0?" active":"");d.setAttribute("aria-label","Poster "+(i+1));
 d.addEventListener("click",()=>go(i));dotsEl.appendChild(d);
});
document.getElementById("ctot").textContent=posters.length;
function go(n){idx=(n+posters.length)%posters.length;
 track.style.transform=`translateX(${-idx*100}%)`;
 document.querySelectorAll(".c-dot").forEach((d,i)=>d.classList.toggle("active",i===idx));
 document.getElementById("ccur").textContent=idx+1;}
document.getElementById("cprev").addEventListener("click",()=>go(idx-1));
document.getElementById("cnext").addEventListener("click",()=>go(idx+1));
let sx=null;const vp=document.querySelector(".c-viewport");
vp.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});
vp.addEventListener("touchend",e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)go(idx+(dx<0?1:-1));sx=null;});
addEventListener("keydown",e=>{
 if(lb.classList.contains("open")){if(e.key==="Escape")lb.classList.remove("open");return;}
 if(e.key==="ArrowLeft")go(idx-1);if(e.key==="ArrowRight")go(idx+1);
});

/* ---- countdown ---- */
const target=new Date("2026-07-25T18:00:00+07:00").getTime();
const $=id=>document.getElementById(id);
function tick(){let x=Math.max(0,target-Date.now());
 const day=Math.floor(x/864e5);x-=day*864e5;const h=Math.floor(x/36e5);x-=h*36e5;const m=Math.floor(x/6e4);x-=m*6e4;const s=Math.floor(x/1e3);
 const p=n=>String(n).padStart(2,"0");$("cd-d").textContent=day;$("cd-h").textContent=p(h);$("cd-m").textContent=p(m);$("cd-s").textContent=p(s);}
tick();setInterval(tick,1000);

/* ---- nav + reveal ---- */
const nav=document.getElementById("nav");
addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>40));
const burger=document.getElementById("burger"),links=document.getElementById("navlinks");
burger.addEventListener("click",()=>links.classList.toggle("open"));
links.addEventListener("click",e=>{if(e.target.tagName==="A")links.classList.remove("open")});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));