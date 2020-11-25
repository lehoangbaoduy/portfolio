const toledoimage = document.querySelector('.toledo-img');
const toledohover = document.querySelector('.toledo-hover');

const tdnimage = document.querySelector('.tdn-img');
const tdnhover = document.querySelector('.tdn-hover');

const toledomodal = document.querySelector('.modal-img');
const tdnmodal = document.querySelector('.tdn-modal-img');

const toledoclose = document.querySelector('.toledo-close');
const tdnclose = document.querySelector('.tdn-close');

function toledoshow() {
    toledohover.classList.add('active');
    toledomodal.classList.add('show');
}

function tdnshow() {
    tdnhover.classList.add('active');
    tdnmodal.classList.add('show');
}

function toledohide() {
    toledohover.classList.remove('active');
    toledomodal.classList.remove('show');
}

function tdnhide() {
    tdnhover.classList.remove('active');
    tdnmodal.classList.remove('show');
}

tdnimage.addEventListener('click', tdnshow);
toledoimage.addEventListener('click', toledoshow);
toledoclose.addEventListener('click', toledohide);
tdnclose.addEventListener('click', tdnhide);