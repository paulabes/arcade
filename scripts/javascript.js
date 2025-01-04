

// Fetch navbar
fetch('includes/navbar.html')
    .then(response => response.text())
    .then(data => {
        const navbarContainer = document.getElementById('navbar-container');
        navbarContainer.innerHTML = data;
    });

// Fetch footer
fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
        const footerContainer = document.getElementById('footer-container');
        footerContainer.innerHTML = data;
    });

    // Highlight current page in navbar
    document.addEventListener('DOMContentLoaded', function() {
        var currentPath = window.location.pathname.split('/').pop();
        var navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            if (link.getAttribute('href') === currentPath) {
                link.style.color = '#ffffff';
            }
        });
    });
