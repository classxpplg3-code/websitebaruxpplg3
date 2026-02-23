/* ============================================
   X PPLG 3 — SMKN 1 CIOMAS
   script.js — All Data + Interactivity
   ============================================ */

// =============================================
// DATA — Edit semua data kelas di sini
// =============================================

const KELAS_INFO = {
    nama: "X PPLG 3",
    sekolah: "SMKN 1 Ciomas",
    email: "xpplg3@gmail.com",
    instagram: "https://instagram.com/xpplg3rd",
    whatsapp: "https://wa.me/6281234567890", // Ganti dengan nomor WA admin
};

const DATA_STRUKTUR = [
    {
        id: 1,
        nama: "Pak Firman Sidik",
        jabatan: "Wali Kelas",
        inisial: "FS",
        warna: "#3b5bdb",
        deskripsi: "Pembimbing dan pengarah utama kelas X PPLG 3. Bertanggung jawab atas perkembangan akademik dan karakter seluruh siswa.",
        tugas: [
            "Membimbing dan memantau perkembangan siswa",
            "Menjadi penghubung antara sekolah dan orang tua",
            "Memberikan arahan akademik dan non-akademik",
            "Memastikan kondisi kelas kondusif dan nyaman",
        ],
    },
    {
        id: 2,
        nama: "Bagus Pambudi Priyambodo",
        jabatan: "Ketua Kelas",
        inisial: "BP",
        warna: "#4c6ef5",
        deskripsi: "Pemimpin utama kelas X PPLG 3 yang bertanggung jawab mengkoordinasikan seluruh kegiatan kelas.",
        tugas: [
            "Memimpin dan mengkoordinasikan kegiatan kelas",
            "Menjadi perwakilan kelas dalam forum sekolah",
            "Memastikan kelancaran KBM di kelas",
            "Mengambil keputusan terkait kegiatan kelas",
        ],
    },
    {
        id: 3,
        nama: "Nadine Shahmina",
        jabatan: "Wakil Ketua Kelas",
        inisial: "NS",
        warna: "#7048e8",
        deskripsi: "Mendampingi ketua kelas dalam menjalankan tugasnya dan siap menggantikan ketua kelas saat berhalangan.",
        tugas: [
            "Membantu ketua kelas dalam bertugas",
            "Menggantikan ketua kelas saat berhalangan",
            "Mengkoordinasikan kegiatan internal kelas",
            "Memastikan komunikasi antar siswa berjalan baik",
        ],
    },
    {
        id: 4,
        nama: "Salsabilla Azahra",
        jabatan: "Sekretaris 1",
        inisial: "SA",
        warna: "#364fc7",
        deskripsi: "Sekretaris pertama yang bertanggung jawab atas administrasi dan pencatatan kelas.",
        tugas: [
            "Mencatat dan mengelola data administrasi kelas",
            "Membuat notulensi rapat dan kegiatan kelas",
            "Mengelola arsip surat dan dokumen kelas",
            "Membuat laporan kegiatan kelas",
        ],
    },
    {
        id: 5,
        nama: "Rafli",
        jabatan: "Sekretaris 2",
        inisial: "RF",
        warna: "#2f4ac4",
        deskripsi: "Sekretaris kedua yang membantu sekretaris pertama dalam urusan administrasi kelas.",
        tugas: [
            "Membantu sekretaris 1 dalam administrasi",
            "Menggantikan sekretaris 1 saat berhalangan",
            "Mendokumentasikan kegiatan kelas",
            "Mengelola daftar hadir siswa",
        ],
    },
    {
        id: 6,
        nama: "Oktavia",
        jabatan: "Bendahara 1",
        inisial: "OK",
        warna: "#1864ab",
        deskripsi: "Bendahara pertama yang bertanggung jawab atas pengelolaan keuangan kelas.",
        tugas: [
            "Mengelola dan mencatat keuangan kelas",
            "Mengumpulkan iuran kas kelas",
            "Membuat laporan keuangan berkala",
            "Menyusun anggaran kegiatan kelas",
        ],
    },
    {
        id: 7,
        nama: "Fanezza",
        jabatan: "Bendahara 2",
        inisial: "FN",
        warna: "#155fa0",
        deskripsi: "Bendahara kedua yang membantu bendahara pertama dalam pengelolaan keuangan kelas.",
        tugas: [
            "Membantu bendahara 1 dalam pengelolaan keuangan",
            "Menggantikan bendahara 1 saat berhalangan",
            "Membantu pengumpulan iuran kas",
            "Menjaga transparansi keuangan kelas",
        ],
    },
    {
        id: 8,
        nama: "Muhammad Rajib Zahir",
        jabatan: "PDD (Publikasi, Dokumentasi & Dekorasi)",
        inisial: "MR",
        warna: "#0c4a8a",
        deskripsi: "Bertanggung jawab atas dokumentasi, publikasi, dan dekorasi seluruh kegiatan kelas X PPLG 3.",
        tugas: [
            "Mendokumentasikan seluruh kegiatan kelas (foto/video)",
            "Mengelola media sosial dan publikasi kelas",
            "Mendesain materi visual dan konten digital kelas",
            "Mendekorasi kelas untuk kegiatan-kegiatan tertentu",
        ],
    },
];

