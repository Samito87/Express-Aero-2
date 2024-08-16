
document.getElementById('track-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and causing a page reload
    
    const orderId = document.getElementById('order-id').value;

    if (!orderId) {
        alert('Please enter a valid Order ID');
        return;
    }

    // Dummy data for demonstration purposes
    const orderLocation = { lat: 37.7749, lng: -122.4194 }; // Replace with real data based on the order ID

    // Simulate an API call to get order status and location
    trackOrder(orderId, orderLocation);
});

function trackOrder(orderId, location) {
    // Display the order status section
    const orderStatusContainer = document.getElementById('order-status-container');
    orderStatusContainer.classList.remove('hidden');

    // Update the order status text (this would normally come from your server)
    const orderStatus = document.getElementById('order-status');
    orderStatus.innerText = `Order ${orderId} is on the way!`;

    // Display the map
    initMap(location);
}

function initMap(location) {
    // Unhide the map container
    const mapContainer = document.getElementById('map');
    mapContainer.classList.remove('hidden');

    // Create the map centered on the order location
    const map = new google.maps.Map(mapContainer, {
        zoom: 12,
        center: location
    });

    // Add a marker for the order location
    new google.maps.Marker({
        position: location,
        map: map,
        title: 'Your Order'
    });
}
