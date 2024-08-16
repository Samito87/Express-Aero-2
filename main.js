document.addEventListener('DOMContentLoaded', () => {
    const vehiclesContainer = document.getElementById('vehicles-container');
    const vehiclesList = document.getElementById('vehicles-list');

    // Sample data for vehicles (this could come from an API in a real app)
    const vehicles = [
        { id: 1, type: 'Car', status: 'Available' },
        { id: 2, type: 'Drone', status: 'Available' },
        { id: 3, type: 'Car', status: 'Unavailable' },
        { id: 4, type: 'Drone', status: 'Available' }
    ];

    // Populate vehicle list
    vehicles.forEach(vehicle => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="vehicle-type">${vehicle.type}</div>
            <div class="vehicle-status">${vehicle.status}</div>
        `;
        vehiclesList.appendChild(listItem);
    });
});

//Order page code 
document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('order-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const vehiclesContainer = document.getElementById('vehicles-container');
    const vehiclesList = document.getElementById('vehicles-list');

    // Sample data for vehicles (this could come from an API in a real app)
    const vehicles = [
        { id: 1, type: 'Car', status: 'Available' },
        { id: 2, type: 'Drone', status: 'Available' },
        { id: 3, type: 'Car', status: 'Unavailable' },
        { id: 4, type: 'Drone', status: 'Available' }
    ];

    // Handle form submission
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate sending order data to the server
            const formData = new FormData(orderForm);
            fetch('/api/submit-order', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Show confirmation message
                confirmationMessage.classList.remove('hidden');

                // Display available vehicles
                displayAvailableVehicles();
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors here
                confirmationMessage.innerHTML = '<h2>Submission Failed</h2><p>There was an error submitting your order. Please try again later.</p>';
                confirmationMessage.classList.remove('hidden');
            });
        });
    }

    // Function to display available vehicles
    function displayAvailableVehicles() {
        vehiclesContainer.classList.remove('hidden');
        vehiclesList.innerHTML = ''; // Clear previous list

        vehicles.forEach(vehicle => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="vehicle-type">${vehicle.type}</div>
                <div class="vehicle-status">${vehicle.status}</div>
            `;
            vehiclesList.appendChild(listItem);
        });
    }
});

//tracking order



