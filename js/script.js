document.addEventListener('DOMContentLoaded', function() {
    const betaTestForm = document.getElementById('betaTestForm');

    betaTestForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted'); // Check if this message appears in the console

        // Simulate form submission (replace with actual backend logic)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        alert('Form submitted!'); // Check if this message appears

        // Ensure the form data is being captured correctly
        console.log('Name:', name);
        console.log('Email:', email);
    });
});
