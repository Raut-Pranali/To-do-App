function AddTask() {
    const inputBox = document.getElementById("inputBox");
    const listContainer = document.getElementById("list-Container");

    if (!listContainer) {
        console.error("listContainer not found in the DOM");
        return;
    }

    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; // Use textContent for security
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); // Append the span only once
    }

    inputBox.value = ''; 
    saveData();
}

document.getElementById("list-Container").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Corrected typo
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    const listContainer = document.getElementById("list-Container");
    if (listContainer) {
        localStorage.setItem("data", listContainer.innerHTML);
    }
}

function showTask() {
    const listContainer = document.getElementById("list-Container");
    if (listContainer) {
        listContainer.innerHTML = localStorage.getItem("data") || ""; // Ensure null does not break
    }
}

showTask();