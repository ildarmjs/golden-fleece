import Meta from '@/app/utils/Meta'
import Image from 'next/image'
import Products from '@/app/components/Products/Products'
export default function Home({ products }) {
	return (
		<>
			<Meta title='Главная страница' description='Диваны' />

			<Products products={products} />
			<br />
			<Products products={products} />
		</>
	)
}
export const getStaticProps = async () => {
	const res = await fetch(
		'https://633ab4c7e02b9b64c6155e2f.mockapi.io/products'
	)
	const products = await res.json()

	return {
		props: { products },
	}
}
