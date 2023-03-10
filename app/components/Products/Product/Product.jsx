import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import s from '../Products.module.scss'
import { FiHeart } from 'react-icons/fi'
const Product = ({ product }) => {
	return (
		<div className={s.product}>
			{product.images.map(image => (
				<div className={s.product__image}>
					<Image
						className={s.image}
						src={image.path}
						layout='fill'
						objectFit='contain'
					/>
					<FiHeart className={s.heart} />
				</div>
			))}

			<h3 className={s.product__name}>Диван клик кляк</h3>
			<div className={s.product__prices}>
				<div className={s.product__price}>{product.price} &#8381;</div>
				<div className={s.product__oldPrice}>{product.old_price} &#8381;</div>
				<div className={s.product__percent}>
					-{Math.round((product.price / product.old_price) * 100)}%
				</div>
			</div>
			<Link legacyBehavior href={`/product/${product.id}`}>
				<a className={s.product__btn}>Посмотреть</a>
			</Link>
		</div>
	)
}

export default Product
