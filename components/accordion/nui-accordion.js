// accordion.js
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                // Close other open accordion sections
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.style.display = 'none';
                });

                content.style.display = 'block';
            }
        });
    });
});
