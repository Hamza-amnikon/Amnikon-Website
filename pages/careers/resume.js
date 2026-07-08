const form = document.getElementById("resume-form");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = form.querySelector("button");

    submitButton.disabled = true;
    submitButton.innerText = "Submitting...";

    try {

        const formData = new FormData(form);

        const response = await fetch(
            "https://wwwuat.amnikontechnologies.com/api/api/careers",
            {
                method: "POST",
                body: formData
            });

        const result = await response.json();

        if (response.ok) {

            alert("Application submitted successfully!");

            form.reset();

        } else {

            alert(result.message);

        }

    }
    catch (error) {

        
    }
    finally {

        submitButton.disabled = false;

        submitButton.innerText = "Submit Application";

    }
});