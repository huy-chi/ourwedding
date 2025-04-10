// Function to show custom alert
function showCustomAlert(message, type = 'success') {
    const alert = document.getElementById('customAlert');
    alert.textContent = message;
    alert.className = `custom-alert ${type} show`;
    
    // Hide alert after 3 seconds
    setTimeout(() => {
        alert.className = 'custom-alert';
    }, 3000);
}

// Form submission handler
document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const relationship = document.getElementById('relationship').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !relationship || !message) {
        showCustomAlert('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }

    const formData = {
        name: name,
        relationship: relationship,
        message: message
    };

    fetch("https://script.google.com/macros/s/AKfycbxloREzxTwukdcJoWzAE4vEWRa_hd38dfPZDybwPaiPQLj8INahWSf4-K-N11OdEDSLEw/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => showCustomAlert('Cảm ơn bạn đã gửi lời chúc! ❤️'))
    .catch(error => console.error("Error:", error));

    // Clear the form
    this.reset();
});

// Handle preset message selection
document.getElementById('select-available-message').addEventListener('change', function(e) {
    const messageTextarea = document.getElementById('message');
    const selectedOption = e.target.options[e.target.selectedIndex];
    if (selectedOption.value) {
        messageTextarea.value = selectedOption.text;
    }
});
