import React, { useEffect, useState } from 'react'
import Header from './Header'
import { IProps } from '../App'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'

const About: React.FC<IProps> = ({ isNavOpen, handleNavClick }: IProps) => {
	const pStyles = 'text-lg font-thin leading-8 text-center md:text-left'

	const [aboutData, setAboutData] = useState<any>(null)
	const [headerData, setHeaderData] = useState<any>(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`
					*[_type == "about"]{
						title,
						subTitle,
						contentTitle,
						body,
						mainImage{
							asset->{
								_id,
								url
							},
							alt
						}
					}
		`
			)
			.then((data) => setAboutData(data[0]))
			.catch(console.error)

		sanityClient
			.fetch(
				`
					*[_type == 'headers' && headerId == 'about'] {
						headerTitle,
						showHeaderButtons,
					}
		`
			)
			.then((data) => setHeaderData(data[0]))
			.catch(console.error)
	}, [])

	if (!aboutData || !headerData) {
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
					{aboutData.contentTitle}
				</h4>
				<div className='flex flex-col xl:flex-row-reverse mb-24 items-start'>
					<img
						src={aboutData.mainImage.asset.url}
						alt={aboutData.mainImage.alt}
						className='xl:w-4 rounded-2xl mb-10 xl:ml-20 shadow-md'
					/>
					<div className={pStyles}>
						<BlockContent blocks={aboutData.body} />
					</div>
				</div>
			</div>
		</>
	)
}

export default About
