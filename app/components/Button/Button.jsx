import React from 'react'
import s from './Button.module.scss'
const Button = ({ title, w, h }) => {
	return (
		<button className={s.btn} style={{ width: w, minHeight: h }}>
			{title}
		</button>
	)
}

export default Button