const DATA_SISWA = [
    // Diurutkan berdasarkan abjad A-Z (sesuai data asli kelas)
    { nama: "Abyan Alfarizi", nisn: "0071234001", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Aisyah Chyntia Devantara", nisn: "0071234002", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Alivia Cahaya Lukmana", nisn: "0071234003", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Andini Novriani", nisn: "0071234004", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Asyifa Nurmaulidya", nisn: "0071234005", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Bagus Pambudi Priyambodo", nisn: "0071234006", ttl: "Bogor, 12 Mei 2009", hobi: "Futsal, Coding", cita: "Pengusaha IT" },
    { nama: "Bramantyo Arsya Wijaya", nisn: "0071234007", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Crisna Juliana", nisn: "0071234008", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Davin Alfarrel Nasrullah", nisn: "0071234009", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Dema Arya Ramadhan", nisn: "0071234010", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Don Matteu Abie Wewengkang", nisn: "0071234011", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Faneza Putri", nisn: "0071234012", ttl: "Bogor, -", hobi: "Menghitung, Coding", cita: "Finansial Teknologi" },
    { nama: "Faris Ahmad Ghaisan", nisn: "0071234013", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Habib Ramadhan", nisn: "0071234014", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Ilham Muhamad Fahri", nisn: "0071234015", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Intan Nuraeni", nisn: "0071234016", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Khaira Putri Madani", nisn: "0071234017", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Lulu Maulida", nisn: "0071234018", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Maisie Anzala Maramis", nisn: "0071234019", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Muhamad Aditya Saputra", nisn: "0071234020", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Muhamad Anzas Adzahri", nisn: "0071234021", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Muhammad Alif Fatir Sya'bani", nisn: "0071234022", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Muhammad Candra Kusuma", nisn: "0071234023", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Muhammad Hafiyz Nurhidayah", nisn: "0071234024", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Muhammad Noval Aidil Adha", nisn: "0071234025", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Muhammad Rajib Zahir", nisn: "0071234026", ttl: "Bogor, 23 Apr 2009", hobi: "Desain, Coding, Foto", cita: "UI Designer & Developer" },
    { nama: "Muhammad Refan Abiena Wafa", nisn: "0071234027", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Mutia Khamelia", nisn: "0071234028", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Nadine Shahmina", nisn: "0071234029", ttl: "Ciomas, 11 Jul 2009", hobi: "Coding, Menyanyi", cita: "Full Stack Developer" },
    { nama: "Nazhril Rizky Alfiansyah", nisn: "0071234030", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Niko Keandre Adinata", nisn: "0071234031", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Nur Syifa Fauziah", nisn: "0071234032", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Oktavia Indriani", nisn: "0071234033", ttl: "Bogor, -", hobi: "Akuntansi, Desain", cita: "Finance IT Specialist" },
    { nama: "Rafi Uddin", nisn: "0071234034", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Rafli", nisn: "0071234035", ttl: "Bogor, -", hobi: "Coding, Badminton", cita: "Software Developer" },
    { nama: "Ranty Dwi Oktavia", nisn: "0071234036", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Reisya Auliaul Jannah", nisn: "0071234037", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Restu Alfarizhi", nisn: "0071234038", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Revand Aqila Al Hafiz", nisn: "0071234039", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Rizky Maulana", nisn: "0071234040", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Salsabila Azzahra", nisn: "0071234041", ttl: "Ciomas, 20 Mar 2009", hobi: "Menulis, Coding", cita: "Tech Content Writer" },
    { nama: "Siti Ainun", nisn: "0071234042", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Siti Salwa Aulia", nisn: "0071234043", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Sulthan Azzam Rizkqullah", nisn: "0071234044", ttl: "Bogor, -", hobi: "-", cita: "-" },
    { nama: "Taruna Jayalaksana Suwarman", nisn: "0071234045", ttl: "Bogor, -", hobi: "-", cita: "-" },
];

const DATA_GALLERY = [
    { caption: "Foto Bersama — Hari Batik", src: "images/gallery/foto-batik.bmp", gradient: "linear-gradient(135deg, #1a237e, #283593)" },
    { caption: "Peringatan Hari Guru", src: "images/gallery/foto-maulid.jpg", gradient: "linear-gradient(135deg, #311b92, #4527a0)" },
    { caption: "Foto Bersama — Maulid Nabi", src: "images/gallery/foto-putih1.jpg", gradient: "linear-gradient(135deg, #0d47a1, #1565c0)" },
    { caption: "Foto Bersama — Ramadan", src: "images/gallery/foto-putih2.jpg", gradient: "linear-gradient(135deg, #004d40, #00695c)" },
    { caption: "Foto Bersama — Seragam Muslim", src: "images/gallery/foto-pramuka.jpg", gradient: "linear-gradient(135deg, #bf360c, #d84315)" },
];

// =============================================
// INIT
// =============================================

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    renderStruktur();
    renderSiswa();
    renderGallery();
    initContactForm();
    initScrollReveal();
    initCountUp();
    initModalClose();
});

// =============================================
// NAVBAR
// =============================================

function initNavbar() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const links = document.querySelectorAll(".nav-link");

    // Scroll sticky effect
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
        updateActiveNav();
    });

    // Hamburger toggle
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    // Smooth scroll + close mobile menu
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth" });
            navLinks.classList.remove("open");
        });
    });

    // Close mobile menu on outside click
    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target)) navLinks.classList.remove("open");
    });
}

