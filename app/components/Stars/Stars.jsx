import React from 'react'
import { AiFillStar } from 'react-icons/ai'
const Stars = ({ reviews }) => {
	return (
		<>
			<AiFillStar />
			<AiFillStar />
			<AiFillStar />
			<AiFillStar />
			<AiFillStar />
			<span>{reviews}</span>
		</>
	)
}

export default Stars
