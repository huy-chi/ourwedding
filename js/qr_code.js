// Get DOM elements
const giftIcon = document.getElementById('giftIcon');
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closeBtn');
const downloadQR1 = document.getElementById('downloadQR1');
const downloadQR2 = document.getElementById('downloadQR2');
const copySoTaiKhoan1 = document.getElementById('copySoTaiKhoan1');
const copySoTaiKhoan2 = document.getElementById('copySoTaiKhoan2');
const customAlert = document.getElementById('customAlert');

// Open popup when gift icon is clicked
giftIcon.addEventListener('click', () => {
    popupOverlay.classList.add('show');
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('show');
});

// Close popup when clicking outside the popup
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.classList.remove('show');
    }
});

function downloadQRCode(imgId, fileName) {
    const img = document.getElementById(imgId);
    const link = document.createElement("a");
    link.href = img.src;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showCustomAlert(message) {
    customAlert.textContent = message;
    customAlert.classList.add('show');
    
    setTimeout(() => {
        customAlert.classList.remove('show');
    }, 3000);
}

function copyAccountNumber(accountNumber) {
    navigator.clipboard.writeText(accountNumber)
        .then(() => showCustomAlert("Đã copy stk: " + accountNumber + "❤️"))
        .catch(err => console.error("Lỗi copy stk", err));
}