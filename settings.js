
// Если авторизован, не пускать на страницу входа
if (window.location.pathname.includes('index.html')) {
    if (localStorage.getItem('isLogged') === 'true') {
        window.location.href = 'profile.html';
    }
}

// function checkAuth() {
//     const blockUntil = localStorage.getItem('blockUntil');
//     const now = Date.now();

//     // Если время блокировки еще не истекло
//     if (blockUntil && now < parseInt(blockUntil)) {
//         if (!window.location.pathname.includes('blocked.html')) {
//             window.location.href = 'blocked.html';
//         }
//         return;
//     }

//     // Если не авторизован (на странице профиля)
//     const isLogged = localStorage.getItem('isLogged');
//     if (isLogged !== 'true' && window.location.pathname.includes('profile.html')) {
//         window.location.href = 'index.html';
//     }
    
//     if (window.location.pathname.includes('blocked.html')) {
//     window.location.href = 'profile.html';
//     }
// }

// checkAuth();

function checkAuth() {
    const blockUntil = localStorage.getItem('blockUntil');
    const now = Date.now();

    // Если всё еще заблокирован
    if (blockUntil && now < parseInt(blockUntil)) {
        if (!window.location.pathname.includes('blocked.html')) {
            window.location.href = 'blocked.html';
        }
        return;
    }

    // Защита профиля
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged !== 'true' && window.location.pathname.includes('profile.html')) {
        window.location.href = 'index.html';
    }
}
checkAuth();
