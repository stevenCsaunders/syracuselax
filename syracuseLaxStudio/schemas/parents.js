export default {
	name: 'parents',
	title: 'Parents Info',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
		},
		{
			name: 'videoUrls',
			title: 'Video URLs',
			type: 'array',
			of: [
				{
					type: 'url'
				},
			]
		}
	],
}
