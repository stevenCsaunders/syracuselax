export default {
	name: 'contactUs',
	title: 'Contact Syracuse LAX',
	type: 'document',

	fields: [
		{
			name: 'buttonText',
			title: 'Button Text',
			type: 'string',
		},
		{
			name: 'mainImage',
			title: 'Main Image',
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
