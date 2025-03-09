 // ========== Halaman Index (Input Nama & Cek Psikopat) ==========
function cekPsikopat() {
    let nama = document.getElementById("nama").value;
    
    if (nama.trim() === "") {
        alert("Masukkan nama dulu, dong!");
        return;
    }

    let persen = Math.floor(Math.random() * 101); // Angka random 0-100

    // Pindah ke result.html dengan data nama & persen
    window.location.href = `result.html?nama=${encodeURIComponent(nama)}&persen=${persen}`;
}

// ========== Halaman Result (Menampilkan Hasil) ==========
function tampilkanHasil() {
    const params = new URLSearchParams(window.location.search);
    const nama = params.get("nama");
    const persen = parseInt(params.get("persen")); // Konversi ke angka

    if (!nama || isNaN(persen)) {
        // Jika data tidak valid, kembali ke halaman utama
        window.location.href = "index.html";
        return;
    }

    let status = "";
    let gambar = "";

    // Array gambar untuk kategori tertentu
    const gambarUnder30 = ["img/normal.png", "img/normal2.png"];
    const gambarUnder70 = ["img/still-normal.png", "img/still-normal2.png"];
    const gambarUnder90 = ["img/gg.png", "img/gg2.png"];

    if (persen <= 10) {
        status = "Normies 😂";
        gambar = gambarUnder30[Math.floor(Math.random() * gambarUnder30.length)];
    } else if (persen <= 40) {
        status = "Aman normal inimah 😎";
        gambar = gambarUnder30[Math.floor(Math.random() * gambarUnder30.length)];
    } else if (persen <= 70) {
        status = "Mulai terlihat tanda tanda bahwa kamu menjadi psikopat 😈";
        gambar = gambarUnder70[Math.floor(Math.random() * gambarUnder70.length)];
    } else if (persen <= 90) {
        status = "Psikopat asli 😈";
        gambar = gambarUnder90[Math.floor(Math.random() * gambarUnder90.length)];
    } else {
        status = "Raja Iblis 😈🔥";
        gambar = "img/maou-sama.png"; // Tetap 1 gambar
    }

    // Tampilkan hasil di halaman
    document.getElementById("result-text").innerHTML = 
        `${nama}, tingkat psikopatmu adalah <strong>${persen}%</strong><br>${status}`;
    document.getElementById("result-image").src = gambar;
}