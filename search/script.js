const name = document.querySelector(".name");
const yas = document.querySelector(".yas");
const sehir = document.querySelector(".sehir");
const input = document.querySelector(".input");
const departman = document.querySelector(".departman");
const button = document.querySelector(".search-btn");
const wrapperBottom = document.querySelector(".wrapper-bottom");
const removeButton = document.querySelector(".profile-btn");

var jsonData = {
  kisi1: {
    id: 1,
    ad: "Ahmet",
    yas: 25,
    sehir: "Istanbul",
    url: "https://i.pravatar.cc/300",
    departman: "Yazilim",
  },
  kisi2: {
    id: 2,
    ad: "Ayse",
    yas: 30,
    sehir: "Ankara",
    url: "https://i.pravatar.cc/300",
    departman: "İnsan Kaynaklari",
  },
  kisi3: {
    id: 3,
    ad: "Mehmet",
    yas: 22,
    sehir: "Izmir",
    url: "https://i.pravatar.cc/300",
    departman: "Yazilim",
  },
  kisi4: {
    id: 4,
    ad: "Mehmet",
    yas: 23,
    sehir: "Antalya",
    url: "https://i.pravatar.cc/300",
    departman: "Muhasebe",
  },
  kisi5: {
    id: 5,
    ad: "Fatma",
    yas: 28,
    sehir: "Adıyaman",
    url: "https://i.pravatar.cc/300",
    departman: "Yazilim",
  },
  kisi6: {
    id: 6,
    ad: "Can",
    yas: 29,
    sehir: "Giresun",
    url: "https://i.pravatar.cc/300",
    departman: "Güvenlik",
  },
  kisi7: {
    id: 7,
    ad: "John",
    yas: 21,
    sehir: "New York",
    url: "https://i.pravatar.cc/300",
    departman: "Yazilim",
  },
  kisi8: {
    id: 8,
    ad: "Erik",
    yas: 19,
    sehir: "Washington",
    url: "https://i.pravatar.cc/300",
    departman: "Yazilim",
  },
};

// ID'ye göre arama fonksiyonu
function idArama(id) {
  for (var key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      var kisi = jsonData[key];
      if (kisi.id === id) {
        return kisi;
      }
    }
  }
  return null;
}

button.addEventListener("click", function () {
  var arananKisiById = parseInt(input.value);

  if (isNaN(arananKisiById)) {
    alert("Geçersiz ID girişi.");
    input.value = "";
    return;
  }

  var bulunanKisi = idArama(arananKisiById);

  if (bulunanKisi) {
    // Mevcut "image" sınıfına sahip elementi bul ve varsa kaldır
    var mevcutResim = document.querySelector(".image");
    if (mevcutResim) {
      wrapperBottom.removeChild(mevcutResim);
    }

    const img = document.createElement("div");
    img.className = "image";
    img.innerHTML = `
      
      <img src="${bulunanKisi.url}">
    `;

    wrapperBottom.appendChild(img);

    name.innerHTML = `Ad: ${bulunanKisi.ad}`;
    yas.innerHTML = `Yaş: ${bulunanKisi.yas}`;
    sehir.innerHTML = `Şehir: ${bulunanKisi.sehir}`;
    departman.innerHTML = `Departman: ${bulunanKisi.departman}`;

    input.value = "";
  } else {
    alert("Aranan kişi bulunamadı.");
    input.value = "";
  }
});
