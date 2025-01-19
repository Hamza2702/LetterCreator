document.addEventListener('DOMContentLoaded', function () {
    const isResultPage = document.getElementById('confirmationCard') !== null;

    if (isResultPage) {
        const selectOption = localStorage.getItem('selectOption');
        const confirmationCard = document.getElementById('confirmationCard');

        switch (selectOption) {
            case 'None':
                confirmationCard.style.backgroundImage = '';
                confirmationCard.style.background = '';
                confirmationCard.style.color = 'rgb(221,216,203)';
                break;
            case 'Hearts':
                confirmationCard.style.backgroundImage = 'url("images/Hearts.png")';
                confirmationCard.style.backgroundSize = 'cover';
                confirmationCard.style.color = '#ee2270';
                break;
            case 'Teddy Bear':
                confirmationCard.style.backgroundImage = 'url("images/bears.jpeg")';
                confirmationCard.style.backgroundSize = 'cover';
                confirmationCard.style.color = '#52787c';
                confirmationCard.style.fontWeight = 'bold';
                confirmationCard.style.fontSize = '16px';
                break;
            case 'Valentines':
                confirmationCard.style.backgroundImage = 'url("images/Valentines.png")';
                confirmationCard.style.backgroundSize = 'cover';
                confirmationCard.style.color = 'rgb(27,27,27)';
                break;
            case 'Gradient':
                confirmationCard.style.background = '-webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)';
                confirmationCard.style.background = 'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)';
                confirmationCard.style.color = '#243a40';
                break;
        }

        document.getElementById('toName').textContent = localStorage.getItem('toName');
        document.getElementById('message').textContent = localStorage.getItem('message');
        document.getElementById('fromName').textContent = localStorage.getItem('fromName');
    }
});

function validateForm() {
    let x = document.forms["createLetter"]["toName"].value;
    let y = document.forms["createLetter"]["message"].value;
    let z = document.forms["createLetter"]["fromName"].value;

    if (x === "") {
        alert("To name must be filled out");
        return false;
    }
    if (y === "") {
        alert("Message must be filled out");
        return false;
    }
    if (z === "") {
        alert("From name must be filled out");
        return false;
    }

    saveFormData();
    window.location.href = "result.html"; // Redirect
    return false;
}

function saveFormData() {
    let toName = document.getElementById('form-name').value;
    let message = document.getElementById('form-message').value;
    let fromName = document.getElementById('fromName').value;
    let selectOption = localStorage.getItem('selectOption') || 'None';

    localStorage.setItem('toName', toName);
    localStorage.setItem('message', message);
    localStorage.setItem('fromName', fromName);
    localStorage.setItem('selectOption', selectOption);
}

document.addEventListener('DOMContentLoaded', function () {
    const noneButton = document.getElementById('noneButton');
    const heartsButton = document.getElementById('heartsButton');
    const teddyButton = document.getElementById('teddyButton');
    const gradiantButton = document.getElementById('gradiantButton');
    const valentinesButton = document.getElementById('valentinesButton');
    const card = document.getElementById('card');

    noneButton.addEventListener('click', function () {
        card.style.backgroundImage = '';
        card.style.background = '';
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
        card.style.color = '#243a40';
        localStorage.setItem('selectOption', 'Gradient');
    });

    valentinesButton.addEventListener('click', function () {
        card.style.backgroundImage = 'url("images/Valentines.png")';
        card.style.backgroundSize = 'cover';
        card.style.color = 'rgb(27,27,27)';
        localStorage.setItem('selectOption', 'Valentines')
    })
});
