import sanityClient from '../client'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import BlockContent from '@sanity/block-content-to-react'

const ContentRight: React.FC = () => {
	const navigate = useNavigate()

		const [contentData, setContentData] = useState<any>(null)

		useEffect(() => {
			sanityClient
				.fetch(
					`
			*[_type == "contentRight"] {
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
		<div className='flex flex-col items-center px-4 mb-32 text-center bg-circles bg-fixed bg-left-bottom  bg-no-repeat md:mb-32 md:px-0 md:flex-row'>
			<img
				src={contentData.mainImage.asset.url}
				alt={contentData.mainImage.alt}
				className='w-6 mb-10 rounded-2xl'
			/>
			<div className='md:text-left md:ml-10'>
				<h3 className='text-3xl pb-4 font-bold'>
					{contentData.contentTitle}
				</h3>
				<p className='text-lg font-thin leading-6 mb-4'>
					<BlockContent blocks={contentData.body} />
				</p>
				<button
					className='border border-solid border-blue px-6 py-2 rounded-full hover:bg-blue hover:text-white md:px-10'
					onClick={() =>
						window.open(`${contentData.buttonLink}`, '_blank')
					}
				>
					{contentData.buttonText}
				</button>
			</div>
		</div>
	)
}

export default ContentRight
