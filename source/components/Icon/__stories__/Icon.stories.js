import Icon from '../index';
import sizes from '../../../constants/icon-sizes';
import * as icons from '../../../constants/icons';
import colors from '../../../constants/colors';
export { default as Default } from './IconDefault.story';

const iconVariants = Object.keys(icons);

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: iconVariants,
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
  },
  args: {
    size: null,
    strokeWidth: 1,
    width: 24,
    height: 24,
    color: 'black',
  },
};
