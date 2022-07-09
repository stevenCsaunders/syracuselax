export default {
	name: 'header',
	title: 'Header',
	type: 'document',
	fields: [
		{
			name: 'headertitle',
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
			hidden: ({document}) => document.showHeaderButtons === false,
		},
		{
			name: 'buttonTwoText',
			title: 'Button Two Text',
			type: 'string',
			hidden: ({document}) => document.showHeaderButtons === false,
		},
	],
}
