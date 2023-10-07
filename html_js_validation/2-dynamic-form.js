document.addEventListener("DOMContentLoaded", function () {

    const getInputContainar = document.getElementById("inputContainer");

    function generateInputFields(selectedValue) {
        getInputContainar.innerHTML = ""; // Clear previous input fields

        for (let i = 1; i <= selectedValue; i++) {
            const input = document.createElement("input");
            input.name = `field${i}`;
            input.placeholder = `Field ${i}`;
            input.type = "text";
            getInputContainar.appendChild(input);
        }
    }

    const getFieldSelect = document.getElementById("numFields");
    const form = document.getElementById("dynamicForm");

    
// Event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const inputs = document.querySelectorAll("#inputContainer input");
        let isValid = true;

        // Check if any input field is empty
        inputs.forEach(function (input) {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        });

        if (!isValid) {
            alert("Please fill in all fields");
        } else {
            form.submit(); // Submit the form if all fields are filled
        }
    });
    // Event listener for the dropdown change
    getFieldSelect.addEventListener("change", function () {
        const selectedValue = parseInt(getFieldSelect.value);
        generateInputFields(selectedValue);
    });

    
});