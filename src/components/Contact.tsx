import React, { useState } from 'react'
import Header from './Header'
import { IHeaderProps, IProps } from '../App'
import contactImg from '../images/contact.png'

const Contact: React.FC<IProps & IHeaderProps> = ({
	headerStyles,
	isNavOpen,
	handleNavClick,
}: IProps & IHeaderProps) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [emailSent, setEmailSent] = useState(false)

	const handleSubmit = () => {
		if (name && isValidEmail(email) && message) {
			setName('')
			setEmail('')
			setMessage('')
			setEmailSent(true)
		} else if (!isValidEmail(email)) {
			alert('Please enter a valid email')
		} else {
			alert('Please fill in all fields.')
		}
	}

	const isValidEmail = (email: string) => {
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return regex.test(String(email).toLowerCase())
	}

	const inputStyle =
		'py-3 px-4 rounded-xl  border border-blue bg-transparent text-blue placeholder-blue placeholder-opacity-50 mb-4'

	return (
		<>
			<Header
				handleNavClick={handleNavClick}
				isNavOpen={isNavOpen}
				headerStyles={headerStyles}
				h2Content={
					'For any questions or info on the Syracuse Youth Lacrosse Program'
				}
				buttonDivStyles={'hidden'}
				h1Content={'Contact Us'}
			/>
			<div className='mx-28'>
				<div className='flex flex-col xl:flex-row-reverse mb-24 items-start'>
					<img
						src={contactImg}
						alt='Youth Lacrosse Player'
						className='xl:w-4 rounded-2xl mb-10 xl:ml-20 shadow-md'
					/>
					<div className='flex flex-col w-full '>
						<input
							className={inputStyle}
							type='text'
							placeholder='Your Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							className={inputStyle}
							type='email'
							placeholder='Your email address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<textarea
							className={`${inputStyle} h-40`}
							placeholder='Your message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<button
							className='border border-solid text-white bg-blue px-6 py-2 rounded-full hover:bg-transparent hover:text-blue md:px-10 md:w-5'
							onClick={handleSubmit}
						>
							Send Message
						</button>
						<span
							className={`${!emailSent ? 'hidden' : 'visible'}`}
						>
							Thank you for your message, we will be in touch
							ASAP!
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
