import { FC } from 'react'
import Nav from './Nav'
import image from '../images/SticksLogoSm.png'

const Footer: FC = () => {
	return (
		<footer className="flex flex-col bg-black text-white rounded-tr-xxl text-center items-center pt-10 pb-20 md:flex-row md:w-full md:px-16 md:items-center">
			<img src={image} alt="small logo" className="w-14 h-14 mb-4 md:mr-10 md:mb-0" />
			<span className="border-b border-solid w-6/12 opacity-20 mb-5 md:border-b-0 md:border-l-2 md:h-14 md:w-0 md:mr-10 md:mb-0"></span>
			<Nav
				navStyles="text-white md:justify-self-end"
				navItemStyles="border-b border-solid border-white border-opacity-10 py-2 md:border-none md:px-4 md:py-0"
			/>
		</footer>
	)
}

export default Footer
