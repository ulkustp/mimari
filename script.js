// Karanlık Mod Aç/Kapat
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

// Karanlık Mod Geçişi
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

// Kullanıcı tercihini sakla
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.innerText = "☀️ Aydınlık Mod";
}

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
