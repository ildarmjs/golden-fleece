import Image from 'next/image'
import React from 'react'
import Product from './Product/Product'
import s from './Products.module.scss'
const Products = ({ products }) => {
	return (
		<div className={s.products}>
			{products.map(product => (
				<Product product={product} />
			))}
		</div>
	)
}

export default Products
