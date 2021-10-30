import Alert from '../index';

import variants from '../../../constants/validation-colors';

export { default as Default } from './AlertDefault.story';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    closable: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
    variant: {
      control: 'inline-radio',
      description: 'Alert variant',
      options: variants,
      defaultValue: 'info',
    },
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
  args: {
    closable: false,
    showIcon: false,
    variant: 'info',
    default: 'This is an alert',
  },
};
