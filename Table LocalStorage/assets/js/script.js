document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;

    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <th scope="row">${document.querySelectorAll('#userTable tbody tr').length + 1}</th>
        <td>${name}</td>
        <td>${surname}</td>
        <td>${email}</td>
    `;

    document.querySelector('#userTable tbody').appendChild(newRow);

    document.getElementById('userForm').reset();

    saveDataToLocalStorage(name, surname, email);
});

function saveDataToLocalStorage(name, surname, email) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, surname, email });

    localStorage.setItem('users', JSON.stringify(users));
}

document.addEventListener('DOMContentLoaded', function() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach((user, index) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${user.name}</td>
            <td>${user.surname}</td>
            <td>${user.email}</td>
        `;
        document.querySelector('#userTable tbody').appendChild(newRow);
    });
});
