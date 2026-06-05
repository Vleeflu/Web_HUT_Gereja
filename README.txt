HUT ke-56 — Gereja Keluarga Kudus Paroki Rawamangun
Website statis (HTML + CSS + JS terpisah)
====================================================

STRUKTUR FOLDER
---------------
Web_final/
├─ index.html              -> halaman utama (markup)
├─ css/
│   └─ styles.css          -> semua styling
├─ js/
│   └─ main.js             -> semua interaksi (timeline filter, carousel, countdown, nav, lightbox)
└─ images/                 -> semua gambar
    ├─ hero1-bg.jpg        -> latar Hero 1 (banner + logo + gereja)
    ├─ hero2-bg.jpg        -> latar Hero 2 (tema)
    ├─ logo.png            -> logo HUT ke-56 (latar transparan)
    ├─ crest.png           -> lambang paroki (favicon + Hero 1)
    ├─ poster1-hias-altar.jpg
    ├─ poster2-jadwal-hias-altar.jpg
    ├─ poster3-short-movie.jpg
    ├─ poster4-demo-masak.jpg
    ├─ poster5-mewarnai.jpg
    ├─ poster6-paduan-suara.jpg
    ├─ poster7-storytelling.jpg
    └─ poster8-narasi-kitab-suci.jpg

CARA MENJALANKAN (lokal)
------------------------
Klik dua kali index.html untuk membuka di browser.
Catatan: font Fraunces & Plus Jakarta Sans diambil dari Google Fonts,
jadi tampilan terbaik saat ada koneksi internet. Tanpa internet, font
akan fallback ke serif/sans bawaan sistem (tetap berfungsi).

Jika ingin menjalankan lewat server lokal (opsional, hindari isu path):
  - Python:  buka folder ini di terminal, jalankan:  python -m http.server 8000
             lalu buka http://localhost:8000
  - VS Code: pakai ekstensi "Live Server".

CARA DEPLOY (online + dapat domain gratis)
-------------------------------------------
- Netlify Drop: buka https://app.netlify.com/drop lalu SERET SELURUH FOLDER ini
  ke halaman tersebut. Langsung dapat alamat namaproyek.netlify.app
- Atau Vercel / Cloudflare Pages / GitHub Pages: unggah seluruh folder.
- Untuk domain custom (mis. hut56keluargakudus.com): beli domain lalu arahkan
  ke hosting di atas via menu "Custom domain".

MENGEDIT KONTEN
---------------
- Daftar acara timeline: ubah array "acara" di js/main.js
- Poster carousel: ganti file di folder images/ (pakai nama sama) atau ubah
  array "posters" di js/main.js
- Teks Hero: ubah langsung di index.html (bagian <header class="hero hero1">
  dan <section class="hero hero2">)
- Warna & ukuran: ubah variabel di bagian :root pada css/styles.css
