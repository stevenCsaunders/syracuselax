import { FC } from 'react'
import Nav from './Nav'
import logo from '../images/LogoSm.png'
import Hamburger from './Hamburger'
import { IProps } from '../App'
import { Link } from 'react-router-dom'

const NavBar: FC<IProps> = ({ isNavOpen, handleNavClick }: IProps) => {
	//TODOTODO
	//Set clickOutside handler to close nav if clicked outside
	//set handleWidth function for handling closing the nav when the screen is in  desktop

	return (
		<div className='flex w-full pb-16 relative'>
			<Link to='/'>
				<img
					src={logo}
					alt='Titan sword logo with no text'
					className='w-16 h-16 jsutify-start '
				/>
			</Link>
			<Nav
				navStyles={`absolute w-7 top-2 right-2 -z-10 h-auto px-10 py-10 bg-white text-black ${
					!!isNavOpen ? `visible` : `invisible`
				} md:visible md:bg-transparent md:text-white md:py-0 md:flex md:justify-end md:px-0`}
				linkStyles={`flex items-center justify-center py-5 w-full hover:bg-blue hover:bg-opacity-10 md:px-5 md:py-3 md:rounded-lg md:hover:bg-white md:hover:bg-opacity-20`}
				navUlStyles={`flex flex-col items-center md:text-lg font-thin md:flex-row`}
				navLiStyles={`justify-center border-b w-full border-solid border-black border-opacity-10 md:border-none`}
				navLastLiStyles={`justify-center w-full`}
			/>

			<Hamburger handleNavClick={handleNavClick} />
		</div>
	)
}

export default NavBar
