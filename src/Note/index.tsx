import React, {
	useCallback, useEffect,
	useMemo, useState
} 						from 'react';
import Note 			from './Note';

import styles 			from './index.css';

export const NoteContext = React.createContext();

interface Props {
	children: React.ReactElement;
}

const Notes: React.FC<Props> = (props: Props): React.ReactElement => {

	const [notes, setNotes] = useState<string[]>([]);

	// useEffect(() => {
	// 	if (notes.length > 0) {
			
	// 		setTimeout(() => {
	// 			console.log('notes')
	// 			console.log(notes)
	// 		}, 10000);

	// 	}
	// }, [notes]);

	const showNote = useCallback((text: string) => {
		setNotes([...notes, text]);

		// setTimeout(() => {
		// 	const newNotes = notes.slice(1);
		// 	setNotes(newNotes);
		// }, 5000)
	}, [notes]);

	const contextValue = useMemo(() => ({showNote}), [showNote]);

	return (
		<>
			<div className={styles.notesBlock}>
				{notes?.map((item, i) => {
					return <Note key={i} text={item} />;
				})}
			</div>
			<NoteContext.Provider value={contextValue}>{props.children}</NoteContext.Provider>
		</>
	)

}

export default Notes;
