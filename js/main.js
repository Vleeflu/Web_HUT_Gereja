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
 {d:"Juni – Juli 2026",t:"Lomba Hias Altar",l:"Gereja Keluarga Kudus Rawamangun",c:"lomba",ic:"decor",k:"peach"},
 {d:"Juni 2026",t:"Social Project",l:"Pulau Seribu",c:"sosial",ic:"hands",k:"mint"},
 {d:"28 Juni 2026",t:"Baksos Sirkumsisi / Sunatan Massal",l:"GKP Lantai 1",c:"sosial",ic:"cross",k:"blue"},
 {d:"30 Juni 2026",t:"Lomba Short Movie Remaja",l:"Last Submission",c:"lomba",ic:"film",k:"lemon"},
 {d:"5 Juli 2026",t:"Lomba Mewarnai Anak",l:"Kelas Tarakanita",c:"lomba",ic:"brush",k:"lilac"},
 {d:"11 Juli 2026",t:"Lomba Paduan Suara",l:"Gereja Keluarga Kudus Rawamangun",c:"lomba",ic:"music",k:"rose"},
 {d:"12 Juli 2026",t:"Lomba Story Telling Anak",l:"Gereja Keluarga Kudus Rawamangun",c:"lomba",ic:"book",k:"peach"},
 {d:"12 Juli 2026",t:"Lomba Narasi Kitab Suci",l:"GKP Lantai 1",c:"lomba",ic:"bible",k:"mint"},
 {d:"12 Juli 2026",t:"Lomba Got Talent",l:"GKP Lantai 3",c:"lomba",ic:"star",k:"blue"},
 {d:"4 & 18 Juli 2026",t:"Fun Sport — Voli & Mini Soccer",l:"GKP Lantai 1",c:"olahraga",ic:"ball",k:"lemon"},
 {d:"4 Juli 2026",t:"Demo & Lomba Masak",l:"GKP Lantai 1",c:"lomba",ic:"chef",k:"lilac"},
 {d:"18 Juli 2026",t:"Seminar Sarasehan Keluarga",l:"GKP Lantai 3",c:"rohani",ic:"people",k:"rose"},
 {d:"19 Juli 2026",t:"Lomba Bible Talent Show",l:"Gereja Keluarga Kudus Rawamangun",c:"lomba",ic:"bible",k:"peach"},
 {d:"19 Juli 2026",t:"Lomba Family Bible",l:"Pulau Seribu",c:"lomba",ic:"book",k:"mint"},
 {d:"19 Juli 2026",t:"Bazar UMKM",l:"Area Gereja",c:"sosial",ic:"shop",k:"blue"},
 {d:"25 Juli 2026",t:"Jalan Sehat, Senam Pagi & Line Dance",l:"Parkiran GKP",c:"olahraga",ic:"walk",k:"lemon"},
 {d:"26 Juli 2026",t:"Donor Darah",l:"GKP Lantai 1",c:"sosial",ic:"drop",k:"lilac"},
 {d:"25 Juli 2026",t:"Malam Puncak",l:"Parkiran GKP",c:"puncak",ic:"peak",k:"rose"},
];
const pin='<svg width="15" height="15" viewBox="0 0 24 24" fill="#df4a2e"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>';
const tl=document.getElementById("tl");
acara.forEach((a,i)=>{
 const side=i%2===0?"left":"right";
 const el=document.createElement("div");
 el.className=`tl-item ${side}`;el.dataset.cat=a.c;
 el.innerHTML=`
   <div class="tl-node n-${a.k}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[a.ic]}</svg></div>
   <div class="tl-card">
     <span class="tl-pill p-${a.k}">${a.d}</span>
     <h3>${a.t}</h3>
     <div class="tl-loc">${pin}<span>${a.l}</span></div>
   </div>`;
 tl.appendChild(el);
});
document.getElementById("filters").addEventListener("click",e=>{
 const b=e.target.closest(".chip");if(!b)return;
 document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
 b.classList.add("active");const f=b.dataset.f;
 document.querySelectorAll(".tl-item").forEach(it=>it.classList.toggle("hide",f!=="all"&&it.dataset.cat!==f));
});

/* ---- DETAIL LOMBA carousel (poster asli) ---- */
const posters=[
 {img:"images/poster1-hias-altar.jpg",t:"Lomba Hias Altar",s:"Antar Wilayah"},
 {img:"images/poster2-jadwal-hias-altar.jpg",t:"Jadwal Hias Altar",s:"Antar Wilayah"},
 {img:"images/poster3-short-movie.jpg",t:"Lomba Short Movie",s:"Remaja SMP – SMA"},
 {img:"images/poster4-demo-masak.jpg",t:"Demo Masak",s:"HUT Paroki"},
 {img:"images/poster5-mewarnai.jpg",t:"Lomba Mewarnai",s:"TK"},
 {img:"images/poster6-paduan-suara.jpg",t:"Lomba Paduan Suara",s:"Antar Wilayah"},
 {img:"images/poster7-storytelling.jpg",t:"Lomba Storytelling",s:"SD Kelas 1 – 3"},
 {img:"images/poster8-narasi-kitab-suci.jpg",t:"Lomba Narasi Kitab Suci",s:"OMK & Dewasa 17 – 60"},
];
const lb=document.getElementById("lb"),lbimg=document.getElementById("lbimg");
function openLB(src,alt){lbimg.src=src;lbimg.alt=alt;lb.classList.add("open")}
lb.addEventListener("click",()=>lb.classList.remove("open"));
document.getElementById("lbx").addEventListener("click",()=>lb.classList.remove("open"));

const track=document.getElementById("ctrack"),dotsEl=document.getElementById("cdots");
let idx=0;
posters.forEach((p,i)=>{
 const s=document.createElement("div");s.className="c-slide";
 s.innerHTML=`<img src="${p.img}" alt="Poster ${p.t}" loading="lazy"/><div class="cap"><b>${p.t}</b><small>${p.s}</small></div>`;
 s.querySelector("img").addEventListener("click",()=>openLB(p.img,p.t));
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