import React, {useState, useCallback} 	from 'react';
import cn 								from 'classnames';

import styles 							from './index.css';

const Auth = () => {

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const disabled = !(login && password);

	const submit = (event) => {
		event.preventDefault();

		console.log(`Логин: ${login}; пароль: ${password}`);

		setLogin('');
		setPassword('');
	}

	return (
		<div className={styles.auth}>
			<div className={styles.content}>
				<div className={styles.logo}/>
				<div className={styles.text}>Вход</div>
				<form onSubmit={submit}>
					<InputMask name='login' content={login} setName={setLogin} label='Номер телефона или логин' />
					{login && <InputMask name='password' content={password} setName={setPassword} label='Введите пароль' />}
					<button className={cn(styles.btn, styles.btnSuccess, {[styles.btnDisabled]: disabled})} disabled={disabled} type='submit'>Далее</button>
				</form>				
			</div>
		</div>
	)
}

export default React.memo(Auth);

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

	const onChange = useCallback((event) => {
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
