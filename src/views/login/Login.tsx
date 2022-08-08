import { SyntheticEvent, useState } from 'react';

import { api, localLoginRoute } from '@services';

export const Login = () => {
	const [formData, setFormData] = useState({ email: '', password: '' });

	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		api.post(localLoginRoute, formData).then(res => {
			if (res.status === 200) {
				console.log(res);
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
		</main>
	);
};