import Box from '../index';

import borderRadii from '../../../constants/border-radii';
import boxShadows from '../../../constants/box-shadows';

export { default as Default } from './BoxDefault.story';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    default: {
      control: 'text',
      descripton: 'Default slot content',
    },
    borderRadius: {
      control: 'select',
      options: borderRadii,
    },
    boxShadow: {
      control: 'select',
      options: boxShadows,
    },
  },
  args: {
    default: 'This is a slot',
    borderRadius: 'normal',
    boxShadow: 'normal',
  },
};
