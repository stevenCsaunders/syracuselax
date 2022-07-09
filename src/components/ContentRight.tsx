import React from 'react'
import { useNavigate } from 'react-router'

import contentRight from '../images/content-right.png'


const ContentRight: React.FC = () => {


	const navigate = useNavigate()

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
					Team Schedules
				</h3>
				<p className='text-lg font-thin leading-6 mb-4'>
					Find all the scheduled games for your team here.  
				</p>
				<button
					className='border border-solid border-blue px-6 py-2 rounded-full hover:bg-blue hover:text-white md:px-10'
					onClick={() =>
						navigate('/schedules')
					}
				>
					More Info
				</button>
			</div>
		</div>
	)
}

export default ContentRight
