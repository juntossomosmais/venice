import { configure, addDecorator } from '@storybook/html'
import { withTests } from '@storybook/addon-jest'

addDecorator(
	withTests({
		filesExt: '.spec.ts',
	})
)

const req = require.context('../src', true, /\.stories\.tsx$/)
function loadStories() {
	req.keys().forEach((filename) => req(filename))
}
configure(loadStories, module)
