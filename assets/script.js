// Function to load the navbar
function loadNavbar() {
    fetch('includes/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            setActiveNavLink();
        });
}

// Function to load the navbar
function loadNavbar() {
    fetch('includes/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            setActiveNavLink();
        });
}        

// Function to set the active link in the navigation menu
function setActiveNavLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const navLinks = {
        'index.html': 'nav-home',
        'about.html': 'nav-about',
        'games.html': 'nav-games',
        'contact.html': 'nav-contact'
    };

    const activeLinkId = navLinks[page];
    if (activeLinkId) {
        const activeLink = document.getElementById(activeLinkId);
        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'page');
    }
}      


function dropCoinInModal(event, url) {
    event.preventDefault();
    const modalCoin = document.getElementById("modalCoin");
    const coinModal = new bootstrap.Modal(
        document.getElementById("coinModal")
    );
    coinModal.show();
    modalCoin.style.display = "block";
    modalCoin.style.animation = "fall 2s linear forwards"; // Animate the coin falling
    setTimeout(() => {
        modalCoin.style.display = "none";
        coinModal.hide();
        window.location.href = url;
    }, 2000); // Delay navigation for 4 seconds to match the animation duration
}

document.querySelectorAll('.coinSound').forEach(item => {
    item.addEventListener('click', () => {
        const audio = document.getElementById('coinSound');
        audio.currentTime = 0; // Rewind to the start
        audio.play();
    });
});

// Function to load the footer
function loadFooter() {
    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}

loadFooter();
loadNavbar();