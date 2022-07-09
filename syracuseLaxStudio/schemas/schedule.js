export default {
	name: 'schedule',
	title: 'Schedule',
	type: 'document',
	fields: [
{
			name: 'scheduleTitle',
			title: 'Schedule Title',
			type: 'string',
		},
		{
			name: 'scheduleUrl',
			title: 'Shcedule Iframe URL',
			type: 'url',
			description:
				'This URL should come from the Utah IMLAX Site. **-> It must be an iFrame URL <-**',
		},
		{
			name: 'iframeWidth',
			title: 'Width',
			type: 'string',
			description: 'Please enter a number or % ex(500 or 100%)',
		},
		{
			name: 'iframeHeight',
			title: 'Height',
			type: 'string',
			description: 'Please enter a number or % ex(500 or 100%)',
		},
  ]
}