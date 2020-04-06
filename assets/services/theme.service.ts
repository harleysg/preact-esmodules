export default function (themeName: string = "dark") {
	const body = document.querySelector("body") as HTMLBodyElement;
	let theme = body.dataset.theme;
	!theme ? (body.dataset.theme = themeName) : delete body.dataset.theme;
}
