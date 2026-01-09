document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!header) return;

    let lastScrollY = window.scrollY;
    let isMenuOpen = false;

    /* OBSERVA MENU (integra com menu.js) */
    const observer = new MutationObserver(() => {
        isMenuOpen = mobileMenu?.classList.contains('open');
        if (isMenuOpen) {
            header.classList.remove('header-hidden');
        }
    });

    if (mobileMenu) {
        observer.observe(mobileMenu, { attributes: true });
    }

    /* SCROLL CONTROL */
    window.addEventListener('scroll', () => {
        if (isMenuOpen) return;

        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollY && currentScroll > 120) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        lastScrollY = currentScroll;
    });
});
