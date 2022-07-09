import S from '@sanity/desk-tool/structure-builder'

const hideDocTypes = item => !['about', 'contactUs'].includes(item.getId())

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
			...S.documentTypeListItems().filter(hideDocTypes),
		])
