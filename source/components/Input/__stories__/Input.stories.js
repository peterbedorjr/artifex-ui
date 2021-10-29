import Input from '../index';
import borderRadii from '../../../constants/border-radii';
export { default as Default } from './InputDefault.story';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'string',
      description: 'The type of input',
    },
  },
  args: {
    type: 'text',
  },
  parameters:{
    layout: 'centered',
  },
};
