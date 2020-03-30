import { html, useState, useEffect } from "../libs/preact.js";
import { apiService } from "../services/hackerNews.api.service.js";
import Header from "./Header.js";
import Article from "./Article.js";

function isLoading(loading: boolean) {
	return (
		loading &&
		html`
			<div><i>🌀 Loading...</i></div>
		`
	);
}

export default function HackerNewsApp() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(async function() {
		setLoading(true);
		const hknAPI = await apiService();

		setTimeout(() => {
			setLoading(false);
			setData(hknAPI);
		}, 3000);
	}, []);
	return html`
        <${Header} class="o-header">
            <div class="o-wrapper">
                ${isLoading(loading)}
                ${loading == false &&
					html`
						Hacker News
					`}
            </div>
        </${Header}>
		<main class="o-main">
        <div class="o-wrapper">
            ${isLoading(loading)}
            ${loading == false &&
				data.map(
					article =>
						html`
							<${Article} ...${article} />
						`
				)}
        </div>
		</main>
	`;
}
