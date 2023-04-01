import React 	from 'react';
import Auth 	from './Auth';
import Note 	from './Note';

import styles 	from './app.css';

const App: React.FC = (): React.ReactElement => {

	return (
		<div className={styles.app}>
			<Note>
				<Auth />
			</Note>
		</div>
	)
}

export default App;
