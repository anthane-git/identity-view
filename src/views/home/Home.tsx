import { LinkQuery } from '@components';

export const Home = () => (
	<main>
		<LinkQuery to={'/register'}>
			<>Register</>
		</LinkQuery>
		<br />
		<LinkQuery to={'/login'}>
			<>Login</>
		</LinkQuery>
	</main>
);
