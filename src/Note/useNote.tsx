import React 			from 'react';
import {NoteContext} 	from './index';

const useNote = () => {

	const {showNote} = React.useContext(NoteContext);

	return showNote;
}

export default useNote;
