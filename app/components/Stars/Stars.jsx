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
			<span
				style={{
					marginLeft: '10px',
					textDecoration: 'underline',
					cursor: 'pointer',
				}}
			>
				{reviews}
			</span>
		</>
	)
}

export default Stars
