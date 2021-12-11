import React, { useState } from 'react'
import Header from './Header'
import { IHeaderProps, IProps } from '../App'
import contactImg from '../images/contact.png'
import emailJs, { init } from 'emailjs-com'

init('user_zxD5Nb0ISfZhPENNz1C2W')

const Contact: React.FC<IProps & IHeaderProps> = ({
	headerStyles,
	isNavOpen,
	handleNavClick,
}: IProps & IHeaderProps) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [emailSent, setEmailSent] = useState(false)

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (name && isValidEmail(email) && message) {
			const serviceID = 'service_gmail'
			const templateID = 'template_f62lf8c'
			const templateParams = {
				name,
				email,
				message,
			}

			emailJs
				.send(
					serviceID,
					templateID,
					templateParams
				)
				.then((response) => console.log(response.text))
				.then((error) => console.log(error))

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
		'py-3 px-4 rounded-xl  border border-blue bg-transparent text-blue placeholder-blue placeholder-opacity-50 mb-6 mt-2'
	const labelStyle = 'text-blue text-xl font-thin pl-2 border-l border-blue border-dotted'

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
					<div className='w-full '>
						<form className='flex flex-col' onSubmit={handleSubmit}>
							<label className={labelStyle}>Name</label>
							<input
								className={inputStyle}
								name='name'
								type='text'
								placeholder='Your Name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<label className={labelStyle}>Email</label>
							<input
								className={inputStyle}
								name='email'
								type='email'
								placeholder='Your email address'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label className={labelStyle}>Message</label>
							<textarea
								className={`${inputStyle} h-40`}
								name='message'
								placeholder='Your message'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
							<input
								type='submit'
								value='Send'
								className='border border-solid text-white bg-blue px-6 py-2 rounded-full hover:bg-transparent hover:text-blue md:px-10 md:w-5'
							/>
							<span
								className={`${
									!emailSent ? 'hidden' : 'visible'
								}`}
							>
								Thank you for your message, we will be in touch soon!
							</span>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
