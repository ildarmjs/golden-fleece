import Link from 'next/link'
import React from 'react'

const Error404 = () => {
	return (
		<>
			<h1>Такой страницы не существует</h1>
			<div>
				Перейти на
				<Link legacyBehavior href={'/'}>
					<a> главную</a>
				</Link>
			</div>
		</>
	)
}

export default Error404
