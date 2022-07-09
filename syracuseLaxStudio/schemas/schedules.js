export default {
	name: 'schedules',
	title: 'Game Schedules',
	type: 'document',
	fields: [
		{
			name: 'contentTitle',
			title: 'Content Title',
			type: 'string',
		},
		{
			name: 'addSchedules',
			title: 'Add Schedules',
			type: 'array',
			of: [
				{
					type: 'schedule',
				},
			],
		},

		{
			name: 'order',
			title: 'Order',
			type: 'number',
			hidden: true,
		},
	],
	orderings: [
		{
			title: 'Manual order',
			name: 'manualOrder',
			by: [{ field: 'order', direction: 'asc' }],
		},
	],
}
