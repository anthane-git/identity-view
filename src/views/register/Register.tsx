import { SubmitHandler, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import { api, localRegisterRoute } from '@services';
import { Inputs, RegisterErrRes } from './types';

export const Register = () => {
	const [searchParams] = useSearchParams();

	const {
		register,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async data => {
		try {
			await api.post(localRegisterRoute, data);

			window.location.href = searchParams.get('redirect_uri') || '';
		} catch (err) {
			if (axios.isAxiosError(err)) {
				setError('server', {
					type: 'custom',
					message: (err.response?.data as RegisterErrRes)?.message,
				});
			}
		}
	};

	return (
		<main>
			<h1>Sign up</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder={'Sam Fisher'}
					{...register('username', { required: true })}
				/>
				<div>{errors.username && <span>Username is required</span>}</div>

				<input
					placeholder={'sam@fisher.com'}
					type={'email'}
					{...register('email', { required: true })}
				/>
				<div>{errors.email && <span>Email is required</span>}</div>

				<input
					type={'password'}
					{...register('password', { required: true })}
				/>
				<div>{errors.password && <span>Password is required</span>}</div>
				<div>{errors.server?.message}</div>

				<input type={'submit'} value={'Create New Account'} />
			</form>
		</main>
	);
};
