import Checkbox from '../index';

import borderRadii from '../../../constants/border-radii';
import variants from '../../../constants/input-variants';
import sizes from '../../../constants/input-sizes';

export { default as Default } from './CheckboxDefault.story';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    type: {
      control: 'text',
      description: 'The type of input',
    },
    disabled: {
      control: 'boolean',
    },
    modelValue: {
      control: 'boolean',
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
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
  args: {
    type: 'text',
    size: 'normal',
    disabled: false,
    modelValue: false,
    variant: 'primary',
    default: 'Checkbox label',
  },
  parameters:{
    layout: 'centered',
  },
};
