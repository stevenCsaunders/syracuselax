import { FC } from "react"

interface INavProps {
	navStyles: string
	navUlStyles: string
	navLiStyles: string
	navLastLiStyles: string;
}

const Nav: FC<INavProps> = ({
	navStyles,
	navUlStyles,
	navLiStyles,
	navLastLiStyles,
}: INavProps) => {
	//TODO
	//Needs state for isOpen to pass on to hamburger menu
	//link navigation to contact page, schedule and registration

	return (
		<nav className={navStyles}>
			<ul className={navUlStyles}>
				<li className={navLiStyles}>About</li>
				<li className={navLiStyles}>Schedule</li>
				<li className={navLastLiStyles}>Contact</li>
			</ul>
		</nav>
	)
}

export default Nav
