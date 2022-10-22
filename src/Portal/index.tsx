import React, {useEffect, useRef} 		from 'react';
import ReactDOM 						from 'react-dom';

interface Props {
	children: React.ReactElement | React.ReactElement[];
}

const Portal: React.FC<Props> = (props: Props) => {
	const elRef = useRef<HTMLElement>(null);

	useEffect(() => {
		return (): void => {
			if(elRef.current){
				global.document && global.document.body.removeChild(elRef.current);
			}
		}
	}, [elRef]);

	if(!elRef.current){
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		elRef.current = global.document.createElement('div');
		global.document && global.document.body.appendChild(elRef.current);
	}

	return ReactDOM.createPortal(props.children, elRef.current);
}

export default React.memo(Portal);