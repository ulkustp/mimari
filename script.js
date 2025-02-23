console.log("Web sitesi başarıyla yüklendi!");
// Karanlık Mod Aç/Kapat
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Arama Fonksiyonu
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keyup', function () {
    let filter = searchBar.value.toLowerCase();
    let items = document.querySelectorAll('.mimar, .yapi');

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});
// Sayfa kaydırıldığında kartları görünür hale getir
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
// Karanlık Modu Aç/Kapat ve Kullanıcı Tercihini Kaydet
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
// Arama Fonksiyonuna Mesaj Ekle
const searchBar = document.getElementById('search-bar');
const items = document.querySelectorAll('.mimar, .yapi');
const main = document.querySelector('main');

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
    let noResults = document.getElementById('no-results');
    if (!noResults) {
        noResults = document.createElement('p');
        noResults.id = 'no-results';
        noResults.style.textAlign = 'center';
        noResults.style.fontSize = '18px';
        noResults.style.color = '#666';
        main.appendChild(noResults);
    }

    noResults.textContent = visibleItems === 0 ? 'Sonuç bulunamadı 😔' : '';
});
