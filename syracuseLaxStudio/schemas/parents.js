export default {
	name: 'parents',
	title: 'Parents Info',
	type: 'document',
	fields: [
		{
			name: 'contentTitle',
			title: 'Content Title',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'blockContent',
		},
		{
			name: 'addVideoLinks',
			title: 'Add Video Links',
			type: 'array',
			of: [
				{
					type: 'videoLink',
				},
			],
		},
	],
}
