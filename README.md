# Interactive Map Web Application

This is an interactive map web application built with Spring Boot (structure) and front-end technologies: HTML, CSS, and JavaScript.

## Features

- **Map Display**: Uses Leaflet library to display an interactive map centered on India.
- **Marker Placement**: 8 markers for different locations in India:
  1. Raigad Fort, Pune
  2. Shri Vitthal-Rukmini Temple, Pandharpur
  3. Swami Samarth Temple, Akkalkot
  4. Golden Temple, Amritsar
  5. Gateway Of India, Mumbai
  6. India Gate, Delhi
  7. Victoria Memorial, Kolkata
  8. Charminar, Hyderabad
- **Interactive Elements**: Click on markers to view popups with name, description, and image.
- **Search Functionality**: Search for locations by name.
- **Custom Styling**: Attractive and responsive design.
- **Filter System**: Filter locations by category (All, Landmark, Temple).
- **Geolocation**: Find your current location on the map.
- **Animations**: Bounce animation on marker click.

## Technologies Used

- Spring Boot (for serving static files)
- HTML5
- CSS3
- JavaScript
- Leaflet (mapping library)

## How to Run

1. Ensure Java 17+ is installed.
2. Compile the server: `javac SimpleServer.java`
3. Run the server: `java SimpleServer`
4. Open your browser and go to `http://localhost:8080`

## How to Use

- **View the Map**: The map loads centered on India with 8 markers for famous locations.
- **Interact with Markers**: Click any marker to see a popup with the location's name, description, and image.
- **Search Locations**: Type a location name (e.g., "raigad", "pandharpur") in the search box and click "Search" to zoom to that location.
- **Filter by Category**: Use the dropdown to show all locations, only landmarks, or only temples.
- **Find Your Location**: Click "Find My Location" to center the map on your current position (requires location permission).
- **Zoom and Pan**: Use mouse wheel to zoom, drag to pan around the map.

## Project Structure

```
src/
  main/
    java/
      com/example/interactivemap/
        InteractiveMapApplication.java  # Spring Boot main class
    resources/
      static/
        index.html
        styles.css
        script.js
      templates/  # (empty for now)
pom.xml
SimpleServer.java  # Simple HTTP server for running without Maven
```

## Optional Enhancements Implemented

- Marker bounce animation
- Geolocation functionality
- Category filter

![alt text](<Screenshot 2026-01-26 092328.png>)
![alt text](<Screenshot 2026-01-26 092240.png>)
