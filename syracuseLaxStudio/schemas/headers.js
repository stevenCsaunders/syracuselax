export default {
	name: 'headers',
	title: 'Headers',
	type: 'document',
	fields: [
		{
			name: 'headerId',
			title: 'Header ID',
			type: 'string',
		},
		{
			name: 'headerTitle',
			title: 'Header Title',
			type: 'string',
		},
		{
			name: 'headerSubTitle',
			title: 'Header Sub Title',
			type: 'string',
		},
		{
			name: 'showHeaderButtons',
			title: 'Show Header Buttons',
			type: 'boolean',
		},
		{
			name: 'buttonOneText',
			title: 'Button One Text',
			type: 'string',
			hidden: ({ document }) => document.showHeaderButtons === false,
		},
		{
			name: 'buttonOneLink',
			title: 'Button One Link',
			type: 'url',
			hidden: ({ document }) => document.showHeaderButtons === false,
		},
		{
			name: 'buttonTwoText',
			title: 'Button Two Text',
			type: 'string',
			hidden: ({ document }) => document.showHeaderButtons === false,
		},
		{
			name: 'buttonTwoLink',
			title: 'Button Two Link',
			type: 'url',
			hidden: ({ document }) => document.showHeaderButtons === false,
		},
	],
}
