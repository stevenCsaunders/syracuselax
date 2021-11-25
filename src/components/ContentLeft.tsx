import React from 'react'
import contentLeftImg from '../images/content-left.png'

const ContentLeft: React.FC = () => {
	return (
		//POSSIBLE IMPLEMENTATION -  object-fit: cover; object-position: bottom;
		<div className='flex flex-col items-center px-4 pb-10 mb-36 text-center bg-circles bg-fixed bg-right-bottom  bg-no-repeat md:mb-32 md:px-0'>
			<h3 className='text-3xl pb-4 font-bold text-center md:pb-20'>
				Syracuse Youth Lacrosse Additional Info
			</h3>
			<div className='flex flex-col items-center md:flex-row-reverse '>
				<img
					src={contentLeftImg}
					alt='Youth Lacrosse Player'
					className='w-6 mb-10 rounded-2xl'
				/>
				<div className='md:text-left md:mr-10'>
					<h4 className='text-2xl pb-4 font-bold'>
						Title Here for SYLAX Additional Info
					</h4>
					<p>
						The Syracuse Youth LAX Program has expanded and there is
						a great need for community involvement. Increased youth
						players and parents are key to success.
					</p>
				</div>
			</div>
		</div>
	)
}

export default ContentLeft
