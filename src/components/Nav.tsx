import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface INavProps {
	navStyles: string
	navUlStyles: string
	navLiStyles: string
	navLastLiStyles: string
	linkStyles: string
}

const Nav: FC<INavProps> = ({
	navStyles,
	navUlStyles,
	navLiStyles,
	navLastLiStyles,
	linkStyles,
}: INavProps) => {
	//TODO
	//Needs state for isOpen to pass on to hamburger menu
	//link navigation to contact page, schedule and registration

	return (
		<>
			<nav className={navStyles}>
				<ul className={navUlStyles}>
					<li className={navLiStyles}>
						<NavLink to='/about' className={linkStyles}>
							About
						</NavLink>
					</li>
					<li className={navLiStyles}>
						<a
							href='http://www.imlaxutah.org/Registration/Default.asp?org=imlaxutah.org'
							target='_blank'
							rel='noreferrer'
							className={linkStyles}
						>
							Registration
						</a>
					</li>
					<li className={navLastLiStyles}>
						<NavLink to='/contact' className={linkStyles}>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Nav
