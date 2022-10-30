import axios from 'axios';

export const key = 'a7a90c3325aca84022146c4b1ebb642d33c1f1e3';

export const api = axios.create({
	baseURL: 'https://api-ssl.bitly.com/v4',
	headers: {
		Authorization: `Bearer ${key}`,
	},
});

export default api;
