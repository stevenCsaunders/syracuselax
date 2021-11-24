import { FC } from 'react'


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
						<a
							href='https://www.google.com'
							target='_blank'
							rel='noreferrer'
							className={linkStyles}
						>
							About
						</a>
					</li>
					<a
						href='https://www.google.com'
						target='_blank'
						rel='noreferrer'
						className={linkStyles}
					>
						{' '}
						<li className={navLiStyles}>Registration</li>
					</a>

					<a
						href='https://www.google.com'
						target='_blank'
						rel='noreferrer'
						className={linkStyles}
					>
						{' '}
						<li className={navLastLiStyles}>Contact</li>
					</a>
				</ul>
			</nav>
		</>
	)
}

export default Nav
