// jQuery code to add/remove classes
jQuery(function ($) {
    $('html').removeClass('nojs').addClass('hasjs');
    
    // Click event listener for altbox
    $("#altbox").on("click", function () {
        $("#age-verification").prop("checked", true);
        $("#altbox").css("background-color", "#26b170");
    });
});

// Function to change label color for Name field
function changeNameLabelColor() {
    const nameInput = document.getElementById("name");
    if (nameInput.value !== "") {
        nameInput.style.background = "white";
    } else {
        nameInput.style.background = "#D4D4D4";
    }
}

// Function to change label color for Email field
function changeEmailLabelColor() {
    const emailInput = document.getElementById("email");
    if (emailInput.value !== "") {
        emailInput.style.background = "white";
    } else {
        emailInput.style.background = "#D4D4D4";
    }
}

// Function to submit form and show alert
function submitForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    
    if (nameInput.value !== "" && emailInput.value !== "") {
        alert("Thank you for signing up! You have successfully signed up for the PalWorld beta test. We'll be in touch.");
    } else {
        alert("Please fill in both name and email fields.");
    }
}

// Call functions to set initial label colors
changeNameLabelColor();
changeEmailLabelColor();
