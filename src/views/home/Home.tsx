import { Link } from 'react-router-dom';

export const Home = () => (
	<main>
		<Link to={'/register'}>Register</Link>
		<br />
		<Link to={'/login'}>Login</Link>
	</main>
);
