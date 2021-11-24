import { FC, useState } from 'react'
import Header from './components/Header'
import ContentLeft from './components/ContentLeft'
import ContentHighlight from './components/ContentHighlight'
import ContentRight from './components/ContentRight'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

export interface IProps {
	isNavOpen?: boolean
	handleClick: () => void
}

const App: FC<IProps> = () => {
	//TODO
	const [isNavOpen , setIsNavOpen] = useState(false)

	const handleClick = () => {
		setIsNavOpen(!isNavOpen)
	}
	//any state for full app goes here

	return (
		<Router>
			<div className='font-overpass leading-none text-black flex flex-col w-full lg:max-w-screen-xl mx-auto bg-white filter drop-shadow-2xl'>
				<Header isNavOpen={isNavOpen} handleClick={handleClick} />
				<main className='mx-4 md:mx-28'>
					<ContentLeft />
					<ContentHighlight />
					<ContentRight />
				</main>
				<Footer />
			</div>
		</Router>
	)
}

export default App
