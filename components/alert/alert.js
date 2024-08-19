document.getElementById('closeAlertButton').onclick = function() {
    document.getElementById('alertBox').style.display = 'none';
};

// Function to show the alert with a specific message
function showAlert(message) {
    var alertBox = document.getElementById('alertBox');
    var alertText = document.getElementById('alertText');

    alertText.textContent = message;
    alertBox.style.display = 'flex';
}
