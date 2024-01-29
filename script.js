function toggleMenu() {
    let menu = document.querySelector(".menu-links");
    let icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function copyEmail(button) {
    const email = document.getElementById('email');
    const range = document.createRange();
    range.selectNode(email);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    // Ändra texten på knappen
    button.textContent = 'Copied';

    // Återställ texten efter 2 sekunder
    setTimeout(function () {
        button.textContent = 'Copy';
    }, 2000); // 2000 millisekunder = 2 sekunder
}
