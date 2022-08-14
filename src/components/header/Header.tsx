import { LinkQuery } from '@components';

export const Header = () => (
	<header>
		<nav>
			<LinkQuery to={'/'}>
				<>Home</>
			</LinkQuery>
		</nav>
	</header>
);
