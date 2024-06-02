const user = document.querySelector('.user');
const userOption = document.querySelector('.user-option');
const pageWidth = window.innerWidth;
const tabletMobile = 768

if (pageWidth >= 1200 && pageWidth <= tabletMobile) {
    // Event listeners untuk perangkat desktop
    user.addEventListener('mouseenter', () => {
        userOption.style.display = 'block';
    });

    user.addEventListener('mouseleave', () => {
        userOption.style.display = 'none';
    });
} else {
    user.addEventListener('click', () => {
        if (userOption.style.display === 'block') {
            userOption.style.display = 'none';
        } else {
            userOption.style.display = 'block';
        }
    });
}
