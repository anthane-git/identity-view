import { SyntheticEvent, useState } from 'react';

import { api, localRegisterRoute } from '@services';
import { useSearchParams } from 'react-router-dom';

export const Register = () => {
	const [searchParams] = useSearchParams();
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		api
			.post(localRegisterRoute, formData, {
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
			<h1>New User Registration</h1>
			<form onSubmit={onSubmit}>
				<input
					type={'text'}
					onChange={e => setFormData({ ...formData, username: e.target.value })}
				/>
				<input
					type={'email'}
					onChange={e => setFormData({ ...formData, email: e.target.value })}
				/>
				<input
					type={'password'}
					onChange={e => setFormData({ ...formData, password: e.target.value })}
				/>

				<button>Register</button>
			</form>
		</main>
	);
};
