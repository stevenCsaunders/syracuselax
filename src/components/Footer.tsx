import { FC } from 'react'
import Nav from './Nav'
import image from '../images/SticksLogoSm.png'

const Footer: FC = () => {
	return (
		<footer className='flex flex-col bg-black text-white rounded-tr-xxl items-center pt-10 pb-20'>
			<img src={image} alt='small logo' className='w-14 h-14 mb-4' />
			<Nav
				navStyles='text-white'
				navLiStyles='border-b border-solid border-white border-opacity-30 py-2 md:px-9 '
				navUlStyles='text-center'
				navLastLiStyles='py-2 md:border-none md:px-9'
			/>
		</footer>
	)
}

export default Footer
