const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', (e) =>{
    const visibility = primaryNav.getAttribute('data-visible');
    console.log(visibility);

    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded',true);
    } else {
        primaryNav.setAttribute('data-visible',false);
        navToggle.setAttribute('aria-expanded',false);
    }
});