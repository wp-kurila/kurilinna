import React, {useState, useCallback} 	from 'react';
import cn 								from 'classnames';

import styles 							from './index.css';

interface Props {
	name: string;
	content: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	label: string;
}

const InputMask: React.FC<Props> = (props: Props): React.ReactElement => {

	const {name, setName, label, content} = props;

	const [focused, setFocused] = useState(false);

	const handleFocus = useCallback(() => {
		setFocused(true);
	}, []);

	const handleBlurComp = useCallback(() => {
		setFocused(false);
	}, []);

	const onChange = useCallback((event: React.ChangeEvent<any>) => {
		const value = event.target.value;
		setName(value);
	}, [setName]);

	const labelCls = cn(styles.label, {
		[styles.label_active]: focused || content,
	});

	const inputCls = cn(styles.input, {
		[styles.inputActive]: focused || content,
	});

	const type = name === 'password' ? name : '';

	return (
		<div className={styles.field} onFocus={handleFocus} onBlur={handleBlurComp}>
			<input maxLength={100} className={inputCls} onChange={onChange} type={type} value={content}/>
			<label className={labelCls}>{label}</label>
		</div>
	)
}

export default React.memo(InputMask);
