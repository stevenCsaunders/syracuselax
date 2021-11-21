import { FC } from 'react'
import Nav from './Nav'
import logo from '../images/LogoSm.png'
import Hamburger from './Hamburger'
import { IProps } from '../App'


const NavBar: FC<IProps> = ({ isNavOpen, handleClick }: IProps) => {
	//TODO

	//State for isOpen should go in this component
	//Pass props down to Hamburger component for isOpen and styles

	return (
		<div className='flex w-full pb-16 relative'>
			<img
				src={logo}
				alt='Titan sword logo with no text'
				className='w-16 h-16 jsutify-start'
			/>
			<Nav
				navStyles='absolute w-7 top-2 right-2 -z-10 h-auto px-10 py-8 bg-white text-black md:bg-transparent md:text-white md:py-0 md:flex md:justify-end md:px-0'
				navUlStyles='flex flex-col items-center md:flex-row'
				navLiStyles='justify-center border-b w-full py-3 border-solid border-black border-opacity-10 md:border-none md:px-5'
				navLastLiStyles='justify-center w-full py-3 md:px-5'
			/>
			<Hamburger isNavOpen={isNavOpen} handleClick={handleClick} />
		</div>
	)
}

export default NavBar
