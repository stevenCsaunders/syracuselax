import { FC, useEffect, useState } from 'react'
import NavBar from './NavBar'
import { IProps } from '../App'
import SanityClient from '../client'

export interface IHeaderProps {
	//required props
	headerTitle: string
	headerId?: string
	//not required props
	headerSubTitle?: string
	headerStyles?: string
	buttonDivStyles?: string
	showHeaderButtons?: boolean
	buttonOneText?: string
	buttonTwoText?: string
	buttonTwoLink?: string
	buttonOneLink?: string
}

const Header: FC<IProps & IHeaderProps> = ({
	isNavOpen,
	handleNavClick,
	headerStyles,
	headerTitle,
	headerSubTitle,
	buttonOneLink,
	buttonOneText,
	buttonTwoLink,
	buttonTwoText,
	buttonDivStyles,
}: IProps & IHeaderProps) => {
	//TODO
	//any state for header or props for NavBar component go here
	//separate out button component and pass props for text and functionality

	return (
		<header
			className={`${headerStyles}text-white text-center bg-intro bg-cover px-5 pt-10 mb-16 rounded-bl-xxl md:px-28`}
		>
			<NavBar isNavOpen={isNavOpen} handleNavClick={handleNavClick} />
			<h1 className='text-4xl text-white pb-4 md:text-5xl'>
				{headerTitle}
			</h1>
			<h2 className='text-lg font-light pb-12 text-white md:text-2xl'>
				{headerSubTitle}
			</h2>
			<div
				className={`${buttonDivStyles} flex gap-4 justify-center pb-32 md:gap-6`}
			>
				{/* conditionally render the buttons based on the togle being true or not */}

				<button
					className='px-6 py-2 bg-white text-blue rounded-full hover:bg-opacity-80 md:px-10 md:py-3'
					onClick={() => {
						window.open(`${buttonOneLink}`, '_blank')
					}}
				>
					<strong>{buttonOneText}</strong>
				</button>
				<button
					className='border border-solid border-white px-6 py-2 rounded-full hover:bg-white hover:bg-opacity-20 md:px-10 md:py-3'
					onClick={() => {
						window.open(`${buttonTwoLink}`, '_blank')
					}}
				>
					{buttonTwoText}
				</button>
			</div>
		</header>
	)
}

export default Header
