import { LinkQuery } from '@components';

export const Home = () => (
	<main>
		<LinkQuery to={'/register'}>
			<>Sign up</>
		</LinkQuery>
		<br />
		<LinkQuery to={'/login'}>
			<>Log in</>
		</LinkQuery>
	</main>
);
