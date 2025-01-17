// Toggle visibility of popular cars section with a smooth transition
function togglePopularCars() {
    const popularCarsList = document.getElementById('popular-cars-list');
    if (popularCarsList.style.display === 'none' || !popularCarsList.style.display) {
        popularCarsList.style.display = 'block';
        popularCarsList.style.opacity = 0;
        setTimeout(() => {
            popularCarsList.style.transition = 'opacity 0.5s ease-in-out';
            popularCarsList.style.opacity = 1;
        }, 10);
    } else {
        popularCarsList.style.opacity = 0;
        setTimeout(() => {
            popularCarsList.style.display = 'none';
        }, 500);
    }
}


// Site search with animated feedback
function searchSite() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    const searchResults = {
        "reviews": "reviews.html",
        "pictures": "pictures.html",
        "contacts": "contacts.html",
        "form": "form.html",
        "certifications": "certifications.html"
    };
    
    if (searchResults[searchTerm]) {
        window.location.href = searchResults[searchTerm];
    } else {
        const searchAlert = document.getElementById("search-alert");
        if (!searchAlert) {
            const alertDiv = document.createElement("div");
            alertDiv.id = "search-alert";
            alertDiv.textContent = `No results found for: ${searchTerm}`;
            alertDiv.style.color = "#ff4c4c";
            alertDiv.style.textAlign = "center";
            alertDiv.style.marginTop = "10px";
            document.getElementById("search-container").appendChild(alertDiv);

            setTimeout(() => {
                alertDiv.style.transition = "opacity 0.5s ease";
                alertDiv.style.opacity = "0";
                setTimeout(() => {
                    alertDiv.remove();
                }, 500);
            }, 1500);
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Find all featured cars in the gallery
    const featuredCars = document.querySelectorAll('.featured-car');

    featuredCars.forEach(car => {
        car.addEventListener('mouseenter', () => {
            // Add any specific interaction logic if needed on hover
            console.log(`Hovering over car: ${car.dataset.carName}`);
        });

        car.addEventListener('mouseleave', () => {
            // Add any specific interaction logic if needed on hover end
            console.log(`Stopped hovering over car: ${car.dataset.carName}`);
        });
    });
});
