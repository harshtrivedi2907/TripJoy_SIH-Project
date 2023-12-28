// JavaScript code for handling form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enquiry-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // You can implement the form submission logic here,
        // such as sending data to a server or displaying a confirmation message.
        
        // For demonstration purposes, let's display an alert message.
        alert("Form submitted successfully!");
    });
});
