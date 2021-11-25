import React from 'react'
import { IHeaderProps, IProps } from '../App'
import ContentHighlight from './ContentHighlight'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import Header from './Header'

const Main: React.FC<IProps & IHeaderProps> = ({
	headerStyles,
	isNavOpen,
	handleNavClick,
}: IProps & IHeaderProps) => {
	return (
		<>
			<Header
				handleNavClick={handleNavClick}
				isNavOpen={isNavOpen}
				headerStyles={headerStyles}
				h2Content={
					'The Syracuse Youth LAX Program is for boys and girls grades K-8'
				}
				buttonDivStyles={''}
				h1Content={'Syracuse Titans Youth Lacrosse'}
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
