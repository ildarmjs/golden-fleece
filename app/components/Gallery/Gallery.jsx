import Image from 'next/image'
import React from 'react'
import s from './Gallery.module.scss'
const Gallery = ({ image }) => {
	return (
		<div className={s.gallery}>
			<div className={s.gallery__image}>
				<Image
					className={s.image}
					src={image.path}
					layout='fill'
					objectFit='contain'
				/>
			</div>
			<div className={s.gallery__list}>
				<div className={s.item}></div>
				<div className={s.item}></div>
				<div className={s.item}></div>
				<div className={s.item}></div>
			</div>
		</div>
	)
}

export default Gallery
