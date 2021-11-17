import { FC } from 'react'
import Nav from './Nav'
import image from '../images/SticksLogoSm.png'

const Footer: FC = () => {
	return (
		<footer className='bg-black text-white rounded-tr-xxl text-center flex flex-col items-center pt-10 pb-20'>
			<img src={image} alt='small logo' className='w-14 h-14 mb-4' />
			<span className='border-b border-solid w-6/12 opacity-20 mb-5'></span>
			<Nav
				navStyles='text-white '
				navItemStyles='border-b border-solid border-white border-opacity-10 w-8/12 py-2'
			/>
		</footer>
	)
}

export default Footer
