const modeStorageKey = 'mode';

setMode();

window.onload = function () {
    setMode();
};

function setMode() {
    if (localStorage.getItem(modeStorageKey)) {
        document.documentElement.setAttribute('data-bs-theme', localStorage.getItem(modeStorageKey));
    }
    else {
        localStorage.setItem(modeStorageKey, document.documentElement.getAttribute('data-bs-theme'));
    }
}

function toggleMode() {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem(modeStorageKey, 'light');
    }
    else if (document.documentElement.getAttribute('data-bs-theme') == 'light') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem(modeStorageKey, 'dark');
    }
}