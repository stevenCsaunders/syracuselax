import { FC } from 'react'
import NavBar from './NavBar'
import { IHeaderProps, IProps } from '../App'
import { useNavigate } from 'react-router-dom'

const Header: FC<IProps & IHeaderProps> = ({
	isNavOpen,
	handleNavClick,
	headerStyles,
	buttonDivStyles,
	h1Styles,
}: IProps & IHeaderProps) => {
	//TODO
	//any state for header or props for NavBar component go here
	//separate out button component and pass props for text and functionality

	let navigate = useNavigate()

	return (
		<header className='text-white text-center bg-intro bg-cover px-5 pt-10 mb-16 rounded-bl-xxl md:px-28'>
			<NavBar isNavOpen={isNavOpen} handleNavClick={handleNavClick} />
			<h1 className='text-4xl text-white pb-4 md:text-5xl'>
				Syracuse Youth Lacrosse
			</h1>
			<h2 className='text-lg font-light pb-12 text-white md:text-2xl'>
				The Syracuse Youth LAX Program is for boys and gilrs grades K-8
			</h2>
			<div className='flex gap-4 justify-center pb-32 md:gap-6'>
				<button
					className='px-6 py-2 bg-white text-blue rounded-full hover:bg-opacity-80 md:px-10 md:py-3'
					onClick={() => {window.open(
						'http://www.imlaxutah.org/Registration/Default.asp?org=imlaxutah.org',
						'_blank'
					)}}
				>
					Register
				</button>
				<button
					className='border border-solid border-white px-6 py-2 rounded-full hover:bg-white hover:bg-opacity-20 md:px-10 md:py-3'
					onClick={() => {navigate('/contact')}}
				>
					Contact
				</button>
			</div>
		</header>
	)
}

export default Header
