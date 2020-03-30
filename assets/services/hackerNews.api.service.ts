import constant from "../constants/index.js";

export async function apiService() {
	const hknAPI = await fetch(constant.api);
	return await hknAPI.json();
}
