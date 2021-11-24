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
						Title Here for SYLAX Additional Info
					</h3>
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

export default ContentHighlight
