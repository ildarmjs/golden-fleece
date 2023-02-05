import ProductInfo from '@/app/components/Products/Product/ProductInfo'
import React from 'react'

const Info = ({ product }) => {
	console.log(product)
	return <ProductInfo product={product} />
}
export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:5000/products')
	const data = await res.json()
	const paths = data.map(p => ({ params: { id: p.id.toString() } }))
	return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {
	const res = await fetch(`http://localhost:5000/products/${params.id}`)
	const data = await res.json()
	return {
		props: {
			product: data,
		},
		revalidate: 10,
	}
}
export default Info
