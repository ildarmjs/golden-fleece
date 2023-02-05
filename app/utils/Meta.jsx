import React from 'react'
import Head from 'next/head'
const Meta = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>

			<meta name='description' content={description} />
			{/* <meta name='viewport' content='width=device-width, initial-scale=1' /> */}
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<link rel='icon' href='/favicon.ico' />
		</Head>
	)
}
export default Meta
