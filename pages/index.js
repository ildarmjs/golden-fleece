import Meta from '@/app/utils/Meta'
import Image from 'next/image'
import product from 'app/assets/images/product_1.webp'
import Products from '@/app/components/Products/Products'
export default function Home({ products }) {
	return (
		<>
			<Meta title='Главная страница' description='Диваны' />
			<h1>Диваны</h1>
			<br />
			<Products products={products} />
		</>
	)
}
export const getStaticProps = async () => {
	const res = await fetch('http://localhost:5000/products')
	const products = await res.json()

	return {
		props: { products },
	}
}
