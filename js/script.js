console.log('Script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');

    const betaTestForm = document.getElementById('betaTestForm');
    console.log('Form element found:', betaTestForm);

    betaTestForm.addEventListener('submit', function(event) {
        console.log('Form submission event triggered');
        
        event.preventDefault();

        // Simulate form submission (replace with actual backend logic)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        console.log('Name:', name);
        console.log('Email:', email);

        if (name && email) {
            alert(`Thank you, ${name}! You have successfully signed up for the PalWorld beta test. We'll be in touch.`);
        } else {
            alert('Please fill in both name and email fields.');
        }
    });
});
