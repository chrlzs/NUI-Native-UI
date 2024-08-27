window.updateProgressBar = function(percentage) {
    var progressBar = document.getElementById('progressBar');
    if (percentage >= 0 && percentage <= 100) {
        progressBar.style.width = percentage + '%';
    }
};