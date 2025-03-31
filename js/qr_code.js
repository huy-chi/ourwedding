// Get DOM elements
const giftIcon = document.getElementById('giftIcon');
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closeBtn');
const downloadQR1 = document.getElementById('downloadQR1');
const downloadQR2 = document.getElementById('downloadQR2');
const copySoTaiKhoan1 = document.getElementById('copySoTaiKhoan1');
const copySoTaiKhoan2 = document.getElementById('copySoTaiKhoan2');

// Open popup when gift icon is clicked
giftIcon.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

// Close popup when clicking outside the popup
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
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

function copyAccountNumber(accountNumber) {
    navigator.clipboard.writeText(accountNumber)
        .then(() => alert("Đã copy số tài khoản: " + accountNumber))
        .catch(err => console.error("Lỗi copy số tài khoản", err));
}