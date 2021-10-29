import Input from '../index';
import borderRadii from '../../../constants/border-radii';
import sizes from '../../../constants/input-sizes';
import variants from '../../../constants/input-variants';
export { default as Default } from './InputDefault.story';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'text',
      description: 'The type of input',
    },
    disabled: {
      control: 'boolean',
    },
    modelValue: {
      control: 'text',
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
      defaultValue: '',
    },
    borderRadius: {
      control: 'select',
      description: 'The border radius',
      defaultValue: 'normal',
      options: borderRadii,
    },
  },
  args: {
    type: 'text',
    size: 'normal',
    disabled: false,
    modelValue: 'Input value',
  },
  parameters:{
    layout: 'centered',
  },
};
