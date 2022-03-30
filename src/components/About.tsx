import React from 'react'
import Header from './Header'
import { IHeaderProps, IProps } from '../App'
import aboutImg from '../images/about.png'
import { Link } from 'react-router-dom'

const About: React.FC<IProps & IHeaderProps> = ({
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
				h1Content={'About Syracuse Titans Lacrosse'}
			/>
			<div className='mx-28'>
				<h4 className='text-4xl text- text-center pb-10'>
					We are the Titans, Titans, Titans!
				</h4>
				<div className='flex flex-col xl:flex-row-reverse mb-24 items-start'>
					<img
						src={aboutImg}
						alt='Youth Lacrosse Player'
						className='xl:w-4 rounded-2xl mb-10 xl:ml-20 shadow-md'
					/>
					<div className=''>
						<p className={pStyles}>
							The Syracuse Youth Lacrosse Program is a fully
							volunteer youth lacrosse club dedicated to bringing
							the sport of lacrosse to those boys and girls who
							are from Syracuse, Utah and surrounding areas. We
							primarily draw players from Syracuse, although
							membership within Syracuse Youth LAX is not
							restricted to a geographic area.
						</p>
						<p className={pStyles}>
							The Syracuse Youth LAX Program has expanded and
							there is a great need for community involvement.
							Increased youth players and parents are key to
							success. If you would like to volunteer, please{' '}
							<Link to='/contact' className="text-blue underline hover:text-green">contact us</Link> for more info.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
