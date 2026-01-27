// Initialize the map
const map = L.map('map').setView([20.0, 78.0], 5); // Default to India

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define locations with categories
const locations = [
    {
        name: "Raigad Fort, Pune",
        lat: 18.2345,
        lng: 73.4400,
        category: "landmark",
        description: "A historic fort in Pune, Maharashtra, known for its strategic importance and association with Chhatrapati Shivaji Maharaj.",
        image: "https://wallpaperaccess.com/full/6522913.jpg"
    },
    {
        name: "Shri Vitthal-Rukmini Temple, Pandharpur",
        lat: 17.6792,
        lng: 75.3345,
        category: "temple",
        description: "A famous Hindu temple dedicated to Lord Vitthal and Rukmini, attracting millions of devotees annually.",
        image: "https://c8.alamy.com/comp/2J12CXW/pandharpur-india-26-february-2022-vitthal-temple-at-pandharpur-vitthal-rukmini-temple-maharashtra-india-2J12CXW.jpg"
    },
    {
        name: "Swami Samarth Temple, Akkalkot",
        lat: 17.5256,
        lng: 76.2066,
        category: "temple",
        description: "A sacred temple dedicated to Swami Samarth, a revered spiritual figure in Maharashtra.",
        image: "https://pravase.co.in/admin_pravase/uploads/place/Akkalkot-Swami-Samarth-Maharaj-Temple-Solapur-Timing-History-Importance_1656218484.JPG"
    },
    {
        name: "Golden Temple, Amritsar",
        lat: 31.6200,
        lng: 74.8765,
        category: "temple",
        description: "The holiest Sikh gurdwara, known for its stunning golden architecture and spiritual significance.",
        image: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_479585620_20191024174904_20200407155734.jpg"
    },
    {
        name: "Gateway Of India, Mumbai",
        lat: 18.9220,
        lng: 72.8347,
        category: "landmark",
        description: "An iconic arch monument in Mumbai, built to commemorate the visit of King George V and Queen Mary.",
        image: "https://wallpaperaccess.com/full/4851718.jpg"
    },
    {
        name: "India Gate, Delhi",
        lat: 28.6129,
        lng: 77.2295,
        category: "landmark",
        description: "A war memorial in New Delhi, dedicated to the Indian soldiers who died in World War I.",
        image: "https://i.pinimg.com/originals/80/a4/09/80a4092e54052bf1b7e65d3e371160b3.jpg"
    },
    {
        name: "Victoria Memorial, Kolkata",
        lat: 22.5448,
        lng: 88.3426,
        category: "landmark",
        description: "A large marble building in Kolkata, built between 1906 and 1921, dedicated to Queen Victoria.",
        image: "https://thirdeyetraveller.com/wp-content/uploads/VICTORIAMEMORIAL-10-of-25.jpg"
    },
    {
        name: "Charminar, Hyderabad",
        lat: 17.3616,
        lng: 78.4747,
        category: "landmark",
        description: "A monument and mosque in Hyderabad, Telangana, built in 1591 by Muhammad Quli Qutb Shah.",
        image: "https://th.bing.com/th/id/R.24898dab5c004939d636ae627f875eb7?rik=%2fsepBmmYspZUgg&riu=http%3a%2f%2fwww.indiastudychannel.com%2fattachments%2fResources%2f101831-9820-Charminar-1.bmp&ehk=E6NLIXow%2b3alX8z1wt1HS7Xh9cEQspwhbP8ZEeIvnbM%3d&risl=&pid=ImgRaw&r=0"
    }
    
];

// Create markers
const markers = [];
locations.forEach(location => {
    const marker = L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(`
            <h3>${location.name}</h3>
            <p>${location.description}</p>
            <img src="${location.image}" alt="${location.name}" style="width:100%; max-width:200px;">
        `);
    
    // Add bounce animation on click
    marker.on('click', function() {
        this.getElement().classList.add('marker-bounce');
        setTimeout(() => {
            this.getElement().classList.remove('marker-bounce');
        }, 500);
    });
    
    markers.push({ marker, location });
});

// Search functionality
document.getElementById('search-btn').addEventListener('click', searchLocation);
document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchLocation();
    }
});

function searchLocation() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const found = markers.find(item => item.location.name.toLowerCase().includes(query));
    if (found) {
        map.setView([found.location.lat, found.location.lng], 15);
        found.marker.openPopup();
    } else {
        alert('Location not found');
    }
}

// Filter functionality
document.getElementById('category-filter').addEventListener('change', filterMarkers);

function filterMarkers() {
    const category = document.getElementById('category-filter').value;
    markers.forEach(item => {
        if (category === 'all' || item.location.category === category) {
            map.addLayer(item.marker);
        } else {
            map.removeLayer(item.marker);
        }
    });
}

// Geolocation functionality
document.getElementById('geolocate-btn').addEventListener('click', getUserLocation);

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            map.setView([lat, lng], 15);
            L.marker([lat, lng]).addTo(map)
                .bindPopup('You are here!')
                .openPopup();
        }, function(error) {
            alert('Unable to retrieve your location');
        });
    } else {
        alert('Geolocation is not supported by this browser');
    }
}