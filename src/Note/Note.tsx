import React 	from 'react';

import styles 	from './index.css';

interface Props {
	text: string;
}

const Note: React.FC<Props> = (props: Props): React.ReactElement => {

	return (
		<div className={styles.note}>
			<div className={styles.icon}/>
		</div>
	)
}

export default React.memo(Note);
