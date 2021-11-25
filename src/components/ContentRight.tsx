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
					Tournaments and Camps 
				</h3>
				<p>
					Throughout the year, there are several youth lacrosse tournaments and camps held in Utah. This section of the site will be updated as more information becomes available on these topics, so check back closer to the spring 2022 season for info.
				</p>
			</div>
		</div>
	)
}

export default ContentRight
