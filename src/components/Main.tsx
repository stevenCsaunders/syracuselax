import React from 'react'
import { IHeaderProps, IProps } from '../App'
import ContentHighlight from './ContentHighlight'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import Header from './Header'

const Main: React.FC<IProps & IHeaderProps> = ({
	headerStyles,
	h1Styles,
	buttonDivStyles,
	isNavOpen,
	handleNavClick,
}: IProps & IHeaderProps) => {
	return (
		<>
			<Header
				handleNavClick={handleNavClick}
				isNavOpen={isNavOpen}
				headerStyles={headerStyles}
				h1Styles={h1Styles}
				buttonDivStyles={buttonDivStyles}
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
