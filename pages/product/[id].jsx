import ProductInfo from '@/app/components/Products/Product/ProductInfo'
import React from 'react'

const Info = ({ product }) => {
	console.log(product)
	return <ProductInfo product={product} />
}
export const getStaticPaths = async () => {
	const res = await fetch(
		'https://633ab4c7e02b9b64c6155e2f.mockapi.io/products'
	)
	const data = await res.json()
	const paths = data.map(p => ({ params: { id: p.id.toString() } }))
	return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {
	const res = await fetch(
		`https://633ab4c7e02b9b64c6155e2f.mockapi.io/products/${params.id}`
	)
	const data = await res.json()
	return {
		props: {
			product: data,
		},
		revalidate: 10,
	}
}
export default Info
