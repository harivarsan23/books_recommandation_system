document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects for book cards
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseout', function() {
            card.style.transform = 'translateY(0)';
        });
    });
});

//books
document.querySelector('.btn').addEventListener('click', function() {
    alert('Your recommendations are being prepared...');
    setTimeout(function() {
        alert('Here are your book recommendations!');
    }, 5000);
});
