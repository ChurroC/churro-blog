// Using alert I figured out it runs after head and body have loaded but none of the components
// This will cause a rehydration issue but it is what it is
console.log("theme");
if (
    JSON.parse(localStorage["theme"]) === "dark" ||
    ((!localStorage.getItem("theme") ||
        JSON.parse(localStorage["theme"]) === "system") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
    console.log("dark");
} else {
    document.documentElement.classList.remove("dark");
    console.log("light");
}
alert("theme.js ran");
