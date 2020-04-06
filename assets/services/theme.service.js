export default function (themeName = "dark") {
    const body = document.querySelector("body");
    let theme = body.dataset.theme;
    !theme ? (body.dataset.theme = themeName) : delete body.dataset.theme;
}
