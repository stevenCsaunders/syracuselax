import React from 'react'
import contentRight from '../images/content-right.png'
import FileLink from '../utils/baseLinks'

const ContentRight: React.FC = () => {

	const handleFileOpen = (fileName: string) => {
		window.open(fileName)
	}

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
					Syracuse Youth Clinic
				</h3>
				<p className='text-lg font-thin leading-6 mb-4'>
					<strong>WHEN:</strong> February 17th, 2022 - 4:00 to 6:00 PM{' '}
					<br />
					<strong>WHERE:</strong> Syracuse High Lacrosse Field (west
					of the stadium)
					<br />
					<strong>COST:</strong> $25.00 per participant
					<br />
					All youth welcome, ages K-8. Equipment provided!
				</p>
				<button
					className='border border-solid border-blue px-6 py-2 rounded-full hover:bg-blue hover:text-white md:px-10'
					onClick={() =>
						handleFileOpen(FileLink('YouthClinicSyracuseHigh.pdf'))
					}
				>
					More Info
				</button>
			</div>
		</div>
	)
}

export default ContentRight
