import React from 'react'
import contentRight from '../images/content-right.png'

const ContentRight: React.FC = () => {
	return (
		//POSSIBLE IMPLEMENTATION -  object-fit: cover; object-position: bottom;
		<div className='flex flex-col items-center px-4 mb-32 text-center bg-circles bg-fixed bg-left-bottom  bg-no-repeat md:mb-32 md:px-0 md:flex-row'>
			<img
				src={contentRight}
				alt='Youth Lacrosse Player'
				className='w-6 mb-10 rounded-2xl'
			/>
			<div className='md:text-left md:ml-10'>
				<h3 className='text-3xl pb-4 font-bold'>
					Title Here for SYLAX Additional Info
				</h3>
				<p>
					The Syracuse Youth LAX Program has expanded and there is a
					great need for community involvement. Increased youth
					players and parents are key to success.
				</p>
			</div>
		</div>
	)
}

export default ContentRight
