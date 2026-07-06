"use strict";

/**
 * =============================================================
 * DATA PRODUK
 * Memisahkan data dari markup mempermudah maintenance —
 * ke depannya array ini bisa diganti hasil fetch() dari API/Laravel.
 * =============================================================
 */
const PRODUK = [
  {
    id: 1,
    nama: "Alika 100 ML",
    kategori: "insektisida",
    harga: 77000,
    stok: 4,
    satuan: "Botol",
    gambar: "1.png",
    deskripsi:
      "Insektisida sistemik yang efektif mengendalikan hama penghisap pada tanaman padi, cabai, tomat, dan berbagai tanaman hortikultura.",
  },

  {
    id: 2,
    nama: "Alika 250 ML",
    kategori: "insektisida",
    harga: 165000,
    stok: 4,
    satuan: "Botol",
    gambar: "2.png",
    deskripsi:
      "Insektisida sistemik yang efektif mengendalikan hama penghisap pada tanaman padi, cabai, tomat, dan berbagai tanaman hortikultura.",
  },

  {
    id: 3,
    nama: "Rudal 500 ML",
    kategori: "herbisida",
    harga: 65000,
    stok: 3,
    satuan: "Botol",
    gambar: "3.png",
    deskripsi:
      "herbisida racun daun yang efektif mengendalikan berbagai jenis gulma pada lahan pertanian dan perkebunan. Bekerja melalui daun gulma yang terkena semprotan, sehingga gulma cepat menguning, mengering, dan mati. Cocok digunakan pada tanaman seperti kelapa sawit, karet, dan tanaman tahunan lainnya. Gunakan sesuai dosis anjuran untuk hasil pengendalian gulma yang optimal.",
  },

  {
    id: 4,
    nama: "Regent 100 ML",
    kategori: "insektisida",
    harga: 58000,
    stok: 4,
    satuan: "Botol",
    gambar: "4.png",
    deskripsi:
      "insektisida yang efektif mengendalikan berbagai hama pada tanaman pertanian. Bekerja melalui kontak dan lambung serangga, sehingga mampu membasmi hama secara cepat dan membantu melindungi tanaman dari kerusakan. Cocok digunakan pada berbagai komoditas pertanian sesuai petunjuk penggunaan. Gunakan sesuai dosis anjuran agar pengendalian hama optimal dan hasil panen tetap terjaga. Cocok untuk padi, jagung, cabai, tomat, bawang merah, dan kentang.",
  },

  {
    id: 5,
    nama: "Regent 250 ML",
    kategori: "insektisida",
    harga: 125000,
    stok: 1,
    satuan: "Botol",
    gambar: "5.png",
    deskripsi:
      "Iinsektisida yang efektif mengendalikan berbagai hama pada tanaman pertanian. Bekerja melalui kontak dan lambung serangga, sehingga mampu membasmi hama secara cepat dan membantu melindungi tanaman dari kerusakan. Cocok digunakan pada berbagai komoditas pertanian sesuai petunjuk penggunaan. Gunakan sesuai dosis anjuran agar pengendalian hama optimal dan hasil panen tetap terjaga. Cocok untuk padi, jagung, cabai, tomat, bawang merah, dan kentang.",
  },

  {
    id: 6,
    nama: "Green Tonik 1 Liter",
    kategori: "pupuk",
    harga: 28000,
    stok: 3,
    satuan: "Botol",
    gambar: "6.png",
    deskripsi:
      "Pupuk daun yang membantu pertumbuhan tanaman, menjaga daun tetap hijau, memperkuat batang, serta mendukung pembentukan bunga dan buah.",
  },

  {
    id: 7,
    nama: "Gramoxone 1 Liter",
    kategori: "herbisida",
    harga: 75000,
    stok: 12,
    satuan: "Botol",
    gambar: "7.png",
    deskripsi:
      "herbisida racun daun yang bekerja cepat untuk mengendalikan berbagai jenis gulma pada lahan pertanian dan perkebunan. Herbisida ini bekerja melalui daun gulma yang terkena semprotan, sehingga gulma cepat layu, mengering, dan mati. Cocok digunakan pada tanaman seperti kelapa sawit, karet, dan tanaman tahunan lainnya. Gunakan sesuai dosis dan petunjuk pada label untuk hasil pengendalian gulma yang efektif dan aman.",
  },

  {
    id: 8,
    nama: "Gramoxone 5 Liter",
    kategori: "herbisida",
    harga: 360000,
    stok: 0,
    satuan: "Jerigen",
    gambar: "8.png",
    deskripsi:
      "herbisida racun daun yang bekerja cepat untuk mengendalikan berbagai jenis gulma pada lahan pertanian dan perkebunan. Herbisida ini bekerja melalui daun gulma yang terkena semprotan, sehingga gulma cepat layu, mengering, dan mati. Cocok digunakan pada tanaman seperti kelapa sawit, karet, dan tanaman tahunan lainnya. Gunakan sesuai dosis dan petunjuk pada label untuk hasil pengendalian gulma yang efektif dan aman.",
  },

  {
    id: 9,
    nama: "Superemo 1 Liter",
    kategori: "herbisida",
    harga: 85000,
    stok: 5,
    satuan: "Botol",
    gambar: "9.png",
    deskripsi:
      "Herbisida sistemik yang bekerja hingga ke akar gulma. Cocok untuk kelapa sawit, karet, kakao, kopi, jagung, dan tebu.",
  },

  {
    id: 10,
    nama: "Jossone 1 Liter",
    kategori: "herbisida",
    harga: 40000,
    stok: 20,
    satuan: "Botol",
    gambar: "10 (1).png",
    deskripsi:
      " herbisida yang efektif mengendalikan berbagai jenis gulma pada lahan pertanian dan perkebunan. Bekerja melalui daun gulma yang terkena semprotan sehingga gulma cepat menguning, mengering, dan mati. Cocok digunakan pada tanaman seperti kelapa sawit, karet, dan tanaman tahunan lainnya.",
  },

  {
    id: 11,
    nama: "Jossone 5 Liter",
    kategori: "herbisida",
    harga: 180000,
    stok: 0,
    satuan: "Jerigen",
    gambar: "11.png",
    deskripsi:
      "herbisida yang efektif mengendalikan berbagai jenis gulma pada lahan pertanian dan perkebunan. Bekerja melalui daun gulma yang terkena semprotan sehingga gulma cepat menguning, mengering, dan mati. Cocok digunakan pada tanaman seperti kelapa sawit, karet, dan tanaman tahunan lainnya.",
  },

  {
    id: 12,
    nama: "Roundup 1 Liter",
    kategori: "herbisida",
    harga: 95000,
    stok: 0,
    satuan: "Botol",
    gambar: "12.png",
    deskripsi:
      "herbisida sistemik yang efektif mengendalikan berbagai jenis gulma berdaun lebar, berdaun sempit, dan teki. Herbisida ini diserap melalui daun lalu menyebar hingga ke akar, sehingga gulma mengering dan mati secara menyeluruh. Cocok digunakan pada lahan pertanian dan perkebunan, seperti kelapa sawit, karet, dan tanaman tahunan lainnya.",
  },

  {
    id: 13,
    nama: "Kayabass 500 ML",
    kategori: "insektisida",
    harga: 170000,
    stok: 7,
    satuan: "Botol",
    gambar: "13.png",
    deskripsi:
      "insektisida yang efektif mengendalikan berbagai jenis hama pada tanaman pertanian dan perkebunan. Bekerja melalui kontak dan lambung serangga sehingga membantu melindungi tanaman dari kerusakan akibat serangan hama. Insektisida yang efektif mengendalikan berbagai hama pada tanaman padi, cabai, tomat, bawang merah, dan jagung.",
  },

  {
    id: 14,
    nama: "Kering 1 Liter",
    kategori: "herbisida",
    harga: 75000,
    stok: 19,
    satuan: "Botol",
    gambar: "14.png",
    deskripsi:
      "herbisida yang efektif mengendalikan berbagai jenis gulma pada lahan pertanian dan perkebunan. Bekerja melalui daun gulma yang terkena semprotan sehingga gulma cepat layu, mengering, dan mati. Cocok digunakan pada tanaman seperti kelapa sawit, jagung, padi, dan tanaman tahunan lainnya.",
  },

  {
    id: 15,
    nama: "Basmilang 1 Liter",
    kategori: "herbisida",
    harga: 85000,
    stok: 18,
    satuan: "Botol",
    gambar: "15.png",
    deskripsi:
      "herbisida yang efektif mengendalikan berbagai jenis gulma pada lahan pertanian dan perkebunan. Bekerja melalui daun gulma yang terkena semprotan sehingga gulma cepat layu, mengering, dan mati. Cocok digunakan pada berbagai tanaman pertanian dan perkebunan.",
  },
];

