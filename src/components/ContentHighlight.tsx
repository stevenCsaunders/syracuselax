import React from 'react'

const ContentHighlight: React.FC = () => {
	return (
		<div className='flex flex-col items-center px-10 pb-20 mb-32 bg-blue text-white rounded-bl-xxl rounded-tr-xxl md:flex-row md:px-20 md:pb-0'>
			<img
				src='https://via.placeholder.com/200x400'
				alt='Youth Lacrosse Player'
				className='relative -top-10 md:left-10'
			/>
			<div className='md:ml-24'>
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

export default ContentHighlight
