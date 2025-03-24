const lang = navigator.language || navigator.userLanguage;
console.log(lang)
if (lang.startsWith("ja")) {
    window.location.href = "index.ja.html";
} else {
    window.location.href = "index.ko.html";
}