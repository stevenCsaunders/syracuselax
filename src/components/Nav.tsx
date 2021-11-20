import { FC } from "react"

interface INavProps {
	navStyles: string
	navItemStyles: string
}

const Nav: FC<INavProps> = ({ navStyles, navItemStyles }: INavProps) => {
  //TODO
	//Needs state for isOpen to pass on to hamburger menu
	//link navigation to contact page, schedule and registration

	return (
		<nav className={navStyles}>
			<ul className='flex flex-col items-center gap-4 md:flex-row'>
				<li className={navItemStyles}>About</li>
				<li className={navItemStyles}>Schedule</li>
				<li className='md:py-2 md:px-7'>Contact</li>
			</ul>
		</nav>
	)
}

export default Nav
