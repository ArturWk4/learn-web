let menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    let myTopnav = document.getElementById('my-topnav');
    if (!myTopnav.classList.contains('responsive')) {
        myTopnav.classList.add('responsive');
    } else {
        myTopnav.classList.remove('responsive');
    }
});
