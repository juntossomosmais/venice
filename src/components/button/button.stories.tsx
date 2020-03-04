import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Button', module)
.addDecorator(withKnobs)
  .add('Simple', () => `
    <jsm-button items='[{"name": "Cat", "value": "Meow"}, {"name": "Dog", "value": "Woof"}]'></jsm-button>
  `)
