import { SubmitHandler, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import { Button, Form, Typography } from '@anthane/core-elements';

import { api, localLoginRoute, localRegisterRoute } from '@services';
import { LinkQuery } from '@components';
import { Auth, Response } from '@types';

import styles from './FormGroup.module.scss';
import { Props } from './FormGroup.props';

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

	const onSubmit: SubmitHandler<Auth> = async (data: Auth) => {
		try {
			await api.post(
				action === 'register' ? localRegisterRoute : localLoginRoute,
				data
			);

			window.location.href = searchParams.get('redirect_uri') || '';
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
		<div className={styles.formGroup}>
			<div className={styles.header}>
				<Typography.Headline size={'XLarge'}>
					{action === 'register' ? 'Create Account ' : 'Login'}
				</Typography.Headline>
				<Typography.Caption>
					{action === 'register'
						? 'Already have an account?'
						: 'Dont have an account?'}
				</Typography.Caption>
				<LinkQuery to={action === 'register' ? '/login' : '/register'}>
					<Button type={'outlined'} variant={'secondary'}>
						{action === 'register' ? 'Login' : 'Register'}
					</Button>
				</LinkQuery>
				<hr />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				{action === 'register' && (
					<Form.Group
						type={'text'}
						id={Inputs.Username}
						label={Inputs.Username}
						className={styles.group}
						{...register(Inputs.Username, { required: true })}
						text={errors.username && 'Username is required'}
						fluid
					/>
				)}
				<Form.Group
					id={Inputs.Email}
					type={Inputs.Email}
					label={Inputs.Email}
					className={styles.group}
					{...register(Inputs.Email, { required: true })}
					text={errors.email && 'Email is required'}
					fluid
				/>
				<Form.Group
					id={Inputs.Password}
					type={Inputs.Password}
					label={Inputs.Password}
					className={styles.group}
					{...register(Inputs.Password, { required: true })}
					text={errors.password && 'Password is required'}
					fluid
				/>
				<Form.Input
					value={action === 'register' ? 'Create Account ' : 'Login'}
					type={'submit'}
					fluid
				/>
				<Typography.Body>{errors.server?.message}</Typography.Body>
			</form>
		</div>
	);
};
