import sanityClient from '../client'
import React, { useEffect, useState } from 'react'
import contentHighlightImg from '../images/content-highlight.png'
import BlockContent from '@sanity/block-content-to-react'

const ContentHighlight: React.FC = () => {

			const [contentData, setContentData] = useState<any>(null)

			useEffect(() => {
				sanityClient
					.fetch(
						`
			*[_type == "contentHighlight"] {
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
		<div className='flex flex-col items-center px-10 pb-20 mb-32 bg-blue text-white rounded-bl-xxl rounded-tr-xxl md:flex-row md:px-20 md:pb-0'>
			<div className='flex flex-col items-center text-center  md:text-left md:flex-row '>
				<img
					src={contentData.mainImage.asset.url}
					alt={contentData.mainImage.alt}
					className='w-8 -mt-32 rounded-2xl md:w-4 md:-mt-40'
				/>
				<div className='md:ml-10 py-10 '>
					<h3 className='text-3xl pb-4 font-bold'>
						{contentData.contentTitle}
					</h3>
					<BlockContent blocks={contentData.body} />
					<button
						className='px-6 py-2 bg-white text-blue rounded-full hover:bg-blue border hover:border-solid border-white hover:border-current hover:text-white md:px-10'
						onClick={() => {
							window.open(
								`${contentData.buttonLink}`,
								'_blank'
							)
						}}
					>
						{contentData.buttonText}
					</button>
				</div>
			</div>
		</div>
	)
}

export default ContentHighlight
