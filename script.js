document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var formData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    // Send data to server using AJAX POST method
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "your_server_endpoint_here", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Registration successful!");
            // Save data to local storage
            var userData = JSON.parse(xhr.responseText);
            saveToLocalStorage(userData);
        }
    };
    xhr.send(JSON.stringify(formData));
});

function saveToLocalStorage(userData) {
    // Get existing data from local storage or initialize an empty array
    var existingData = JSON.parse(localStorage.getItem("userData")) || [];
    // Push new user data to the array
    existingData.push(userData);
    // Save the updated array back to local storage
    localStorage.setItem("userData", JSON.stringify(existingData));
}
