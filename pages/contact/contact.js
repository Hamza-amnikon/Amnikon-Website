const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("formSuccess");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    successMessage.style.display = "none";

    const contactData = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        email: document.getElementById("email").value.trim(),
        company: document.getElementById("company").value.trim(),
        service: document.getElementById("service").value,
        message: document.getElementById("message").value.trim()
    };

    try {

        const response = await fetch("http://localhost:5022/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(contactData)

        });

        const result = await response.json();

        if (response.ok) {

            successMessage.style.display = "block";

            form.reset();

        } else {

            alert(result.message || "Something went wrong.");

        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to the server.");

    } finally {

        submitBtn.disabled = false;

        submitBtn.innerHTML = "Send Message →";

    }

});