var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;

        // Diğer tüm panelleri kapat
        for (var j = 0; j < acc.length; j++) {
            var otherPanel = acc[j].nextElementSibling;
            if (otherPanel !== panel) {
                otherPanel.style.maxHeight = null;
                acc[j].classList.remove("active");
            }
        }

        // Tıklanan paneli aç veya kapat
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null; // Kapat
            this.classList.remove("active"); // Aktif sınıfı kaldır
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"; // Aç
            this.classList.add("active"); // Aktif sınıfı ekle
        }
    });
}
