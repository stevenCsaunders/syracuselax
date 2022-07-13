export default {
	name: 'contentLeft',
	title: 'Content Left Block',
	type: 'document',
	fields: [
		{
			name: 'contentTitle',
			title: 'Content Title',
			type: 'string',
		},
		{
			name: 'body',
			title: 'Body Content',
			type: 'blockContent',
		},
		{
			name: 'showContentButton',
			title: 'Show Content Button',
			type: 'boolean',
		},
		{
			name: 'buttonText',
			title: 'Button Text',
			type: 'string',
			hidden: ({ document }) => document.showContentButton === false,
		},
		{
			name: 'buttonLink',
			title: 'Button Link',
			type: 'url',
			hidden: ({ document }) => document.showContentButton === false,
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
