import React 		from 'react';

import styles 		from './index.css';

const Note: React.FC = (): React.ReactElement => {

	return (
		<div className={styles.note}>
			<div className={styles.icon}/>
			<div>Успешно</div>
		</div>
	)

}

export default Note;
