import { Display, FormGroup } from '@components';

import styles from './Login.module.scss';

export const Login = () => (
	<main className={styles.login}>
		<Display
			headline={'Supercharge continuous growth'}
			body={
				'Discover a suit of software thats accessible and blazingly fast. ' +
				'Get your team onboard for success'
			}
		/>
		<FormGroup action={'login'} />
	</main>
);
