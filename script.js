function closePopup() {
    document.getElementById('newsletter-popup').style.display = 'none';
}

// Optional: Auto-show popup after delay
setTimeout(() => {
    document.getElementById('newsletter-popup').style.display = 'block';
}, 5000); // Show after 5 seconds
