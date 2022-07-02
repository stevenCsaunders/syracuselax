import React from 'react'
import contentLeftImg from '../images/girlsClinic2022.png'
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
						2022 Girls Lacrosse Clinic
					</h4>
					<p className='text-lg font-thin leading-6 mb-4'>
						<span className='text-xl font-bold leading-6 mb-6'>
							July 21, 2022
						</span>
						<br />
						6:00pm - 8:00pm
						<br />
						<br />
						<strong>Linda Vista Park</strong>
						<br />
						1800 W. 2700 S.
						<br />
						Syracuse, UT 84075
						<br />
						Grades K - 8.
						<br />
					</p>
					<button
						className='border border-solid border-blue px-6 py-2 rounded-full hover:bg-blue hover:text-white md:px-10'
						onClick={() => {
							navigate('/contact')
						}}
					>
						Registration Openin Soon!
					</button>
				</div>
			</div>
		</div>
	)
}

export default ContentLeft
