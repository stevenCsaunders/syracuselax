import { FC, useState } from 'react'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import ParentsInfo from './components/ParentsInfo'
import Schedules from './components/Schedules'

export interface IProps {
	isNavOpen?: boolean
	handleNavClick?: () => void
}

const App: FC<IProps> = () => {
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
						/>
					}
				/>
				<Route
					path='/about'
					element={
						<About
							handleNavClick={handleNavClick}
							isNavOpen={isNavOpen}
						/>
					}
				/>
				<Route
					path='/contact'
					element={
						<Contact
							handleNavClick={handleNavClick}
							isNavOpen={isNavOpen}
						/>
					}
				/>
				<Route
					path='/schedules'
					element={
						<Schedules
							handleNavClick={handleNavClick}
							isNavOpen={isNavOpen}
						/>
					}
				/>
				<Route
					path='/parentsinfo'
					element={
						<ParentsInfo
							handleNavClick={handleNavClick}
							isNavOpen={isNavOpen}
						/>
					}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
