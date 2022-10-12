import { Typography } from '@anthane/core-elements';

import { Props } from './Display.props';
import styles from './Display.module.scss';

export const Display = ({ headline, body }: Props) => {
	return (
		<section className={styles.display}>
			<div className={styles.content}>
				<img
					src={`https://github.com/anthane-git/core-assets/blob/main/logos/anthane/brandmark-light.png?raw=true`}
					alt={'Anthane logo'}
				/>
				<Typography.Display size="Small">{headline}</Typography.Display>
				{body && <Typography.Body>{body}</Typography.Body>}
			</div>
		</section>
	);
};
