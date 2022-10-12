import { Link, useLocation } from 'react-router-dom';
import React from 'react';

import { Props } from './Props.types';
import styles from './LinkQuery.module.scss';

export const LinkQuery: React.FC<Props> = ({ children, to, ...props }) => {
	const { search } = useLocation();

	return (
		<Link to={to + search} className={styles.linkQuery} {...props}>
			{children}
		</Link>
	);
};
