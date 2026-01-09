const STORAGE_KEY = 'theme-preference';

/* DETECTA TEMA DO SISTEMA */
function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
}

/* APLICA TEMA */
function applyTheme(theme) {
    const html = document.documentElement;

    // aplica atributo no <html>
    html.setAttribute('data-theme', theme);

    // atualiza ícone
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.className =
            theme === 'dark'
                ? 'fas fa-sun'
                : 'fas fa-moon';
    }
}

/* INICIALIZAÇÃO */
function initTheme() {
    let savedTheme = localStorage.getItem(STORAGE_KEY);

    // primeira visita → usa tema do sistema
    if (!savedTheme) {
        savedTheme = getSystemTheme();
        localStorage.setItem(STORAGE_KEY, savedTheme);
    }

    applyTheme(savedTheme);
}

/* TOGGLE MANUAL */
function toggleTheme() {
    const current =
        document.documentElement.getAttribute('data-theme');

    const next = current === 'dark' ? 'light' : 'dark';

    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
}

/* REAGE A MUDANÇA DO SISTEMA
   (APENAS SE USUÁRIO NÃO
   TIVER FORÇADO UM TEMA)
 */
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
        const savedTheme = localStorage.getItem(STORAGE_KEY);

        // só altera automaticamente se seguir o sistema
        if (savedTheme === 'system') {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

/* DOM READY */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // garante que o botão funciona mesmo sem onclick inline
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }
});
