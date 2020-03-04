import { configure, addDecorator } from '@storybook/html'
import { withTests } from '@storybook/addon-jest'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(
	withTests({
		filesExt: '.spec.ts',
	})
)

addDecorator(withKnobs)

const req = require.context('../src', true, /\.stories\.tsx$/)
function loadStories() {
	req.keys().forEach((filename) => req(filename))
}
configure(loadStories, module)
