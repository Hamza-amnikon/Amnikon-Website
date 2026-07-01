const form = document.getElementById("ticketForm");
const btn = document.getElementById("ticketSubmitBtn");
const success = document.getElementById("ticketSuccess");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    btn.disabled = true;
    btn.innerHTML = "Submitting...";

    success.style.display = "none";

    const data = {

        name: document.getElementById("ticketName").value.trim(),

        email: document.getElementById("ticketEmail").value.trim(),

        priority: document.getElementById("priority").value,

        category: document.getElementById("category").value,

        subject: document.getElementById("subject").value.trim(),

        message: document.getElementById("ticketMessage").value.trim()
    };

    try {

        const response = await fetch("http://localhost:5022/api/support", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        if (response.ok) {

            success.style.display = "block";

            form.reset();

        }
        else {

            alert(result.message);

        }

    }
    catch (err) {

        console.error(err);

        alert("Unable to connect to the server.");

    }

    btn.disabled = false;

    btn.innerHTML = "Submit Ticket →";

});