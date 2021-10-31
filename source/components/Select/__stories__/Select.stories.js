import Select from '../index';

import borderRadii from '../../../constants/border-radii';
import sizes from '../../../constants/input-sizes';
import variants from '../../../constants/input-variants';

export { default as Default } from './SelectDefault.story';

export default {
  title: 'Components/Forms/Select',
  component: Select,
  argTypes: {
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
      defaultValue: 'primary',
    },
    borderRadius: {
      control: 'select',
      description: 'The border radius',
      defaultValue: 'normal',
      options: borderRadii,
    },
    options: {
      control: 'array',
      description: 'Options',
    },
    placeholder: {
      control: 'text',
    },
  },
  args: {
    type: 'text',
    size: 'normal',
    disabled: false,
    modelValue: 'test',
    variant: 'primary',
    placeholder: 'Select Value',
    options: [
      { label: 'Test', value: 'test' },
      { label: 'Test2', value: 'test2' },
      { label: 'Test3', value: 'test3' },
      { label: 'Test4', value: 'test4' },
    ],
  },
  parameters:{
    layout: 'centered',
  },
};
