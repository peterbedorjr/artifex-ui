import Button from '../index';
import buttonVariants from '../../../constants/button-variants';
import sizes from '../../../constants/button-sizes';
export { default as Default } from './ButtonDefault.story';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    block: {
      control: 'boolean',
      description: 'Whether the button expands horizontally to fit it\'s container.',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is showing the loading spinner',
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'inline-radio',
      description: 'Button variant',
      options: buttonVariants,
      defaultValue: 'primary',
    },
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Button'
    },
    size: {
      control: 'select',
      description: 'The size variant of the button',
      defaultValue: 'normal',
      options: sizes,
    },
  },
  args: {
    block: false,
    default: 'Button',
    disabled: false,
    size: null,
    variant: 'primary',
    loading: false,
  },
};
