// Проверка авторизации и блокировки
function checkAuth() {
    // 1. Если заблокирован — всегда на blocked.html
    if (localStorage.getItem('attempts') >= 3) {
        if (!window.location.pathname.includes('blocked.html')) {
            window.location.href = 'blocked.html';
        }
        return;
    }

    // 2. Если не авторизован и пытается зайти в профиль
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged !== 'true' && window.location.pathname.includes('index.html')) {
        window.location.href = 'avtorisation.html';
    }
}

// Запуск проверки при подключении скрипта
checkAuth();

// Если авторизован, не пускать на страницу входа
if (window.location.pathname.includes('avtorisation.html')) {
    if (localStorage.getItem('isLogged') === 'true') {
        window.location.href = 'profile.html';
    }
}
