function calculateLove() {
    var yourName = document.getElementById("yourName").value;
    var partnerName = document.getElementById("partnerName").value;
    var yourGender = document.querySelector('input[name="yourGender"]:checked');
    var partnerGender = document.querySelector('input[name="partnerGender"]:checked');

    if (!yourName.trim() || !partnerName.trim()) {
        alert("Please enter both your names.");
        return;
    }

    if (!yourGender || !partnerGender) {
        alert("Please select both your genders.");
        return;
    }

    var lovePercentage = Math.floor(Math.random() * 101); // Random number between 0 and 100 (inclusive)

    document.getElementById("display").value = lovePercentage + "%";
}

var btnElement = document.getElementById("btn");
var clickCount = 0;

btnElement.addEventListener("click", function() {
    clickCount++;
    if (clickCount === 2) {
        location.reload(); // Reload the page on double-click
    }
    setTimeout(function() {
        clickCount = 0; // Reset clickCount after 1 second
    }, 1000);
});
