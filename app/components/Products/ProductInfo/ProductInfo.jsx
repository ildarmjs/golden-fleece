import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../../Button/Button'
import Delivery from '../../Delivery/Delivery'
import Filling from '../../Filling/Filling'
import Gallery from '../../Gallery/Gallery'
import Prices from '../../Prices/Prices'
import Stars from '../../Stars/Stars'
import s from './ProductInfo.module.scss'

const ProductInfo = ({ product }) => {
	const [isAlert, setIsAlert] = useState(false)
	const handlerClick = () => {
		if (!isAlert) {
			setIsAlert(true)
			alert('Товар удален из корзины')
		} else {
			setIsAlert(false)
			alert('Товар добавлен в корзину')
		}
	}
	const colors = [
		'#4287f5',
		'#95a3ba',
		'#e6b3e4',
		'#78c4ad',
		'#d65a58',
		'#61d1ed',
		'#a561ed',
	]
	return (
		<div className={s.info}>
			<div className={s.col_one}>
				{product.images.map(image => (
					<Gallery image={image} />
				))}
			</div>
			<div className={s.col_two}>
				<h2 className={s.info__title}>Фианка</h2>
				<h4 className={s.info__name}>Диван клик кляк</h4>
				<div className={s.info__stars}>
					<Stars reviews='5 отзывов' />
				</div>
				<div className={s.info__prices}>
					<Prices product={product} />
				</div>
				<div className={s.info__colors}>
					<h5 className={s.info__color_name}>Велюр Нелла 089</h5>
					<div className={s.colors}>
						{colors.map(c => (
							<div
								className={s.color}
								style={{ backgroundColor: c, width: '20px', height: '20px' }}
							></div>
						))}
					</div>
				</div>
				<div className={s.info__filling}>
					<Filling />
				</div>
				<div className={s.info__delivery}>
					<Delivery />
				</div>
				<div className={s.info__btn}>
					{isAlert ? (
						<Button
							handlerClick={handlerClick}
							title='В корзину'
							w='250px'
							h='37px'
						/>
					) : (
						<Button
							handlerClick={handlerClick}
							title='Удалить из корзины'
							w='250px'
							h='37px'
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductInfo
