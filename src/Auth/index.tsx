import React, {useState} 	from 'react';
import cn 					from 'classnames';
import InputMask 			from '../InputMask';
import Note 				from '../Note';
import Portal 				from '../Portal'

import styles 				from './index.css';

const Auth = () => {

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [note, setNote] = useState(true);

	const disabled = !(login && password);

	const submit = (event: React.ChangeEvent<any>) => {
		event.preventDefault();

		console.log(`Логин: ${login}; пароль: ${password}`);

		setLogin('');
		setPassword('');
		setNote(true);
		handleNote();
	}

	const handleNote = () => {
		setTimeout(() => {
			setNote(false);
		}, 5000);
	}

	return (
		<div className={styles.auth}>
			<div className={styles.content}>
				<div className={styles.logo}/>
				<div className={styles.text}>Вход</div>
				<form onSubmit={submit} className={styles.form}>
					<InputMask name='login' content={login} setName={setLogin} label='Номер телефона или логин' />
					{login && <InputMask name='password' content={password} setName={setPassword} label='Введите пароль' />}
					<button className={cn(styles.btn, styles.btnSuccess, {[styles.btnDisabled]: disabled})} disabled={disabled} type='submit'>Далее</button>
				</form>
			</div>
			{/* {note && (
				<Portal>
					<Note />
				</Portal>
			)} */}
		</div>
	)
}

export default React.memo(Auth);
