// Contact Form

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("successAlert").style.display = "block";

    document.getElementById("alertOverlay").style.display = "block";

    this.reset();

});


// Close Alert

function closeAlert() {

    document.getElementById("successAlert").style.display = "none";

    document.getElementById("alertOverlay").style.display = "none";

}