import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useState } from 'react';

import { api, localRegisterRoute } from '@services';

export const Register = () => {
	const [formData, setFormData] = useState({ email: '', password: '' });

	const navigate = useNavigate();

	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		api.post(localRegisterRoute, formData).then(res => {
			if (res.status === 201) {
				console.log(res);
				return navigate('/callback', { replace: false });
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
