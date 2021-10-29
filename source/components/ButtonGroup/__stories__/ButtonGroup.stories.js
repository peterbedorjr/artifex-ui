import ButtonGroup from '../index';
import borderRadii from '../../../constants/border-radii';
export { default as Default } from './ButtonGroupDefault.story';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    borderRadius: {
      control: 'select',
      description: 'The border radius',
      defaultValue: 'normal',
      options: borderRadii,
    },
  },
  args: {
    borderRadius: 'normal',
  },
  parameters:{
    layout: 'centered',
  },
};
