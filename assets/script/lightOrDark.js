// Script permettant d'afficher le thème clair ou sombre de la page

const root = document.documentElement;
const togglers = document.querySelectorAll("[data-theme-toggler]");

function init() {
    // Cherche le thème de préférence du site en localStorage (null si il n'y en a pas)
    const storedPreference = localStorage.getItem("theme");
    // Vérifie (avec .matches()) si le thème de préférence du navigateur ? de l'utilisateur est "dark"
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Si storedPreference != null : le theme sera storedPreference; sinon : utilise systemPrefersDark pour comparer
    const theme = storedPreference || (systemPrefersDark ? "dark" : "light");
    root.setAttribute("data-theme", theme);
    for (toggler of togglers) {
        toggler.innerText = `Thème ${theme}`;
    }
}

init();

function toggleDarkMode() {
    const currentTheme = root.getAttribute("data-theme");
    // condition ? ifTrue : ifFalse;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    for (toggler of togglers) {
        toggler.innerText = `Thème ${currentTheme}`;
    }
}


togglers.forEach((toggler) => {
    toggler.addEventListener("click", toggleDarkMode);
});


