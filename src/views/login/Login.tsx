import { SyntheticEvent, useState } from 'react';

import { api, localLoginRoute } from '@services';
import { useSearchParams } from 'react-router-dom';

export const Login = () => {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const [searchParams] = useSearchParams();

	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		api
			.post(localLoginRoute, formData, {
				withCredentials: true,
			})
			.then(res => {
				if (res.status === 200) {
					window.location.href = searchParams.get('callback') || '';
				} else {
					console.log('error');
				}
			});
	};

	return (
		<main>
			<h1>User Login</h1>
			<form onSubmit={onSubmit}>
				<input
					type={'email'}
					onChange={e => setFormData({ ...formData, email: e.target.value })}
				/>
				<input
					type={'password'}
					onChange={e => setFormData({ ...formData, password: e.target.value })}
				/>

				<button>Login</button>
			</form>
			<br />
			<hr />
			<p>Accces Token</p>
		</main>
	);
};
