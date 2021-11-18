import { FC } from 'react'
import Nav from './Nav'
import logo from '../images/LogoSm.png'
import Hamburger from './Hamburger'

const NavBar: FC = () => {
	//TODO
	//desktop styles for navStyles and navItemStyles
	//State for isOpen should go in this component
	//Pass props down to Hamburger component for isOpen and styles

	return (
		<div className="flex pb-16 relative justify-between md:items-center">
			<img
				src={logo}
				alt="Titan sword logo with no text"
				className="w-16 h-16 jsutify-start md:ml-16"
			/>
			<Nav
				navStyles="-z-10 h-auto max-w-6 w-7/12 bg-white text-black py-10 md:bg-transparent md:text-white md:py-0 md:static md:flex md:justify-end md:mr-16 "
				navItemStyles="border-b border-solid border-black border-opacity-10 py-2 px-10 md:border-none md:px-7"
			/>
			<Hamburger />
		</div>
	)
}

export default NavBar
