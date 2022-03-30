import React from 'react'
import Header from './Header'
import { IHeaderProps, IProps } from '../App'

const ParentsInfo: React.FC<IProps & IHeaderProps> = ({
	headerStyles,
	h2Content,
	isNavOpen,
	handleNavClick,
}: IProps & IHeaderProps) => {
	return (
		<>
			<Header
				handleNavClick={handleNavClick}
				isNavOpen={isNavOpen}
				headerStyles={headerStyles}
				h2Content={h2Content}
				buttonDivStyles={'hidden'}
				h1Content={'Information for Lacrosse Parents'}
			/>
			<div className='mx-28'>
				<h4 className='text-4xl text- text-center pb-10'>
					Check out the videos below to see what it takes to be a
					great lacrosse parent!
				</h4>
				<div className='flex flex-col xl:flex-row-reverse mb-24 justify-center items-center'>
					<div className=''>
						<h6 className='text-2xl text-center'>
							BEING A GREAT LAX PARENT
						</h6>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/pcKAfzBrehc'
							title='Being a great lax parent'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>
				</div>
				<div className='flex flex-col mb-24 justify-center items-center'>
					<h6 className='text-2xl text-center'>WHAT IS LACROSSE</h6>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/qXhkg0wEKDY'
						title='What is lacrosse'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
				<div className='flex flex-col mb-24 justify-center items-center'>
					<h6 className='text-2xl text-center'>DON'T BE A BULLDOZER PARENT</h6>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/TV8P4sE1tq8'
						title='Dont be a bulldozer parent'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
			</div>
		</>
	)
}

;

export default ParentsInfo
