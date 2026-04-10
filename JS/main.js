'use strict';

const links = document.querySelectorAll('.nav-links a');
const page = window.location.pathname.split('/').pop();

links.forEach(link => {
    if (link.getAttribute('href') === page) {
        link.classList.add('active');
    }
});

const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Mensaje enviado correctamente ✅');
        form.reset();
    });
}