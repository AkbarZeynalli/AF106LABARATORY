

function newElement() {
    var inputValue = document.getElementById("myInput").value.trim();
    if (inputValue === '') {
        alert("You must write something!");
        return;
    }

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));

    var span = document.createElement("SPAN");
    span.className = "close";
    span.textContent = "\u00D7"; 
    span.onclick = function() {
        li.style.display = "none";
        updateLocalStorage();
    };
    li.appendChild(span);

    document.getElementById("myUL").appendChild(li);

    document.getElementById("myInput").value = "";

    updateLocalStorage();
}

function updateLocalStorage() {
    var tasks = [];
    var listItems = document.querySelectorAll('#myUL li');

    listItems.forEach(function(item) {
        var task = {
            text: item.firstChild.textContent,
            checked: item.classList.contains('checked')
        };
        tasks.push(task);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function(task) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task.text));

        if (task.checked) {
            li.classList.add('checked');
        }

        var span = document.createElement("SPAN");
        span.className = "close";
        span.textContent = "\u00D7"; 
        span.onclick = function() {
            li.style.display = "none";
            updateLocalStorage();
        };
        li.appendChild(span);

        document.getElementById("myUL").appendChild(li);
    });
}