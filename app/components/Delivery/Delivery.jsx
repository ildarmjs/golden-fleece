import React from 'react'
import s from './Delivery.module.scss'
const Delivery = () => {
	return (
		<>
			<h5 className={s.delivery__title}>Доставка</h5>
			<div className={s.delivery__info}>
				<div className={s.town}>По Челябинку</div>
				<div className={s.price}>700</div>
			</div>
			<div className={s.delivery__info}>
				<div className={s.town}>По России</div>
				<div className={s.price}>от 1000</div>
			</div>
			<div className={s.delivery__info}>
				<div className={s.town}>Самовывоз</div>
				<div className={s.price}>бесплатно</div>
			</div>
		</>
	)
}

export default Delivery
