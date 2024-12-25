document.addEventListener('DOMContentLoaded', function() {
    let toName = localStorage.getItem('toName');
    let message = localStorage.getItem('message');
    let selectOption = localStorage.getItem('selectOption');
    let fromName = localStorage.getItem('fromName');

    document.getElementById('toName').textContent = toName;
    document.getElementById('message').textContent = message;
    document.getElementById('fromName').textContent = fromName;

    const card = document.getElementById('confirmationCard');

    switch(selectOption) {
        case 'None':
            card.style.backgroundImage = '';
            card.style.color = 'rgb(221,216,203)';
            break;
        case 'Hearts':
            card.style.backgroundImage = 'url("images/Hearts.png")';
            card.style.backgroundSize = 'cover';
            card.style.color = '#ee2270';
            break;
        case 'Teddy Bear':
            card.style.backgroundImage = 'url("images/bears.jpeg")';
            card.style.backgroundSize = 'cover';
            card.style.color = 'rgb(20, 21, 23)';
            card.style.fontWeight = 'bold';
            card.style.fontSize = '16px';
            break;
        case 'Gradient':
            card.style.background = '#355C7D';
            card.style.background = '-webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)';
            card.style.background = 'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)';
            card.style.color = '#00ffff';
            break;
    }
});

function validateForm() {
    let x = document.forms["createLetter"]["toName"].value;
    let y = document.forms["createLetter"]["message"].value;
    let z = document.forms["createLetter"]["fromName"].value;
    if (x == "") {
        alert("To name must be filled out");
        return false;
    }
    if (y == ""){
        alert("Message must be filled out");
        return false;
    }
    if (z == ""){
        alert("From name must be filled out");
        return false;
    }

    saveFormData();
    window.location.href = "index.html"; // Redirect
    return false;
}

function saveFormData() {
    let toName = document.getElementById('form-name').value;
    let message = document.getElementById('form-message').value;
    let fromName = document.getElementById('fromName').value;
    let selectOption = localStorage.getItem('selectOption'); // Retrieve background

    localStorage.setItem('toName', toName);
    localStorage.setItem('message', message);
    localStorage.setItem('selectOption', selectOption);
    localStorage.setItem('fromName', fromName);
}

document.addEventListener('DOMContentLoaded', function () {
    const noneButton = document.getElementById('noneButton');
    const heartsButton = document.getElementById('heartsButton');
    const teddyButton = document.getElementById('teddyButton');
    const gradiantButton = document.getElementById('gradiantButton');
    const card = document.getElementById('confirmationCard'); // Corrected selector

    noneButton.addEventListener('click', function () {
        card.style.backgroundImage = '';
        card.style.background = ''; // Ensure gradient is also cleared
        card.style.color = 'rgb(73, 64, 64)';
        localStorage.setItem('selectOption', 'None');
    });

    heartsButton.addEventListener('click', function () {
        card.style.backgroundImage = 'url("images/Hearts.png")';
        card.style.backgroundSize = 'cover';
        card.style.color = '#ee2270';
        localStorage.setItem('selectOption', 'Hearts');
    });

    teddyButton.addEventListener('click', function () {
        card.style.backgroundImage = 'url("images/bears.jpeg")';
        card.style.backgroundSize = 'cover';
        card.style.color = 'rgb(20, 21, 23)';
        card.style.fontWeight = 'bold';
        card.style.fontSize = '16px';
        localStorage.setItem('selectOption', 'Teddy Bear');
    });

    gradiantButton.addEventListener('click', function () {
        card.style.background = '-webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)';
        card.style.background = 'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)';
        card.style.color = '#00ffff';
        localStorage.setItem('selectOption', 'Gradient');
    });
});
