import Card from '../index';

export { default as Default } from './CardDefault.story';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    header: {
      control: 'text',
    },
    subheader: {
      control: 'text',
    },
    default: {
      control: 'text',
    },
  },
  args: {
    header: 'This is a card header',
    subheader: 'Subheader',
    default: 'Slot content',
  },
};
