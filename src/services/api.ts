import axios from 'axios';

const { APP_API_ENTRYPOINT } = import.meta.env;

const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
};

export const api = axios.create({
	baseURL: APP_API_ENTRYPOINT || undefined,
	headers,
});
