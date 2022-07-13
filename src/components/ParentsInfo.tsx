import React, { useEffect, useState } from 'react'
import Header from './Header'
import { IProps } from '../App'
import sanityClient from '../client'

const ParentsInfo: React.FC<IProps> = ({
	isNavOpen,
	handleNavClick,
}: IProps) => {

	const [parentsData, setParentsData] = useState<any>(null)
	const [headerData, setHeaderData] = useState<any>(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`
			*[_type == "parents"] {
				contentTitle,
				addVideoLinks,
			}
		`
			)
			.then((data) => setParentsData(data[0]))
			.catch(console.error)

		sanityClient
			.fetch(
				`
					*[_type == 'headers' && headerId == 'parents'] {
						headerTitle,
						showHeaderButtons,
					}
		`
			)
			.then((data) => setHeaderData(data[0]))
			.catch(console.error)
	}, [])

		if (!parentsData || !headerData) {
			return <div>LOADING...</div>
		}

	return (
		<>
			<Header
				handleNavClick={handleNavClick}
				isNavOpen={isNavOpen}
				headerTitle={headerData.headerTitle}
				buttonDivStyles={'hidden'}
			/>
			<div className='mx-28'>
				<h4 className='text-4xl text- text-center pb-10'>
					{parentsData.contentTitle}
				</h4>
				<div className='flex flex-col xl:flex-row-reverse mb-24 justify-center items-center'>
					<div className=''>
						<h6 className='text-2xl text-center'>
							BEING A GREAT LAX PARENT
						</h6>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/pcKAfzBrehc'
							title='Being a great lax parent'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</>
	)
}

export default ParentsInfo
