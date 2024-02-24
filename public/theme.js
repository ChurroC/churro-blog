// Using alert I figured out it runs after head and body have loaded but none of the components
// This will cause a rehydration issue but it is what it is
if (
    JSON.parse(localStorage["theme"]) === "dark" ||
    (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}
