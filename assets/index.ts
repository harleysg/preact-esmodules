import { html, render } from "./libs/preact.js";
import HackerNewsApp from "./components/hackerNews.js";

render(
	html`
		<${HackerNewsApp} />
	`,
	document.body
);
