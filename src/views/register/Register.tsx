import { Display, FormGroup } from '@components';

import styles from './Register.module.scss';

export const Register = () => (
	<main className={styles.register}>
		<Display
			headline={'Get your team onboard for success.'}
			body={
				'Discover a suit of software thats accessible and blazingly fast. ' +
				'Get your team onboard for success'
			}
		/>
		<FormGroup action={'register'} />
	</main>
);
