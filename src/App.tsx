import { FC, useState } from 'react'
import Header from './components/Header'
import ContentLeft from './components/ContentLeft'
import ContentHighlight from './components/ContentHighlight'
import ContentRight from './components/ContentRight'
import Footer from './components/Footer'

export interface IProps {
	isNavOpen: boolean;
	handleClick: () => void;
}

const App: FC<IProps> = () => {
	//TODO
	const [isNavOpen, setIsNavOpen] = useState(false)

	const handleClick = () => {
		setIsNavOpen(!isNavOpen)
	}
	//any state for full app goes here

	return (
		<div className='font-overpass text-black'>
			<Header isNavOpen={isNavOpen} handleClick={handleClick}/>
			<main className='mx-4 md:mx-28'>
				<ContentLeft />
				<ContentHighlight />
				<ContentRight />
			</main>
			<Footer />
		</div>
	)
}

export default App
