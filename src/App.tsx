import React 	from 'react';
import Auth 	from './Auth';
import Wedding 	from './Wedding';

import styles 	from './app.css';


const App: React.FC = (): React.ReactElement => {

	return (
		<div className={styles.app}>
			{/* <Auth /> */}
			<Wedding />
		</div>
	)
}

export default App;
