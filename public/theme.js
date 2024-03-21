const match = document.cookie.match(new RegExp("(^| )" + "theme" + "=([^;]+)"));
const cookie = match ? match[2] : null;

console.log(cookie);
if (!cookie || cookie === "system") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        console.log("hjk");
        document.documentElement.classList.add("dark");
    }
}