const WA_NUMBER = "6282358374235";

/** Format angka ke Rupiah, mis. 77000 -> "Rp77.000" */
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

/** Kapitalisasi huruf pertama, dipakai untuk label kategori */
function kapital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * =============================================================
 * RENDER PRODUK
 * Membangun DOM lewat createElement + textContent (BUKAN innerHTML)
 * agar data produk tidak bisa men-trigger XSS bila suatu saat
 * datanya berasal dari input pengguna / database.
 * =============================================================
 */
const produkGrid = document.getElementById("produkGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filterBox = document.getElementById("filterBox");

let currentFilter = "semua";
let currentSearch = "";

function buatKartuProduk(produk) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Lihat detail ${produk.nama}`);
  card.dataset.id = produk.id;

  const thumb = document.createElement("div");
  thumb.className = "product-thumb";

  const img = document.createElement("img");
  img.src = produk.gambar;
  img.alt = produk.nama;
  img.loading = "lazy";
  thumb.appendChild(img);

  const badge = document.createElement("span");
  badge.className = "product-kategori";
  badge.textContent = kapital(produk.kategori);
  thumb.appendChild(badge);

  const body = document.createElement("div");
  body.className = "product-body";

  const nama = document.createElement("h5");
  nama.textContent = produk.nama;

  const footer = document.createElement("div");
  footer.className = "product-footer";

  const harga = document.createElement("span");
  harga.className = "product-price";
  harga.textContent = formatRupiah(produk.harga);

  const stok = document.createElement("span");
  stok.className = "product-stock" + (produk.stok <= 3 ? " low" : "");
  stok.textContent = `Stok: ${produk.stok} ${produk.satuan}`;

  footer.append(harga, stok);
  body.append(nama, footer);
  card.append(thumb, body);

  card.addEventListener("click", () => bukaModal(produk));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      bukaModal(produk);
    }
  });

  return card;
}

function renderProduk() {
  const hasil = PRODUK.filter((p) => {
    const cocokFilter =
      currentFilter === "semua" || p.kategori === currentFilter;
    const cocokCari = p.nama.toLowerCase().includes(currentSearch);
    return cocokFilter && cocokCari;
  });

  produkGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();
  hasil.forEach((p) => fragment.appendChild(buatKartuProduk(p)));
  produkGrid.appendChild(fragment);

  emptyState.hidden = hasil.length !== 0;
}

// Search (debounce ringan agar tidak re-render setiap keystroke secara berlebihan)
let searchTimer;
searchInput.addEventListener("input", (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    currentSearch = e.target.value.trim().toLowerCase();
    renderProduk();
  }, 150);
});

// Filter kategori
filterBox.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-chip");
  if (!btn) return;

  filterBox
    .querySelectorAll(".filter-chip")
    .forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");

  currentFilter = btn.dataset.filter;
  renderProduk();
});

/**
 * =============================================================
 * MODAL DETAIL PRODUK (SATU instance, diisi ulang tiap klik)
 * =============================================================
 */
const modal = document.getElementById("produkModal");
const modalClose = document.getElementById("modalClose");
const modalGambar = document.getElementById("modalGambar");
const modalKategori = document.getElementById("modalKategori");
const modalNama = document.getElementById("modalNama");
const modalHarga = document.getElementById("modalHarga");
const modalStok = document.getElementById("modalStok");
const modalStokBadge = document.getElementById("modalStokBadge");
const modalDeskripsi = document.getElementById("modalDeskripsi");
const modalPesanBtn = document.getElementById("modalPesanBtn");

let lastFocusedEl = null;

function bukaModal(produk) {
  modalGambar.src = produk.gambar;
  modalGambar.alt = produk.nama;
  modalKategori.textContent = kapital(produk.kategori);
  modalNama.textContent = produk.nama;
  modalHarga.textContent = formatRupiah(produk.harga);
  modalStok.textContent = `${produk.stok} ${produk.satuan}`;
  modalDeskripsi.textContent = produk.deskripsi;

  modalStokBadge.textContent = produk.stok <= 3 ? "Stok Terbatas" : "Tersedia";
  modalStokBadge.className =
    "modal-stock-badge" + (produk.stok <= 3 ? " low" : "");

  // Pesan WhatsApp otomatis terisi nama produk (encodeURIComponent mencegah karakter rusak/injeksi pada URL)
  const pesanWA = `Halo, saya ingin memesan ${produk.nama} (${formatRupiah(produk.harga)}). Apakah masih tersedia?`;
  modalPesanBtn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesanWA)}`;

  lastFocusedEl = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function tutupModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

modalClose.addEventListener("click", tutupModal);

// Klik di luar modal-box menutup modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) tutupModal();
});

// Tombol Escape menutup modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) tutupModal();
});

/**
 * =============================================================
 * NAVIGASI: burger menu (mobile) + highlight link aktif saat scroll
 * =============================================================
 */
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  burgerBtn.classList.toggle("open", isOpen);
  burgerBtn.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    burgerBtn.classList.remove("open");
    burgerBtn.setAttribute("aria-expanded", "false");
  });
});

const sections = ["home", "produk", "about", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.nav === entry.target.id);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);

sections.forEach((sec) => sectionObserver.observe(sec));

/**
 * =============================================================
 * INISIALISASI
 * =============================================================
 */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("statProduk").textContent = PRODUK.length;

renderProduk();
