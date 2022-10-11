import { SubmitHandler, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import { Form, Typography } from '@anthane/core-elements';

import { api, localLoginRoute, localRegisterRoute } from '@services';
import { Props } from './FormGroup.props';

import styles from './FormGroup.module.scss';
import { Auth, Response } from 'types';

export const FormGroup = ({ action }: Props) => {
	const [searchParams] = useSearchParams();

	const {
		register,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm<Auth>();

	enum Inputs {
		Username = 'username',
		Password = 'password',
		Email = 'email',
	}

	const onSubmit: SubmitHandler<Auth> = async (data: any) => {
		try {
			await api.post(
				action === 'signup' ? localRegisterRoute : localLoginRoute,
				data
			);

			//window.location.href = searchParams.get('redirect_uri') || '';
		} catch (err) {
			if (axios.isAxiosError(err)) {
				setError('server', {
					type: 'custom',
					message: (err.response?.data as Response)?.message,
				});
			}
		}
	};

	return (
		<form className={styles.formGroup} onSubmit={handleSubmit(onSubmit)}>
			{action === 'signup' && (
				<Form.Group
					type={'text'}
					id={Inputs.Username}
					label={Inputs.Username}
					{...register(Inputs.Username, { required: true })}
					text={errors.username && 'Username is required'}
					fluid
				/>
			)}
			<br />
			<Form.Group
				id={Inputs.Email}
				type={Inputs.Email}
				label={Inputs.Email}
				{...register(Inputs.Email, { required: true })}
				text={errors.email && 'Email is required'}
				fluid
			/>
			<br />
			<Form.Group
				id={Inputs.Password}
				type={Inputs.Password}
				label={Inputs.Password}
				{...register(Inputs.Password, { required: true })}
				text={errors.password && 'Password is required'}
				fluid
			/>
			<br />
			<Form.Input
				value={action === 'signup' ? 'Create Account ' : 'Login'}
				type={'submit'}
				fluid
			/>
			<Typography.Body>{errors.server?.message}</Typography.Body>
		</form>
	);
};
