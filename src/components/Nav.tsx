interface NavProps {
	navStyles: string
	navItemStyles: string
}

const Nav = ({ navStyles, navItemStyles }: NavProps) => {
  //TODO
	//Needs state for isOpen to pass on to hamburger menu
	//link navigation to contact page, schedule and registration

	return (
		<nav className={navStyles}>
			<ul className='flex flex-col items-center gap-4'>
				<li className={navItemStyles}>One</li>
				<li className={navItemStyles}>Two</li>
				<li className=''>Three</li>
			</ul>
		</nav>
	)
}

export default Nav
