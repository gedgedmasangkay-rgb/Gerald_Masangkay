const submitBtn = document.getElementById("submitBtn");
const nameBox = document.getElementById("nameBox");
const titleText = document.getElementById("titleText");
const output = document.getElementById("output");
const welcomeText = document.getElementById("welcomeText");

submitBtn.addEventListener("click", function () {
    let name = nameBox.value.trim();

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    // Hide title, input, and button
    titleText.style.display = "none";
    nameBox.style.display = "none";
    submitBtn.style.display = "none";

    // Show output with animation
    output.style.display = "block";

    welcomeText.textContent = "pak u ka, " + name + "!";
});
