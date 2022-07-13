import React, { useEffect, useState } from 'react'
import contentLeftImg from '../images/girlsClinic2022.png'
import { useNavigate } from 'react-router'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'

const ContentLeft: React.FC = () => {
	const navigate = useNavigate()

	const [contentData, setContentData] = useState<any>(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`
			*[_type == "contentLeft"] {
				contentTitle,
				body,
				mainImage{
					asset->{
						_id,
						url
					},
					alt
				},
				buttonText,
				buttonLink,
			}
		`
			)
			.then((data) => setContentData(data[0]))
			.catch(console.error)
	}, [])

	if (!contentData) {
		return <div>LOADING...</div>
	}

	return (
		//POSSIBLE IMPLEMENTATION -  object-fit: cover; object-position: bottom;
		<div className='flex flex-col items-center px-4 pb-10 mb-36 text-center bg-circles bg-fixed bg-right-bottom  bg-no-repeat md:mb-32 md:px-0'>
			<div className='flex flex-col items-center md:flex-row-reverse '>
				<img
					src={contentData.mainImage.asset.url}
					alt={contentData.mainImage.alt}
					className='w-6 mb-10 rounded-2xl shadow-md'
				/>
				<div className='md:text-left md:mr-10'>
					<h4 className='text-3xl pb-4 font-bold'>
						{contentData.contentTitle}
					</h4>
					<BlockContent blocks={contentData.body} />
					<button
						className='border border-solid border-blue px-6 py-2 rounded-full hover:bg-blue hover:text-white md:px-10'
						onClick={() => {
							window.open(`${contentData.buttonLink}`, '_blank')
						}}
					>
						{contentData.buttonText}
					</button>
				</div>
			</div>
		</div>
	)
}

export default ContentLeft
