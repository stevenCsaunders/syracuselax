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
		<div className='flex justify-between pb-16'>
			<img
				src={logo}
				alt='Titan sword logo with no text'
				className='w-16 h-16'
			/>
			<Nav
				navStyles='absolute right-5 -z-10 h-auto max-w-6 w-7/12 bg-white text-black py-10'
				navItemStyles='text-black border-b border-solid border-black border-opacity-10 w-8/12 py-2'
			/>
			<Hamburger />
		</div>
	)
}

export default NavBar
