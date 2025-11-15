document.addEventListener('DOMContentLoaded', function() {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const navbar = document.getElementsByClassName('navbar')[0];
    if (bar) {
        bar.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
    if (close) {
        close.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    }
});

