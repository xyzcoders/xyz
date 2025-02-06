    document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname;

        links.forEach(link => {
            // Sprawdzamy, czy ścieżka w URL odpowiada href linku
            if (currentPath.includes(link.getAttribute('href'))) {
                link.classList.add('active'); // Dodajemy klasę 'active' do aktywnego linku
            }
        });
    });