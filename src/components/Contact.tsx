import React from 'react'
import Header from './Header'
import { IHeaderProps, IProps } from '../App'

const Contact: React.FC<IProps & IHeaderProps> = ({
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
			<div>Content here</div>
		</>
	)
}

export default Contact

