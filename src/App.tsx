import React from 'react'
import Header from './components/Header'
import ContentLeft from './components/ContentLeft'
import ContentHighlight from './components/ContentHighlight'
import ContentRight from './components/ContentRight'
import Footer from './components/Footer'

const App: React.FC = () => {
	//TODO
	//any state for full app goes here

	return (
		<div className='font-overpass text-black'>
			<Header />
			<main className=''>
				<ContentLeft />
				<ContentHighlight />
				<ContentRight />
			</main>
			<Footer />
		</div>
	)
}

export default App
