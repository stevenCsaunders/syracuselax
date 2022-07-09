import S from '@sanity/desk-tool/structure-builder'

const hideDocTypes = item => !['about', 'contactUs', 'parents', 'schedules', 'schedule'].includes(item.getId())

export default () =>
	S.list()
		.title('SyracuseLAX')
		.items([
			S.listItem()
				.title('About')
				.child(
					S.document()
						.id('about')
						.schemaType('about')
						.documentId('about')
				),
			S.divider(),
			S.listItem()
				.title('Contact')
				.child(
					S.document()
						.id('contactUs')
						.schemaType('contactUs')
						.documentId('contactUs')
				),
			S.divider(),
			S.listItem()
				.title('Parents')
				.child(
					S.document()
						.id('parents')
						.schemaType('parents')
						.documentId('parents')
				),
			S.divider(),
			S.listItem()
				.title('Schedules')
				.child(
					S.document()
						.id('schedules')
						.schemaType('schedules')
						.documentId('schedules')
				),
			S.divider(),
			...S.documentTypeListItems().filter(hideDocTypes),
		])
