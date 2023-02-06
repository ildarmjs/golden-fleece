import React from 'react'
import s from './Prices.module.scss'
const Prices = ({ product }) => {
	return (
		<>
			<div className={s.price}>{product.price} &#8381;</div>
			<div className={s.oldPrice}>{product.old_price} &#8381;</div>
			<div className={s.percent}>
				-{Math.round((product.price / product.old_price) * 100)}%
			</div>
		</>
	)
}

export default Prices
