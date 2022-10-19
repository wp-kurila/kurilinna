import React 	from 'react';
import Auth 	from './auth/views';

import styles 	from './app.css';


const App: React.FC = (): React.ReactElement => {

	return (
		<div className={styles.app}>
			<Auth />
		</div>
	)
}

export default App