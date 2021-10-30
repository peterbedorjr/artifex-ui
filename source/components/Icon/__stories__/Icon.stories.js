import Icon from '../index';
import sizes from '../../../constants/icon-sizes';
import icons from '../../../constants/icons';
import colors from '../../../constants/colors';
export { default as Default } from './IconDefault.story';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: icons,
      defaultValue: icons[0],
    },
    size: {
      control: 'select',
      description: 'The size variant of the icon',
      defaultValue: 'normal',
      options: sizes,
    },
    strokeWidth: {
      control: 'number',
      description: 'The stroke width of the icon',
    },
    width: {
      control: 'number',
      description: 'The width of the icon',
    },
    height: {
      control: 'number',
      description: 'The height of the icon',
    },
    color: {
      control: 'select',
      description: 'Icon color',
      options: [...colors, 'currentColor'],
    },
    type: {
      control: 'inline-radio',
      options: ['outline', 'solid'],
      defaultValue: 'solid',
    },
  },
  args: {
    size: null,
    strokeWidth: 1,
    width: 24,
    height: 24,
    color: 'black',
  },
  parameters:{
    layout: 'centered',
  },
};
