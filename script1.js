const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("Write a Task!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savetask();
}

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        AddTask();
    }
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savetask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savetask();
    }
}, false);

listContainer.addEventListener("keydown", function (e) {
    if (e.key === "Delete") {
        const selectedTask = document.activeElement;
        if (selectedTask.tagName === "LI") {
            selectedTask.remove();
            savetask();
        }
    }
});

function savetask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showtask();
