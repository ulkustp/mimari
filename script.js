// Karanlık Mod Aç/Kapat ve Tercihi Kaydet
const darkModeToggle = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Arama Fonksiyonu
const searchBar = document.getElementById('search-bar');
const items = document.querySelectorAll('.mimar, .yapi');
const noResultsMessage = document.getElementById('no-results');

searchBar.addEventListener('keyup', function () {
    let filter = searchBar.value.toLowerCase();
    let visibleItems = 0;

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = "";
            visibleItems++;
        } else {
            item.style.display = "none";
        }
    });

    // Eğer sonuç yoksa bir mesaj göster
    noResultsMessage.textContent = visibleItems === 0 ? 'Sonuç bulunamadı 😔' : '';
});

// Sayfa Kaydırıldığında Kartları Görünür Hale Getirme
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.mimar, .yapi').forEach((element) => {
    observer.observe(element);
});
