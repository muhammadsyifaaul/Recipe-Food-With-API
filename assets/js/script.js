const user = document.querySelector('.user');
const userOption = document.querySelector('.user-option');
const tabletMobile = 768;

function updateEventListeners() {
    const pageWidth = window.innerWidth;
    user.removeEventListener('mouseenter', showUserOption);
    user.removeEventListener('mouseleave', hideUserOption);
    user.removeEventListener('click', toggleUserOption);

    if (pageWidth > tabletMobile) {
        user.addEventListener('mouseenter', showUserOption);
        user.addEventListener('mouseleave', hideUserOption);
    } else {
        user.addEventListener('click', toggleUserOption);
    }
}

function showUserOption() {
    userOption.style.display = 'block';
}

function hideUserOption() {
    userOption.style.display = 'none';
}

function toggleUserOption() {
    if (userOption.style.display === 'block') {
        userOption.style.display = 'none';
    } else {
        userOption.style.display = 'block';
    }
}


window.addEventListener('resize', updateEventListeners);


updateEventListeners();
