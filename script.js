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
