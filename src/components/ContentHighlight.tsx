import React from 'react'
import contentHighlightImg from '../images/content-highlight.png'

const ContentHighlight: React.FC = () => {
	return (
		<div className='flex flex-col items-center px-10 pb-20 mb-32 bg-blue text-white rounded-bl-xxl rounded-tr-xxl md:flex-row md:px-20 md:pb-0'>
			<div className='flex flex-col items-center text-center  md:text-left md:flex-row '>
				<img
					src={contentHighlightImg}
					alt='Youth Lacrosse Player'
					className='w-8 -mt-32 rounded-2xl md:w-4 md:-mt-40'
				/>
				<div className='md:ml-10 py-10 '>
					<h3 className='text-3xl pb-4 font-bold'>
						Get Ready - Spring 2022 Registration is Open
					</h3>
					<p className='text-lg font-thin leading-6 mb-4'>
						If you have a child that would like to play for the
						Syracuse YLAX Program, please get registered. Earlybird
						registration for boys and girls in grades K-8th is open now!
					</p>
					<button
						className='px-6 py-2 bg-white text-blue rounded-full hover:bg-blue border hover:border-solid border-white hover:border-current hover:text-white md:px-10'
						onClick={() => {
							window.open(
								'http://www.imlaxutah.org/Registration/Default.asp?org=imlaxutah.org',
								'_blank'
							)
						}}
					>
						Get Registered!
					</button>
				</div>
			</div>
		</div>
	)
}

export default ContentHighlight
