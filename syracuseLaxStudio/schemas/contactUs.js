export default {
	name: 'contactUs',
	title: 'Contact Syracuse LAX',
	type: 'document',

	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'subTitle',
			title: 'Sub Title',
			type: 'string',
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alt Text',
					isHighlighted: true,
					desciption: 'A short description of the image',
				},
			],
			options: {
				hotspot: true,
			},
		},
	],
}
