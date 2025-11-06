const searchBtn = document.getElementById('search');
const searchBox = document.getElementById('searchBox');
const searchInput = document.getElementById('searchInput');

// Toggle muncul / hilang
searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
        searchInput.focus();
    }
});

// Klik di luar menutup kotak search
document.addEventListener('click', (e) => {
    if (!searchBox.contains(e.target) && !searchBtn.contains(e.target)) {
        searchBox.classList.remove('active');
    }
});

// Tekan Enter untuk melakukan aksi pencarian (contoh log)
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log('Kata kunci:', searchInput.value);
        searchBox.classList.remove('active'); // Tutup setelah pencarian
    }
});