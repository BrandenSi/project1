document.addEventListener('DOMContentLoaded', function() {
    const betaTestForm = document.getElementById('betaTestForm');

    betaTestForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted'); // Check if this message appears in the console

        // Simulate form submission (replace with actual backend logic)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            alert(`Thank you, ${name}! You have successfully signed up for the PalWorld beta test. We'll be in touch.`);
        } else {
            alert('Please fill in both name and email fields.');
        }
    });
});
