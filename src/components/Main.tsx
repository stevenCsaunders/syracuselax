import sanityClient from '../client'
import React, { useEffect, useState } from 'react'
import { IProps } from '../App'
import ContentHighlight from './ContentHighlight'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import Header from './Header'

const Main: React.FC<IProps> = ({
	isNavOpen,
	handleNavClick,
}: IProps) => {

	const [mainData, setMainData] = useState<any>(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`
			*[_type == "headers" && headerId == "main"] {
				headerTitle,
				headerSubTitle,
				buttonOneText,
				buttonTwoText,
				buttonOneLink,
				buttonTwoLink,
				showHeaderButtons,
			}
		`
			)
			.then((data) => setMainData(data[0]))
			.catch(console.error)
	}, [])

		if (!mainData) {
			return <div>LOADING...</div>
		}


return (
		<>
			<Header
				handleNavClick={handleNavClick}
				isNavOpen={isNavOpen}
				headerTitle={mainData.headerTitle}
				headerSubTitle={mainData.headerSubTitle}
				buttonOneText={mainData.buttonOneText}
				buttonOneLink={mainData.buttonOneLink}
				buttonTwoText={mainData.buttonTwoText}
				buttonTwoLink={mainData.buttonTwoLink}
			/>

			<main className='mx-4 md:mx-28'>
				<ContentLeft />
				<ContentHighlight />
				<ContentRight />
			</main>
		</>
	)
}

export default Main
