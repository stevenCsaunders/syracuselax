import React from 'react'
import Header from './Header'
import { IProps } from '../App'


const Schedules: React.FC<IProps> = ({
	isNavOpen,
	handleNavClick,
}: IProps) => {


	return (
		<>
			<Header
				handleNavClick={handleNavClick}
				isNavOpen={isNavOpen}
				headerTitle={''}
			/>
			<div className='mx-28'>
				<div className='flex flex-col'>
					{/* {
						map fiunction here to iterate over the sched
					} */}
					<div className='mb-12'>
						<h3 className='text-3xl pb-4 font-bold'>
							7/8 Syracuse Blue
						</h3>
						<iframe
							src='https://leagueathletics.com/schedule.asp?teams=683253&org=imlaxutah.org'
							width='100%'
							height='500'
							title='Syracuse 7/8 Blue Schedule'
						></iframe>
					</div>
				</div>
			</div>
		</>
	)
}

export default Schedules
