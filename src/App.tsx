import { FC, useState } from 'react'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'

export interface IProps {
	isNavOpen?: boolean
	handleNavClick?: () => void
}
export interface IHeaderProps {
	headerStyles?: string
	h2Content?: string
	h1Content?: string
	buttonDivStyles?: string
}

const App: FC<IProps & IHeaderProps> = () => {
	//TODO
	const [isNavOpen, setIsNavOpen] = useState(false)

	const handleNavClick = () => {
		setIsNavOpen(!isNavOpen)
	}
	//any state for full app goes here

	return (
		<div className='font-overpass text-black flex flex-col w-full lg:max-w-screen-xl mx-auto bg-white filter drop-shadow-2xl'>
			<Routes>
				<Route
					path='/'
					element={
						<Main
							handleNavClick={handleNavClick}
							isNavOpen={isNavOpen}
							headerStyles={''}
							buttonDivStyles={''}
							h2Content={''}
							h1Content={''}
						/>
					}
				/>
				<Route
					path='/about'
					element={
						<About
							handleNavClick={handleNavClick}
							isNavOpen={isNavOpen}
							headerStyles={''}
							buttonDivStyles={''}
							h2Content={''}
							h1Content={''}
						/>
					}
				/>
				<Route
					path='/contact'
					element={
						<Contact
							handleNavClick={handleNavClick}
							isNavOpen={isNavOpen}
							headerStyles={''}
							buttonDivStyles={''}
							h2Content={''}
							h1Content={''}
						/>
					}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
