import React from 'react'
import contentLeftImg from '../images/content-left.png'
import { useNavigate } from 'react-router'

const ContentLeft: React.FC = () => {

const navigate = useNavigate();

	return (
		//POSSIBLE IMPLEMENTATION -  object-fit: cover; object-position: bottom;
		<div className='flex flex-col items-center px-4 pb-10 mb-36 text-center bg-circles bg-fixed bg-right-bottom  bg-no-repeat md:mb-32 md:px-0'>
			<div className='flex flex-col items-center md:flex-row-reverse '>
				<img
					src={contentLeftImg}
					alt='Youth Lacrosse Player'
					className='w-6 mb-10 rounded-2xl shadow-md'
				/>
				<div className='md:text-left md:mr-10'>
					<h4 className='text-3xl pb-4 font-bold'>
						Join Us and Help Make the Syracuse YLAX Program Great!
					</h4>
					<p className='text-lg font-thin leading-6 mb-4'>
						The Syracuse Youth LAX Program has expanded and there is
						a great need for community involvement. Increased youth
						players and parents are key to success.
					</p>
					<button
						className='border border-solid border-blue px-6 py-2 rounded-full hover:bg-blue hover:text-white md:px-10'
						onClick={() => {
							navigate('/contact')
						}}
					>
						Contact For Info
					</button>
				</div>
			</div>
		</div>
	)
}

export default ContentLeft
