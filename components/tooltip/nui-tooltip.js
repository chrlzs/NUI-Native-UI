document.addEventListener('DOMContentLoaded', function() {
    const tooltipButton = document.getElementById('tooltipButton');
    const tooltipText = document.getElementById('tooltipText');

    // Show the tooltip on button hover
    tooltipButton.addEventListener('mouseover', () => {
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
    });

    // Hide the tooltip when the mouse leaves the button
    tooltipButton.addEventListener('mouseout', () => {
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
    });

    // Optional: Toggle the tooltip on button click
    tooltipButton.addEventListener('click', () => {
        if (tooltipText.style.visibility === 'visible') {
            tooltipText.style.visibility = 'hidden';
            tooltipText.style.opacity = '0';
        } else {
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = '1';
        }
    });
});