function updateActiveNav() {
    const sections = ["beranda", "struktur", "siswa", "gallery", "contact"];
    const scrollY = window.scrollY + 100;

    sections.forEach((id) => {
        const el = document.getElementById(id);
        const link = document.getElementById(`nav-${id}`);
        if (!el || !link) return;
        if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
            document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
}

// =============================================
// COUNT UP ANIMATION
// =============================================

function initCountUp() {
    const el = document.getElementById("countUp");
    if (!el) return;
    const target = DATA_SISWA.length;
    let current = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const timer = setInterval(() => {
                current += increment;
                el.textContent = Math.min(Math.floor(current), target);
                if (current >= target) clearInterval(timer);
            }, 16);
            observer.disconnect();
        }
    });
    observer.observe(el);
}

// =============================================
// STRUKTUR KELAS
// =============================================

function renderStruktur() {
    const grid = document.getElementById("strukturGrid");
    if (!grid) return;

    DATA_STRUKTUR.forEach((s) => {
        const card = document.createElement("div");
        card.className = "struktur-card reveal";
        card.innerHTML = `
      <div class="struktur-photo" style="background: linear-gradient(135deg, ${s.warna}33, ${s.warna}11);">
        <div style="width:80px;height:80px;border-radius:50%;background:${s.warna}44;border:2px solid ${s.warna}88;display:flex;align-items:center;justify-content:center;font-family:var(--font-head);font-size:1.8rem;font-weight:700;color:rgba(255,255,255,0.85);">
          ${s.inisial}
        </div>
        <div class="click-hint"><span>Klik untuk detail</span></div>
      </div>
      <div class="struktur-info">
        <div class="struktur-name">${s.nama}</div>
        <div class="struktur-jabatan-badge">${s.jabatan}</div>
      </div>
    `;
        card.addEventListener("click", () => openStrukturModal(s));
        grid.appendChild(card);
    });
}

