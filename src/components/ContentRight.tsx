import React from 'react'

const ContentRight: React.FC = () => {
	return (
		//POSSIBLE IMPLEMENTATION -  object-fit: cover; object-position: bottom;
		<div className='flex flex-col items-center px-4 mb-32 text-center md:flex-row'>
			<img
				src='https://via.placeholder.com/500x300'
				alt='Youth Lacrosse Player'
				className='mb-10 w-6'
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
