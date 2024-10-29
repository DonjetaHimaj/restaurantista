document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = dcoument.getElementById("emailaddress").value.trim();
    const newsLetter = document.getElementById("newsletter").checked;

    const data = {
        email: email,
        newsLetter: newsLetter
    }

    localStorage.setItem("formSubmission", JSON.stringify(data));
});