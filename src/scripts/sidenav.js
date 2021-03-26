const openBtn = document.getElementById('openbtn');
const closeBtn = document.querySelector('.closebtn');
const mySideNav = document.getElementById('mySidenav');

const openNav = (_) => {
    mySideNav.style.width = "250px";
};

const closeNav = (_) => {
    mySideNav.style.width = "0";
};

openBtn.addEventListener('click', (_) => {
    openNav();
});

closeBtn.addEventListener('click', (_) => {
    closeNav();
})