import { api, localRegister } from '@services';
import { useState } from 'react';

export const App = () => {
	const [formData, setFormData] = useState({});

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		api
			.post(localRegister, { ...formData })
			.then(data => {
				console.log(data);
			})
			.catch(({ response }) => {
				console.log(response);
			});
	};

	return (
		<main>
			<h1>Identity & Access Management View</h1>
			<form onSubmit={handleFormSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						required
						id="email"
						name="email"
						type={'email'}
						onInput={handleInput}
					/>
				</div>
				<div>
					<label htmlFor="password">password</label>
					<input
						required
						id="password"
						name="password"
						type="password"
						onInput={handleInput}
					/>
				</div>
				<button type="submit">Register</button>
			</form>
		</main>
	);
};
