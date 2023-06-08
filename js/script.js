function showPopup() {
  var popupShown = localStorage.getItem("popupShown");

  if (!popupShown) {
    var name = prompt("Please enter your name:");
    if (name) {
      document.getElementById("name").textContent = name;
      localStorage.setItem("popupShown", true);
      localStorage.setItem("name", name);
    }
  } else {
    var storedName = localStorage.getItem("name");
    document.getElementById("name").textContent = storedName;
  }
}

// Reset flag popupShown saat pindah menu
function resetPopupFlag() {
  var currentPage = location.pathname.split('/').slice(-1)[0];
  if (currentPage !== "index.html") {
    localStorage.removeItem("popupShown");
  }
}

// Cek apakah halaman diakses melalui Home atau menu lain
var currentPage = location.pathname.split('/').slice(-1)[0];
if (currentPage === "index.html") {
  showPopup();
} else {
  resetPopupFlag();
}

// Mengisi ulang popup saat refresh
window.addEventListener("beforeunload", function() {
  localStorage.removeItem("popupShown");
});



const form = document.querySelector('form');
const namaInput = document.getElementById('nama');
const lahirInput = document.getElementById('lahir');
const jeniskelaminInput = document.getElementsByName('jeniskelamin');
const pesanInput = document.getElementById('pesan');
const datetimeOutput = document.getElementById('datetime');
const namaOutput = document.getElementById('namaOutput');
const dateOutput = document.getElementById('dateOutput');
const jeniskelaminOutput = document.getElementById('jeniskelaminOutput');
const pesanOutput = document.getElementById('pesanOutput');

// Menambahkan event listener pada saat form di-submit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Menghentikan submit form default

  // Mengisi nilai pada output tabel
  datetimeOutput.textContent = new Date().toLocaleString();
  namaOutput.textContent = namaInput.value;
  dateOutput.textContent = lahirInput.value;
  jeniskelaminOutput.textContent = getSelectedRadioValue(jeniskelaminInput);
  pesanOutput.textContent = pesanInput.value;

  form.reset(); // Mengosongkan form setelah di-submit
});

// Fungsi untuk mendapatkan nilai dari radio button yang dipilih
function getSelectedRadioValue(radioButtons) {
  let value = '';
  radioButtons.forEach(function (radioButton) {
    if (radioButton.checked) {
      value = radioButton.value;
    }
  });
  return value;
}
