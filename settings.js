function checkAuth() {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged !== 'true') {
        window.location.href = 'avtorisation.html';
    }
}

// Если уже залогинены, не пускать обратно на страницу входа
if (window.location.pathname.includes('avtorisation.html')) {
    if (localStorage.getItem('isLogged') === 'true') {
        window.location.href = 'profile.html';
    }
}
