import Input from '../index';
import borderRadii from '../../../constants/border-radii';
import sizes from '../../../constants/input-sizes'
import variants from '../../../constants/input-variants'
export { default as Default } from './InputDefault.story';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'string',
      description: 'The type of input',
    },
    size: {
      control: 'inline-radio',
      description: 'The size variant of the input',
      defaultValue: 'normal',
      options: sizes,
    },
    variant: {
      control: 'inline-radio',
      description: 'Input variant',
      options: variants,
      defaultValue: 'primary',
    }
  },
  args: {
    type: 'text',
    size: 'normal',
  },
  parameters:{
    layout: 'centered',
  },
};
