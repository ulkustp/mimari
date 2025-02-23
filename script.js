// Karanlık Mod Aç/Kapat Butonu
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "🌙 Karanlık Mod";
darkModeToggle.style.position = "fixed";
darkModeToggle.style.top = "20px";
darkModeToggle.style.right = "20px";
darkModeToggle.style.padding = "10px";
darkModeToggle.style.border = "none";
darkModeToggle.style.borderRadius = "5px";
darkModeToggle.style.cursor = "pointer";
darkModeToggle.style.backgroundColor = "#222";
darkModeToggle.style.color = "white";
document.body.appendChild(darkModeToggle);

// Sayfa Yüklenince Karanlık Modu Kontrol Et
window.onload = function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.innerText = "☀️ Aydınlık Mod";
    }
};

// Karanlık Mod Geçişi ve Yerel Depolama Kaydı
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.innerText = "☀️ Aydınlık Mod";
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.innerText = "🌙 Karanlık Mod";
    }
});

// Sayfa Kaydırıldığında Kartların Görünmesi
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".mimar, .yapi").forEach((element) => {
    observer.observe(element);
});

// Arama Çubuğu Ekleyelim
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", function () {
    let filter = searchBar.value.toLowerCase();
    let items = document.querySelectorAll(".mimar, .yapi");
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

    // Eğer sonuç yoksa mesaj göster
    let noResults = document.getElementById("no-results");
    if (!noResults) {
        noResults = document.createElement("p");
        noResults.id = "no-results";
        noResults.style.textAlign = "center";
        noResults.style.fontSize = "18px";
        noResults.style.color = "#666";
        document.body.appendChild(noResults);
    }

    noResults.textContent = visibleItems === 0 ? "Sonuç bulunamadı 😔" : "";
});

// Kartlara Tıklayınca Açılır Bilgi Gösterme
document.querySelectorAll(".mimar, .yapi").forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});
