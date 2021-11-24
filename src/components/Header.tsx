import { FC } from 'react'
import NavBar from './NavBar'
import { IProps } from '../App'

const Header: FC<IProps> = ({isNavOpen, handleClick}: IProps) => {
  //TODO
	//any state for header or props for NavBar component go here
	//separate out button component and pass props for text and functionality
	return (
		<header className='text-white text-center bg-intro bg-cover px-5 pt-10 mb-16 rounded-bl-xxl md:px-28'>
			<NavBar isNavOpen={isNavOpen} handleClick={handleClick} />
			<h1 className='text-4xl text-white pb-4'>
				Syracuse Youth Lacrosse
			</h1>
			<h2 className='text-lg font-light pb-12 text-white'>
				The Syracuse Youth LAX Program is for boys and gilrs grades K-8
			</h2>
			<div className='flex gap-4 justify-center pb-32 md:gap-6'>
				<button className='px-6 py-2 bg-white text-blue rounded-full md:px-10 md:py-3'>
					Register
				</button>
				<button className='border border-solid border-white px-6 py-2 rounded-full md:px-10 md:py-3'>
					Contact
				</button>
			</div>
		</header>
	)
}

export default Header
