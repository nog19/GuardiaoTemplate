document.addEventListener('DOMContentLoaded', () => {
    const menuOpenBtn = document.getElementById('menu-open');
    const menuCloseBtn = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');

    if (!menuOpenBtn || !menuCloseBtn || !mobileMenu || !overlay) return;

    let isMenuOpen = false;
    let scrollPosition = 0;

    /* FUNÇÕES DE SCROLL (iOS SAFE) */
    function lockScroll() {
        scrollPosition = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    }

    function unlockScroll() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
    }

    /* MENU CONTROL */
    function openMenu() {
        if (isMenuOpen) return;

        isMenuOpen = true;
        mobileMenu.classList.add('open');
        overlay.classList.add('show');
        lockScroll();
    }

    function closeMenu() {
        if (!isMenuOpen) return;

        isMenuOpen = false;
        mobileMenu.classList.remove('open');
        overlay.classList.remove('show');
        unlockScroll();
    }

    /* EVENTOS */
    menuOpenBtn.addEventListener('click', openMenu);
    menuCloseBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });
});
