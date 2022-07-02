import React from 'react'
import Header from './Header'
import { IHeaderProps, IProps } from '../App'
import aboutImg from '../images/about.png'
import { Link } from 'react-router-dom'

const Schedules: React.FC<IProps & IHeaderProps> = ({
	headerStyles,
	h2Content,
	isNavOpen,
	handleNavClick,
}: IProps & IHeaderProps) => {
	const pStyles = 'text-lg font-thin leading-8 mb-10 text-center md:text-left'

	return (
		<>
			<Header
				handleNavClick={handleNavClick}
				isNavOpen={isNavOpen}
				headerStyles={headerStyles}
				h2Content={h2Content}
				buttonDivStyles={'hidden'}
				h1Content={'2022 Season Schedules'}
			/>
			<div className='mx-28'>
				<div className='flex flex-col'>
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
					<div className='mb-12'>
						<h3 className='text-3xl pb-4 font-bold'>
							7/8 Syracuse Green
						</h3>
						<iframe
							src='https://leagueathletics.com/schedule.asp?teams=676695&org=imlaxutah.org'
							width='100%'
							height='500'
							title='Syracuse 7/8 Green Schedule'
						></iframe>
					</div>
					<div className='mb-12'>
						<h3 className='text-3xl pb-4 font-bold'>
							5/6 Syracuse
						</h3>
						<iframe
							src='https://leagueathletics.com/schedule.asp?teams=676742&org=imlaxutah.org'
							width='100%'
							height='500'
							title='Syracuse 5/6'
						></iframe>
					</div>
					<div className='mb-12'>
						<h3 className='text-3xl pb-4 font-bold'>
							3/4 Syracuse
						</h3>
						<iframe
							src='https://leagueathletics.com/schedule.asp?teams=676789&org=imlaxutah.org'
							width='100%'
							height='500'
							title='Syracuse 3/4'
						></iframe>
					</div>
					<div className='mb-12'>
						<h3 className='text-3xl pb-4 font-bold'>
							K/1 Syracuse
						</h3>
						<iframe
							src='https://leagueathletics.com/schedule.asp?teams=676833&org=imlaxutah.org'
							width='100%'
							height='500'
							title='Syracuse K/1'
						></iframe>
					</div>
				</div>
			</div>
		</>
	)
}

export default Schedules