function openStrukturModal(s) {
    const modal = document.getElementById("strukturModal");
    document.getElementById("modalAvatar").textContent = s.inisial;
    document.getElementById("modalAvatar").style.background = `linear-gradient(135deg, ${s.warna}, ${s.warna}cc)`;
    document.getElementById("modalName").textContent = s.nama;
    document.getElementById("modalJabatan").textContent = s.jabatan;
    document.getElementById("modalDesc").textContent = s.deskripsi;

    const dutiesEl = document.getElementById("modalDuties");
    dutiesEl.innerHTML = `
    <h4>Tugas & Tanggung Jawab</h4>
    <ul>${s.tugas.map((t) => `<li>${t}</li>`).join("")}</ul>
  `;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// =============================================
// SISWA / STUDENTS
// =============================================

function renderSiswa() {
    const list = document.getElementById("siswaList");
    if (!list) return;

    DATA_SISWA.forEach((siswa, idx) => {
        const item = document.createElement("div");
        item.className = "siswa-item blurred";
        item.dataset.index = idx;
        item.innerHTML = `
      <span class="siswa-num">${String(idx + 1).padStart(2, "0")}</span>
      <span class="siswa-name-text">${siswa.nama}</span>
      <i class="fas fa-chevron-right" style="font-size:10px;color:var(--text-dim);"></i>
    `;
        item.addEventListener("click", () => selectSiswa(siswa, item, idx));
        list.appendChild(item);
    });
}

function selectSiswa(siswa, itemEl, idx) {
    // Blur ALL items and remove active
    document.querySelectorAll(".siswa-item").forEach((el) => {
        el.classList.remove("active");
        el.classList.add("blurred");
    });

    // Only the clicked item: remove blur and set active
    itemEl.classList.remove("blurred");
    itemEl.classList.add("active");

    // Show profile
    const inisial = siswa.nama
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();

    const colors = ["#3b5bdb", "#7048e8", "#4c6ef5", "#1864ab", "#0c4a8a", "#364fc7"];
    const color = colors[idx % colors.length];

    document.getElementById("profileAvatar").innerHTML = `
    <div style="width:100%;height:100%;border-radius:50%;background:linear-gradient(135deg,${color},${color}aa);display:flex;align-items:center;justify-content:center;font-family:var(--font-head);font-weight:700;font-size:2rem;color:white;">
      ${inisial}
    </div>
  `;

    document.getElementById("profileName").textContent = siswa.nama;
    document.getElementById("profileDetails").innerHTML = `
    <div class="detail-row">
      <span class="detail-label">NISN</span>
      <span class="detail-value">${siswa.nisn}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">TTL</span>
      <span class="detail-value">${siswa.ttl}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Kelas</span>
      <span class="detail-value">X PPLG 3</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Hobi</span>
      <span class="detail-value">${siswa.hobi}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Cita-cita</span>
      <span class="detail-value">${siswa.cita}</span>
    </div>
  `;

    document.getElementById("siswaPlaceholder").style.display = "none";
    document.getElementById("siswaProfile").style.display = "block";
}

// =============================================
// GALLERY
// =============================================

function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    DATA_GALLERY.forEach((item, idx) => {
        const el = document.createElement("div");
        el.className = "gallery-item reveal";
        el.style.setProperty("--delay", `${idx * 0.1}s`);

        if (item.src) {
            el.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy"
             onerror="this.parentElement.querySelector('.gallery-fallback').style.display='flex';this.style.display='none';">
        <div class="gallery-fallback" style="display:none;width:100%;height:100%;background:${item.gradient};align-items:center;justify-content:center;font-size:3rem;color:rgba(255,255,255,0.15);">
          <i class="fas fa-image"></i>
        </div>
        <div class="gallery-overlay"><i class="fas fa-expand"></i></div>
        <div class="gallery-caption">${item.caption}</div>
      `;
        } else {
            el.innerHTML = `
        <div style="width:100%;height:100%;background:${item.gradient};display:flex;align-items:center;justify-content:center;font-size:3rem;color:rgba(255,255,255,0.15);">
          <i class="fas fa-image"></i>
        </div>
        <div class="gallery-overlay"><i class="fas fa-expand"></i></div>
        <div class="gallery-caption">${item.caption}</div>
      `;
        }
        el.addEventListener("click", () => openGalleryModal(item, idx));
        grid.appendChild(el);
    });
}

function openGalleryModal(item, idx) {
    const modal = document.getElementById("galleryModal");
    const imgEl = document.getElementById("galleryModalImg");
    const imgWrap = document.querySelector(".gallery-modal-img-wrap");

    if (item.src) {
        // Show real photo
        imgEl.src = item.src;
        imgEl.alt = item.caption;
        imgEl.style.display = "block";
        imgWrap.style.background = "";
    } else {
        // Fallback: canvas gradient placeholder
        const canvas = document.createElement("canvas");
        canvas.width = 800;
        canvas.height = 450;
        const ctx = canvas.getContext("2d");
        const grad = ctx.createLinearGradient(0, 0, 800, 450);
        const colors = [
            ["#1a237e", "#283593"],
            ["#0d47a1", "#1565c0"],
            ["#311b92", "#4527a0"],
            ["#1b5e20", "#2e7d32"],
            ["#004d40", "#00695c"],
            ["#bf360c", "#d84315"],
        ];
        const [c1, c2] = colors[idx % colors.length];
        grad.addColorStop(0, c1);
        grad.addColorStop(1, c2);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 800, 450);
        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.font = "bold 80px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("📷", 400, 200);
        ctx.font = "24px Arial";
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillText(item.caption, 400, 300);
        imgEl.src = canvas.toDataURL();
    }

    document.getElementById("galleryModalCaption").textContent = item.caption;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// =============================================
// CONTACT FORM
// =============================================

function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    // Set WA link
    const waLink = document.getElementById("waLink");
    if (waLink) waLink.href = KELAS_INFO.whatsapp;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = document.getElementById("submitBtn");
        btn.innerHTML = `<span>Mengirim...</span><i class="fas fa-spinner fa-spin"></i>`;
        btn.disabled = true;

        try {
            const formData = new FormData(form);
            const res = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                showToast("✅ Pesan berhasil dikirim ke email kelas!");
                form.reset();
            } else {
                // Fallback: open mailto
                const name = document.getElementById("userName").value;
                const email = document.getElementById("userEmail").value;
                const msg = document.getElementById("userMessage").value;
                const mailto = `mailto:${KELAS_INFO.email}?subject=Pesan dari ${encodeURIComponent(name)}&body=${encodeURIComponent(`Dari: ${name}\nEmail: ${email}\n\nPesan:\n${msg}`)}`;
                window.open(mailto);
                showToast("Membuka aplikasi email...");
            }
        } catch (err) {
            // Fallback: mailto
            const name = document.getElementById("userName").value;
            const email = document.getElementById("userEmail").value;
            const msg = document.getElementById("userMessage").value;
            const mailto = `mailto:${KELAS_INFO.email}?subject=Pesan dari ${encodeURIComponent(name)}&body=${encodeURIComponent(`Dari: ${name}\nEmail: ${email}\n\nPesan:\n${msg}`)}`;
            window.open(mailto);
            showToast("Membuka aplikasi email...");
        }

        btn.innerHTML = `<span>KIRIM</span><i class="fas fa-paper-plane"></i>`;
        btn.disabled = false;
    });
}

// =============================================
// MODAL CLOSE HANDLERS
// =============================================

function initModalClose() {
    // Struktur modal
    document.getElementById("strukturModalClose").addEventListener("click", closeStrukturModal);
    document.getElementById("strukturModal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeStrukturModal();
    });

    // Gallery modal
    document.getElementById("galleryModalClose").addEventListener("click", closeGalleryModal);
    document.getElementById("galleryModal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeGalleryModal();
    });

    // ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeStrukturModal();
            closeGalleryModal();
        }
    });
}

function closeStrukturModal() {
    document.getElementById("strukturModal").classList.remove("active");
    document.body.style.overflow = "";
}

function closeGalleryModal() {
    document.getElementById("galleryModal").classList.remove("active");
    document.body.style.overflow = "";
}

// =============================================
// TOAST NOTIFICATION
// =============================================

function showToast(msg) {
    const toast = document.getElementById("toast");
    document.getElementById("toastMsg").textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
}

// =============================================
// SCROLL REVEAL ANIMATION
// =============================================

function initScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, entry.target.dataset.delay ? parseFloat(entry.target.dataset.delay) * 1000 : 0);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el, i) => {
        el.style.transitionDelay = `${(i % 6) * 0.08}s`;
        observer.observe(el);
    });
}
