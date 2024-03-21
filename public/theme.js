// IIFE to no pollute the global scope
(() => {
    // Want to use cookieStore API but it's async and I need this to be sync
    const match = document.cookie.match(
        new RegExp("(^| )" + "theme" + "=([^;]+)")
    );
    const cookie = match ? match[2] : null;

    console.log(cookie);
    if (!cookie || cookie === "system") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            console.log("hjk");
            document.documentElement.classList.add("dark");
        }
    }
})();
