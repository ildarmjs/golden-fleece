import React from 'react'
import s from './Filling.module.scss'
const Filling = () => {
	return (
		<>
			<h5 className={s.filling__title}>Наполнение</h5>
			<div className={s.filling__flex}>
				<div className={s.filling__name}>НПБ</div>
				<div className={s.filling__name}>НПУ</div>
				<div className={s.filling__name}>ЗМЕЙКА</div>
				<div className={s.filling__name}>ПБ</div>
			</div>
		</>
	)
}

export default Filling
