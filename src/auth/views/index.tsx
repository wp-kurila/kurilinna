import React, {useState, useCallback} 	from 'react';
import cn 								from 'classnames';

import './index.css';

const Auth = () => {

	const [focused, setFocused] = useState(false);


	const handleFocus = useCallback(() => {
		setFocused(true);
	}, []);

	const handleBlurComp = useCallback(() => {
		setFocused(false);
	}, []);

	const labelCls = cn("label", {
		"label_active": focused,
	});

	const inputCls = cn("input", {
		"inputActive": focused,
	});

	return (
		<div className='auth'>
			<div className='content'>
				<div className="logo"/>
				<div className="text">Вход</div>
				<form>
					<div className="field" onFocus={handleFocus} onBlur={handleBlurComp}>
						<input type="text" maxLength={100} className={inputCls}/>
						<label className={labelCls}>Номер телефона или логин</label>
					</div>
					<button className={cn("btn", "btnDisabled")} disabled={true}>Далее</button>
				</form>				
			</div>
		</div>
	)
}

export default React.memo(Auth);
