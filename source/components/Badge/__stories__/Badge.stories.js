import Badge from '../index';

import variants from '../../../constants/colors';

export { default as Default } from './BadgeDefault.story';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: variants,
    },
    default: {
      control: 'text',
      defaultValue: 'Slot content',
      description: 'Slot content',
    },
    pill: {
      control: 'boolean',
      defaultValue: false,
    }
  },
  args: {
    variant: 'primary',
    default: 'Slot content',
    pill: false,
  },
};
