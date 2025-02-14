document.addEventListener('DOMContentLoaded', function () {
    const isResultPage = document.getElementById('confirmationCard') !== null;

    const selectOption = localStorage.getItem('selectOption') || 'None';
    applyBackground(selectOption);

    if (isResultPage) {
        const selectOption = localStorage.getItem('selectOption');
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';

        if (selectOption) {
            applyBackground(selectOption);
        }

        document.getElementById('toName').textContent = localStorage.getItem('toName');
        document.getElementById('message').textContent = localStorage.getItem('message');
        document.getElementById('fromName').textContent = localStorage.getItem('fromName');
    }
});

function applyBackground(option) {
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center top";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    switch (option) {
        case 'None':
            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundColor = '#eb8ac6';
            document.body.style.color = '';
            break;
        case 'Hearts':
            document.body.style.backgroundImage = 'url("images/Hearts.png")';
            document.body.style.color = '';
            break;
        case 'Teddy Bear':
            document.body.style.backgroundImage = 'url("images/bears.jpeg")';
            document.querySelectorAll('*').forEach(el => el.style.color = 'black');
            break;
        case 'Valentines':
            document.body.style.backgroundImage = 'url("images/Valentines.png")';
            document.querySelectorAll('*').forEach(el => el.style.color = 'black');
            break;
        case 'PurpleHearts':
            document.body.style.backgroundImage = 'url("images/PurpleHeart.png")';
            document.body.style.color = '';
            break;
        case 'PixelHearts':
            document.body.style.backgroundImage = 'url("images/pixelHearts.png")';
            document.body.style.color = '';
            break;
    }
}



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
    const valentinesButton = document.getElementById('valentinesButton');
    const purpleHeartsButton = document.getElementById('purpleHeartsButton');
    const pixelHeartsButton = document.getElementById('pixelHeartsButton');

    function changeBackground(option) {
        localStorage.setItem('selectOption', option);
        applyBackground(option);
    }

    noneButton.addEventListener('click', function () {
        changeBackground('None');
    });

    heartsButton.addEventListener('click', function () {
        changeBackground('Hearts');
    });

    teddyButton.addEventListener('click', function () {
        changeBackground('Teddy Bear');
    });

    valentinesButton.addEventListener('click', function () {
        changeBackground('Valentines');
    });

    purpleHeartsButton.addEventListener('click', function () {
        changeBackground('PurpleHearts');
    });

    pixelHeartsButton.addEventListener('click', function () {
        changeBackground('PixelHearts');
    });
});
